import type { HoverEffect } from "../types";

const css = `.he-btn-cap-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-cap-accent, .he-btn-cap-accent *, .he-btn-cap-accent *::before, .he-btn-cap-accent *::after { box-sizing: border-box; }
.he-btn-cap-accent h2, .he-btn-cap-accent h3, .he-btn-cap-accent p, .he-btn-cap-accent figure, .he-btn-cap-accent ol, .he-btn-cap-accent ul { margin: 0; }
.he-btn-cap-accent h2, .he-btn-cap-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-cap-accent img, .he-btn-cap-accent svg { display: block; max-width: 100%; }
.he-btn-cap-accent a { color: inherit; }
.he-btn-cap-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-cap-accent { position: relative;
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
.he-btn-cap-accent:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-cap-accent:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-cap-accent:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-cap-accent .label, .he-btn-cap-accent .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-cap-accent .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-cap-accent .deco { pointer-events: none; }
.he-btn-cap-accent:disabled .deco { transition: none; }
.he-btn-cap-accent { --duration: .2s; }
.he-btn-cap-accent .caps { text-transform: uppercase; letter-spacing: .06em; }
.he-btn-cap-accent .cap { transition: color var(--duration) var(--ease); }
@media (hover: hover) and (pointer: fine) {
.he-btn-cap-accent:not(:disabled):hover .cap-first { color: var(--button-accent); }
.he-btn-cap-accent:not(:disabled):hover .cap-last { color: var(--button-accent-alt); }


}
.he-btn-cap-accent:not(:disabled):focus-visible .cap-first { color: var(--button-accent); }
.he-btn-cap-accent:not(:disabled):focus-visible .cap-last { color: var(--button-accent-alt); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-cap-accent, .he-btn-cap-accent *, .he-btn-cap-accent *::before, .he-btn-cap-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnCapAccent: HoverEffect = {
  id: "btn-cap-accent",
  title: "Cap Accent",
  category: "buttons",
  description: "The first and last characters take complementary accents on hover.",
  tags: ["buttons","cap","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnCapAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-cap-accent" type="button">
        <span className="label caps" aria-hidden="true"><span className="cap cap-first">S</span>AV<span className="cap cap-last">E</span></span>
        <span className="visually-hidden">SAVE</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-cap-accent" type="button">
        <span class="label caps" aria-hidden="true"><span class="cap cap-first">S</span>AV<span class="cap cap-last">E</span></span>
        <span class="visually-hidden">SAVE</span>
      </button>`,
};
