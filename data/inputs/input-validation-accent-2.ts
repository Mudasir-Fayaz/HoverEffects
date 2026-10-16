import type { HoverEffect } from "../types";

const css = `.he-input-validation-accent-2{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-validation-accent-2, .he-input-validation-accent-2 *, .he-input-validation-accent-2 *::before, .he-input-validation-accent-2 *::after { box-sizing: border-box; }
.he-input-validation-accent-2 h2, .he-input-validation-accent-2 h3, .he-input-validation-accent-2 p, .he-input-validation-accent-2 figure, .he-input-validation-accent-2 ol, .he-input-validation-accent-2 ul { margin: 0; }
.he-input-validation-accent-2 h2, .he-input-validation-accent-2 h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-validation-accent-2 img, .he-input-validation-accent-2 svg { display: block; max-width: 100%; }
.he-input-validation-accent-2 a { color: inherit; }
.he-input-validation-accent-2 :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-validation-accent-2 { max-width: 380px; }
.inp27-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp27-label-gap { margin-top: 16px; }
.inp27-wrap { position: relative; }
.inp27-control {
  width: 100%;
  padding: 10px 38px 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp27-mark {
  position: absolute;
  right: 11px;
  top: 50%;
  translate: 0 -50%;
  pointer-events: none;
}
.inp27-wrap-bad .inp27-control { border-color: color-mix(in srgb, var(--danger) 55%, var(--line-strong)); }
.inp27-wrap-bad .inp27-mark { color: var(--danger); }
.inp27-wrap-good .inp27-control { border-color: color-mix(in srgb, var(--accent) 55%, var(--line-strong)); }
.inp27-wrap-good .inp27-mark { color: var(--accent); }
.inp27-msg { margin-top: 6px; color: var(--text-2); font-size: .76rem; }
.inp27-wrap-bad ~ .inp27-msg { color: var(--danger); }
@media (hover: hover) and (pointer: fine) {
  .inp27-wrap-bad:hover .inp27-control { border-color: var(--danger); }
  .inp27-wrap-good:hover .inp27-control { border-color: var(--accent); }
}
.inp27-wrap:focus-within .inp27-control { border-color: var(--accent); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-validation-accent-2, .he-input-validation-accent-2 *, .he-input-validation-accent-2 *::before, .he-input-validation-accent-2 *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputValidationAccent2: HoverEffect = {
  id: "input-validation-accent-2",
  title: "Validation Accent",
  category: "inputs",
  description: "Hover strengthens the field’s existing truthful validation state — the demo pairs an invalid field with a valid one.",
  tags: ["inputs","validation","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputValidationAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-validation-accent-2">
        <label className="inp27-label" htmlFor="input-validation-accent-2-inp27-bad">Work email</label>
        <div className="inp27-wrap inp27-wrap-bad">
          <input className="inp27-control" id="input-validation-accent-2-inp27-bad" type="email" defaultValue="mira@" aria-invalid="true" aria-describedby="input-validation-accent-2-inp27-bad-msg" />
          <svg className="inp27-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M8 5.2v3.4M8 10.9h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </div>
        <p className="inp27-msg" id="input-validation-accent-2-inp27-bad-msg">This address is incomplete — add the domain, e.g. mira@studio.com.</p>

        <label className="inp27-label inp27-label-gap" htmlFor="input-validation-accent-2-inp27-good">Backup email</label>
        <div className="inp27-wrap inp27-wrap-good">
          <input className="inp27-control" id="input-validation-accent-2-inp27-good" type="email" defaultValue="mira@studio.com" aria-describedby="input-validation-accent-2-inp27-good-msg" />
          <svg className="inp27-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="m5.4 8.2 1.8 1.8 3.4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <p className="inp27-msg" id="input-validation-accent-2-inp27-good-msg">Address looks complete.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-validation-accent-2">
        <label class="inp27-label" for="input-validation-accent-2-inp27-bad">Work email</label>
        <div class="inp27-wrap inp27-wrap-bad">
          <input class="inp27-control" id="input-validation-accent-2-inp27-bad" type="email" value="mira@" aria-invalid="true" aria-describedby="input-validation-accent-2-inp27-bad-msg">
          <svg class="inp27-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M8 5.2v3.4M8 10.9h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <p class="inp27-msg" id="input-validation-accent-2-inp27-bad-msg">This address is incomplete — add the domain, e.g. mira@studio.com.</p>

        <label class="inp27-label inp27-label-gap" for="input-validation-accent-2-inp27-good">Backup email</label>
        <div class="inp27-wrap inp27-wrap-good">
          <input class="inp27-control" id="input-validation-accent-2-inp27-good" type="email" value="mira@studio.com" aria-describedby="input-validation-accent-2-inp27-good-msg">
          <svg class="inp27-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="m5.4 8.2 1.8 1.8 3.4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <p class="inp27-msg" id="input-validation-accent-2-inp27-good-msg">Address looks complete.</p>
      </div>`,
};
