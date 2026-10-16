import type { HoverEffect } from "../types";

const css = `.he-input-icon-stroke{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-icon-stroke, .he-input-icon-stroke *, .he-input-icon-stroke *::before, .he-input-icon-stroke *::after { box-sizing: border-box; }
.he-input-icon-stroke h2, .he-input-icon-stroke h3, .he-input-icon-stroke p, .he-input-icon-stroke figure, .he-input-icon-stroke ol, .he-input-icon-stroke ul { margin: 0; }
.he-input-icon-stroke h2, .he-input-icon-stroke h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-icon-stroke img, .he-input-icon-stroke svg { display: block; max-width: 100%; }
.he-input-icon-stroke a { color: inherit; }
.he-input-icon-stroke :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-icon-stroke { max-width: 360px; }
.inp21-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp21-wrap { position: relative; }
.inp21-icon {
  position: absolute;
  left: 11px;
  top: 50%;
  translate: 0 -50%;
  color: var(--text-2);
  pointer-events: none;
}
.inp21-draw {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset .45s var(--ease-out);
}
.inp21-control {
  width: 100%;
  padding: 10px 12px 10px 36px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
@media (hover: hover) and (pointer: fine) {
  .inp21-wrap:hover .inp21-draw { stroke-dashoffset: 0; }
}
.inp21-wrap:focus-within .inp21-draw { stroke-dashoffset: 0; }
.inp21-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-icon-stroke, .he-input-icon-stroke *, .he-input-icon-stroke *::before, .he-input-icon-stroke *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputIconStroke: HoverEffect = {
  id: "input-icon-stroke",
  title: "Icon Stroke",
  category: "inputs",
  description: "An accent path traces over the visible leading icon without blocking clicks into the field.",
  tags: ["inputs","icon","stroke","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputIconStroke() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-icon-stroke">
        <label className="inp21-label" htmlFor="input-icon-stroke-inp21-input">Search docs</label>
        <div className="inp21-wrap">
          <span className="inp21-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.5" opacity=".5" /><path d="m10.6 10.6 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".5" /><path className="inp21-draw" d="M7 2.4a4.6 4.6 0 0 1 4.6 4.6" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" /></svg>
          </span>
          <input className="inp21-control" id="input-icon-stroke-inp21-input" type="search" placeholder="Component, token, pattern…" aria-describedby="input-icon-stroke-inp21-help" />
        </div>
        <p className="inp21-help" id="input-icon-stroke-inp21-help">Searches the internal handbook.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-icon-stroke">
        <label class="inp21-label" for="input-icon-stroke-inp21-input">Search docs</label>
        <div class="inp21-wrap">
          <span class="inp21-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.6" stroke="currentColor" stroke-width="1.5" opacity=".5"/><path d="m10.6 10.6 3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/><path class="inp21-draw" d="M7 2.4a4.6 4.6 0 0 1 4.6 4.6" pathLength="100" stroke="var(--accent)" stroke-width="1.7" stroke-linecap="round"/></svg>
          </span>
          <input class="inp21-control" id="input-icon-stroke-inp21-input" type="search" placeholder="Component, token, pattern…" aria-describedby="input-icon-stroke-inp21-help">
        </div>
        <p class="inp21-help" id="input-icon-stroke-inp21-help">Searches the internal handbook.</p>
      </div>`,
};
