import type { HoverEffect } from "../types";

const css = `.he-btn-baseline-settle{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-baseline-settle, .he-btn-baseline-settle *, .he-btn-baseline-settle *::before, .he-btn-baseline-settle *::after { box-sizing: border-box; }
.he-btn-baseline-settle h2, .he-btn-baseline-settle h3, .he-btn-baseline-settle p, .he-btn-baseline-settle figure, .he-btn-baseline-settle ol, .he-btn-baseline-settle ul { margin: 0; }
.he-btn-baseline-settle h2, .he-btn-baseline-settle h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-baseline-settle img, .he-btn-baseline-settle svg { display: block; max-width: 100%; }
.he-btn-baseline-settle a { color: inherit; }
.he-btn-baseline-settle :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-baseline-settle { position: relative;
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
.he-btn-baseline-settle:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-baseline-settle:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-baseline-settle:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-baseline-settle .label, .he-btn-baseline-settle .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-baseline-settle .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-baseline-settle .deco { pointer-events: none; }
.he-btn-baseline-settle:disabled .deco { transition: none; }
.he-btn-baseline-settle { --duration: .2s; }
.he-btn-baseline-settle .label { display: inline-block;
  transform: translateY(-.5px);
  transition: transform var(--duration) var(--ease); }
@media (hover: hover) and (pointer: fine) {
.he-btn-baseline-settle:not(:disabled):hover .label { transform: translateY(.5px); }


}
.he-btn-baseline-settle:not(:disabled):focus-visible .label { transform: translateY(.5px); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-baseline-settle, .he-btn-baseline-settle *, .he-btn-baseline-settle *::before, .he-btn-baseline-settle *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnBaselineSettle: HoverEffect = {
  id: "btn-baseline-settle",
  title: "Baseline Settle",
  category: "buttons",
  description: "The label shifts one pixel onto its settled baseline on hover.",
  tags: ["buttons","baseline","settle","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnBaselineSettle() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-baseline-settle" type="button">
        <span className="label">Skip tour</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-baseline-settle" type="button">
        <span class="label">Skip tour</span>
      </button>`,
};
