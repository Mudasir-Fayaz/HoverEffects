import type { HoverEffect } from "../types";

const css = `.he-input-top-and-bottom-rails{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-top-and-bottom-rails, .he-input-top-and-bottom-rails *, .he-input-top-and-bottom-rails *::before, .he-input-top-and-bottom-rails *::after { box-sizing: border-box; }
.he-input-top-and-bottom-rails h2, .he-input-top-and-bottom-rails h3, .he-input-top-and-bottom-rails p, .he-input-top-and-bottom-rails figure, .he-input-top-and-bottom-rails ol, .he-input-top-and-bottom-rails ul { margin: 0; }
.he-input-top-and-bottom-rails h2, .he-input-top-and-bottom-rails h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-top-and-bottom-rails img, .he-input-top-and-bottom-rails svg { display: block; max-width: 100%; }
.he-input-top-and-bottom-rails a { color: inherit; }
.he-input-top-and-bottom-rails :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-top-and-bottom-rails { max-width: 340px; }
.inp07-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp07-wrap { position: relative; }
.inp07-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  background: var(--surface-2);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
.inp07-rail {
  position: absolute;
  left: 8px; right: 8px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
  opacity: 0;
  transform: scaleX(.92);
  transition: opacity .22s var(--ease), transform .26s var(--ease);
  pointer-events: none;
}
.inp07-t { top: 0; transform-origin: left center; }
.inp07-b { bottom: 0; transform-origin: right center; }
@media (hover: hover) and (pointer: fine) {
  .inp07-wrap:hover .inp07-rail { opacity: 1; transform: scaleX(1); }
}
.inp07-wrap:focus-within .inp07-rail { opacity: 1; transform: scaleX(1); }
.inp07-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-top-and-bottom-rails, .he-input-top-and-bottom-rails *, .he-input-top-and-bottom-rails *::before, .he-input-top-and-bottom-rails *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputTopAndBottomRails: HoverEffect = {
  id: "input-top-and-bottom-rails",
  title: "Top and Bottom Rails",
  category: "inputs",
  description: "Two rails fade in and extend slightly across the field’s upper and lower edges.",
  tags: ["inputs","top","and","bottom","rails","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputTopAndBottomRails() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-top-and-bottom-rails">
        <label className="inp07-label" htmlFor="input-top-and-bottom-rails-inp07-input">API token</label>
        <div className="inp07-wrap">
          <input className="inp07-control" id="input-top-and-bottom-rails-inp07-input" type="text" placeholder="tok_live_…" aria-describedby="input-top-and-bottom-rails-inp07-help" />
          <i className="inp07-rail inp07-t" aria-hidden="true"></i>
          <i className="inp07-rail inp07-b" aria-hidden="true"></i>
        </div>
        <p className="inp07-help" id="input-top-and-bottom-rails-inp07-help">Rotate tokens every 90 days.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-top-and-bottom-rails">
        <label class="inp07-label" for="input-top-and-bottom-rails-inp07-input">API token</label>
        <div class="inp07-wrap">
          <input class="inp07-control" id="input-top-and-bottom-rails-inp07-input" type="text" placeholder="tok_live_…" aria-describedby="input-top-and-bottom-rails-inp07-help">
          <i class="inp07-rail inp07-t" aria-hidden="true"></i>
          <i class="inp07-rail inp07-b" aria-hidden="true"></i>
        </div>
        <p class="inp07-help" id="input-top-and-bottom-rails-inp07-help">Rotate tokens every 90 days.</p>
      </div>`,
};
