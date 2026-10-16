import type { HoverEffect } from "../types";

const css = `.he-input-split-underline{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-split-underline, .he-input-split-underline *, .he-input-split-underline *::before, .he-input-split-underline *::after { box-sizing: border-box; }
.he-input-split-underline h2, .he-input-split-underline h3, .he-input-split-underline p, .he-input-split-underline figure, .he-input-split-underline ol, .he-input-split-underline ul { margin: 0; }
.he-input-split-underline h2, .he-input-split-underline h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-split-underline img, .he-input-split-underline svg { display: block; max-width: 100%; }
.he-input-split-underline a { color: inherit; }
.he-input-split-underline :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-split-underline { max-width: 340px; }
.inp06-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp06-wrap { position: relative; padding-bottom: 3px; }
.inp06-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-bottom-color: var(--line-strong);
  border-radius: 8px 8px 0 0;
  background: var(--surface-2);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp06-u {
  position: absolute;
  bottom: 0;
  width: 50%;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transition: transform .26s var(--ease);
  pointer-events: none;
}
.inp06-l { left: 0; transform-origin: left center; }
.inp06-r { right: 0; transform-origin: right center; }
:dir(rtl) .inp06-l { left: auto; right: 0; transform-origin: right center; }
:dir(rtl) .inp06-r { right: auto; left: 0; transform-origin: left center; }
@media (hover: hover) and (pointer: fine) {
  .inp06-wrap:hover .inp06-u { transform: scaleX(1); }
}
.inp06-wrap:focus-within .inp06-u { transform: scaleX(1); }
.inp06-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-split-underline, .he-input-split-underline *, .he-input-split-underline *::before, .he-input-split-underline *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputSplitUnderline: HoverEffect = {
  id: "input-split-underline",
  title: "Split Underline",
  category: "inputs",
  description: "Two half-width lines extend from opposite sides and meet in the middle, without moving input text.",
  tags: ["inputs","split","underline","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputSplitUnderline() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-split-underline">
        <label className="inp06-label" htmlFor="input-split-underline-inp06-input">Invite code</label>
        <div className="inp06-wrap">
          <input className="inp06-control" id="input-split-underline-inp06-input" type="text" placeholder="TEAM-2026" aria-describedby="input-split-underline-inp06-help" />
          <i className="inp06-u inp06-l" aria-hidden="true"></i>
          <i className="inp06-u inp06-r" aria-hidden="true"></i>
        </div>
        <p className="inp06-help" id="input-split-underline-inp06-help">Ask your admin if the code has expired.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-split-underline">
        <label class="inp06-label" for="input-split-underline-inp06-input">Invite code</label>
        <div class="inp06-wrap">
          <input class="inp06-control" id="input-split-underline-inp06-input" type="text" placeholder="TEAM-2026" aria-describedby="input-split-underline-inp06-help">
          <i class="inp06-u inp06-l" aria-hidden="true"></i>
          <i class="inp06-u inp06-r" aria-hidden="true"></i>
        </div>
        <p class="inp06-help" id="input-split-underline-inp06-help">Ask your admin if the code has expired.</p>
      </div>`,
};
