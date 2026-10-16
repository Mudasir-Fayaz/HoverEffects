import type { HoverEffect } from "../types";

const css = `.he-input-edge-trace{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-edge-trace, .he-input-edge-trace *, .he-input-edge-trace *::before, .he-input-edge-trace *::after { box-sizing: border-box; }
.he-input-edge-trace h2, .he-input-edge-trace h3, .he-input-edge-trace p, .he-input-edge-trace figure, .he-input-edge-trace ol, .he-input-edge-trace ul { margin: 0; }
.he-input-edge-trace h2, .he-input-edge-trace h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-edge-trace img, .he-input-edge-trace svg { display: block; max-width: 100%; }
.he-input-edge-trace a { color: inherit; }
.he-input-edge-trace :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-edge-trace { max-width: 340px; }
.he-input-edge-trace { --on: 0; }
.inp09-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp09-wrap { position: relative; }
.inp09-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp09-s {
  position: absolute;
  background: var(--accent);
  border-radius: 2px;
  transition: transform .2s var(--ease);
  transition-delay: calc((1 - var(--on)) * var(--out, 0ms) + var(--on) * var(--in, 0ms));
  pointer-events: none;
}
.inp09-t { top: -1px; left: 10px; right: 10px; height: 2px; transform-origin: left; transform: scaleX(var(--on)); }
.inp09-r { right: -1px; top: 10px; bottom: 10px; width: 2px; transform-origin: top; transform: scaleY(var(--on)); }
.inp09-b { bottom: -1px; left: 10px; right: 10px; height: 2px; transform-origin: right; transform: scaleX(var(--on)); }
.inp09-l { left: -1px; top: 10px; bottom: 10px; width: 2px; transform-origin: bottom; transform: scaleY(var(--on)); }
.inp09-t { --in: 0ms; --out: 150ms; }
.inp09-r { --in: 60ms; --out: 100ms; }
.inp09-b { --in: 120ms; --out: 50ms; }
.inp09-l { --in: 180ms; --out: 0ms; }
@media (hover: hover) and (pointer: fine) {
  .inp09-wrap:hover { --on: 1; }
}
.inp09-wrap:focus-within { --on: 1; }
.inp09-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-edge-trace, .he-input-edge-trace *, .he-input-edge-trace *::before, .he-input-edge-trace *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputEdgeTrace: HoverEffect = {
  id: "input-edge-trace",
  title: "Edge Trace",
  category: "inputs",
  description: "Four thin edge strokes trace the field perimeter in sequence while native focus stays visible.",
  tags: ["inputs","edge","trace","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputEdgeTrace() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-edge-trace">
        <label className="inp09-label" htmlFor="input-edge-trace-inp09-input">Tracking code</label>
        <div className="inp09-wrap">
          <input className="inp09-control" id="input-edge-trace-inp09-input" type="text" placeholder="TRK-88213" aria-describedby="input-edge-trace-inp09-help" />
          <i className="inp09-s inp09-t" aria-hidden="true"></i>
          <i className="inp09-s inp09-r" aria-hidden="true"></i>
          <i className="inp09-s inp09-b" aria-hidden="true"></i>
          <i className="inp09-s inp09-l" aria-hidden="true"></i>
        </div>
        <p className="inp09-help" id="input-edge-trace-inp09-help">Found in the shipping confirmation email.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-edge-trace">
        <label class="inp09-label" for="input-edge-trace-inp09-input">Tracking code</label>
        <div class="inp09-wrap">
          <input class="inp09-control" id="input-edge-trace-inp09-input" type="text" placeholder="TRK-88213" aria-describedby="input-edge-trace-inp09-help">
          <i class="inp09-s inp09-t" aria-hidden="true"></i>
          <i class="inp09-s inp09-r" aria-hidden="true"></i>
          <i class="inp09-s inp09-b" aria-hidden="true"></i>
          <i class="inp09-s inp09-l" aria-hidden="true"></i>
        </div>
        <p class="inp09-help" id="input-edge-trace-inp09-help">Found in the shipping confirmation email.</p>
      </div>`,
};
