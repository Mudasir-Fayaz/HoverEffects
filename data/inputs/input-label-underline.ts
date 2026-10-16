import type { HoverEffect } from "../types";

const css = `.he-input-label-underline{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-label-underline, .he-input-label-underline *, .he-input-label-underline *::before, .he-input-label-underline *::after { box-sizing: border-box; }
.he-input-label-underline h2, .he-input-label-underline h3, .he-input-label-underline p, .he-input-label-underline figure, .he-input-label-underline ol, .he-input-label-underline ul { margin: 0; }
.he-input-label-underline h2, .he-input-label-underline h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-label-underline img, .he-input-label-underline svg { display: block; max-width: 100%; }
.he-input-label-underline a { color: inherit; }
.he-input-label-underline :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-label-underline { max-width: 340px; }
.inp18-label {
  position: relative;
  display: inline-block;
  margin-bottom: 8px;
  padding-bottom: 3px;
  color: var(--text);
  font-size: .8rem;
  font-weight: 650;
}
.inp18-u {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1.5px;
  border-radius: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform .24s var(--ease);
}
:dir(rtl) .inp18-u { transform-origin: right center; }
.inp18-wrap { position: relative; }
.inp18-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
@media (hover: hover) and (pointer: fine) {
  .inp18-wrap:hover .inp18-u { transform: scaleX(1); }
}
.inp18-wrap:focus-within .inp18-u { transform: scaleX(1); }
.inp18-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-label-underline, .he-input-label-underline *, .he-input-label-underline *::before, .he-input-label-underline *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputLabelUnderline: HoverEffect = {
  id: "input-label-underline",
  title: "Label Underline",
  category: "inputs",
  description: "A fine underline highlights the label without moving it and without a floating-label jump.",
  tags: ["inputs","label","underline","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputLabelUnderline() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-label-underline">
        <label className="inp18-label" htmlFor="input-label-underline-inp18-input">Billing address<i className="inp18-u" aria-hidden="true"></i></label>
        <div className="inp18-wrap">
          <input className="inp18-control" id="input-label-underline-inp18-input" type="text" placeholder="221B Baker Street" aria-describedby="input-label-underline-inp18-help" />
        </div>
        <p className="inp18-help" id="input-label-underline-inp18-help">Appears on invoices and receipts.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-label-underline">
        <label class="inp18-label" for="input-label-underline-inp18-input">Billing address<i class="inp18-u" aria-hidden="true"></i></label>
        <div class="inp18-wrap">
          <input class="inp18-control" id="input-label-underline-inp18-input" type="text" placeholder="221B Baker Street" aria-describedby="input-label-underline-inp18-help">
        </div>
        <p class="inp18-help" id="input-label-underline-inp18-help">Appears on invoices and receipts.</p>
      </div>`,
};
