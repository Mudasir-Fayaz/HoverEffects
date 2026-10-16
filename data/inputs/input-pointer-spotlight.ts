import type { HoverEffect } from "../types";

const css = `.he-input-pointer-spotlight{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-pointer-spotlight, .he-input-pointer-spotlight *, .he-input-pointer-spotlight *::before, .he-input-pointer-spotlight *::after { box-sizing: border-box; }
.he-input-pointer-spotlight h2, .he-input-pointer-spotlight h3, .he-input-pointer-spotlight p, .he-input-pointer-spotlight figure, .he-input-pointer-spotlight ol, .he-input-pointer-spotlight ul { margin: 0; }
.he-input-pointer-spotlight h2, .he-input-pointer-spotlight h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-pointer-spotlight img, .he-input-pointer-spotlight svg { display: block; max-width: 100%; }
.he-input-pointer-spotlight a { color: inherit; }
.he-input-pointer-spotlight :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-pointer-spotlight { max-width: 360px; }
.inp34-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp34-wrap {
  position: relative;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  overflow: hidden;
}
.inp34-glow {
  will-change: transform;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 140px;
  height: 140px;
  margin: -70px 0 0 -70px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(46 111 92 / .2), transparent 72%);
  background: radial-gradient(closest-side, color-mix(in srgb, var(--accent) 24%, transparent), transparent 72%);
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: opacity .3s var(--ease);
  pointer-events: none;
}
.inp34-wrap.is-live .inp34-glow { opacity: 1; }
.inp34-control {
  position: relative;
  width: 100%;
  padding: 10px 12px;
  border: 0;
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp34-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-pointer-spotlight, .he-input-pointer-spotlight *, .he-input-pointer-spotlight *::before, .he-input-pointer-spotlight *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputPointerSpotlight: HoverEffect = {
  id: "input-pointer-spotlight",
  title: "Pointer Spotlight",
  category: "inputs",
  description: "A background highlight follows the pointer across the wrapper while the typed text and caret stay completely fixed.",
  tags: ["inputs","pointer","spotlight","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function InputPointerSpotlight() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
const badge = rootRef.current;
    if (!badge) return;
    const glow = badge.querySelector(".inp34-glow") as HTMLElement | null;
    if (!glow) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    let raf = 0;
    let live = false;
    let x = 0;
    let y = 0;

    const measure = () => {
      rect = badge.getBoundingClientRect();
    };
    const invalidate = () => {
      rect = null;
    };
    const frame = () => {
      raf = 0;
      if (!live || !rect) return;
      glow.style.transform = "translate3d(" + (x - rect.width / 2) + "px," + (y - rect.height / 2) + "px,0)";
    };
    const onEnter = (event: PointerEvent) => {
      if (!fine.matches || reduce.matches || event.pointerType === "touch") return;
      measure();
      live = true;
      badge.classList.add("is-live");
      onMove(event);
    };
    const onMove = (event: PointerEvent) => {
      if (!live) return;
      if (!rect) measure();
      x = event.clientX - (rect as DOMRect).left;
      y = event.clientY - (rect as DOMRect).top;
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const onLeave = () => {
      if (!live) return;
      live = false;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      badge.classList.remove("is-live");
      glow.style.transform = "";
    };
    const onFocusIn = () => {
      if (reduce.matches) return;
      glow.style.transform = "";
      badge.classList.add("is-live");
    };
    const onFocusOut = (event: FocusEvent) => {
      if (live) return;
      if (!badge.contains(event.relatedTarget as Node | null)) {
        badge.classList.remove("is-live");
      }
    };
    badge.addEventListener("pointerenter", onEnter);
    badge.addEventListener("pointermove", onMove);
    badge.addEventListener("pointerleave", onLeave);
    badge.addEventListener("pointercancel", onLeave);
    badge.addEventListener("focusin", onFocusIn);
    badge.addEventListener("focusout", onFocusOut);
    window.addEventListener("resize", invalidate);
    window.addEventListener("scroll", invalidate, true);
    return () => {
      badge.removeEventListener("pointerenter", onEnter);
      badge.removeEventListener("pointermove", onMove);
      badge.removeEventListener("pointerleave", onLeave);
      badge.removeEventListener("pointercancel", onLeave);
      badge.removeEventListener("focusin", onFocusIn);
      badge.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("resize", invalidate);
      window.removeEventListener("scroll", invalidate, true);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-pointer-spotlight">
        <label className="inp34-label" htmlFor="input-pointer-spotlight-inp34-input">Access note</label>
        <div className="inp34-wrap" ref={rootRef} data-inp34>
          <i className="inp34-glow" aria-hidden="true"></i>
          <input className="inp34-control" id="input-pointer-spotlight-inp34-input" type="text" placeholder="Who should have access?" aria-describedby="input-pointer-spotlight-inp34-help" />
        </div>
        <p className="inp34-help" id="input-pointer-spotlight-inp34-help">Tracked only for fine pointers; keyboard focus centres the highlight.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-pointer-spotlight">
        <label class="inp34-label" for="input-pointer-spotlight-inp34-input">Access note</label>
        <div class="inp34-wrap" data-inp34>
          <i class="inp34-glow" aria-hidden="true"></i>
          <input class="inp34-control" id="input-pointer-spotlight-inp34-input" type="text" placeholder="Who should have access?" aria-describedby="input-pointer-spotlight-inp34-help">
        </div>
        <p class="inp34-help" id="input-pointer-spotlight-inp34-help">Tracked only for fine pointers; keyboard focus centres the highlight.</p>
      </div>
<script>(function(){var badge=document.querySelector('[data-inp34]');if(!badge)return;var glow=badge.querySelector('.inp34-glow');var reduce=matchMedia('(prefers-reduced-motion: reduce)');var fine=matchMedia('(hover: hover) and (pointer: fine)');var rect=null,raf=0,live=false,x=0,y=0;function measure(){rect=badge.getBoundingClientRect()}function invalidate(){rect=null}function frame(){raf=0;if(!live||!rect)return;glow.style.transform='translate3d('+(x-rect.width/2)+'px,'+(y-rect.height/2)+'px,0)'}function onEnter(event){if(!fine.matches||reduce.matches||event.pointerType==='touch')return;measure();live=true;badge.classList.add('is-live');onMove(event)}function onMove(event){if(!live)return;if(!rect)measure();x=event.clientX-rect.left;y=event.clientY-rect.top;if(!raf)raf=requestAnimationFrame(frame)}function onLeave(){if(!live)return;live=false;if(raf){cancelAnimationFrame(raf);raf=0}badge.classList.remove('is-live');glow.style.transform=''}badge.addEventListener('pointerenter',onEnter);badge.addEventListener('pointermove',onMove);badge.addEventListener('pointerleave',onLeave);badge.addEventListener('pointercancel',onLeave);badge.addEventListener('focusin',function(){if(reduce.matches)return;glow.style.transform='';badge.classList.add('is-live')});badge.addEventListener('focusout',function(event){if(live)return;if(!badge.contains(event.relatedTarget))badge.classList.remove('is-live')});window.addEventListener('resize',invalidate);window.addEventListener('scroll',invalidate,true)})();</script>`,
};
