import type { HoverEffect } from "../types";

const css = `.he-icon-directional-detail-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-directional-detail-accent, .he-icon-directional-detail-accent *, .he-icon-directional-detail-accent *::before, .he-icon-directional-detail-accent *::after { box-sizing: border-box; }
.he-icon-directional-detail-accent h2, .he-icon-directional-detail-accent h3, .he-icon-directional-detail-accent p, .he-icon-directional-detail-accent figure, .he-icon-directional-detail-accent ol, .he-icon-directional-detail-accent ul { margin: 0; }
.he-icon-directional-detail-accent img, .he-icon-directional-detail-accent svg { display: block; max-width: 100%; }
.he-icon-directional-detail-accent a { color: inherit; }
.he-icon-directional-detail-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-directional-detail-accent {
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
.he-icon-directional-detail-accent:hover { border-color: var(--accent-2); }
.he-icon-directional-detail-accent:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-directional-detail-accent:active { border-color: var(--accent); }
.hi34-icon { display: block; }
.hi34-r { transition: stroke .18s var(--ease); }
.he-icon-directional-detail-accent[data-region="top"] .hi34-tl,
.he-icon-directional-detail-accent[data-region="top"] .hi34-tr,
.he-icon-directional-detail-accent[data-region="bottom"] .hi34-bl,
.he-icon-directional-detail-accent[data-region="bottom"] .hi34-br,
.he-icon-directional-detail-accent[data-region="left"] .hi34-tl,
.he-icon-directional-detail-accent[data-region="left"] .hi34-bl,
.he-icon-directional-detail-accent[data-region="right"] .hi34-tr,
.he-icon-directional-detail-accent[data-region="right"] .hi34-br { stroke: var(--accent); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-directional-detail-accent, .he-icon-directional-detail-accent *, .he-icon-directional-detail-accent *::before, .he-icon-directional-detail-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconDirectionalDetailAccent: HoverEffect = {
  id: "icon-directional-detail-accent",
  title: "Directional Detail Accent",
  category: "icons",
  description: "Entry edge picks one internal region",
  tags: ["icons","directional","detail","accent","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function IconDirectionalDetailAccent() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    const enabled = (event: PointerEvent) =>
      (fineQuery.matches || event.pointerType === "touch") &&
      !reduceQuery.matches &&
      !button.disabled;
    const onEnter = (event: PointerEvent) => {
      if (!enabled(event)) return;
      rect = button.getBoundingClientRect();
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
      button.setAttribute("data-region", nearest);
    };
    const reset = () => {
      rect = null;
      button.removeAttribute("data-region");
    };
    const onFocusIn = () => {
      button.setAttribute("data-region", "top");
    };
    const onFocusOut = () => {
      button.removeAttribute("data-region");
    };
    button.addEventListener("pointerenter", onEnter);
    button.addEventListener("pointerleave", reset);
    button.addEventListener("pointercancel", reset);
    button.addEventListener("focusin", onFocusIn);
    button.addEventListener("focusout", onFocusOut);
    window.addEventListener("resize", reset);
    return () => {
      button.removeEventListener("pointerenter", onEnter);
      button.removeEventListener("pointerleave", reset);
      button.removeEventListener("pointercancel", reset);
      button.removeEventListener("focusin", onFocusIn);
      button.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("resize", reset);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <button ref={rootRef} className="he-icon-directional-detail-accent" type="button">
        <svg className="hi34-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="9" y="9" width="6" height="6" rx="1.4" stroke="var(--text-2)" strokeWidth="1.6" />
          <path className="hi34-r hi34-tl" d="M4.6 7.8V4.6h3.2" stroke="var(--line-strong)" strokeWidth="1.6" strokeLinecap="round" />
          <path className="hi34-r hi34-tr" d="M16.2 4.6h3.2v3.2" stroke="var(--line-strong)" strokeWidth="1.6" strokeLinecap="round" />
          <path className="hi34-r hi34-br" d="M19.4 16.2v3.2h-3.2" stroke="var(--line-strong)" strokeWidth="1.6" strokeLinecap="round" />
          <path className="hi34-r hi34-bl" d="M7.8 19.4H4.6v-3.2" stroke="var(--line-strong)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-directional-detail-accent" type="button">
        <svg class="hi34-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="9" y="9" width="6" height="6" rx="1.4" stroke="var(--text-2)" stroke-width="1.6"/>
          <path class="hi34-r hi34-tl" d="M4.6 7.8V4.6h3.2" stroke="var(--line-strong)" stroke-width="1.6" stroke-linecap="round"/>
          <path class="hi34-r hi34-tr" d="M16.2 4.6h3.2v3.2" stroke="var(--line-strong)" stroke-width="1.6" stroke-linecap="round"/>
          <path class="hi34-r hi34-br" d="M19.4 16.2v3.2h-3.2" stroke="var(--line-strong)" stroke-width="1.6" stroke-linecap="round"/>
          <path class="hi34-r hi34-bl" d="M7.8 19.4H4.6v-3.2" stroke="var(--line-strong)" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      </button>
<script>(function(){'use strict';var reduceQuery=matchMedia('(prefers-reduced-motion: reduce)'),fineQuery=matchMedia('(hover: hover) and (pointer: fine)');document.querySelectorAll('.he-icon-directional-detail-accent').forEach(function(button){var rect=null;function enabled(event){return (fineQuery.matches||event.pointerType==='touch')&&!reduceQuery.matches}function onEnter(event){if(!enabled(event))return;rect=button.getBoundingClientRect();var x=event.clientX-rect.left,y=event.clientY-rect.top,d={top:y,right:rect.width-x,bottom:rect.height-y,left:x},nearest='top';for(var key in d){if(d[key]<d[nearest])nearest=key}button.setAttribute('data-region',nearest)}function reset(){rect=null;button.removeAttribute('data-region')}button.addEventListener('pointerenter',onEnter);button.addEventListener('pointerleave',reset);button.addEventListener('pointercancel',reset);button.addEventListener('focusin',function(){button.setAttribute('data-region','top')});button.addEventListener('focusout',function(){button.removeAttribute('data-region')});window.addEventListener('resize',reset)})})();</script>`,
};
