import type { HoverEffect } from "../types";

const css = `.he-tooltip-texture-surface{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-tooltip-texture-surface, .he-tooltip-texture-surface *, .he-tooltip-texture-surface *::before, .he-tooltip-texture-surface *::after { box-sizing: border-box; }
.he-tooltip-texture-surface h2, .he-tooltip-texture-surface h3, .he-tooltip-texture-surface p, .he-tooltip-texture-surface figure, .he-tooltip-texture-surface ol, .he-tooltip-texture-surface ul { margin: 0; }
.he-tooltip-texture-surface h2, .he-tooltip-texture-surface h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-tooltip-texture-surface img, .he-tooltip-texture-surface svg { display: block; max-width: 100%; }
.he-tooltip-texture-surface a { color: inherit; }
.he-tooltip-texture-surface :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-tooltip-texture-surface { position: relative; display: inline-flex; }
.he-tooltip-texture-surface .tip-trigger {
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
.he-tooltip-texture-surface .tip-trigger:hover { border-color: var(--accent-2); }
.he-tooltip-texture-surface .tip-bubble {
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
.he-tooltip-texture-surface .tip-bubble.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: var(--tf-open, translateX(-50%));
}
.he-tooltip-texture-surface .tip-bubble::before {
  content: "";
  position: absolute;
  top: 100%; height: 12px;
}
.he-tooltip-texture-surface .tip-bubble { overflow: hidden; }
.he-tooltip-texture-surface .tip-texture {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--line-strong) 1px, transparent 1.2px);
  background-size: 8px 8px;
  opacity: 0;
  transition: opacity .26s var(--ease);
}
.he-tooltip-texture-surface .tip-bubble.is-open .tip-texture { opacity: .45; }
.he-tooltip-texture-surface .tip-text { position: relative; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-tooltip-texture-surface, .he-tooltip-texture-surface *, .he-tooltip-texture-surface *::before, .he-tooltip-texture-surface *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const tooltipTextureSurface: HoverEffect = {
  id: "tooltip-texture-surface",
  title: "Texture Surface",
  category: "tooltips",
  description: "A faint static pattern and the bubble fade in together behind short, uncluttered text.",
  tags: ["tooltips","texture","surface","hover"],
  animationType: "opacity",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function TooltipTextureSurface() {
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
      <div ref={rootRef} className="he-tooltip-texture-surface" data-tip>
        <a className="tip-trigger" href="https://example.com" aria-describedby="tooltip-texture-surface-tip26-bubble">Archive notes</a>
        <span className="tip-bubble" id="tooltip-texture-surface-tip26-bubble" role="tooltip"><i className="tip-texture" aria-hidden="true"></i><span className="tip-text">Archived projects stay searchable but are excluded from reports.</span></span>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="he-tooltip-texture-surface" data-tip>
        <a class="tip-trigger" href="https://example.com" aria-describedby="tooltip-texture-surface-tip26-bubble">Archive notes</a>
        <span class="tip-bubble" id="tooltip-texture-surface-tip26-bubble" role="tooltip"><i class="tip-texture" aria-hidden="true"></i><span class="tip-text">Archived projects stay searchable but are excluded from reports.</span></span>
      </div>
<script>(function(){'use strict';var root=document.querySelector('.he-tooltip-texture-surface');if(!root)return;var trigger=root.querySelector('.tip-trigger');var bubble=root.querySelector('.tip-bubble');if(!trigger||!bubble)return;var finePointer=matchMedia('(hover: hover) and (pointer: fine)');var HOVER_DELAY=80;var enabled=true;var state={hover:false,focus:false,suppressed:false,timer:0,open:false};var hook=null;function setOpen(next){if(state.open===next)return;state.open=next;bubble.classList.toggle('is-open',next);if(hook)hook(next)}function maybeOpen(){if(!enabled||state.suppressed)return;if(state.focus){setOpen(true);return}if(state.hover){clearTimeout(state.timer);state.timer=setTimeout(function(){state.timer=0;if(enabled&&state.hover&&!state.suppressed)setOpen(true)},HOVER_DELAY)}}function maybeClose(){clearTimeout(state.timer);state.timer=0;if(!state.hover&&!state.focus)setOpen(false)}function onPointerEnter(e){if(!finePointer.matches&&e.pointerType!=='touch')return;state.hover=true;state.suppressed=false;maybeOpen()}function onPointerLeave(e){state.hover=false;state.suppressed=false;if(e.pointerType==='touch'){clearTimeout(state.timer);state.timer=setTimeout(function(){state.timer=0;if(!state.hover)setOpen(false)},420);return}maybeClose()}function onFocusIn(){state.focus=true;state.suppressed=false;maybeOpen()}function onFocusOut(){state.focus=false;state.suppressed=false;maybeClose()}function onKeydown(event){if(event.key!=='Escape'||!state.open)return;setOpen(false);if(state.hover||state.focus)state.suppressed=true}root.addEventListener('pointerenter',onPointerEnter);root.addEventListener('pointerleave',onPointerLeave);root.addEventListener('focusin',onFocusIn);root.addEventListener('focusout',onFocusOut);root.addEventListener('keydown',onKeydown);})();</script>`,
};
