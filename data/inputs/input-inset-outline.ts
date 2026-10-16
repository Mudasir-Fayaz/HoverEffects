import type { HoverEffect } from "../types";

const css = `.he-input-inset-outline{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-inset-outline, .he-input-inset-outline *, .he-input-inset-outline *::before, .he-input-inset-outline *::after { box-sizing: border-box; }
.he-input-inset-outline h2, .he-input-inset-outline h3, .he-input-inset-outline p, .he-input-inset-outline figure, .he-input-inset-outline ol, .he-input-inset-outline ul { margin: 0; }
.he-input-inset-outline h2, .he-input-inset-outline h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-inset-outline img, .he-input-inset-outline svg { display: block; max-width: 100%; }
.he-input-inset-outline a { color: inherit; }
.he-input-inset-outline :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-inset-outline { max-width: 340px; }
.inp02-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp02-wrap { position: relative; }
.inp02-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp02-inset {
  position: absolute;
  inset: 3px;
  border: 1px solid var(--accent-2);
  border-radius: 6px;
  opacity: 0;
  transition: opacity .22s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .inp02-wrap:hover .inp02-inset { opacity: 1; }
}
.inp02-wrap:focus-within .inp02-inset { opacity: 1; border-color: var(--accent); }
.inp02-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-inset-outline, .he-input-inset-outline *, .he-input-inset-outline *::before, .he-input-inset-outline *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputInsetOutline: HoverEffect = {
  id: "input-inset-outline",
  title: "Inset Outline",
  category: "inputs",
  description: "A thin inner frame fades in around the control, clear of the text and caret.",
  tags: ["inputs","inset","outline","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputInsetOutline() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-inset-outline">
        <label className="inp02-label" htmlFor="input-inset-outline-inp02-input">Workspace name</label>
        <div className="inp02-wrap">
          <input className="inp02-control" id="input-inset-outline-inp02-input" type="text" placeholder="northwind" aria-describedby="input-inset-outline-inp02-help" />
          <i className="inp02-inset" aria-hidden="true"></i>
        </div>
        <p className="inp02-help" id="input-inset-outline-inp02-help">Lowercase letters and hyphens only.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-inset-outline">
        <label class="inp02-label" for="input-inset-outline-inp02-input">Workspace name</label>
        <div class="inp02-wrap">
          <input class="inp02-control" id="input-inset-outline-inp02-input" type="text" placeholder="northwind" aria-describedby="input-inset-outline-inp02-help">
          <i class="inp02-inset" aria-hidden="true"></i>
        </div>
        <p class="inp02-help" id="input-inset-outline-inp02-help">Lowercase letters and hyphens only.</p>
      </div>`,
};
