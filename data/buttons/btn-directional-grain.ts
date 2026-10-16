import type { HoverEffect } from "../types";

const css = `.he-btn-directional-grain{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-directional-grain, .he-btn-directional-grain *, .he-btn-directional-grain *::before, .he-btn-directional-grain *::after { box-sizing: border-box; }
.he-btn-directional-grain h2, .he-btn-directional-grain h3, .he-btn-directional-grain p, .he-btn-directional-grain figure, .he-btn-directional-grain ol, .he-btn-directional-grain ul { margin: 0; }
.he-btn-directional-grain h2, .he-btn-directional-grain h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-directional-grain img, .he-btn-directional-grain svg { display: block; max-width: 100%; }
.he-btn-directional-grain a { color: inherit; }
.he-btn-directional-grain :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-directional-grain { position: relative;
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
.he-btn-directional-grain:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-directional-grain:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-directional-grain:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-directional-grain .label, .he-btn-directional-grain .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-directional-grain .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-directional-grain .deco { pointer-events: none; }
.he-btn-directional-grain:disabled .deco { transition: none; }
.he-btn-directional-grain { --duration: .3s; }
.he-btn-directional-grain .grain {
  will-change: transform; position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--button-accent) 0.5px, transparent 0.8px);
  background-size: 4px 4px;
  opacity: .14;
  transition: opacity .26s var(--ease), transform var(--duration) var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
.he-btn-directional-grain:not(:disabled):hover .grain { opacity: .24; }


}
.he-btn-directional-grain:not(:disabled):focus-visible .grain { opacity: .24; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-directional-grain, .he-btn-directional-grain *, .he-btn-directional-grain *::before, .he-btn-directional-grain *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnDirectionalGrain: HoverEffect = {
  id: "btn-directional-grain",
  title: "Directional Grain",
  category: "buttons",
  description: "The pointer's entry edge picks a two-pixel grain settle that eases back to rest.",
  tags: ["buttons","directional","grain","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function BtnDirectionalGrain() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const grain = button.querySelector(".grain") as HTMLElement | null;
    if (!grain) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const OFFSETS: Record<string, string> = {
      top: "translateY(2px)",
      bottom: "translateY(-2px)",
      left: "translateX(2px)",
      right: "translateX(-2px)",
    };

    const enabled = (event: PointerEvent) =>
      (fineQuery.matches || event.pointerType === "touch") &&
      !reduceQuery.matches &&
      !button.disabled;
    const onEnter = (event: PointerEvent) => {
      if (!enabled(event)) return;
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const d: Record<string, number> = {
        top: y,
        right: rect.width - x,
        bottom: rect.height - y,
        left: x,
      };
      let nearest = "top";
      for (const key of Object.keys(d)) {
        if (d[key] < d[nearest]) nearest = key;
      }
      grain.style.transition = "none";
      grain.style.transform = OFFSETS[nearest];
      void grain.offsetWidth;
      grain.style.transition = "";
      grain.style.transform = "";
    };
    const reset = () => {
      grain.style.transition = "";
      grain.style.transform = "";
    };
    button.addEventListener("pointerenter", onEnter);
    button.addEventListener("pointerleave", reset);
    button.addEventListener("pointercancel", reset);
    return () => {
      button.removeEventListener("pointerenter", onEnter);
      button.removeEventListener("pointerleave", reset);
      button.removeEventListener("pointercancel", reset);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <button ref={rootRef} className="he-btn-directional-grain" type="button">
        <span className="surface" aria-hidden="true">
          <span className="grain deco"></span>
        </span>
        <span className="label">Apply theme</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-directional-grain" type="button">
        <span class="surface" aria-hidden="true">
          <span class="grain deco"></span>
        </span>
        <span class="label">Apply theme</span>
      </button>
<script>(function(){'use strict';var reduceQuery=matchMedia('(prefers-reduced-motion: reduce)');var fineQuery=matchMedia('(hover: hover) and (pointer: fine)');var OFFSETS={top:'translateY(2px)',bottom:'translateY(-2px)',left:'translateX(2px)',right:'translateX(-2px)'};document.querySelectorAll('.he-btn-directional-grain').forEach(function(button){var grain=button.querySelector('.grain');if(!grain)return;function enabled(event){return (fineQuery.matches||event.pointerType==='touch')&&!reduceQuery.matches&&!button.disabled}function onEnter(event){if(!enabled(event))return;var rect=button.getBoundingClientRect();var x=event.clientX-rect.left,y=event.clientY-rect.top;var d={top:y,right:rect.width-x,bottom:rect.height-y,left:x};var nearest='top';for(var key in d){if(d[key]<d[nearest])nearest=key}grain.style.transition='none';grain.style.transform=OFFSETS[nearest];void grain.offsetWidth;grain.style.transition='';grain.style.transform=''}function reset(){grain.style.transition='';grain.style.transform=''}button.addEventListener('pointerenter',onEnter);button.addEventListener('pointerleave',reset);button.addEventListener('pointercancel',reset)})})();</script>`,
};
