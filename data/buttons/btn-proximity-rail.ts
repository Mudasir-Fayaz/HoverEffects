import type { HoverEffect } from "../types";

const css = `.he-btn-proximity-rail{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-proximity-rail, .he-btn-proximity-rail *, .he-btn-proximity-rail *::before, .he-btn-proximity-rail *::after { box-sizing: border-box; }
.he-btn-proximity-rail h2, .he-btn-proximity-rail h3, .he-btn-proximity-rail p, .he-btn-proximity-rail figure, .he-btn-proximity-rail ol, .he-btn-proximity-rail ul { margin: 0; }
.he-btn-proximity-rail h2, .he-btn-proximity-rail h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-proximity-rail img, .he-btn-proximity-rail svg { display: block; max-width: 100%; }
.he-btn-proximity-rail a { color: inherit; }
.he-btn-proximity-rail :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-proximity-rail { position: relative;
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
.he-btn-proximity-rail:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-proximity-rail:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-proximity-rail:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-proximity-rail .label, .he-btn-proximity-rail .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-proximity-rail .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-proximity-rail .deco { pointer-events: none; }
.he-btn-proximity-rail:disabled .deco { transition: none; }
.he-btn-proximity-rail { --duration: .2s; }
.he-btn-proximity-rail .rail { position: absolute;
  left: 16px;
  right: 16px;
  height: 2px;
  border-radius: 2px;
  background: var(--button-accent);
  transition: opacity var(--duration) linear; }
.he-btn-proximity-rail .rail-top { top: 8px; opacity: var(--rail-top, .5); }
.he-btn-proximity-rail .rail-bottom { bottom: 8px; opacity: var(--rail-bottom, .5); }
.he-btn-proximity-rail:not(:disabled):focus-visible .rail-top, .he-btn-proximity-rail:not(:disabled):focus-visible .rail-bottom { opacity: .8; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-proximity-rail, .he-btn-proximity-rail *, .he-btn-proximity-rail *::before, .he-btn-proximity-rail *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnProximityRail: HoverEffect = {
  id: "btn-proximity-rail",
  title: "Proximity Rail",
  category: "buttons",
  description: "Interior rails brighten by pointer proximity with a smooth falloff.",
  tags: ["buttons","proximity","rail","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function BtnProximityRail() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    let frame = 0;
    let live = false;
    let y = 0;

    const measure = () => {
      rect = button.getBoundingClientRect();
    };
    const render = () => {
      frame = 0;
      if (!live || !rect) return;
      const t = Math.max(0, Math.min(1, y / rect.height));
      button.style.setProperty("--rail-top", (0.35 + 0.45 * (1 - t)).toFixed(3));
      button.style.setProperty("--rail-bottom", (0.35 + 0.45 * t).toFixed(3));
    };
    const enabled = () =>
      fineQuery.matches && !reduceQuery.matches && !button.disabled;
    const onMove = (event: PointerEvent) => {
      if (!live) return;
      y = event.clientY - (rect as DOMRect).top;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onEnter = (event: PointerEvent) => {
      if (!enabled() || event.pointerType === "touch") return;
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
      button.style.removeProperty("--rail-top");
      button.style.removeProperty("--rail-bottom");
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
      <button ref={rootRef} className="he-btn-proximity-rail" type="button">
        <span className="surface" aria-hidden="true">
          <span className="rail rail-top deco"></span>
          <span className="rail rail-bottom deco"></span>
        </span>
        <span className="label">Resume session</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-proximity-rail" type="button">
        <span class="surface" aria-hidden="true">
          <span class="rail rail-top deco"></span>
          <span class="rail rail-bottom deco"></span>
        </span>
        <span class="label">Resume session</span>
      </button>
<script>(function(){'use strict';var reduceQuery=matchMedia('(prefers-reduced-motion: reduce)');var fineQuery=matchMedia('(hover: hover) and (pointer: fine)');document.querySelectorAll('.he-btn-proximity-rail').forEach(function(button){var rect=null,frame=0,live=false,y=0;function measure(){rect=button.getBoundingClientRect()}function render(){frame=0;if(!live||!rect)return;var t=Math.max(0,Math.min(1,y/rect.height));button.style.setProperty('--rail-top',(0.35+0.45*(1-t)).toFixed(3));button.style.setProperty('--rail-bottom',(0.35+0.45*t).toFixed(3))}function enabled(){return fineQuery.matches&&!reduceQuery.matches&&!button.disabled}function onMove(event){if(!live)return;y=event.clientY-rect.top;if(!frame)frame=requestAnimationFrame(render)}function onEnter(event){if(!enabled()||event.pointerType==='touch')return;measure();live=true;onMove(event)}function reset(){live=false;if(frame){cancelAnimationFrame(frame);frame=0}button.style.removeProperty('--rail-top');button.style.removeProperty('--rail-bottom');rect=null}button.addEventListener('pointerenter',onEnter);button.addEventListener('pointermove',onMove);button.addEventListener('pointerleave',reset);button.addEventListener('pointercancel',reset);window.addEventListener('resize',reset);window.addEventListener('scroll',reset,true)})})();</script>`,
};
