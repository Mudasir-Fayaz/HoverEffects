"use client";

import { tooltipPointerAccent } from "@/data/tooltips/tooltip-pointer-accent";
import { useEffect, useRef } from "react";

export default function TooltipPointerAccent() {
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
    let openChange: (next: boolean) => void = () => {};

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

    const glow = bubble.querySelector(".tip-glow") as HTMLElement | null;
    let glowRect: DOMRect | null = null;
    let glowRaf = 0;
    let gx = 0;
    let gy = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const glowMeasure = () => {
      glowRect = bubble.getBoundingClientRect();
    };

    const glowFrame = () => {
      glowRaf = 0;
      if (!state.open || !glow || !glowRect) return;
      glow.style.transform = "translate3d(" + (gx - glowRect.width / 2) + "px," + (gy - glowRect.height / 2) + "px,0)";
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!state.open || !glow || !finePointer.matches || reduceMotion.matches) return;
      if (!bubble.contains(event.target as Node)) return;
      if (!glowRect) glowMeasure();
      gx = event.clientX - (glowRect as DOMRect).left;
      gy = event.clientY - (glowRect as DOMRect).top;
      if (!glowRaf) glowRaf = requestAnimationFrame(glowFrame);
    };

    openChange = (next: boolean) => {
      if (!glow) return;
      if (next) {
        glowMeasure();
        glow.style.transform = "";
      } else {
        glow.style.transform = "";
        glowRect = null;
      }
    };

    const glowInvalidate = () => {
      glowRect = null;
    };
    root.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", glowInvalidate);
    window.addEventListener("scroll", glowInvalidate, true);
    return () => {
      root.removeEventListener("pointerenter", onPointerEnter);
      root.removeEventListener("pointerleave", onPointerLeave);
      root.removeEventListener("focusin", onFocusIn);
      root.removeEventListener("focusout", onFocusOut);
      root.removeEventListener("keydown", onKeydown);
      window.clearTimeout(state.timer);
      root.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", glowInvalidate);
      window.removeEventListener("scroll", glowInvalidate, true);
      cancelAnimationFrame(glowRaf);
    };
  }, []);

  return (
    <>
      <style>{tooltipPointerAccent.css}</style>
      <div ref={rootRef} className="he-tooltip-pointer-accent" data-tip>
        <a onClick={(event) => event.preventDefault()} className="tip-trigger" href="https://example.com" aria-describedby="tooltip-pointer-accent-tip32-bubble"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" /><path d="M6.4 6.3a1.7 1.7 0 0 1 3.3.6c0 1.1-1.7 1.3-1.7 2.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><circle cx="8" cy="11.4" r=".9" fill="currentColor" /></svg> Chart interactions</a>
        <span className="tip-bubble" id="tooltip-pointer-accent-tip32-bubble" role="tooltip"><i className="tip-glow" aria-hidden="true"></i><span className="tip-text">Drag to brush a date range; double-click the chart to reset the zoom.</span><i className="tip-arrow" aria-hidden="true"></i></span>
      </div>
    </>
  );
}
