import type { HoverEffect } from "../types";

const css = `.he-btn-recess-seam{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-recess-seam, .he-btn-recess-seam *, .he-btn-recess-seam *::before, .he-btn-recess-seam *::after { box-sizing: border-box; }
.he-btn-recess-seam h2, .he-btn-recess-seam h3, .he-btn-recess-seam p, .he-btn-recess-seam figure, .he-btn-recess-seam ol, .he-btn-recess-seam ul { margin: 0; }
.he-btn-recess-seam h2, .he-btn-recess-seam h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-recess-seam img, .he-btn-recess-seam svg { display: block; max-width: 100%; }
.he-btn-recess-seam a { color: inherit; }
.he-btn-recess-seam :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-recess-seam { position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 44px;
  padding: 11px 22px;
  border: 1px solid var(--button-border);
  border-radius: var(--button-radius);
  background: var(--button-bg);
  color: var(--button-fg);
  font: inherit;
  font-size: .92rem;
  font-weight: 650;
  letter-spacing: .01em;
  line-height: 1.25;
  text-align: center;
  cursor: pointer;
  isolation: isolate;
  transition: border-color .2s var(--ease), background-color .2s var(--ease); }
.he-btn-recess-seam:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-recess-seam:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-recess-seam:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-recess-seam .label, .he-btn-recess-seam .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-recess-seam .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-recess-seam .deco { pointer-events: none; }
.he-btn-recess-seam:disabled .deco { transition: none; }
.he-btn-recess-seam { --duration: .22s; }
.he-btn-recess-seam .hairline, .he-btn-recess-seam .gleam { position: absolute; left: 12px; right: 12px; height: 1px; }
.he-btn-recess-seam .hairline { background: var(--button-line); }
.he-btn-recess-seam .hairline-top { top: 6px; }
.he-btn-recess-seam .hairline-bottom { bottom: 6px; }
.he-btn-recess-seam .gleam { background: var(--button-seam);
  transition: transform var(--duration) var(--ease), opacity var(--duration) var(--ease); }
.he-btn-recess-seam .gleam-top { top: 8px; transform: translateY(1px); opacity: .6; }
.he-btn-recess-seam .gleam-bottom { bottom: 8px; transform: translateY(-1px); opacity: .6; }
@media (hover: hover) and (pointer: fine) {
.he-btn-recess-seam:not(:disabled):hover .gleam { transform: translateY(0); opacity: 1; }


}
.he-btn-recess-seam:not(:disabled):focus-visible .gleam { transform: translateY(0); opacity: 1; }


.he-btn-recess-seam .hairline{transition:background-color var(--duration) var(--ease)}
.he-btn-recess-seam .gleam{opacity:.3}
.he-btn-recess-seam .gleam-top{transform:translateY(2px)}
.he-btn-recess-seam .gleam-bottom{transform:translateY(-2px)}
.he-btn-recess-seam:not(:disabled):hover .gleam,.he-btn-recess-seam:not(:disabled):focus-visible .gleam{opacity:1;transform:translateY(0)}
.he-btn-recess-seam:not(:disabled):hover .hairline,.he-btn-recess-seam:not(:disabled):focus-visible .hairline{background:color-mix(in srgb,var(--button-accent) 35%,var(--button-line))}
/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-recess-seam, .he-btn-recess-seam *, .he-btn-recess-seam *::before, .he-btn-recess-seam *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnRecessSeam: HoverEffect = {
  id: "btn-recess-seam",
  title: "Recess Seam",
  category: "buttons",
  description: "Paired seam highlights tighten by one pixel on hover.",
  tags: ["buttons","recess","seam","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnRecessSeam() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-recess-seam" type="button">
        <span className="surface" aria-hidden="true">
          <span className="hairline hairline-top deco"></span>
          <span className="hairline hairline-bottom deco"></span>
          <span className="gleam gleam-top deco"></span>
          <span className="gleam gleam-bottom deco"></span>
        </span>
        <span className="label">Edit profile</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-recess-seam" type="button">
        <span class="surface" aria-hidden="true">
          <span class="hairline hairline-top deco"></span>
          <span class="hairline hairline-bottom deco"></span>
          <span class="gleam gleam-top deco"></span>
          <span class="gleam gleam-bottom deco"></span>
        </span>
        <span class="label">Edit profile</span>
      </button>`,
};
