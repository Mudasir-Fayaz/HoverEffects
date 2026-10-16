import type { HoverEffect } from "../types";

const css = `.he-input-corner-bloom{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-corner-bloom, .he-input-corner-bloom *, .he-input-corner-bloom *::before, .he-input-corner-bloom *::after { box-sizing: border-box; }
.he-input-corner-bloom h2, .he-input-corner-bloom h3, .he-input-corner-bloom p, .he-input-corner-bloom figure, .he-input-corner-bloom ol, .he-input-corner-bloom ul { margin: 0; }
.he-input-corner-bloom h2, .he-input-corner-bloom h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-corner-bloom img, .he-input-corner-bloom svg { display: block; max-width: 100%; }
.he-input-corner-bloom a { color: inherit; }
.he-input-corner-bloom :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-corner-bloom { max-width: 340px; }
.inp14-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp14-wrap { position: relative; overflow: hidden; border-radius: var(--radius-sm); }
.inp14-control {
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
.inp14-bloom {
  position: absolute;
  right: -30px;
  bottom: -30px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(46 111 92 / .2), transparent 72%);
  background: radial-gradient(closest-side, color-mix(in srgb, var(--accent) 22%, transparent), transparent 72%);
  opacity: 0;
  transform: scale(.4);
  transition: opacity .26s var(--ease), transform .3s var(--ease-out);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .inp14-wrap:hover .inp14-bloom { opacity: 1; transform: scale(1); }
}
.inp14-wrap:focus-within .inp14-bloom { opacity: 1; transform: scale(1); }
.inp14-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-corner-bloom, .he-input-corner-bloom *, .he-input-corner-bloom *::before, .he-input-corner-bloom *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputCornerBloom: HoverEffect = {
  id: "input-corner-bloom",
  title: "Corner Bloom",
  category: "inputs",
  description: "A low-opacity circle expands behind the control from the corner, with movement removed under reduced motion.",
  tags: ["inputs","corner","bloom","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputCornerBloom() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-corner-bloom">
        <label className="inp14-label" htmlFor="input-corner-bloom-inp14-input">Feedback</label>
        <div className="inp14-wrap">
          <input className="inp14-control" id="input-corner-bloom-inp14-input" type="text" placeholder="What went well?" aria-describedby="input-corner-bloom-inp14-help" />
          <i className="inp14-bloom" aria-hidden="true"></i>
        </div>
        <p className="inp14-help" id="input-corner-bloom-inp14-help">Shared with the product team.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-corner-bloom">
        <label class="inp14-label" for="input-corner-bloom-inp14-input">Feedback</label>
        <div class="inp14-wrap">
          <input class="inp14-control" id="input-corner-bloom-inp14-input" type="text" placeholder="What went well?" aria-describedby="input-corner-bloom-inp14-help">
          <i class="inp14-bloom" aria-hidden="true"></i>
        </div>
        <p class="inp14-help" id="input-corner-bloom-inp14-help">Shared with the product team.</p>
      </div>`,
};
