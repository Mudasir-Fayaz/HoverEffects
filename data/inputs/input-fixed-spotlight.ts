import type { HoverEffect } from "../types";

const css = `.he-input-fixed-spotlight{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-fixed-spotlight, .he-input-fixed-spotlight *, .he-input-fixed-spotlight *::before, .he-input-fixed-spotlight *::after { box-sizing: border-box; }
.he-input-fixed-spotlight h2, .he-input-fixed-spotlight h3, .he-input-fixed-spotlight p, .he-input-fixed-spotlight figure, .he-input-fixed-spotlight ol, .he-input-fixed-spotlight ul { margin: 0; }
.he-input-fixed-spotlight h2, .he-input-fixed-spotlight h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-fixed-spotlight img, .he-input-fixed-spotlight svg { display: block; max-width: 100%; }
.he-input-fixed-spotlight a { color: inherit; }
.he-input-fixed-spotlight :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-fixed-spotlight { max-width: 340px; }
.inp15-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp15-wrap { position: relative; overflow: hidden; border-radius: var(--radius-sm); }
.inp15-control {
  position: relative;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: .9rem;
  font-variant-numeric: tabular-nums;
}
.inp15-spot {
  position: absolute;
  left: -8px;
  top: 50%;
  width: 120px;
  height: 120px;
  margin-top: -60px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(46 111 92 / .16), transparent 70%);
  background: radial-gradient(closest-side, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%);
  opacity: 0;
  transition: opacity .28s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .inp15-wrap:hover .inp15-spot { opacity: 1; }
}
.inp15-wrap:focus-within .inp15-spot { opacity: 1; }
.inp15-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-fixed-spotlight, .he-input-fixed-spotlight *, .he-input-fixed-spotlight *::before, .he-input-fixed-spotlight *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputFixedSpotlight: HoverEffect = {
  id: "input-fixed-spotlight",
  title: "Fixed Spotlight",
  category: "inputs",
  description: "A stationary highlight fades in near the leading edge, requiring no pointer tracking.",
  tags: ["inputs","fixed","spotlight","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputFixedSpotlight() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-fixed-spotlight">
        <label className="inp15-label" htmlFor="input-fixed-spotlight-inp15-input">Card number</label>
        <div className="inp15-wrap">
          <input className="inp15-control" id="input-fixed-spotlight-inp15-input" type="text" placeholder="0000 0000 0000 0000" aria-describedby="input-fixed-spotlight-inp15-help" />
          <i className="inp15-spot" aria-hidden="true"></i>
        </div>
        <p className="inp15-help" id="input-fixed-spotlight-inp15-help">Test mode — no real charges are made.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-fixed-spotlight">
        <label class="inp15-label" for="input-fixed-spotlight-inp15-input">Card number</label>
        <div class="inp15-wrap">
          <input class="inp15-control" id="input-fixed-spotlight-inp15-input" type="text" placeholder="0000 0000 0000 0000" aria-describedby="input-fixed-spotlight-inp15-help">
          <i class="inp15-spot" aria-hidden="true"></i>
        </div>
        <p class="inp15-help" id="input-fixed-spotlight-inp15-help">Test mode — no real charges are made.</p>
      </div>`,
};
