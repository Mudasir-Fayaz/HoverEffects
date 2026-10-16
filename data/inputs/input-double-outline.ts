import type { HoverEffect } from "../types";

const css = `.he-input-double-outline{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-double-outline, .he-input-double-outline *, .he-input-double-outline *::before, .he-input-double-outline *::after { box-sizing: border-box; }
.he-input-double-outline h2, .he-input-double-outline h3, .he-input-double-outline p, .he-input-double-outline figure, .he-input-double-outline ol, .he-input-double-outline ul { margin: 0; }
.he-input-double-outline h2, .he-input-double-outline h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-double-outline img, .he-input-double-outline svg { display: block; max-width: 100%; }
.he-input-double-outline a { color: inherit; }
.he-input-double-outline :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-double-outline { max-width: 340px; }
.inp03-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp03-wrap { position: relative; }
.inp03-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp03-wrap::after {
  content: "";
  position: absolute;
  inset: -5px;
  border: 1.5px dashed var(--accent-2);
  border-radius: 12px;
  opacity: 0;
  transition: opacity .22s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .inp03-wrap:hover::after { opacity: .9; }
}
.inp03-wrap:focus-within::after { opacity: .9; }
.inp03-help { margin-top: 8px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-double-outline, .he-input-double-outline *, .he-input-double-outline *::before, .he-input-double-outline *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputDoubleOutline: HoverEffect = {
  id: "input-double-outline",
  title: "Double Outline",
  category: "inputs",
  description: "A second outline fades in outside the stable field border, preserving the focus ring.",
  tags: ["inputs","double","outline","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputDoubleOutline() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-double-outline">
        <label className="inp03-label" htmlFor="input-double-outline-inp03-input">Project key</label>
        <div className="inp03-wrap">
          <input className="inp03-control" id="input-double-outline-inp03-input" type="text" placeholder="PROJ" aria-describedby="input-double-outline-inp03-help" />
        </div>
        <p className="inp03-help" id="input-double-outline-inp03-help">Used as the prefix for every issue.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-double-outline">
        <label class="inp03-label" for="input-double-outline-inp03-input">Project key</label>
        <div class="inp03-wrap">
          <input class="inp03-control" id="input-double-outline-inp03-input" type="text" placeholder="PROJ" aria-describedby="input-double-outline-inp03-help">
        </div>
        <p class="inp03-help" id="input-double-outline-inp03-help">Used as the prefix for every issue.</p>
      </div>`,
};
