import type { HoverEffect } from "../types";

const css = `.he-icon-connector-endpoint-follow{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-connector-endpoint-follow, .he-icon-connector-endpoint-follow *, .he-icon-connector-endpoint-follow *::before, .he-icon-connector-endpoint-follow *::after { box-sizing: border-box; }
.he-icon-connector-endpoint-follow h2, .he-icon-connector-endpoint-follow h3, .he-icon-connector-endpoint-follow p, .he-icon-connector-endpoint-follow figure, .he-icon-connector-endpoint-follow ol, .he-icon-connector-endpoint-follow ul { margin: 0; }
.he-icon-connector-endpoint-follow img, .he-icon-connector-endpoint-follow svg { display: block; max-width: 100%; }
.he-icon-connector-endpoint-follow a { color: inherit; }
.he-icon-connector-endpoint-follow :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-connector-endpoint-follow {
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
  transition: border-color .24s var(--ease), background-color .24s var(--ease);
}
.he-icon-connector-endpoint-follow:hover { border-color: var(--accent-2); background: var(--accent-soft); }
.he-icon-connector-endpoint-follow:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-connector-endpoint-follow:active { border-color: var(--accent); }
.hi35-icon { display: block; overflow: visible; }
.hi35-base { transition: opacity .25s var(--ease); }
.hi35-end {
  transform: translate(0, 0);
  transition: transform .18s var(--ease-out);
  will-change: transform;
}
.hi35-halo { transition: opacity .25s var(--ease); }
.hi35-node {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform .25s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-connector-endpoint-follow:hover .hi35-base { opacity: .9; }
  .he-icon-connector-endpoint-follow:hover .hi35-halo { opacity: .16; }
  .he-icon-connector-endpoint-follow:hover .hi35-node { transform: scale(1.25); }
}
.he-icon-connector-endpoint-follow:focus-visible .hi35-end { transform: translate(2px, -2px); }
.he-icon-connector-endpoint-follow:focus-visible .hi35-base { opacity: .9; }
.he-icon-connector-endpoint-follow:focus-visible .hi35-halo { opacity: .16; }
.he-icon-connector-endpoint-follow:focus-visible .hi35-node { transform: scale(1.25); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-connector-endpoint-follow, .he-icon-connector-endpoint-follow *, .he-icon-connector-endpoint-follow *::before, .he-icon-connector-endpoint-follow *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconConnectorEndpointFollow: HoverEffect = {
  id: "icon-connector-endpoint-follow",
  title: "Connector Endpoint Follow",
  category: "icons",
  description: "The accent endpoint tracks the pointer along the connector",
  tags: ["icons","connector","endpoint","follow","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function IconConnectorEndpointFollow() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const end = button.querySelector(".hi35-end") as HTMLElement | null;
    if (!end) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const limit = 2.3;
    let rect: DOMRect | null = null;
    let frame = 0;
    let live = false;
    let x = 0;
    let y = 0;
    const measure = () => {
      rect = button.getBoundingClientRect();
    };
    const clamp = (value: number) => Math.max(-limit, Math.min(limit, value * limit));
    const render = () => {
      frame = 0;
      if (!live || !rect) return;
      const nx = (x / rect.width) * 2 - 1;
      const ny = (y / rect.height) * 2 - 1;
      end.style.transform = "translate(" + clamp(nx).toFixed(2) + "px," + clamp(ny).toFixed(2) + "px)";
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
      end.style.transform = "";
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
      <button ref={rootRef} className="he-icon-connector-endpoint-follow" type="button">
        <svg className="hi35-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path className="hi35-base" d="M4.6 15.4h5.8l3.2-3.2h3.4" stroke="var(--text-2)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" opacity=".55" />
          <g className="hi35-end">
            <circle className="hi35-halo" cx="19.8" cy="12.2" r="3.4" fill="var(--accent)" opacity="0" />
            <path d="M13.4 12.2h4.8" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" />
            <circle className="hi35-node" cx="19.8" cy="12.2" r="1.7" fill="none" stroke="var(--accent)" strokeWidth="1.7" />
          </g>
          <circle cx="4.6" cy="15.4" r="1.5" fill="var(--line-strong)" />
          <circle cx="12" cy="12.2" r="1.3" fill="var(--accent-2)" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-connector-endpoint-follow" type="button">
        <svg class="hi35-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path class="hi35-base" d="M4.6 15.4h5.8l3.2-3.2h3.4" stroke="var(--text-2)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>
          <g class="hi35-end">
            <circle class="hi35-halo" cx="19.8" cy="12.2" r="3.4" fill="var(--accent)" opacity="0"/>
            <path d="M13.4 12.2h4.8" stroke="var(--accent)" stroke-width="1.7" stroke-linecap="round"/>
            <circle class="hi35-node" cx="19.8" cy="12.2" r="1.7" fill="none" stroke="var(--accent)" stroke-width="1.7"/>
          </g>
          <circle cx="4.6" cy="15.4" r="1.5" fill="var(--line-strong)"/>
          <circle cx="12" cy="12.2" r="1.3" fill="var(--accent-2)"/>
        </svg>
      </button>
<script>(function(){'use strict';var limit=2.3,reduceQuery=matchMedia('(prefers-reduced-motion: reduce)'),fineQuery=matchMedia('(hover: hover) and (pointer: fine)');document.querySelectorAll('.he-icon-connector-endpoint-follow').forEach(function(button){var end=button.querySelector('.hi35-end');if(!end)return;var rect=null,frame=0,live=false,x=0,y=0;function measure(){rect=button.getBoundingClientRect()}function clamp(value){return Math.max(-limit,Math.min(limit,value*limit))}function render(){frame=0;if(!live||!rect)return;var nx=(x/rect.width)*2-1,ny=(y/rect.height)*2-1;end.style.transform='translate('+clamp(nx).toFixed(2)+'px,'+clamp(ny).toFixed(2)+'px)'}function enabled(event){return (fineQuery.matches||event.pointerType==='touch')&&!reduceQuery.matches&&!button.disabled}function onMove(event){if(!live)return;x=event.clientX-rect.left;y=event.clientY-rect.top;if(!frame)frame=requestAnimationFrame(render)}function onEnter(event){if(!enabled(event))return;measure();live=true;onMove(event)}function reset(){live=false;if(frame){cancelAnimationFrame(frame);frame=0}end.style.transform='';rect=null}button.addEventListener('pointerenter',onEnter);button.addEventListener('pointermove',onMove);button.addEventListener('pointerleave',reset);button.addEventListener('pointercancel',reset);window.addEventListener('resize',reset);window.addEventListener('scroll',reset,true)})})();</script>`,
};
