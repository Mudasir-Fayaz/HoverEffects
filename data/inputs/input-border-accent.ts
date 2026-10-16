import type { HoverEffect } from "../types";

const css = `.he-input-border-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-border-accent, .he-input-border-accent *, .he-input-border-accent *::before, .he-input-border-accent *::after { box-sizing: border-box; }
.he-input-border-accent h2, .he-input-border-accent h3, .he-input-border-accent p, .he-input-border-accent figure, .he-input-border-accent ol, .he-input-border-accent ul { margin: 0; }
.he-input-border-accent h2, .he-input-border-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-border-accent img, .he-input-border-accent svg { display: block; max-width: 100%; }
.he-input-border-accent a { color: inherit; }
.he-input-border-accent :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-border-accent { max-width: 340px; }
.inp01-label {
  display: block;
  margin-bottom: 6px;
  color: var(--text);
  font-size: .8rem;
  font-weight: 650;
}
.inp01-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
  transition: border-color .18s var(--ease);
}
.inp01-control::placeholder { color: var(--text-2); opacity: .8; }
.inp01-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }
@media (hover: hover) and (pointer: fine) {
  .inp01-control:hover { border-color: var(--accent); }
}
.inp01-control:focus-visible { border-color: var(--accent); outline: 2px solid var(--accent); outline-offset: 2px; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-border-accent, .he-input-border-accent *, .he-input-border-accent *::before, .he-input-border-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputBorderAccent: HoverEffect = {
  id: "input-border-accent",
  title: "Border Accent",
  category: "inputs",
  description: "The field border shifts to the accent colour with the same reserved thickness.",
  tags: ["inputs","border","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputBorderAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-border-accent">
        <label className="inp01-label" htmlFor="input-border-accent-inp01-input">Account email</label>
        <div className="inp01-wrap">
          <input className="inp01-control" id="input-border-accent-inp01-input" type="email" placeholder="name@company.com" aria-describedby="input-border-accent-inp01-help" />
        </div>
        <p className="inp01-help" id="input-border-accent-inp01-help">We send the verification link to this address.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-border-accent">
        <label class="inp01-label" for="input-border-accent-inp01-input">Account email</label>
        <div class="inp01-wrap">
          <input class="inp01-control" id="input-border-accent-inp01-input" type="email" placeholder="name@company.com" aria-describedby="input-border-accent-inp01-help">
        </div>
        <p class="inp01-help" id="input-border-accent-inp01-help">We send the verification link to this address.</p>
      </div>`,
};
