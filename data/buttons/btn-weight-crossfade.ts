import type { HoverEffect } from "../types";

const css = `.he-btn-weight-crossfade{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-weight-crossfade, .he-btn-weight-crossfade *, .he-btn-weight-crossfade *::before, .he-btn-weight-crossfade *::after { box-sizing: border-box; }
.he-btn-weight-crossfade h2, .he-btn-weight-crossfade h3, .he-btn-weight-crossfade p, .he-btn-weight-crossfade figure, .he-btn-weight-crossfade ol, .he-btn-weight-crossfade ul { margin: 0; }
.he-btn-weight-crossfade h2, .he-btn-weight-crossfade h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-weight-crossfade img, .he-btn-weight-crossfade svg { display: block; max-width: 100%; }
.he-btn-weight-crossfade a { color: inherit; }
.he-btn-weight-crossfade :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-weight-crossfade { position: relative;
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
.he-btn-weight-crossfade:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-weight-crossfade:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-weight-crossfade:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-weight-crossfade .label, .he-btn-weight-crossfade .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-weight-crossfade .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-weight-crossfade .deco { pointer-events: none; }
.he-btn-weight-crossfade:disabled .deco { transition: none; }
.he-btn-weight-crossfade { --duration: .22s; }
.he-btn-weight-crossfade .label-stack { display: inline-grid; }
.he-btn-weight-crossfade .label-stack > * { grid-area: 1 / 1; }
.he-btn-weight-crossfade .label-regular { font-weight: 550; transition: opacity var(--duration) var(--ease); }
.he-btn-weight-crossfade .label-bold { font-weight: 750; opacity: 0; transition: opacity var(--duration) var(--ease); }
@media (hover: hover) and (pointer: fine) {
.he-btn-weight-crossfade:not(:disabled):hover .label-regular { opacity: 0; }
.he-btn-weight-crossfade:not(:disabled):hover .label-bold { opacity: 1; }


}
.he-btn-weight-crossfade:not(:disabled):focus-visible .label-regular { opacity: 0; }
.he-btn-weight-crossfade:not(:disabled):focus-visible .label-bold { opacity: 1; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-weight-crossfade, .he-btn-weight-crossfade *, .he-btn-weight-crossfade *::before, .he-btn-weight-crossfade *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnWeightCrossfade: HoverEffect = {
  id: "btn-weight-crossfade",
  title: "Weight Crossfade",
  category: "buttons",
  description: "A regular to semibold crossfade happens inside a fixed label slot on hover.",
  tags: ["buttons","weight","crossfade","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnWeightCrossfade() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-weight-crossfade" type="button">
        <span className="label-stack">
          <span className="label label-regular">Download assets</span>
          <span className="label label-bold deco" aria-hidden="true">Download assets</span>
        </span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-weight-crossfade" type="button">
        <span class="label-stack">
          <span class="label label-regular">Download assets</span>
          <span class="label label-bold deco" aria-hidden="true">Download assets</span>
        </span>
      </button>`,
};
