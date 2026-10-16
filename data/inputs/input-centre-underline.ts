import type { HoverEffect } from "../types";

const css = `.he-input-centre-underline{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-centre-underline, .he-input-centre-underline *, .he-input-centre-underline *::before, .he-input-centre-underline *::after { box-sizing: border-box; }
.he-input-centre-underline h2, .he-input-centre-underline h3, .he-input-centre-underline p, .he-input-centre-underline figure, .he-input-centre-underline ol, .he-input-centre-underline ul { margin: 0; }
.he-input-centre-underline h2, .he-input-centre-underline h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-centre-underline img, .he-input-centre-underline svg { display: block; max-width: 100%; }
.he-input-centre-underline a { color: inherit; }
.he-input-centre-underline :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-centre-underline { max-width: 340px; }
.inp04-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp04-wrap { position: relative; padding-bottom: 3px; }
.inp04-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-bottom-color: var(--line-strong);
  border-radius: 8px 8px 0 0;
  background: var(--surface-2);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp04-u {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .28s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .inp04-wrap:hover .inp04-u { transform: scaleX(1); }
}
.inp04-wrap:focus-within .inp04-u { transform: scaleX(1); }
.inp04-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-centre-underline, .he-input-centre-underline *, .he-input-centre-underline *::before, .he-input-centre-underline *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputCentreUnderline: HoverEffect = {
  id: "input-centre-underline",
  title: "Centre Underline",
  category: "inputs",
  description: "An underline grows from the centre beneath the field, with native dimensions untouched.",
  tags: ["inputs","centre","underline","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputCentreUnderline() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-centre-underline">
        <label className="inp04-label" htmlFor="input-centre-underline-inp04-input">Search terms</label>
        <div className="inp04-wrap">
          <input className="inp04-control" id="input-centre-underline-inp04-input" type="text" placeholder="glaze recipes" aria-describedby="input-centre-underline-inp04-help" />
          <i className="inp04-u" aria-hidden="true"></i>
        </div>
        <p className="inp04-help" id="input-centre-underline-inp04-help">Matches titles, notes and tags.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-centre-underline">
        <label class="inp04-label" for="input-centre-underline-inp04-input">Search terms</label>
        <div class="inp04-wrap">
          <input class="inp04-control" id="input-centre-underline-inp04-input" type="text" placeholder="glaze recipes" aria-describedby="input-centre-underline-inp04-help">
          <i class="inp04-u" aria-hidden="true"></i>
        </div>
        <p class="inp04-help" id="input-centre-underline-inp04-help">Matches titles, notes and tags.</p>
      </div>`,
};
