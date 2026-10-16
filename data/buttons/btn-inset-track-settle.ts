import type { HoverEffect } from "../types";

const css = `.he-btn-inset-track-settle{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-inset-track-settle, .he-btn-inset-track-settle *, .he-btn-inset-track-settle *::before, .he-btn-inset-track-settle *::after { box-sizing: border-box; }
.he-btn-inset-track-settle h2, .he-btn-inset-track-settle h3, .he-btn-inset-track-settle p, .he-btn-inset-track-settle figure, .he-btn-inset-track-settle ol, .he-btn-inset-track-settle ul { margin: 0; }
.he-btn-inset-track-settle h2, .he-btn-inset-track-settle h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-inset-track-settle img, .he-btn-inset-track-settle svg { display: block; max-width: 100%; }
.he-btn-inset-track-settle a { color: inherit; }
.he-btn-inset-track-settle :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-inset-track-settle { position: relative;
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
.he-btn-inset-track-settle:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-inset-track-settle:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-inset-track-settle:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-inset-track-settle .label, .he-btn-inset-track-settle .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-inset-track-settle .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-inset-track-settle .deco { pointer-events: none; }
.he-btn-inset-track-settle:disabled .deco { transition: none; }
.he-btn-inset-track-settle { --duration: .22s; }
.he-btn-inset-track-settle .track { position: absolute;
  top: 50%;
  width: 2px;
  height: 16px;
  margin-top: -8px;
  border-radius: 2px;
  background: var(--button-accent);
  opacity: .5;
  transition: transform var(--duration) var(--ease), opacity var(--duration) var(--ease); }
.he-btn-inset-track-settle .track-left { left: 7px; transform: translateX(-2px); }
.he-btn-inset-track-settle .track-right { right: 7px; transform: translateX(2px); }
@media (hover: hover) and (pointer: fine) {
.he-btn-inset-track-settle:not(:disabled):hover .track { transform: translateX(0); opacity: .82; }


}
.he-btn-inset-track-settle:not(:disabled):focus-visible .track { transform: translateX(0); opacity: .82; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-inset-track-settle, .he-btn-inset-track-settle *, .he-btn-inset-track-settle *::before, .he-btn-inset-track-settle *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnInsetTrackSettle: HoverEffect = {
  id: "btn-inset-track-settle",
  title: "Inset Track Settle",
  category: "buttons",
  description: "Interior tracks settle two pixels inward on hover.",
  tags: ["buttons","inset","track","settle","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnInsetTrackSettle() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-inset-track-settle" type="button">
        <span className="surface" aria-hidden="true">
          <span className="track track-left deco"></span>
          <span className="track track-right deco"></span>
        </span>
        <span className="label">View pricing</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-inset-track-settle" type="button">
        <span class="surface" aria-hidden="true">
          <span class="track track-left deco"></span>
          <span class="track track-right deco"></span>
        </span>
        <span class="label">View pricing</span>
      </button>`,
};
