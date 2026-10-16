"use client";

import { inputContextHelpBubble } from "@/data/inputs/input-context-help-bubble";
import { useEffect, useRef } from "react";

export default function InputContextHelpBubble() {
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
      <style>{inputContextHelpBubble.css}</style>
      <div ref={rootRef} className="field he-input-context-help-bubble" data-tip>
        <span className="inp35-row">
          <label className="inp35-label" htmlFor="input-context-help-bubble-inp35-input">Retention window</label>
          <button className="tip-trigger inp35-help-trigger" type="button" aria-describedby="input-context-help-bubble-inp35-bubble">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" /><path d="M6.4 6.3a1.7 1.7 0 0 1 3.3.6c0 1.1-1.7 1.3-1.7 2.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><circle cx="8" cy="11.4" r=".9" fill="currentColor" /></svg>
            <span className="visually-hidden">About the retention window</span>
          </button>
        </span>
        <div className="inp35-wrap">
          <input className="inp35-control" id="input-context-help-bubble-inp35-input" type="text" inputMode="numeric" defaultValue="42" aria-describedby="input-context-help-bubble-inp35-help" />
        </div>
        <p className="inp35-help" id="input-context-help-bubble-inp35-help">Days before archived data is permanently removed. The default is 42 for new workspaces.</p>
        <span className="tip-bubble" id="input-context-help-bubble-inp35-bubble" role="tooltip"><span className="tip-text">Retention applies per workspace. Deleted items are removed on the next monthly cycle.</span></span>
      </div>
    </>
  );
}
