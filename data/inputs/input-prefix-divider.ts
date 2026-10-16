import type { HoverEffect } from "../types";

const css = `.he-input-prefix-divider{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-prefix-divider, .he-input-prefix-divider *, .he-input-prefix-divider *::before, .he-input-prefix-divider *::after { box-sizing: border-box; }
.he-input-prefix-divider h2, .he-input-prefix-divider h3, .he-input-prefix-divider p, .he-input-prefix-divider figure, .he-input-prefix-divider ol, .he-input-prefix-divider ul { margin: 0; }
.he-input-prefix-divider h2, .he-input-prefix-divider h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-prefix-divider img, .he-input-prefix-divider svg { display: block; max-width: 100%; }
.he-input-prefix-divider a { color: inherit; }
.he-input-prefix-divider :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-prefix-divider { max-width: 340px; }
.inp23-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp23-wrap {
  display: flex;
  align-items: center;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
}
.inp23-prefix {
  display: grid;
  place-items: center;
  width: 34px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 700;
}
.inp23-div {
  width: 1px;
  height: 14px;
  background: var(--line-strong);
  transform: scaleY(.45);
  transition: transform .22s var(--ease), background-color .22s var(--ease);
}
.inp23-control {
  flex: 1;
  min-width: 0;
  padding: 10px 12px;
  border: 0;
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: .9rem;
  font-variant-numeric: tabular-nums;
}
@media (hover: hover) and (pointer: fine) {
  .inp23-wrap:hover .inp23-div { transform: scaleY(1); background: var(--accent); }
}
.inp23-wrap:focus-within .inp23-div { transform: scaleY(1); background: var(--accent); }
.inp23-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-prefix-divider, .he-input-prefix-divider *, .he-input-prefix-divider *::before, .he-input-prefix-divider *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputPrefixDivider: HoverEffect = {
  id: "input-prefix-divider",
  title: "Prefix Divider",
  category: "inputs",
  description: "A divider between the currency prefix and the input extends within a reserved fixed slot.",
  tags: ["inputs","prefix","divider","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputPrefixDivider() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-prefix-divider">
        <label className="inp23-label" htmlFor="input-prefix-divider-inp23-input">Monthly budget</label>
        <div className="inp23-wrap">
          <span className="inp23-prefix" aria-hidden="true">£</span>
          <i className="inp23-div" aria-hidden="true"></i>
          <input className="inp23-control" id="input-prefix-divider-inp23-input" type="text" inputMode="decimal" placeholder="0.00" aria-describedby="input-prefix-divider-inp23-help" />
        </div>
        <p className="inp23-help" id="input-prefix-divider-inp23-help">Hard limits trigger an alert at 80%.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-prefix-divider">
        <label class="inp23-label" for="input-prefix-divider-inp23-input">Monthly budget</label>
        <div class="inp23-wrap">
          <span class="inp23-prefix" aria-hidden="true">£</span>
          <i class="inp23-div" aria-hidden="true"></i>
          <input class="inp23-control" id="input-prefix-divider-inp23-input" type="text" inputmode="decimal" placeholder="0.00" aria-describedby="input-prefix-divider-inp23-help">
        </div>
        <p class="inp23-help" id="input-prefix-divider-inp23-help">Hard limits trigger an alert at 80%.</p>
      </div>`,
};
