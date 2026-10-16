import type { HoverEffect } from "../types";

const css = `.he-tooltip-definition-rule{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-tooltip-definition-rule, .he-tooltip-definition-rule *, .he-tooltip-definition-rule *::before, .he-tooltip-definition-rule *::after { box-sizing: border-box; }
.he-tooltip-definition-rule h2, .he-tooltip-definition-rule h3, .he-tooltip-definition-rule p, .he-tooltip-definition-rule figure, .he-tooltip-definition-rule ol, .he-tooltip-definition-rule ul { margin: 0; }
.he-tooltip-definition-rule h2, .he-tooltip-definition-rule h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-tooltip-definition-rule img, .he-tooltip-definition-rule svg { display: block; max-width: 100%; }
.he-tooltip-definition-rule a { color: inherit; }
.he-tooltip-definition-rule :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-tooltip-definition-rule { position: relative; display: inline-flex; }
.he-tooltip-definition-rule .tip-trigger {
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
.he-tooltip-definition-rule .tip-trigger:hover { border-color: var(--accent-2); }
.he-tooltip-definition-rule .tip-bubble {
  position: absolute;
  bottom: calc(100% + 10px); left: 50%;
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
  text-align: left;
  opacity: 0;
  pointer-events: none;
  transform: var(--tf-closed, translateX(-50%));
  transition: opacity var(--td-op, .2s) var(--ease), transform var(--td-tr, .24s) var(--ease);
}
.he-tooltip-definition-rule .tip-bubble.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: var(--tf-open, translateX(-50%));
}
.he-tooltip-definition-rule .tip-bubble::before {
  content: "";
  position: absolute;
  top: 100%; height: 12px;
}
.he-tooltip-definition-rule .tip-rule {
  display: block;
  height: 1px;
  margin: 6px 0;
  background: var(--line-strong);
  transform: scaleX(.4);
  transform-origin: left center;
  transition: transform .28s var(--ease);
}
:dir(rtl) .he-tooltip-definition-rule .tip-rule { transform-origin: right center; }
.he-tooltip-definition-rule .tip-bubble.is-open .tip-rule { transform: scaleX(1); }
.he-tooltip-definition-rule .tip-text { position: relative; display: block; }
.he-tooltip-definition-rule .tip-text strong { font-weight: 700; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-tooltip-definition-rule, .he-tooltip-definition-rule *, .he-tooltip-definition-rule *::before, .he-tooltip-definition-rule *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const tooltipDefinitionRule: HoverEffect = {
  id: "tooltip-definition-rule",
  title: "Definition Rule",
  category: "tooltips",
  description: "Term, divider and definition all appear together while the divider grows slightly in its slot.",
  tags: ["tooltips","definition","rule","hover"],
  animationType: "opacity",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function TooltipDefinitionRule() {
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
      <div ref={rootRef} className="he-tooltip-definition-rule" data-tip>
        <a className="tip-trigger" href="https://example.com" aria-describedby="tooltip-definition-rule-tip24-bubble">Idempotency</a>
        <span className="tip-bubble" id="tooltip-definition-rule-tip24-bubble" role="tooltip"><span className="tip-text"><strong>Idempotency key</strong><i className="tip-rule" aria-hidden="true"></i>Repeating a request with the same key returns the original response.</span></span>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="he-tooltip-definition-rule" data-tip>
        <a class="tip-trigger" href="https://example.com" aria-describedby="tooltip-definition-rule-tip24-bubble">Idempotency</a>
        <span class="tip-bubble" id="tooltip-definition-rule-tip24-bubble" role="tooltip"><span class="tip-text"><strong>Idempotency key</strong><i class="tip-rule" aria-hidden="true"></i>Repeating a request with the same key returns the original response.</span></span>
      </div>
<script>(function(){'use strict';var root=document.querySelector('.he-tooltip-definition-rule');if(!root)return;var trigger=root.querySelector('.tip-trigger');var bubble=root.querySelector('.tip-bubble');if(!trigger||!bubble)return;var finePointer=matchMedia('(hover: hover) and (pointer: fine)');var HOVER_DELAY=80;var enabled=true;var state={hover:false,focus:false,suppressed:false,timer:0,open:false};var hook=null;function setOpen(next){if(state.open===next)return;state.open=next;bubble.classList.toggle('is-open',next);if(hook)hook(next)}function maybeOpen(){if(!enabled||state.suppressed)return;if(state.focus){setOpen(true);return}if(state.hover&&finePointer.matches){clearTimeout(state.timer);state.timer=setTimeout(function(){state.timer=0;if(enabled&&state.hover&&!state.suppressed)setOpen(true)},HOVER_DELAY)}}function maybeClose(){clearTimeout(state.timer);state.timer=0;if(!state.hover&&!state.focus)setOpen(false)}function onPointerEnter(){if(!finePointer.matches)return;state.hover=true;state.suppressed=false;maybeOpen()}function onPointerLeave(){state.hover=false;state.suppressed=false;maybeClose()}function onFocusIn(){state.focus=true;state.suppressed=false;maybeOpen()}function onFocusOut(){state.focus=false;state.suppressed=false;maybeClose()}function onKeydown(event){if(event.key!=='Escape'||!state.open)return;setOpen(false);if(state.hover||state.focus)state.suppressed=true}root.addEventListener('pointerenter',onPointerEnter);root.addEventListener('pointerleave',onPointerLeave);root.addEventListener('focusin',onFocusIn);root.addEventListener('focusout',onFocusOut);root.addEventListener('keydown',onKeydown);})();</script>`,
};
