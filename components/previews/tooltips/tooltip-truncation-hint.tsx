"use client";

import { tooltipTruncationHint } from "@/data/tooltips/tooltip-truncation-hint";
import { useEffect, useRef } from "react";

export default function TooltipTruncationHint() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const trigger = root.querySelector(".tip-trigger") as HTMLAnchorElement | null;
    const bubble = root.querySelector(".tip-bubble") as HTMLElement | null;
    if (!trigger || !bubble) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const HOVER_DELAY = 80;

    let enabled = true;
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

    const label = root.querySelector(".tip-truncate-label") as HTMLElement | null;
    const note = root.querySelector(".tip-trunc-note") as HTMLElement | null;

    const updateTruncation = () => {
      if (!label) return;
      const truncated = label.scrollWidth > label.clientWidth + 1;
      enabled = truncated;
      if (truncated) {
        trigger.setAttribute("aria-describedby", "tooltip-truncation-hint-tip34-bubble");
      } else {
        trigger.removeAttribute("aria-describedby");
        if (state.open) setOpen(false);
      }
      if (note) {
        note.textContent = truncated
          ? "The visible label is truncated at this width, so the tooltip is active."
          : "The label fits in full at this width, so the tooltip is suppressed.";
      }
    };

    updateTruncation();
    let measureRaf = 0;
    const onResize = () => {
      if (measureRaf) cancelAnimationFrame(measureRaf);
      measureRaf = requestAnimationFrame(() => {
        measureRaf = 0;
        updateTruncation();
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      root.removeEventListener("pointerenter", onPointerEnter);
      root.removeEventListener("pointerleave", onPointerLeave);
      root.removeEventListener("focusin", onFocusIn);
      root.removeEventListener("focusout", onFocusOut);
      root.removeEventListener("keydown", onKeydown);
      window.clearTimeout(state.timer);
      cancelAnimationFrame(measureRaf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <style>{tooltipTruncationHint.css}</style>
      <div ref={rootRef} className="he-tooltip-truncation-hint" data-tip>
        <a onClick={(event) => event.preventDefault()} className="tip-trigger" href="https://example.com" aria-describedby="tooltip-truncation-hint-tip34-bubble"><span className="tip-truncate-label">Platform migration runbook — v3 draft notes</span></a>
        <span className="tip-bubble" id="tooltip-truncation-hint-tip34-bubble" role="tooltip"><span className="tip-text">Platform migration runbook — v3 draft notes, including rollback steps and owner assignments.</span><i className="tip-arrow" aria-hidden="true"></i></span>
        <p className="tip-trunc-note" role="status"></p>
      </div>
    </>
  );
}
