import type { HoverEffect } from "../types";

const css = `.he-input-date-icon-frame{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-date-icon-frame, .he-input-date-icon-frame *, .he-input-date-icon-frame *::before, .he-input-date-icon-frame *::after { box-sizing: border-box; }
.he-input-date-icon-frame h2, .he-input-date-icon-frame h3, .he-input-date-icon-frame p, .he-input-date-icon-frame figure, .he-input-date-icon-frame ol, .he-input-date-icon-frame ul { margin: 0; }
.he-input-date-icon-frame h2, .he-input-date-icon-frame h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-date-icon-frame img, .he-input-date-icon-frame svg { display: block; max-width: 100%; }
.he-input-date-icon-frame a { color: inherit; }
.he-input-date-icon-frame :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-date-icon-frame { max-width: 340px; }
.inp28-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp28-wrap { position: relative; }
.inp28-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp28-frame {
  position: absolute;
  right: 4px;
  top: 4px;
  bottom: 4px;
  width: 32px;
  border: 1px solid var(--accent-2);
  border-radius: 6px;
  opacity: 0;
  transition: opacity .24s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .inp28-wrap:hover .inp28-frame { opacity: .9; }
}
.inp28-wrap:focus-within .inp28-frame { opacity: .9; }
.inp28-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-date-icon-frame, .he-input-date-icon-frame *, .he-input-date-icon-frame *::before, .he-input-date-icon-frame *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputDateIconFrame: HoverEffect = {
  id: "input-date-icon-frame",
  title: "Date Icon Frame",
  category: "inputs",
  description: "A subtle frame highlights the native picker compartment without covering the calendar indicator.",
  tags: ["inputs","date","icon","frame","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputDateIconFrame() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-date-icon-frame">
        <label className="inp28-label" htmlFor="input-date-icon-frame-inp28-input">Campaign start</label>
        <div className="inp28-wrap">
          <input className="inp28-control" id="input-date-icon-frame-inp28-input" type="date" defaultValue="2026-04-06" aria-describedby="input-date-icon-frame-inp28-help" />
          <i className="inp28-frame" aria-hidden="true"></i>
        </div>
        <p className="inp28-help" id="input-date-icon-frame-inp28-help">Uses your browser’s native date picker.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-date-icon-frame">
        <label class="inp28-label" for="input-date-icon-frame-inp28-input">Campaign start</label>
        <div class="inp28-wrap">
          <input class="inp28-control" id="input-date-icon-frame-inp28-input" type="date" value="2026-04-06" aria-describedby="input-date-icon-frame-inp28-help">
          <i class="inp28-frame" aria-hidden="true"></i>
        </div>
        <p class="inp28-help" id="input-date-icon-frame-inp28-help">Uses your browser’s native date picker.</p>
      </div>`,
};
