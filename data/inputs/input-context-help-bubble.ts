import type { HoverEffect } from "../types";

const css = `.he-input-context-help-bubble{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-context-help-bubble, .he-input-context-help-bubble *, .he-input-context-help-bubble *::before, .he-input-context-help-bubble *::after { box-sizing: border-box; }
.he-input-context-help-bubble h2, .he-input-context-help-bubble h3, .he-input-context-help-bubble p, .he-input-context-help-bubble figure, .he-input-context-help-bubble ol, .he-input-context-help-bubble ul { margin: 0; }
.he-input-context-help-bubble h2, .he-input-context-help-bubble h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-context-help-bubble img, .he-input-context-help-bubble svg { display: block; max-width: 100%; }
.he-input-context-help-bubble a { color: inherit; }
.he-input-context-help-bubble :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-context-help-bubble { max-width: 380px; }
.inp35-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 6px; }
.inp35-label { color: var(--text); font-size: .8rem; font-weight: 650; }
.inp35-help-trigger {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 8px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: var(--surface-2);
  color: var(--text-2);
  font-size: .72rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color .2s var(--ease), border-color .2s var(--ease), color .2s var(--ease);
}
.inp35-help-trigger:hover { background: var(--accent-soft); border-color: var(--accent-2); color: var(--accent); }
.inp35-wrap { position: relative; }
.inp35-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
  font-variant-numeric: tabular-nums;
}
.inp35-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }
/* Tooltip bubble, scoped to this component. */
.he-input-context-help-bubble .tip-bubble {
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 2;
  width: max-content;
  max-width: 260px;
  padding: 9px 12px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--shadow);
  color: var(--text);
  font-size: .78rem;
  line-height: 1.45;
  opacity: 0;
  pointer-events: none;
  transform: translateY(4px);
  transition: opacity .2s var(--ease), transform .24s var(--ease);
}
.he-input-context-help-bubble .tip-bubble.is-open { opacity: 1; pointer-events: auto; transform: translateY(0); }
.he-input-context-help-bubble .tip-bubble::before {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 100%;
  height: 34px;
}

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-context-help-bubble, .he-input-context-help-bubble *, .he-input-context-help-bubble *::before, .he-input-context-help-bubble *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputContextHelpBubble: HoverEffect = {
  id: "input-context-help-bubble",
  title: "Context Help Bubble",
  category: "inputs",
  description: "A dedicated help trigger opens a noninteractive explanation with the full tooltip lifecycle; essential instructions stay visible outside it.",
  tags: ["inputs","context","help","bubble","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

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
      <style>{\`${css}\`}</style>
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
}`,
  html: `<style>${css}</style>
<div class="field he-input-context-help-bubble" data-tip>
        <span class="inp35-row">
          <label class="inp35-label" for="input-context-help-bubble-inp35-input">Retention window</label>
          <button class="tip-trigger inp35-help-trigger" type="button" aria-describedby="input-context-help-bubble-inp35-bubble">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.4"/><path d="M6.4 6.3a1.7 1.7 0 0 1 3.3.6c0 1.1-1.7 1.3-1.7 2.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="8" cy="11.4" r=".9" fill="currentColor"/></svg>
            <span class="visually-hidden">About the retention window</span>
          </button>
        </span>
        <div class="inp35-wrap">
          <input class="inp35-control" id="input-context-help-bubble-inp35-input" type="text" inputmode="numeric" value="42" aria-describedby="input-context-help-bubble-inp35-help">
        </div>
        <p class="inp35-help" id="input-context-help-bubble-inp35-help">Days before archived data is permanently removed. The default is 42 for new workspaces.</p>
        <span class="tip-bubble" id="input-context-help-bubble-inp35-bubble" role="tooltip"><span class="tip-text">Retention applies per workspace. Deleted items are removed on the next monthly cycle.</span></span>
      </div>
<script>(function(){'use strict';var root=document.querySelector('.he-input-context-help-bubble');if(!root)return;var trigger=root.querySelector('.tip-trigger');var bubble=root.querySelector('.tip-bubble');if(!trigger||!bubble)return;var finePointer=matchMedia('(hover: hover) and (pointer: fine)');var HOVER_DELAY=80;var enabled=true;var state={hover:false,focus:false,suppressed:false,timer:0,open:false};var hook=null;function setOpen(next){if(state.open===next)return;state.open=next;bubble.classList.toggle('is-open',next);if(hook)hook(next)}function maybeOpen(){if(!enabled||state.suppressed)return;if(state.focus){setOpen(true);return}if(state.hover){clearTimeout(state.timer);state.timer=setTimeout(function(){state.timer=0;if(enabled&&state.hover&&!state.suppressed)setOpen(true)},HOVER_DELAY)}}function maybeClose(){clearTimeout(state.timer);state.timer=0;if(!state.hover&&!state.focus)setOpen(false)}function onPointerEnter(e){if(!finePointer.matches&&e.pointerType!=='touch')return;state.hover=true;state.suppressed=false;maybeOpen()}function onPointerLeave(e){state.hover=false;state.suppressed=false;if(e.pointerType==='touch'){clearTimeout(state.timer);state.timer=setTimeout(function(){state.timer=0;if(!state.hover)setOpen(false)},420);return}maybeClose()}function onFocusIn(){state.focus=true;state.suppressed=false;maybeOpen()}function onFocusOut(){state.focus=false;state.suppressed=false;maybeClose()}function onKeydown(event){if(event.key!=='Escape'||!state.open)return;setOpen(false);if(state.hover||state.focus)state.suppressed=true}root.addEventListener('pointerenter',onPointerEnter);root.addEventListener('pointerleave',onPointerLeave);root.addEventListener('focusin',onFocusIn);root.addEventListener('focusout',onFocusOut);root.addEventListener('keydown',onKeydown);})();</script>`,
};
