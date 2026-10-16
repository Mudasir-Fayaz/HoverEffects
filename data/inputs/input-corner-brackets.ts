import type { HoverEffect } from "../types";

const css = `.he-input-corner-brackets{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-corner-brackets, .he-input-corner-brackets *, .he-input-corner-brackets *::before, .he-input-corner-brackets *::after { box-sizing: border-box; }
.he-input-corner-brackets h2, .he-input-corner-brackets h3, .he-input-corner-brackets p, .he-input-corner-brackets figure, .he-input-corner-brackets ol, .he-input-corner-brackets ul { margin: 0; }
.he-input-corner-brackets h2, .he-input-corner-brackets h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-corner-brackets img, .he-input-corner-brackets svg { display: block; max-width: 100%; }
.he-input-corner-brackets a { color: inherit; }
.he-input-corner-brackets :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-corner-brackets { max-width: 340px; }
.inp08-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp08-wrap { position: relative; }
.inp08-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp08-c {
  position: absolute;
  width: 9px;
  height: 9px;
  border: 0 solid var(--accent);
  opacity: 0;
  transform: scale(.6);
  transition: opacity .18s var(--ease), transform .22s var(--ease);
  pointer-events: none;
}
.inp08-tl { top: -3px; left: -3px; border-top-width: 1.5px; border-left-width: 1.5px; transform-origin: top left; }
.inp08-tr { top: -3px; right: -3px; border-top-width: 1.5px; border-right-width: 1.5px; transform-origin: top right; }
.inp08-bl { bottom: -3px; left: -3px; border-bottom-width: 1.5px; border-left-width: 1.5px; transform-origin: bottom left; }
.inp08-br { bottom: -3px; right: -3px; border-bottom-width: 1.5px; border-right-width: 1.5px; transform-origin: bottom right; }
@media (hover: hover) and (pointer: fine) {
  .inp08-wrap:hover .inp08-c { opacity: 1; transform: scale(1.35); }
}
.inp08-wrap:focus-within .inp08-c { opacity: 1; transform: scale(1.35); }
.inp08-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-corner-brackets, .he-input-corner-brackets *, .he-input-corner-brackets *::before, .he-input-corner-brackets *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputCornerBrackets: HoverEffect = {
  id: "input-corner-brackets",
  title: "Corner Brackets",
  category: "inputs",
  description: "Four corner marks extend to emphasise the field, all pointer-transparent.",
  tags: ["inputs","corner","brackets","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputCornerBrackets() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-corner-brackets">
        <label className="inp08-label" htmlFor="input-corner-brackets-inp08-input">Serial number</label>
        <div className="inp08-wrap">
          <input className="inp08-control" id="input-corner-brackets-inp08-input" type="text" placeholder="SN-000-000" aria-describedby="input-corner-brackets-inp08-help" />
          <i className="inp08-c inp08-tl" aria-hidden="true"></i>
          <i className="inp08-c inp08-tr" aria-hidden="true"></i>
          <i className="inp08-c inp08-bl" aria-hidden="true"></i>
          <i className="inp08-c inp08-br" aria-hidden="true"></i>
        </div>
        <p className="inp08-help" id="input-corner-brackets-inp08-help">Printed on the device label.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-corner-brackets">
        <label class="inp08-label" for="input-corner-brackets-inp08-input">Serial number</label>
        <div class="inp08-wrap">
          <input class="inp08-control" id="input-corner-brackets-inp08-input" type="text" placeholder="SN-000-000" aria-describedby="input-corner-brackets-inp08-help">
          <i class="inp08-c inp08-tl" aria-hidden="true"></i>
          <i class="inp08-c inp08-tr" aria-hidden="true"></i>
          <i class="inp08-c inp08-bl" aria-hidden="true"></i>
          <i class="inp08-c inp08-br" aria-hidden="true"></i>
        </div>
        <p class="inp08-help" id="input-corner-brackets-inp08-help">Printed on the device label.</p>
      </div>`,
};
