"use client";

import { tooltipDirectionAwareEntrance } from "@/data/tooltips/tooltip-direction-aware-entrance";
import { useEffect, useRef } from "react";

export default function TooltipDirectionAwareEntrance() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const trigger = root.querySelector(".tip-trigger") as HTMLAnchorElement | null;
    const bubble = root.querySelector(".tip-bubble") as HTMLElement | null;
    if (!trigger || !bubble) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const HOVER_DELAY = 80;

    const enabled = true;
    const state = { hover: false, focus: false, suppressed: false, timer: 0, open: false };
    const openChange: (next: boolean) => void = () => {};

    const setOpen = (next: boolean) => {
      if (state.open === next) return;
      state.open = next;
      bubble.classList.toggle("is-open", next);
      openChange(next);
    };

    const maybeOpen = () => {
      if (!enabled || state.suppressed) return;
      if (state.focus) {
        setOpen(true);
        return;
      }
      if (state.hover) {
        window.clearTimeout(state.timer);
        state.timer = window.setTimeout(() => {
          state.timer = 0;
          if (enabled && state.hover && !state.suppressed) setOpen(true);
        }, HOVER_DELAY);
      }
    };

    const maybeClose = () => {
      window.clearTimeout(state.timer);
      state.timer = 0;
      if (!state.hover && !state.focus) setOpen(false);
    };

    const onPointerEnter = (event: PointerEvent) => {
      if (!finePointer.matches && event.pointerType !== "touch") return;
      state.hover = true;
      state.suppressed = false;
      maybeOpen();
    };
    const onPointerLeave = (event: PointerEvent) => {
      state.hover = false;
      state.suppressed = false;
      if (event.pointerType === "touch") {
        // Touch pointers vanish on release. Wait a beat so the tap
        // activation layer can re-enter before the bubble closes.
        window.clearTimeout(state.timer);
        state.timer = window.setTimeout(() => {
          state.timer = 0;
          // A tap focuses the trigger, but on touch the bubble should close
          // with the activation window — not stay pinned by that focus.
          if (!state.hover) setOpen(false);
        }, 420);
        return;
      }
      maybeClose();
    };
    const onFocusIn = () => {
      state.focus = true;
      state.suppressed = false;
      maybeOpen();
    };
    const onFocusOut = () => {
      state.focus = false;
      state.suppressed = false;
      maybeClose();
    };
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !state.open) return;
      setOpen(false);
      if (state.hover || state.focus) state.suppressed = true;
    };
    root.addEventListener("pointerenter", onPointerEnter);
    root.addEventListener("pointerleave", onPointerLeave);
    root.addEventListener("focusin", onFocusIn);
    root.addEventListener("focusout", onFocusOut);
    root.addEventListener("keydown", onKeydown);

    const VECTORS: Record<string, string[]> = {
      top: ["0px", "-6px"],
      bottom: ["0px", "6px"],
      left: ["-6px", "0px"],
      right: ["6px", "0px"],
    };

    const setVector = (vector: string[]) => {
      bubble.style.setProperty("--tx", vector[0]);
      bubble.style.setProperty("--ty", vector[1]);
    };

    const onTriggerEnter = (event: PointerEvent) => {
      if (!finePointer.matches && event.pointerType !== "touch") return;
      const rect = trigger.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const distances: Record<string, number> = {
        top: y,
        right: rect.width - x,
        bottom: rect.height - y,
        left: x,
      };
      let nearest = "bottom";
      for (const key of Object.keys(distances)) {
        if (distances[key] < distances[nearest]) nearest = key;
      }
      setVector(VECTORS[nearest]);
    };

    const onTriggerFocus = () => {
      if (state.hover) return;
      setVector(["0px", "4px"]);
    };
    trigger.addEventListener("pointerenter", onTriggerEnter);
    trigger.addEventListener("focusin", onTriggerFocus);
    return () => {
      root.removeEventListener("pointerenter", onPointerEnter);
      root.removeEventListener("pointerleave", onPointerLeave);
      root.removeEventListener("focusin", onFocusIn);
      root.removeEventListener("focusout", onFocusOut);
      root.removeEventListener("keydown", onKeydown);
      window.clearTimeout(state.timer);
      trigger.removeEventListener("pointerenter", onTriggerEnter);
      trigger.removeEventListener("focusin", onTriggerFocus);
    };
  }, []);

  return (
    <>
      <style>{tooltipDirectionAwareEntrance.css}</style>
      <div ref={rootRef} className="he-tooltip-direction-aware-entrance" data-tip>
        <a onClick={(event) => event.preventDefault()} className="tip-trigger" href="https://example.com" aria-describedby="tooltip-direction-aware-entrance-tip33-bubble">Rules playground</a>
        <span className="tip-bubble" id="tooltip-direction-aware-entrance-tip33-bubble" role="tooltip"><span className="tip-text">Write expressions, preview matches and promote a rule to production in one pass.</span><i className="tip-arrow" aria-hidden="true"></i></span>
      </div>
    </>
  );
}
