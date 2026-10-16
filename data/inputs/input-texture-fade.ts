import type { HoverEffect } from "../types";

const css = `.he-input-texture-fade{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-texture-fade, .he-input-texture-fade *, .he-input-texture-fade *::before, .he-input-texture-fade *::after { box-sizing: border-box; }
.he-input-texture-fade h2, .he-input-texture-fade h3, .he-input-texture-fade p, .he-input-texture-fade figure, .he-input-texture-fade ol, .he-input-texture-fade ul { margin: 0; }
.he-input-texture-fade h2, .he-input-texture-fade h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-texture-fade img, .he-input-texture-fade svg { display: block; max-width: 100%; }
.he-input-texture-fade a { color: inherit; }
.he-input-texture-fade :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-texture-fade { max-width: 340px; }
.inp16-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp16-wrap { position: relative; overflow: hidden; border-radius: var(--radius-sm); }
.inp16-control {
  position: relative;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp16-texture {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--line-strong) 1px, transparent 1.2px);
  background-size: 9px 9px;
  opacity: 0;
  transition: opacity .28s var(--ease);
  pointer-events: none;
  -webkit-mask-image: linear-gradient(105deg, transparent 30%, #000 55%);
  mask-image: linear-gradient(105deg, transparent 30%, #000 55%);
}
@media (hover: hover) and (pointer: fine) {
  .inp16-wrap:hover .inp16-texture { opacity: .55; }
}
.inp16-wrap:focus-within .inp16-texture { opacity: .55; }
.inp16-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-texture-fade, .he-input-texture-fade *, .he-input-texture-fade *::before, .he-input-texture-fade *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputTextureFade: HoverEffect = {
  id: "input-texture-fade",
  title: "Texture Fade",
  category: "inputs",
  description: "A sparse dot pattern fades in behind the field while selection and caret stay visible.",
  tags: ["inputs","texture","fade","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputTextureFade() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-texture-fade">
        <label className="inp16-label" htmlFor="input-texture-fade-inp16-input">Search assets</label>
        <div className="inp16-wrap">
          <input className="inp16-control" id="input-texture-fade-inp16-input" type="text" placeholder="logo, banner, icon…" aria-describedby="input-texture-fade-inp16-help" />
          <i className="inp16-texture" aria-hidden="true"></i>
        </div>
        <p className="inp16-help" id="input-texture-fade-inp16-help">Searches names and descriptions.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-texture-fade">
        <label class="inp16-label" for="input-texture-fade-inp16-input">Search assets</label>
        <div class="inp16-wrap">
          <input class="inp16-control" id="input-texture-fade-inp16-input" type="text" placeholder="logo, banner, icon…" aria-describedby="input-texture-fade-inp16-help">
          <i class="inp16-texture" aria-hidden="true"></i>
        </div>
        <p class="inp16-help" id="input-texture-fade-inp16-help">Searches names and descriptions.</p>
      </div>`,
};
