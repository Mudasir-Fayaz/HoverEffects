import type { HoverEffect } from "../types";

const css = `.he-btn-oblique-ease{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-oblique-ease, .he-btn-oblique-ease *, .he-btn-oblique-ease *::before, .he-btn-oblique-ease *::after { box-sizing: border-box; }
.he-btn-oblique-ease h2, .he-btn-oblique-ease h3, .he-btn-oblique-ease p, .he-btn-oblique-ease figure, .he-btn-oblique-ease ol, .he-btn-oblique-ease ul { margin: 0; }
.he-btn-oblique-ease h2, .he-btn-oblique-ease h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-oblique-ease img, .he-btn-oblique-ease svg { display: block; max-width: 100%; }
.he-btn-oblique-ease a { color: inherit; }
.he-btn-oblique-ease :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-oblique-ease { position: relative;
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
.he-btn-oblique-ease:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-oblique-ease:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-oblique-ease:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-oblique-ease .label, .he-btn-oblique-ease .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-oblique-ease .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-oblique-ease .deco { pointer-events: none; }
.he-btn-oblique-ease:disabled .deco { transition: none; }
.he-btn-oblique-ease { --duration: .2s; }
.he-btn-oblique-ease .label { display: inline-block;
  transform: skewX(0deg);
  transition: transform var(--duration) var(--ease); }
@media (hover: hover) and (pointer: fine) {
.he-btn-oblique-ease:not(:disabled):hover .label { transform: skewX(-2.5deg); }


}
.he-btn-oblique-ease:not(:disabled):focus-visible .label { transform: skewX(-2.5deg); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-oblique-ease, .he-btn-oblique-ease *, .he-btn-oblique-ease *::before, .he-btn-oblique-ease *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnObliqueEase: HoverEffect = {
  id: "btn-oblique-ease",
  title: "Oblique Ease",
  category: "buttons",
  description: "The label tilts a couple of degrees obliquely, then eases back on hover.",
  tags: ["buttons","oblique","ease","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnObliqueEase() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-oblique-ease" type="button">
        <span className="label">Preview mode</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-oblique-ease" type="button">
        <span class="label">Preview mode</span>
      </button>`,
};
