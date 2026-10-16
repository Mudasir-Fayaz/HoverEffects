import type { HoverEffect } from "../types";

const css = `.he-input-helper-emphasis{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-helper-emphasis, .he-input-helper-emphasis *, .he-input-helper-emphasis *::before, .he-input-helper-emphasis *::after { box-sizing: border-box; }
.he-input-helper-emphasis h2, .he-input-helper-emphasis h3, .he-input-helper-emphasis p, .he-input-helper-emphasis figure, .he-input-helper-emphasis ol, .he-input-helper-emphasis ul { margin: 0; }
.he-input-helper-emphasis h2, .he-input-helper-emphasis h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-helper-emphasis img, .he-input-helper-emphasis svg { display: block; max-width: 100%; }
.he-input-helper-emphasis a { color: inherit; }
.he-input-helper-emphasis :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-helper-emphasis { max-width: 360px; }
.inp20-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp20-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp20-help {
  margin-top: 6px;
  color: var(--text-2);
  font-size: .76rem;
  opacity: .85;
  transition: color .22s var(--ease), opacity .22s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .inp20-wrap:hover ~ .inp20-help { color: var(--text); opacity: 1; }
}
.inp20-wrap:focus-within ~ .inp20-help { color: var(--text); opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-helper-emphasis, .he-input-helper-emphasis *, .he-input-helper-emphasis *::before, .he-input-helper-emphasis *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputHelperEmphasis: HoverEffect = {
  id: "input-helper-emphasis",
  title: "Helper Emphasis",
  category: "inputs",
  description: "The always-visible helper text gains contrast when the field is hovered or focused, staying associated via aria-describedby.",
  tags: ["inputs","helper","emphasis","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputHelperEmphasis() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-helper-emphasis">
        <label className="inp20-label" htmlFor="input-helper-emphasis-inp20-input">Callback URL</label>
        <div className="inp20-wrap">
          <input className="inp20-control" id="input-helper-emphasis-inp20-input" type="url" placeholder="your-app.example/hooks" aria-describedby="input-helper-emphasis-inp20-help" />
        </div>
        <p className="inp20-help" id="input-helper-emphasis-inp20-help">Requests are signed with your workspace secret.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-helper-emphasis">
        <label class="inp20-label" for="input-helper-emphasis-inp20-input">Callback URL</label>
        <div class="inp20-wrap">
          <input class="inp20-control" id="input-helper-emphasis-inp20-input" type="url" placeholder="your-app.example/hooks" aria-describedby="input-helper-emphasis-inp20-help">
        </div>
        <p class="inp20-help" id="input-helper-emphasis-inp20-help">Requests are signed with your workspace secret.</p>
      </div>`,
};
