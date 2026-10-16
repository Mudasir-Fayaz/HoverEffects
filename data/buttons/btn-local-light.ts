import type { HoverEffect } from "../types";

const css = `.he-btn-local-light{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-local-light, .he-btn-local-light *, .he-btn-local-light *::before, .he-btn-local-light *::after { box-sizing: border-box; }
.he-btn-local-light h2, .he-btn-local-light h3, .he-btn-local-light p, .he-btn-local-light figure, .he-btn-local-light ol, .he-btn-local-light ul { margin: 0; }
.he-btn-local-light h2, .he-btn-local-light h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-local-light img, .he-btn-local-light svg { display: block; max-width: 100%; }
.he-btn-local-light a { color: inherit; }
.he-btn-local-light :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-local-light { position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 44px;
  padding: 11px 22px;
  border: 1px solid var(--button-border);
  border-radius: var(--button-radius);
  background: var(--button-bg);
  color: var(--button-fg);
  font: inherit;
  font-size: .92rem;
  font-weight: 650;
  letter-spacing: .01em;
  line-height: 1.25;
  text-align: center;
  cursor: pointer;
  isolation: isolate;
  transition: border-color .2s var(--ease), background-color .2s var(--ease); }
.he-btn-local-light:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-local-light:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-local-light:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-local-light .label, .he-btn-local-light .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-local-light .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-local-light .deco { pointer-events: none; }
.he-btn-local-light:disabled .deco { transition: none; }
.he-btn-local-light { --duration: .26s; }
.he-btn-local-light .light {
  will-change: transform; position: absolute;
  left: 50%;
  top: 50%;
  width: 150%;
  height: 120px;
  margin: -60px 0 0 -75%;
  border-radius: 50%;
  background: radial-gradient(closest-side, var(--button-accent-soft), transparent 78%);
  opacity: 0;
  transform: translateX(0);
  transition: opacity var(--duration) var(--ease); }
@media (hover: hover) and (pointer: fine) {
.he-btn-local-light:not(:disabled):hover .light { opacity: 1; }


}
.he-btn-local-light:not(:disabled):focus-visible .light { opacity: 1; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-local-light, .he-btn-local-light *, .he-btn-local-light *::before, .he-btn-local-light *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnLocalLight: HoverEffect = {
  id: "btn-local-light",
  title: "Local Light",
  category: "buttons",
  description: "A broad highlight tracks the pointer within a tight pixel budget; keyboard focus centres it.",
  tags: ["buttons","local","light","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function BtnLocalLight() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const light = button.querySelector(".light") as HTMLElement | null;
    if (!light) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    let frame = 0;
    let live = false;
    let x = 0;

    const measure = () => {
      rect = button.getBoundingClientRect();
    };
    const render = () => {
      frame = 0;
      if (!live || !rect) return;
      const nx = Math.max(-1, Math.min(1, (x / rect.width) * 2 - 1));
      light.style.transform = "translateX(" + (nx * 6).toFixed(2) + "px)";
    };
    const enabled = (event: PointerEvent) =>
      (fineQuery.matches || event.pointerType === "touch") &&
      !reduceQuery.matches &&
      !button.disabled;
    const onMove = (event: PointerEvent) => {
      if (!live) return;
      x = event.clientX - (rect as DOMRect).left;
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
      light.style.transform = "";
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
      <button ref={rootRef} className="he-btn-local-light" type="button">
        <span className="surface" aria-hidden="true">
          <span className="light deco"></span>
        </span>
        <span className="label">Open dashboard</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-local-light" type="button">
        <span class="surface" aria-hidden="true">
          <span class="light deco"></span>
        </span>
        <span class="label">Open dashboard</span>
      </button>
<script>(function(){'use strict';var reduceQuery=matchMedia('(prefers-reduced-motion: reduce)');var fineQuery=matchMedia('(hover: hover) and (pointer: fine)');document.querySelectorAll('.he-btn-local-light').forEach(function(button){var light=button.querySelector('.light');if(!light)return;var rect=null,frame=0,live=false,x=0;function measure(){rect=button.getBoundingClientRect()}function render(){frame=0;if(!live||!rect)return;var nx=Math.max(-1,Math.min(1,(x/rect.width)*2-1));light.style.transform='translateX('+(nx*6).toFixed(2)+'px)'}function enabled(event){return (fineQuery.matches||event.pointerType==='touch')&&!reduceQuery.matches&&!button.disabled}function onMove(event){if(!live)return;x=event.clientX-rect.left;if(!frame)frame=requestAnimationFrame(render)}function onEnter(event){if(!enabled(event))return;measure();live=true;onMove(event)}function reset(){live=false;if(frame){cancelAnimationFrame(frame);frame=0}light.style.transform='';rect=null}button.addEventListener('pointerenter',onEnter);button.addEventListener('pointermove',onMove);button.addEventListener('pointerleave',reset);button.addEventListener('pointercancel',reset);window.addEventListener('resize',reset);window.addEventListener('scroll',reset,true)})})();</script>`,
};
