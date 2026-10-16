import type { HoverEffect } from "../types";

const css = `.he-input-icon-crossfade{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-icon-crossfade, .he-input-icon-crossfade *, .he-input-icon-crossfade *::before, .he-input-icon-crossfade *::after { box-sizing: border-box; }
.he-input-icon-crossfade h2, .he-input-icon-crossfade h3, .he-input-icon-crossfade p, .he-input-icon-crossfade figure, .he-input-icon-crossfade ol, .he-input-icon-crossfade ul { margin: 0; }
.he-input-icon-crossfade h2, .he-input-icon-crossfade h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-icon-crossfade img, .he-input-icon-crossfade svg { display: block; max-width: 100%; }
.he-input-icon-crossfade a { color: inherit; }
.he-input-icon-crossfade :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-icon-crossfade { max-width: 360px; }
.inp22-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp22-wrap { position: relative; }
.inp22-box {
  position: absolute;
  left: 10px;
  top: 50%;
  translate: 0 -50%;
  width: 16px;
  height: 16px;
  pointer-events: none;
}
.inp22-box svg { position: absolute; inset: 0; transition: opacity .22s var(--ease); }
.inp22-a { opacity: 1; color: var(--text-2); }
.inp22-b { opacity: 0; color: var(--accent); }
.inp22-control {
  width: 100%;
  padding: 10px 12px 10px 36px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
@media (hover: hover) and (pointer: fine) {
  .inp22-wrap:hover .inp22-a { opacity: 0; }
  .inp22-wrap:hover .inp22-b { opacity: 1; }
}
.inp22-wrap:focus-within .inp22-a { opacity: 0; }
.inp22-wrap:focus-within .inp22-b { opacity: 1; }
.inp22-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-icon-crossfade, .he-input-icon-crossfade *, .he-input-icon-crossfade *::before, .he-input-icon-crossfade *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputIconCrossfade: HoverEffect = {
  id: "input-icon-crossfade",
  title: "Icon Crossfade",
  category: "inputs",
  description: "Two aligned decorative icons crossfade in their fixed compartment without suggesting validation or password state.",
  tags: ["inputs","icon","crossfade","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputIconCrossfade() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-icon-crossfade">
        <label className="inp22-label" htmlFor="input-icon-crossfade-inp22-input">Repository</label>
        <div className="inp22-wrap">
          <span className="inp22-box" aria-hidden="true">
            <svg className="inp22-a" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3.5h7v9h-7z" /><path d="M6.5 6h3M6.5 8.5h3" /></svg>
            <svg className="inp22-b" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6.5 7.5 10 12 5" /></svg>
          </span>
          <input className="inp22-control" id="input-icon-crossfade-inp22-input" type="text" placeholder="org/repo" aria-describedby="input-icon-crossfade-inp22-help" />
        </div>
        <p className="inp22-help" id="input-icon-crossfade-inp22-help">Connect a repository to enable previews.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-icon-crossfade">
        <label class="inp22-label" for="input-icon-crossfade-inp22-input">Repository</label>
        <div class="inp22-wrap">
          <span class="inp22-box" aria-hidden="true">
            <svg class="inp22-a" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3.5h7v9h-7z"/><path d="M6.5 6h3M6.5 8.5h3"/></svg>
            <svg class="inp22-b" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6.5 7.5 10 12 5"/></svg>
          </span>
          <input class="inp22-control" id="input-icon-crossfade-inp22-input" type="text" placeholder="org/repo" aria-describedby="input-icon-crossfade-inp22-help">
        </div>
        <p class="inp22-help" id="input-icon-crossfade-inp22-help">Connect a repository to enable previews.</p>
      </div>`,
};
