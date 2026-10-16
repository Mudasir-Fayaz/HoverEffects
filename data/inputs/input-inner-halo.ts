import type { HoverEffect } from "../types";

const css = `.he-input-inner-halo{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-inner-halo, .he-input-inner-halo *, .he-input-inner-halo *::before, .he-input-inner-halo *::after { box-sizing: border-box; }
.he-input-inner-halo h2, .he-input-inner-halo h3, .he-input-inner-halo p, .he-input-inner-halo figure, .he-input-inner-halo ol, .he-input-inner-halo ul { margin: 0; }
.he-input-inner-halo h2, .he-input-inner-halo h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-inner-halo img, .he-input-inner-halo svg { display: block; max-width: 100%; }
.he-input-inner-halo a { color: inherit; }
.he-input-inner-halo :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-inner-halo { max-width: 340px; }
.inp17-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp17-wrap { position: relative; }
.inp17-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp17-halo {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-sm);
  box-shadow: inset 0 0 0 3px rgb(46 111 92 / .12), inset 0 0 18px rgb(46 111 92 / .12);
  box-shadow: inset 0 0 0 3px color-mix(in srgb, var(--accent) 12%, transparent), inset 0 0 18px color-mix(in srgb, var(--accent) 12%, transparent);
  opacity: 0;
  transition: opacity .26s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .inp17-wrap:hover .inp17-halo { opacity: 1; }
}
.inp17-wrap:focus-within .inp17-halo { opacity: 1; }
.inp17-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-inner-halo, .he-input-inner-halo *, .he-input-inner-halo *::before, .he-input-inner-halo *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputInnerHalo: HoverEffect = {
  id: "input-inner-halo",
  title: "Inner Halo",
  category: "inputs",
  description: "A restrained inner halo fades in as a static shadow layer — blur radius is never animated.",
  tags: ["inputs","inner","halo","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputInnerHalo() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-inner-halo">
        <label className="inp17-label" htmlFor="input-inner-halo-inp17-input">Seed phrase</label>
        <div className="inp17-wrap">
          <input className="inp17-control" id="input-inner-halo-inp17-input" type="text" placeholder="Enter recovery words" aria-describedby="input-inner-halo-inp17-help" />
          <i className="inp17-halo" aria-hidden="true"></i>
        </div>
        <p className="inp17-help" id="input-inner-halo-inp17-help">Never shared with the server.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-inner-halo">
        <label class="inp17-label" for="input-inner-halo-inp17-input">Seed phrase</label>
        <div class="inp17-wrap">
          <input class="inp17-control" id="input-inner-halo-inp17-input" type="text" placeholder="Enter recovery words" aria-describedby="input-inner-halo-inp17-help">
          <i class="inp17-halo" aria-hidden="true"></i>
        </div>
        <p class="inp17-help" id="input-inner-halo-inp17-help">Never shared with the server.</p>
      </div>`,
};
