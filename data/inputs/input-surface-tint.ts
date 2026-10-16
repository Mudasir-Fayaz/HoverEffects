import type { HoverEffect } from "../types";

const css = `.he-input-surface-tint{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-surface-tint, .he-input-surface-tint *, .he-input-surface-tint *::before, .he-input-surface-tint *::after { box-sizing: border-box; }
.he-input-surface-tint h2, .he-input-surface-tint h3, .he-input-surface-tint p, .he-input-surface-tint figure, .he-input-surface-tint ol, .he-input-surface-tint ul { margin: 0; }
.he-input-surface-tint h2, .he-input-surface-tint h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-surface-tint img, .he-input-surface-tint svg { display: block; max-width: 100%; }
.he-input-surface-tint a { color: inherit; }
.he-input-surface-tint :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-surface-tint { max-width: 340px; }
.inp12-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp12-wrap { position: relative; }
.inp12-wrap::before {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: 11px;
  background: var(--accent-soft);
  opacity: 0;
  transition: opacity .24s var(--ease);
  pointer-events: none;
}
.inp12-control {
  position: relative;
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
  .inp12-wrap:hover::before { opacity: 1; }
}
.inp12-wrap:focus-within::before { opacity: 1; }
.inp12-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-surface-tint, .he-input-surface-tint *, .he-input-surface-tint *::before, .he-input-surface-tint *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputSurfaceTint: HoverEffect = {
  id: "input-surface-tint",
  title: "Surface Tint",
  category: "inputs",
  description: "A faint tint appears behind the field’s content without recolouring the input text.",
  tags: ["inputs","surface","tint","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputSurfaceTint() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-surface-tint">
        <label className="inp12-label" htmlFor="input-surface-tint-inp12-input">Internal note</label>
        <div className="inp12-wrap">
          <input className="inp12-control" id="input-surface-tint-inp12-input" type="text" placeholder="Add context for reviewers" aria-describedby="input-surface-tint-inp12-help" />
        </div>
        <p className="inp12-help" id="input-surface-tint-inp12-help">Visible to your team only.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-surface-tint">
        <label class="inp12-label" for="input-surface-tint-inp12-input">Internal note</label>
        <div class="inp12-wrap">
          <input class="inp12-control" id="input-surface-tint-inp12-input" type="text" placeholder="Add context for reviewers" aria-describedby="input-surface-tint-inp12-help">
        </div>
        <p class="inp12-help" id="input-surface-tint-inp12-help">Visible to your team only.</p>
      </div>`,
};
