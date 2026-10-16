import type { HoverEffect } from "../types";

const css = `.he-input-diagonal-wash{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-diagonal-wash, .he-input-diagonal-wash *, .he-input-diagonal-wash *::before, .he-input-diagonal-wash *::after { box-sizing: border-box; }
.he-input-diagonal-wash h2, .he-input-diagonal-wash h3, .he-input-diagonal-wash p, .he-input-diagonal-wash figure, .he-input-diagonal-wash ol, .he-input-diagonal-wash ul { margin: 0; }
.he-input-diagonal-wash h2, .he-input-diagonal-wash h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-diagonal-wash img, .he-input-diagonal-wash svg { display: block; max-width: 100%; }
.he-input-diagonal-wash a { color: inherit; }
.he-input-diagonal-wash :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-diagonal-wash { max-width: 340px; }
.inp13-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp13-wrap { position: relative; overflow: hidden; border-radius: var(--radius-sm); }
.inp13-control {
  position: relative;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: .9rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
.inp13-wash {
  position: absolute;
  top: -40%;
  bottom: -40%;
  left: 0;
  width: 60%;
  background: linear-gradient(100deg, transparent, rgb(46 111 92 / .14), transparent);
  background: linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 14%, transparent), transparent);
  opacity: 0;
  transform: translateX(-120%) skewX(-14deg);
  transition: transform .5s var(--ease), opacity .3s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .inp13-wrap:hover .inp13-wash { opacity: 1; transform: translateX(120%) skewX(-14deg); }
}
.inp13-wrap:focus-within .inp13-wash { opacity: 1; transform: translateX(120%) skewX(-14deg); }
.inp13-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-diagonal-wash, .he-input-diagonal-wash *, .he-input-diagonal-wash *::before, .he-input-diagonal-wash *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputDiagonalWash: HoverEffect = {
  id: "input-diagonal-wash",
  title: "Diagonal Wash",
  category: "inputs",
  description: "A subtle diagonal tint moves behind the editable area without touching the typed text.",
  tags: ["inputs","diagonal","wash","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputDiagonalWash() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-diagonal-wash">
        <label className="inp13-label" htmlFor="input-diagonal-wash-inp13-input">Import path</label>
        <div className="inp13-wrap">
          <input className="inp13-control" id="input-diagonal-wash-inp13-input" type="text" placeholder="/data/exports" aria-describedby="input-diagonal-wash-inp13-help" />
          <i className="inp13-wash" aria-hidden="true"></i>
        </div>
        <p className="inp13-help" id="input-diagonal-wash-inp13-help">Relative to the workspace root.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-diagonal-wash">
        <label class="inp13-label" for="input-diagonal-wash-inp13-input">Import path</label>
        <div class="inp13-wrap">
          <input class="inp13-control" id="input-diagonal-wash-inp13-input" type="text" placeholder="/data/exports" aria-describedby="input-diagonal-wash-inp13-help">
          <i class="inp13-wash" aria-hidden="true"></i>
        </div>
        <p class="inp13-help" id="input-diagonal-wash-inp13-help">Relative to the workspace root.</p>
      </div>`,
};
