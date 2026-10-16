"use client";

import { tooltipSoftFade } from "@/data/tooltips/tooltip-soft-fade";
import { useEffect, useRef } from "react";

export default function TooltipSoftFade() {
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
      if (state.hover && finePointer.matches) {
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

    const onPointerEnter = () => {
      if (!finePointer.matches) return;
      state.hover = true;
      state.suppressed = false;
      maybeOpen();
    };
    const onPointerLeave = () => {
      state.hover = false;
      state.suppressed = false;
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
    return () => {
      root.removeEventListener("pointerenter", onPointerEnter);
      root.removeEventListener("pointerleave", onPointerLeave);
      root.removeEventListener("focusin", onFocusIn);
      root.removeEventListener("focusout", onFocusOut);
      root.removeEventListener("keydown", onKeydown);
      window.clearTimeout(state.timer);
    };
  }, []);

  return (
    <>
      <style>{tooltipSoftFade.css}</style>
      <div ref={rootRef} className="he-tooltip-soft-fade" data-tip>
        <a onClick={(event) => event.preventDefault()} className="tip-trigger" href="https://example.com" aria-describedby="tooltip-soft-fade-tip01-bubble"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.8 4h8v7h-8zM9.8 6.5h2.4l2 2.2V11h-4.4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><circle cx="4.2" cy="11.6" r="1.4" stroke="currentColor" strokeWidth="1.3" /><circle cx="11.6" cy="11.6" r="1.4" stroke="currentColor" strokeWidth="1.3" /></svg>Delivery estimate</a>
        <span className="tip-bubble" id="tooltip-soft-fade-tip01-bubble" role="tooltip"><span className="tip-text">Orders placed before 2 pm ship the same day; tracking arrives by email.</span><i className="tip-arrow" aria-hidden="true"></i></span>
      </div>
    </>
  );
}
