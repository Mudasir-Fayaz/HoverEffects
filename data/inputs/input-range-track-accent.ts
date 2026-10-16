import type { HoverEffect } from "../types";

const css = `.he-input-range-track-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-range-track-accent, .he-input-range-track-accent *, .he-input-range-track-accent *::before, .he-input-range-track-accent *::after { box-sizing: border-box; }
.he-input-range-track-accent h2, .he-input-range-track-accent h3, .he-input-range-track-accent p, .he-input-range-track-accent figure, .he-input-range-track-accent ol, .he-input-range-track-accent ul { margin: 0; }
.he-input-range-track-accent h2, .he-input-range-track-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-range-track-accent img, .he-input-range-track-accent svg { display: block; max-width: 100%; }
.he-input-range-track-accent a { color: inherit; }
.he-input-range-track-accent :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-range-track-accent { max-width: 360px; }
.inp29-label { display: block; margin-bottom: 8px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp29-wrap { position: relative; padding-right: 76px; }
.inp29-control {
  width: 100%;
  height: 26px;
  margin: 0;
  background: transparent;
  accent-color: var(--accent);
  cursor: pointer;
}
.inp29-control::-webkit-slider-runnable-track {
  height: 6px;
  border-radius: 3px;
  background: var(--surface-2);
  transition: background-color .22s var(--ease);
}
.inp29-control::-moz-range-track {
  height: 6px;
  border-radius: 3px;
  background: var(--surface-2);
  transition: background-color .22s var(--ease);
}
.inp29-control::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  margin-top: -6px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--surface);
}
.inp29-control::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--surface);
}
.inp29-value {
  position: absolute;
  right: 0;
  top: 50%;
  translate: 0 -50%;
  padding: 4px 9px;
  border-radius: 6px;
  background: var(--surface-2);
  color: var(--text);
  font-size: .76rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  transition: background-color .22s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .inp29-wrap:hover .inp29-control::-webkit-slider-runnable-track { background: var(--accent-soft); }
  .inp29-wrap:hover .inp29-control::-moz-range-track { background: var(--accent-soft); }
  .inp29-wrap:hover .inp29-value { background: var(--accent-soft); }
}
.inp29-wrap:focus-within .inp29-value { background: var(--accent-soft); }
.inp29-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-range-track-accent, .he-input-range-track-accent *, .he-input-range-track-accent *::before, .he-input-range-track-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputRangeTrackAccent: HoverEffect = {
  id: "input-range-track-accent",
  title: "Range Track Accent",
  category: "inputs",
  description: "The native range track tint strengthens on hover while the thumb value stays exactly the same.",
  tags: ["inputs","range","track","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputRangeTrackAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-range-track-accent">
        <label className="inp29-label" htmlFor="input-range-track-accent-inp29-input">Retention window</label>
        <div className="inp29-wrap">
          <input className="inp29-control" id="input-range-track-accent-inp29-input" type="range" min="7" max="90" step="1" defaultValue="42" aria-describedby="input-range-track-accent-inp29-help" />
          <output className="inp29-value" htmlFor="input-range-track-accent-inp29-input">42 days</output>
        </div>
        <p className="inp29-help" id="input-range-track-accent-inp29-help">Sample setting for demonstration — drag to change the real value.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-range-track-accent">
        <label class="inp29-label" for="input-range-track-accent-inp29-input">Retention window</label>
        <div class="inp29-wrap">
          <input class="inp29-control" id="input-range-track-accent-inp29-input" type="range" min="7" max="90" step="1" value="42" aria-describedby="input-range-track-accent-inp29-help">
          <output class="inp29-value" for="input-range-track-accent-inp29-input">42 days</output>
        </div>
        <p class="inp29-help" id="input-range-track-accent-inp29-help">Sample setting for demonstration — drag to change the real value.</p>
      </div>`,
};
