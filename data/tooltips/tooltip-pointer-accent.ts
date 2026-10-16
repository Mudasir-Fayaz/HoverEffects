import type { HoverEffect } from "../types";

const css = `.he-tooltip-pointer-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-tooltip-pointer-accent, .he-tooltip-pointer-accent *, .he-tooltip-pointer-accent *::before, .he-tooltip-pointer-accent *::after { box-sizing: border-box; }
.he-tooltip-pointer-accent h2, .he-tooltip-pointer-accent h3, .he-tooltip-pointer-accent p, .he-tooltip-pointer-accent figure, .he-tooltip-pointer-accent ol, .he-tooltip-pointer-accent ul { margin: 0; }
.he-tooltip-pointer-accent h2, .he-tooltip-pointer-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-tooltip-pointer-accent img, .he-tooltip-pointer-accent svg { display: block; max-width: 100%; }
.he-tooltip-pointer-accent a { color: inherit; }
.he-tooltip-pointer-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-tooltip-pointer-accent { position: relative; display: inline-flex; }
.he-tooltip-pointer-accent .tip-trigger {
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
.he-tooltip-pointer-accent .tip-trigger:hover { border-color: var(--accent-2); }
.he-tooltip-pointer-accent .tip-bubble {
  position: absolute;
  bottom: calc(100% + 10px); left: 50%;
  z-index: 2;
  width: max-content;
  max-width: 250px;
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
.he-tooltip-pointer-accent .tip-bubble.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: var(--tf-open, translateX(-50%));
}
.he-tooltip-pointer-accent .tip-bubble::before {
  content: "";
  position: absolute;
  top: 100%; height: 12px;
}
.he-tooltip-pointer-accent .tip-arrow {
  position: absolute;
  width: 9px; height: 9px;
  background: var(--surface);
  bottom: -5px; left: 50%; margin-left: -5px; transform: rotate(45deg);
  border-right: 1px solid var(--line-strong); border-bottom: 1px solid var(--line-strong);
}
.he-tooltip-pointer-accent .tip-bubble { overflow: hidden; }
.he-tooltip-pointer-accent .tip-glow {
  will-change: transform;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(46 111 92 / .28), transparent 72%);
  background: radial-gradient(closest-side, color-mix(in srgb, var(--accent) 32%, transparent), transparent 72%);
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: opacity .22s var(--ease);
  pointer-events: none;
}
.he-tooltip-pointer-accent .tip-bubble.is-open .tip-glow { opacity: 1; }
.he-tooltip-pointer-accent .tip-text, .he-tooltip-pointer-accent .tip-arrow { position: relative; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-tooltip-pointer-accent, .he-tooltip-pointer-accent *, .he-tooltip-pointer-accent *::before, .he-tooltip-pointer-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const tooltipPointerAccent: HoverEffect = {
  id: "tooltip-pointer-accent",
  title: "Pointer Accent",
  category: "tooltips",
  description: "A soft highlight follows the pointer across the bubble itself while the body and text stay fixed.",
  tags: ["tooltips","pointer","accent","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

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
      <style>{\`${css}\`}</style>
      <div ref={rootRef} className="he-tooltip-pointer-accent" data-tip>
        <a className="tip-trigger" href="https://example.com" aria-describedby="tooltip-pointer-accent-tip32-bubble"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" /><path d="M6.4 6.3a1.7 1.7 0 0 1 3.3.6c0 1.1-1.7 1.3-1.7 2.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><circle cx="8" cy="11.4" r=".9" fill="currentColor" /></svg> Chart interactions</a>
        <span className="tip-bubble" id="tooltip-pointer-accent-tip32-bubble" role="tooltip"><i className="tip-glow" aria-hidden="true"></i><span className="tip-text">Drag to brush a date range; double-click the chart to reset the zoom.</span><i className="tip-arrow" aria-hidden="true"></i></span>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="he-tooltip-pointer-accent" data-tip>
        <a class="tip-trigger" href="https://example.com" aria-describedby="tooltip-pointer-accent-tip32-bubble"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.4"/><path d="M6.4 6.3a1.7 1.7 0 0 1 3.3.6c0 1.1-1.7 1.3-1.7 2.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="8" cy="11.4" r=".9" fill="currentColor"/></svg> Chart interactions</a>
        <span class="tip-bubble" id="tooltip-pointer-accent-tip32-bubble" role="tooltip"><i class="tip-glow" aria-hidden="true"></i><span class="tip-text">Drag to brush a date range; double-click the chart to reset the zoom.</span><i class="tip-arrow" aria-hidden="true"></i></span>
      </div>
<script>(function(){'use strict';var root=document.querySelector('.he-tooltip-pointer-accent');if(!root)return;var trigger=root.querySelector('.tip-trigger');var bubble=root.querySelector('.tip-bubble');if(!trigger||!bubble)return;var finePointer=matchMedia('(hover: hover) and (pointer: fine)');var HOVER_DELAY=80;var enabled=true;var state={hover:false,focus:false,suppressed:false,timer:0,open:false};var hook=null;function setOpen(next){if(state.open===next)return;state.open=next;bubble.classList.toggle('is-open',next);if(hook)hook(next)}function maybeOpen(){if(!enabled||state.suppressed)return;if(state.focus){setOpen(true);return}if(state.hover&&finePointer.matches){clearTimeout(state.timer);state.timer=setTimeout(function(){state.timer=0;if(enabled&&state.hover&&!state.suppressed)setOpen(true)},HOVER_DELAY)}}function maybeClose(){clearTimeout(state.timer);state.timer=0;if(!state.hover&&!state.focus)setOpen(false)}function onPointerEnter(){if(!finePointer.matches)return;state.hover=true;state.suppressed=false;maybeOpen()}function onPointerLeave(){state.hover=false;state.suppressed=false;maybeClose()}function onFocusIn(){state.focus=true;state.suppressed=false;maybeOpen()}function onFocusOut(){state.focus=false;state.suppressed=false;maybeClose()}function onKeydown(event){if(event.key!=='Escape'||!state.open)return;setOpen(false);if(state.hover||state.focus)state.suppressed=true}var glow=bubble.querySelector('.tip-glow');var glowRect=null,glowRaf=0,gx=0,gy=0;var reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');function glowMeasure(){glowRect=bubble.getBoundingClientRect()}function glowFrame(){glowRaf=0;if(!state.open||!glow||!glowRect)return;glow.style.transform='translate3d('+(gx-glowRect.width/2)+'px,'+(gy-glowRect.height/2)+'px,0)'}root.addEventListener('pointermove',function(event){if(!state.open||!glow||!finePointer.matches||reduceMotion.matches)return;if(!bubble.contains(event.target))return;if(!glowRect)glowMeasure();gx=event.clientX-glowRect.left;gy=event.clientY-glowRect.top;if(!glowRaf)glowRaf=requestAnimationFrame(glowFrame)});hook=function(next){if(!glow)return;if(next){glowMeasure();glow.style.transform=''}else{glow.style.transform='';glowRect=null}};function glowInvalidate(){glowRect=null}window.addEventListener('resize',glowInvalidate);window.addEventListener('scroll',glowInvalidate,true);root.addEventListener('pointerenter',onPointerEnter);root.addEventListener('pointerleave',onPointerLeave);root.addEventListener('focusin',onFocusIn);root.addEventListener('focusout',onFocusOut);root.addEventListener('keydown',onKeydown);})();</script>`,
};
