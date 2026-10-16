import type { HoverEffect } from "../types";

const css = `.he-icon-pointer-detail-parallax{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-pointer-detail-parallax, .he-icon-pointer-detail-parallax *, .he-icon-pointer-detail-parallax *::before, .he-icon-pointer-detail-parallax *::after { box-sizing: border-box; }
.he-icon-pointer-detail-parallax h2, .he-icon-pointer-detail-parallax h3, .he-icon-pointer-detail-parallax p, .he-icon-pointer-detail-parallax figure, .he-icon-pointer-detail-parallax ol, .he-icon-pointer-detail-parallax ul { margin: 0; }
.he-icon-pointer-detail-parallax img, .he-icon-pointer-detail-parallax svg { display: block; max-width: 100%; }
.he-icon-pointer-detail-parallax a { color: inherit; }
.he-icon-pointer-detail-parallax :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-pointer-detail-parallax {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  background: var(--surface);
  color: var(--text-2);
  cursor: pointer;
  transition: border-color .2s var(--ease);
}
.he-icon-pointer-detail-parallax:hover { border-color: var(--accent-2); }
.he-icon-pointer-detail-parallax:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-pointer-detail-parallax:active { border-color: var(--accent); }
.hi33-icon { display: block; }
.hi33-d1, .hi33-d2 { transform: translate(0, 0); }
.he-icon-pointer-detail-parallax:focus-visible .hi33-d1 { transform: translate(1px, -1px); }
.he-icon-pointer-detail-parallax:focus-visible .hi33-d2 { transform: translate(-1px, 1px); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-pointer-detail-parallax, .he-icon-pointer-detail-parallax *, .he-icon-pointer-detail-parallax *::before, .he-icon-pointer-detail-parallax *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconPointerDetailParallax: HoverEffect = {
  id: "icon-pointer-detail-parallax",
  title: "Pointer Detail Parallax",
  category: "icons",
  description: "Detail groups offset ≤2 px with the pointer",
  tags: ["icons","pointer","detail","parallax","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function IconPointerDetailParallax() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const d1 = button.querySelector(".hi33-d1") as HTMLElement | null;
    const d2 = button.querySelector(".hi33-d2") as HTMLElement | null;
    if (!d1 || !d2) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    let frame = 0;
    let live = false;
    let x = 0;
    let y = 0;
    const measure = () => {
      rect = button.getBoundingClientRect();
    };
    const render = () => {
      frame = 0;
      if (!live || !rect) return;
      const nx = (x / rect.width) * 2 - 1;
      const ny = (y / rect.height) * 2 - 1;
      const cx = Math.max(-1, Math.min(1, nx));
      const cy = Math.max(-1, Math.min(1, ny));
      d1.style.transform = "translate(" + (cx * 1.2).toFixed(2) + "px," + (cy * 0.9).toFixed(2) + "px)";
      d2.style.transform = "translate(" + (cx * -2).toFixed(2) + "px," + (cy * -1.5).toFixed(2) + "px)";
    };
    const enabled = (event: PointerEvent) =>
      (fineQuery.matches || event.pointerType === "touch") &&
      !reduceQuery.matches &&
      !button.disabled;
    const onMove = (event: PointerEvent) => {
      if (!live) return;
      x = event.clientX - (rect as DOMRect).left;
      y = event.clientY - (rect as DOMRect).top;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onEnter = (event: PointerEvent) => {
      if (!enabled(event)) return;
      measure();
      live = true;
      onMove(event);
    };
    const reset = () => {
      live = false;
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      d1.style.transform = "";
      d2.style.transform = "";
      rect = null;
    };
    button.addEventListener("pointerenter", onEnter);
    button.addEventListener("pointermove", onMove);
    button.addEventListener("pointerleave", reset);
    button.addEventListener("pointercancel", reset);
    window.addEventListener("resize", reset);
    window.addEventListener("scroll", reset, true);
    return () => {
      button.removeEventListener("pointerenter", onEnter);
      button.removeEventListener("pointermove", onMove);
      button.removeEventListener("pointerleave", reset);
      button.removeEventListener("pointercancel", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("scroll", reset, true);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <button ref={rootRef} className="he-icon-pointer-detail-parallax" type="button">
        <svg className="hi33-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <circle cx="10.6" cy="10.6" r="6.2" stroke="var(--text-2)" strokeWidth="1.7" />
          <path d="M15.2 15.2 19 19" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" />
          <g className="hi33-d1">
            <circle cx="10.6" cy="10.6" r="2.8" stroke="var(--accent-2)" strokeWidth="1.5" />
          </g>
          <g className="hi33-d2" fill="var(--accent)">
            <circle cx="10.6" cy="5.6" r=".9" />
            <circle cx="15.6" cy="12.2" r=".9" />
            <circle cx="8.2" cy="14.4" r=".9" />
          </g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-pointer-detail-parallax" type="button">
        <svg class="hi33-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <circle cx="10.6" cy="10.6" r="6.2" stroke="var(--text-2)" stroke-width="1.7"/>
          <path d="M15.2 15.2 19 19" stroke="var(--text-2)" stroke-width="1.8" stroke-linecap="round"/>
          <g class="hi33-d1">
            <circle cx="10.6" cy="10.6" r="2.8" stroke="var(--accent-2)" stroke-width="1.5"/>
          </g>
          <g class="hi33-d2" fill="var(--accent)">
            <circle cx="10.6" cy="5.6" r=".9"/>
            <circle cx="15.6" cy="12.2" r=".9"/>
            <circle cx="8.2" cy="14.4" r=".9"/>
          </g>
        </svg>
      </button>
<script>(function(){'use strict';var reduceQuery=matchMedia('(prefers-reduced-motion: reduce)'),fineQuery=matchMedia('(hover: hover) and (pointer: fine)');document.querySelectorAll('.he-icon-pointer-detail-parallax').forEach(function(button){var d1=button.querySelector('.hi33-d1'),d2=button.querySelector('.hi33-d2');if(!d1||!d2)return;var rect=null,frame=0,live=false,x=0,y=0;function measure(){rect=button.getBoundingClientRect()}function render(){frame=0;if(!live||!rect)return;var nx=(x/rect.width)*2-1,ny=(y/rect.height)*2-1,cx=Math.max(-1,Math.min(1,nx)),cy=Math.max(-1,Math.min(1,ny));d1.style.transform='translate('+(cx*1.2).toFixed(2)+'px,'+(cy*0.9).toFixed(2)+'px)';d2.style.transform='translate('+(cx*-2).toFixed(2)+'px,'+(cy*-1.5).toFixed(2)+'px)'}function enabled(event){return (fineQuery.matches||event.pointerType==='touch')&&!reduceQuery.matches}function onMove(event){if(!live)return;x=event.clientX-rect.left;y=event.clientY-rect.top;if(!frame)frame=requestAnimationFrame(render)}function onEnter(event){if(!enabled(event))return;measure();live=true;onMove(event)}function reset(){live=false;if(frame){cancelAnimationFrame(frame);frame=0}d1.style.transform='';d2.style.transform='';rect=null}button.addEventListener('pointerenter',onEnter);button.addEventListener('pointermove',onMove);button.addEventListener('pointerleave',reset);button.addEventListener('pointercancel',reset);window.addEventListener('resize',reset);window.addEventListener('scroll',reset,true)})})();</script>`,
};
