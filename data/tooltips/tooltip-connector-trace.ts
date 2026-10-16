import type { HoverEffect } from "../types";

const css = `.he-tooltip-connector-trace{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-tooltip-connector-trace, .he-tooltip-connector-trace *, .he-tooltip-connector-trace *::before, .he-tooltip-connector-trace *::after { box-sizing: border-box; }
.he-tooltip-connector-trace h2, .he-tooltip-connector-trace h3, .he-tooltip-connector-trace p, .he-tooltip-connector-trace figure, .he-tooltip-connector-trace ol, .he-tooltip-connector-trace ul { margin: 0; }
.he-tooltip-connector-trace h2, .he-tooltip-connector-trace h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-tooltip-connector-trace img, .he-tooltip-connector-trace svg { display: block; max-width: 100%; }
.he-tooltip-connector-trace a { color: inherit; }
.he-tooltip-connector-trace :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-tooltip-connector-trace { position: relative; display: inline-flex; }
.he-tooltip-connector-trace .tip-trigger {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 8px 13px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font-size: .85rem; font-weight: 650;
  text-decoration: none;
  transition: border-color .2s var(--ease), color .2s var(--ease);
}
.he-tooltip-connector-trace .tip-trigger:hover { border-color: var(--accent-2); }
.he-tooltip-connector-trace .tip-bubble {
  position: absolute;
  bottom: calc(100% + 10px); left: 50%;
  z-index: 2;
  width: max-content;
  max-width: 240px;
  padding: 9px 12px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--shadow);
  color: var(--text);
  font-size: .78rem;
  line-height: 1.45;
  text-align: left;
  opacity: 0;
  pointer-events: none;
  transform: var(--tf-closed, translateX(-50%));
  transition: opacity var(--td-op, .2s) var(--ease), transform var(--td-tr, .24s) var(--ease);
}
.he-tooltip-connector-trace .tip-bubble.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: var(--tf-open, translateX(-50%));
}
.he-tooltip-connector-trace .tip-bubble::before { /* hover bridge across the gap */
  content: "";
  position: absolute;
  top: 100%; height: 12px;
}
.he-tooltip-connector-trace { padding-top: 14px; }
.he-tooltip-connector-trace .tip-connector {
  position: absolute;
  left: 50%;
  bottom: 100%;
  width: 1.5px;
  height: 16px;
  margin-left: -.75px;
  background: var(--line-strong);
  transform-origin: bottom center;
  transform: scaleY(0);
  transition: transform .26s var(--ease-out);
  pointer-events: none;
}
.he-tooltip-connector-trace:has(.tip-bubble.is-open) .tip-connector { transform: scaleY(1); }
.he-tooltip-connector-trace .tip-bubble {
  --tf-closed: translateX(-50%) translateY(2px);
  --tf-open: translateX(-50%) translateY(0);
  --td-op: .18s;
  --td-tr: .2s;
  transition-delay: 0s, .1s;
}
.he-tooltip-connector-trace .tip-bubble:not(.is-open) { transition-delay: 0s, 0s; transition-duration: .18s, .2s; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-tooltip-connector-trace, .he-tooltip-connector-trace *, .he-tooltip-connector-trace *::before, .he-tooltip-connector-trace *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const tooltipConnectorTrace: HoverEffect = {
  id: "tooltip-connector-trace",
  title: "Connector Trace",
  category: "tooltips",
  description: "A thin connector draws from the trigger toward the bubble, which then appears as the line arrives.",
  tags: ["tooltips","connector","trace","hover"],
  animationType: "opacity",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function TooltipConnectorTrace() {
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
      <style>{\`${css}\`}</style>
      <div ref={rootRef} className="he-tooltip-connector-trace" data-tip>
        <a className="tip-trigger" href="https://example.com" aria-describedby="tooltip-connector-trace-tip14-bubble">Build minutes</a>
        <i className="tip-connector" aria-hidden="true"></i>
        <span className="tip-bubble" id="tooltip-connector-trace-tip14-bubble" role="tooltip"><span className="tip-text">CI minutes reset on the first of each month at 00:00 UTC.</span></span>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="he-tooltip-connector-trace" data-tip>
        <a class="tip-trigger" href="https://example.com" aria-describedby="tooltip-connector-trace-tip14-bubble">Build minutes</a>
        <i class="tip-connector" aria-hidden="true"></i>
        <span class="tip-bubble" id="tooltip-connector-trace-tip14-bubble" role="tooltip"><span class="tip-text">CI minutes reset on the first of each month at 00:00 UTC.</span></span>
      </div>
<script>(function(){'use strict';var root=document.querySelector('.he-tooltip-connector-trace');if(!root)return;var trigger=root.querySelector('.tip-trigger');var bubble=root.querySelector('.tip-bubble');if(!trigger||!bubble)return;var finePointer=matchMedia('(hover: hover) and (pointer: fine)');var HOVER_DELAY=80;var enabled=true;var state={hover:false,focus:false,suppressed:false,timer:0,open:false};var hook=null;function setOpen(next){if(state.open===next)return;state.open=next;bubble.classList.toggle('is-open',next);if(hook)hook(next)}function maybeOpen(){if(!enabled||state.suppressed)return;if(state.focus){setOpen(true);return}if(state.hover&&finePointer.matches){clearTimeout(state.timer);state.timer=setTimeout(function(){state.timer=0;if(enabled&&state.hover&&!state.suppressed)setOpen(true)},HOVER_DELAY)}}function maybeClose(){clearTimeout(state.timer);state.timer=0;if(!state.hover&&!state.focus)setOpen(false)}function onPointerEnter(){if(!finePointer.matches)return;state.hover=true;state.suppressed=false;maybeOpen()}function onPointerLeave(){state.hover=false;state.suppressed=false;maybeClose()}function onFocusIn(){state.focus=true;state.suppressed=false;maybeOpen()}function onFocusOut(){state.focus=false;state.suppressed=false;maybeClose()}function onKeydown(event){if(event.key!=='Escape'||!state.open)return;setOpen(false);if(state.hover||state.focus)state.suppressed=true}root.addEventListener('pointerenter',onPointerEnter);root.addEventListener('pointerleave',onPointerLeave);root.addEventListener('focusin',onFocusIn);root.addEventListener('focusout',onFocusOut);root.addEventListener('keydown',onKeydown);})();</script>`,
};
