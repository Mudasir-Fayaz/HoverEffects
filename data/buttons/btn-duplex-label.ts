import type { HoverEffect } from "../types";

const css = `.he-btn-duplex-label{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-duplex-label, .he-btn-duplex-label *, .he-btn-duplex-label *::before, .he-btn-duplex-label *::after { box-sizing: border-box; }
.he-btn-duplex-label h2, .he-btn-duplex-label h3, .he-btn-duplex-label p, .he-btn-duplex-label figure, .he-btn-duplex-label ol, .he-btn-duplex-label ul { margin: 0; }
.he-btn-duplex-label h2, .he-btn-duplex-label h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-duplex-label img, .he-btn-duplex-label svg { display: block; max-width: 100%; }
.he-btn-duplex-label a { color: inherit; }
.he-btn-duplex-label :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-duplex-label { position: relative;
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
.he-btn-duplex-label:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-duplex-label:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-duplex-label:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-duplex-label .label, .he-btn-duplex-label .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-duplex-label .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-duplex-label .deco { pointer-events: none; }
.he-btn-duplex-label:disabled .deco { transition: none; }
.he-btn-duplex-label { --duration: .22s; }
.he-btn-duplex-label .label-stack { display: inline-grid; }
.he-btn-duplex-label .label-stack > * { grid-area: 1 / 1; }
.he-btn-duplex-label .duplex { opacity: .45;
  transform: translate(1px, 1px);
  transition: transform var(--duration) var(--ease); }
@media (hover: hover) and (pointer: fine) {
.he-btn-duplex-label:not(:disabled):hover .duplex { transform: translate(0, 0); }


}
.he-btn-duplex-label:not(:disabled):focus-visible .duplex { transform: translate(0, 0); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-duplex-label, .he-btn-duplex-label *, .he-btn-duplex-label *::before, .he-btn-duplex-label *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnDuplexLabel: HoverEffect = {
  id: "btn-duplex-label",
  title: "Duplex Label",
  category: "buttons",
  description: "A ghost label copy registers its pixel offset on hover.",
  tags: ["buttons","duplex","label","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnDuplexLabel() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-duplex-label" type="button">
        <span className="label-stack">
          <span className="label">Print invoice</span>
          <span className="duplex deco" aria-hidden="true">Print invoice</span>
        </span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-duplex-label" type="button">
        <span class="label-stack">
          <span class="label">Print invoice</span>
          <span class="duplex deco" aria-hidden="true">Print invoice</span>
        </span>
      </button>`,
};
