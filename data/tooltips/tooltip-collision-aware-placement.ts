import type { HoverEffect } from "../types";

const css = `.he-tooltip-collision-aware-placement{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-tooltip-collision-aware-placement, .he-tooltip-collision-aware-placement *, .he-tooltip-collision-aware-placement *::before, .he-tooltip-collision-aware-placement *::after { box-sizing: border-box; }
.he-tooltip-collision-aware-placement h2, .he-tooltip-collision-aware-placement h3, .he-tooltip-collision-aware-placement p, .he-tooltip-collision-aware-placement figure, .he-tooltip-collision-aware-placement ol, .he-tooltip-collision-aware-placement ul { margin: 0; }
.he-tooltip-collision-aware-placement h2, .he-tooltip-collision-aware-placement h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-tooltip-collision-aware-placement img, .he-tooltip-collision-aware-placement svg { display: block; max-width: 100%; }
.he-tooltip-collision-aware-placement a { color: inherit; }
.he-tooltip-collision-aware-placement :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-tooltip-collision-aware-placement { position: relative; display: inline-flex; }
.he-tooltip-collision-aware-placement .tip-trigger {
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
.he-tooltip-collision-aware-placement .tip-trigger:hover { border-color: var(--accent-2); }
.he-tooltip-collision-aware-placement .tip-bubble {
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
.he-tooltip-collision-aware-placement .tip-bubble.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: var(--tf-open, translateX(-50%));
}
.he-tooltip-collision-aware-placement .tip-bubble::before {
  content: "";
  position: absolute;
  top: 100%; height: 12px;
}
.he-tooltip-collision-aware-placement .tip-arrow {
  position: absolute;
  width: 9px; height: 9px;
  background: var(--surface);
  bottom: -5px; left: 50%; margin-left: -5px; transform: rotate(45deg);
  border-right: 1px solid var(--line-strong); border-bottom: 1px solid var(--line-strong);
}
.he-tooltip-collision-aware-placement .tip-bubble {
  --tf-closed: translateX(calc(-50% + var(--shift, 0px)));
  --tf-open: translateX(calc(-50% + var(--shift, 0px)));
  --td-tr: .26s;
}
.he-tooltip-collision-aware-placement .tip-bubble[data-placement="bottom"] {
  bottom: auto;
  top: calc(100% + 10px);
}
.he-tooltip-collision-aware-placement .tip-bubble[data-placement="bottom"]::before {
  top: auto;
  bottom: 100%;
}
.he-tooltip-collision-aware-placement .tip-arrow { left: var(--arrow-x, 50%); transition: left .12s linear; }
.he-tooltip-collision-aware-placement .tip-bubble[data-placement="bottom"] .tip-arrow {
  top: -5px;
  bottom: auto;
  transform: rotate(-135deg);
}

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-tooltip-collision-aware-placement, .he-tooltip-collision-aware-placement *, .he-tooltip-collision-aware-placement *::before, .he-tooltip-collision-aware-placement *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const tooltipCollisionAwarePlacement: HoverEffect = {
  id: "tooltip-collision-aware-placement",
  title: "Collision-Aware Placement",
  category: "tooltips",
  description: "The bubble opens on the side with enough viewport space, clamps horizontally and re-points its arrow.",
  tags: ["tooltips","collision","aware","placement","hover"],
  animationType: "layout",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function TooltipCollisionAwarePlacement() {
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

    const reflow = () => {
      if (!state.open) return;
      const t = trigger.getBoundingClientRect();
      const needed = bubble.offsetHeight + 18;
      const placement = t.top >= needed ? "top" : "bottom";
      bubble.setAttribute("data-placement", placement);
      const b = bubble.getBoundingClientRect();
      const pad = 10;
      let shift = 0;
      if (b.left < pad) shift = pad - b.left;
      else if (b.right > window.innerWidth - pad) shift = window.innerWidth - pad - b.right;
      bubble.style.setProperty("--shift", shift + "px");
      let arrowX = t.left + t.width / 2 - (b.left + shift);
      if (arrowX < 16) arrowX = 16;
      if (arrowX > b.width - 16) arrowX = b.width - 16;
      bubble.style.setProperty("--arrow-x", arrowX + "px");
    };

    let reflowRaf = 0;
    const scheduleReflow = () => {
      if (!state.open) return;
      if (reflowRaf) cancelAnimationFrame(reflowRaf);
      reflowRaf = requestAnimationFrame(() => {
        reflowRaf = 0;
        reflow();
      });
    };

    openChange = (next: boolean) => {
      if (next) scheduleReflow();
    };
    window.addEventListener("resize", scheduleReflow);
    window.addEventListener("scroll", scheduleReflow, true);
    return () => {
      root.removeEventListener("pointerenter", onPointerEnter);
      root.removeEventListener("pointerleave", onPointerLeave);
      root.removeEventListener("focusin", onFocusIn);
      root.removeEventListener("focusout", onFocusOut);
      root.removeEventListener("keydown", onKeydown);
      window.clearTimeout(state.timer);
      window.removeEventListener("resize", scheduleReflow);
      window.removeEventListener("scroll", scheduleReflow, true);
      cancelAnimationFrame(reflowRaf);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <div ref={rootRef} className="he-tooltip-collision-aware-placement" data-tip>
        <a className="tip-trigger" href="https://example.com" aria-describedby="tooltip-collision-aware-placement-tip35-bubble"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" /><path d="M6.4 6.3a1.7 1.7 0 0 1 3.3.6c0 1.1-1.7 1.3-1.7 2.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><circle cx="8" cy="11.4" r=".9" fill="currentColor" /></svg> Keyboard map</a>
        <span className="tip-bubble" id="tooltip-collision-aware-placement-tip35-bubble" role="tooltip"><span className="tip-text">Press G then I to jump to the inbox; G then S opens settings. The full map is in the details section below.</span><i className="tip-arrow" aria-hidden="true"></i></span>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="he-tooltip-collision-aware-placement" data-tip>
        <a class="tip-trigger" href="https://example.com" aria-describedby="tooltip-collision-aware-placement-tip35-bubble"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.4"/><path d="M6.4 6.3a1.7 1.7 0 0 1 3.3.6c0 1.1-1.7 1.3-1.7 2.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="8" cy="11.4" r=".9" fill="currentColor"/></svg> Keyboard map</a>
        <span class="tip-bubble" id="tooltip-collision-aware-placement-tip35-bubble" role="tooltip"><span class="tip-text">Press G then I to jump to the inbox; G then S opens settings. The full map is in the details section below.</span><i class="tip-arrow" aria-hidden="true"></i></span>
      </div>
<script>(function(){'use strict';var root=document.querySelector('.he-tooltip-collision-aware-placement');if(!root)return;var trigger=root.querySelector('.tip-trigger');var bubble=root.querySelector('.tip-bubble');if(!trigger||!bubble)return;var finePointer=matchMedia('(hover: hover) and (pointer: fine)');var HOVER_DELAY=80;var enabled=true;var state={hover:false,focus:false,suppressed:false,timer:0,open:false};var hook=null;function setOpen(next){if(state.open===next)return;state.open=next;bubble.classList.toggle('is-open',next);if(hook)hook(next)}function maybeOpen(){if(!enabled||state.suppressed)return;if(state.focus){setOpen(true);return}if(state.hover&&finePointer.matches){clearTimeout(state.timer);state.timer=setTimeout(function(){state.timer=0;if(enabled&&state.hover&&!state.suppressed)setOpen(true)},HOVER_DELAY)}}function maybeClose(){clearTimeout(state.timer);state.timer=0;if(!state.hover&&!state.focus)setOpen(false)}function onPointerEnter(){if(!finePointer.matches)return;state.hover=true;state.suppressed=false;maybeOpen()}function onPointerLeave(){state.hover=false;state.suppressed=false;maybeClose()}function onFocusIn(){state.focus=true;state.suppressed=false;maybeOpen()}function onFocusOut(){state.focus=false;state.suppressed=false;maybeClose()}function onKeydown(event){if(event.key!=='Escape'||!state.open)return;setOpen(false);if(state.hover||state.focus)state.suppressed=true}function reflow(){if(!state.open)return;var t=trigger.getBoundingClientRect(),needed=bubble.offsetHeight+18,placement=t.top>=needed?'top':'bottom';bubble.setAttribute('data-placement',placement);var b=bubble.getBoundingClientRect(),pad=10,shift=0;if(b.left<pad)shift=pad-b.left;else if(b.right>window.innerWidth-pad)shift=(window.innerWidth-pad)-b.right;bubble.style.setProperty('--shift',shift+'px');var arrowX=(t.left+t.width/2)-(b.left+shift);if(arrowX<16)arrowX=16;if(arrowX>b.width-16)arrowX=b.width-16;bubble.style.setProperty('--arrow-x',arrowX+'px')}var reflowRaf=0;function scheduleReflow(){if(!state.open)return;if(reflowRaf)cancelAnimationFrame(reflowRaf);reflowRaf=requestAnimationFrame(function(){reflowRaf=0;reflow()})}hook=function(next){if(next)scheduleReflow()};window.addEventListener('resize',scheduleReflow);window.addEventListener('scroll',scheduleReflow,true);root.addEventListener('pointerenter',onPointerEnter);root.addEventListener('pointerleave',onPointerLeave);root.addEventListener('focusin',onFocusIn);root.addEventListener('focusout',onFocusOut);root.addEventListener('keydown',onKeydown);})();</script>`,
};
