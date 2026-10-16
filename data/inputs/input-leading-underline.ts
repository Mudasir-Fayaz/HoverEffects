import type { HoverEffect } from "../types";

const css = `.he-input-leading-underline{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-leading-underline, .he-input-leading-underline *, .he-input-leading-underline *::before, .he-input-leading-underline *::after { box-sizing: border-box; }
.he-input-leading-underline h2, .he-input-leading-underline h3, .he-input-leading-underline p, .he-input-leading-underline figure, .he-input-leading-underline ol, .he-input-leading-underline ul { margin: 0; }
.he-input-leading-underline h2, .he-input-leading-underline h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-leading-underline img, .he-input-leading-underline svg { display: block; max-width: 100%; }
.he-input-leading-underline a { color: inherit; }
.he-input-leading-underline :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-leading-underline { max-width: 340px; }
.inp05-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp05-wrap { position: relative; padding-bottom: 3px; }
.inp05-control {
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
.inp05-u {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform .28s var(--ease);
  pointer-events: none;
}
:dir(rtl) .inp05-u { transform-origin: right center; }
@media (hover: hover) and (pointer: fine) {
  .inp05-wrap:hover .inp05-u { transform: scaleX(1); }
}
.inp05-wrap:focus-within .inp05-u { transform: scaleX(1); }
.inp05-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-leading-underline, .he-input-leading-underline *, .he-input-leading-underline *::before, .he-input-leading-underline *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputLeadingUnderline: HoverEffect = {
  id: "input-leading-underline",
  title: "Leading Underline",
  category: "inputs",
  description: "The underline grows from the logical leading edge and mirrors for RTL automatically.",
  tags: ["inputs","leading","underline","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputLeadingUnderline() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-leading-underline">
        <label className="inp05-label" htmlFor="input-leading-underline-inp05-input">Display name</label>
        <div className="inp05-wrap">
          <input className="inp05-control" id="input-leading-underline-inp05-input" type="text" placeholder="Mira Tan" aria-describedby="input-leading-underline-inp05-help" />
          <i className="inp05-u" aria-hidden="true"></i>
        </div>
        <p className="inp05-help" id="input-leading-underline-inp05-help">Shown on comments and mentions.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-leading-underline">
        <label class="inp05-label" for="input-leading-underline-inp05-input">Display name</label>
        <div class="inp05-wrap">
          <input class="inp05-control" id="input-leading-underline-inp05-input" type="text" placeholder="Mira Tan" aria-describedby="input-leading-underline-inp05-help">
          <i class="inp05-u" aria-hidden="true"></i>
        </div>
        <p class="inp05-help" id="input-leading-underline-inp05-help">Shown on comments and mentions.</p>
      </div>`,
};
