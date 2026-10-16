import type { HoverEffect } from "../types";

const css = `.he-input-gradient-rim{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-gradient-rim, .he-input-gradient-rim *, .he-input-gradient-rim *::before, .he-input-gradient-rim *::after { box-sizing: border-box; }
.he-input-gradient-rim h2, .he-input-gradient-rim h3, .he-input-gradient-rim p, .he-input-gradient-rim figure, .he-input-gradient-rim ol, .he-input-gradient-rim ul { margin: 0; }
.he-input-gradient-rim h2, .he-input-gradient-rim h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-gradient-rim img, .he-input-gradient-rim svg { display: block; max-width: 100%; }
.he-input-gradient-rim a { color: inherit; }
.he-input-gradient-rim :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-gradient-rim { max-width: 340px; }
.inp11-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp11-wrap {
  position: relative;
  padding: 1px;
  border-radius: var(--radius-sm);
  background: var(--line-strong);
}
.inp11-rim {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(120deg, var(--accent-2), var(--accent));
  opacity: 0;
  transition: opacity .26s var(--ease);
  pointer-events: none;
}
.inp11-control {
  position: relative;
  width: 100%;
  padding: 9px 11px;
  border: 0;
  border-radius: calc(var(--radius-sm) - 1px);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
@media (hover: hover) and (pointer: fine) {
  .inp11-wrap:hover .inp11-rim { opacity: 1; }
}
.inp11-wrap:focus-within .inp11-rim { opacity: 1; }
.inp11-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-gradient-rim, .he-input-gradient-rim *, .he-input-gradient-rim *::before, .he-input-gradient-rim *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputGradientRim: HoverEffect = {
  id: "input-gradient-rim",
  title: "Gradient Rim",
  category: "inputs",
  description: "A muted gradient border fades in around a solid input surface, preserving text contrast.",
  tags: ["inputs","gradient","rim","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputGradientRim() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-gradient-rim">
        <label className="inp11-label" htmlFor="input-gradient-rim-inp11-input">Workspace domain</label>
        <div className="inp11-wrap">
          <input className="inp11-control" id="input-gradient-rim-inp11-input" type="text" placeholder="northwind.app" aria-describedby="input-gradient-rim-inp11-help" />
          <i className="inp11-rim" aria-hidden="true"></i>
        </div>
        <p className="inp11-help" id="input-gradient-rim-inp11-help">Custom domains require a paid plan.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-gradient-rim">
        <label class="inp11-label" for="input-gradient-rim-inp11-input">Workspace domain</label>
        <div class="inp11-wrap">
          <input class="inp11-control" id="input-gradient-rim-inp11-input" type="text" placeholder="northwind.app" aria-describedby="input-gradient-rim-inp11-help">
          <i class="inp11-rim" aria-hidden="true"></i>
        </div>
        <p class="inp11-help" id="input-gradient-rim-inp11-help">Custom domains require a paid plan.</p>
      </div>`,
};
