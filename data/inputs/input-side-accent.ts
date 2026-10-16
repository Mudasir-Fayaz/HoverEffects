import type { HoverEffect } from "../types";

const css = `.he-input-side-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-side-accent, .he-input-side-accent *, .he-input-side-accent *::before, .he-input-side-accent *::after { box-sizing: border-box; }
.he-input-side-accent h2, .he-input-side-accent h3, .he-input-side-accent p, .he-input-side-accent figure, .he-input-side-accent ol, .he-input-side-accent ul { margin: 0; }
.he-input-side-accent h2, .he-input-side-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-side-accent img, .he-input-side-accent svg { display: block; max-width: 100%; }
.he-input-side-accent a { color: inherit; }
.he-input-side-accent :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-side-accent { max-width: 340px; }
.inp10-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp10-wrap { position: relative; padding-left: 12px; }
.inp10-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp10-rail {
  position: absolute;
  left: 0; top: 4px; bottom: 4px;
  width: 3px;
  border-radius: 3px;
  background: var(--accent);
  transform: scaleY(0);
  transform-origin: top center;
  transition: transform .26s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .inp10-wrap:hover .inp10-rail { transform: scaleY(1); }
}
.inp10-wrap:focus-within .inp10-rail { transform: scaleY(1); }
.inp10-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-side-accent, .he-input-side-accent *, .he-input-side-accent *::before, .he-input-side-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputSideAccent: HoverEffect = {
  id: "input-side-accent",
  title: "Side Accent",
  category: "inputs",
  description: "A vertical accent rail grows alongside the field while label and input padding stay fixed.",
  tags: ["inputs","side","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputSideAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-side-accent">
        <label className="inp10-label" htmlFor="input-side-accent-inp10-input">Referral handle</label>
        <div className="inp10-wrap">
          <input className="inp10-control" id="input-side-accent-inp10-input" type="text" placeholder="@northwind" aria-describedby="input-side-accent-inp10-help" />
          <i className="inp10-rail" aria-hidden="true"></i>
        </div>
        <p className="inp10-help" id="input-side-accent-inp10-help">Your public profile handle.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-side-accent">
        <label class="inp10-label" for="input-side-accent-inp10-input">Referral handle</label>
        <div class="inp10-wrap">
          <input class="inp10-control" id="input-side-accent-inp10-input" type="text" placeholder="@northwind" aria-describedby="input-side-accent-inp10-help">
          <i class="inp10-rail" aria-hidden="true"></i>
        </div>
        <p class="inp10-help" id="input-side-accent-inp10-help">Your public profile handle.</p>
      </div>`,
};
