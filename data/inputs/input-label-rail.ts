import type { HoverEffect } from "../types";

const css = `.he-input-label-rail{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-label-rail, .he-input-label-rail *, .he-input-label-rail *::before, .he-input-label-rail *::after { box-sizing: border-box; }
.he-input-label-rail h2, .he-input-label-rail h3, .he-input-label-rail p, .he-input-label-rail figure, .he-input-label-rail ol, .he-input-label-rail ul { margin: 0; }
.he-input-label-rail h2, .he-input-label-rail h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-label-rail img, .he-input-label-rail svg { display: block; max-width: 100%; }
.he-input-label-rail a { color: inherit; }
.he-input-label-rail :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-label-rail { max-width: 340px; }
.inp19-label {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 6px;
  color: var(--text);
  font-size: .8rem;
  font-weight: 650;
}
.inp19-rail {
  width: 2.5px;
  height: 13px;
  border-radius: 2.5px;
  background: var(--accent);
  transform: scaleY(.4);
  opacity: .55;
  transition: transform .22s var(--ease), opacity .22s var(--ease);
}
.inp19-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
@media (hover: hover) and (pointer: fine) {
  .inp19-wrap:hover .inp19-rail { transform: scaleY(1); opacity: 1; }
}
.inp19-wrap:focus-within .inp19-rail { transform: scaleY(1); opacity: 1; }
.inp19-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-label-rail, .he-input-label-rail *, .he-input-label-rail *::before, .he-input-label-rail *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputLabelRail: HoverEffect = {
  id: "input-label-rail",
  title: "Label Rail",
  category: "inputs",
  description: "A small marker grows beside the persistent label while the field itself stays anchored.",
  tags: ["inputs","label","rail","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputLabelRail() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-label-rail">
        <label className="inp19-label" htmlFor="input-label-rail-inp19-input"><i className="inp19-rail" aria-hidden="true"></i>Team plan seats</label>
        <div className="inp19-wrap">
          <input className="inp19-control" id="input-label-rail-inp19-input" type="number" min="1" max="250" defaultValue="12" aria-describedby="input-label-rail-inp19-help" />
        </div>
        <p className="inp19-help" id="input-label-rail-inp19-help">Billing scales with active seats only.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-label-rail">
        <label class="inp19-label" for="input-label-rail-inp19-input"><i class="inp19-rail" aria-hidden="true"></i>Team plan seats</label>
        <div class="inp19-wrap">
          <input class="inp19-control" id="input-label-rail-inp19-input" type="number" min="1" max="250" value="12" aria-describedby="input-label-rail-inp19-help">
        </div>
        <p class="inp19-help" id="input-label-rail-inp19-help">Billing scales with active seats only.</p>
      </div>`,
};
