import type { HoverEffect } from "../types";

const css = `.he-btn-engraved-label{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-engraved-label, .he-btn-engraved-label *, .he-btn-engraved-label *::before, .he-btn-engraved-label *::after { box-sizing: border-box; }
.he-btn-engraved-label h2, .he-btn-engraved-label h3, .he-btn-engraved-label p, .he-btn-engraved-label figure, .he-btn-engraved-label ol, .he-btn-engraved-label ul { margin: 0; }
.he-btn-engraved-label h2, .he-btn-engraved-label h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-engraved-label img, .he-btn-engraved-label svg { display: block; max-width: 100%; }
.he-btn-engraved-label a { color: inherit; }
.he-btn-engraved-label :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-engraved-label { position: relative;
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
.he-btn-engraved-label:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-engraved-label:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-engraved-label:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-engraved-label .label, .he-btn-engraved-label .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-engraved-label .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-engraved-label .deco { pointer-events: none; }
.he-btn-engraved-label:disabled .deco { transition: none; }
.he-btn-engraved-label { --duration: .24s; }
.he-btn-engraved-label .label-stack { display: inline-grid; }
.he-btn-engraved-label .label-stack > * { grid-area: 1 / 1; }
.he-btn-engraved-label .engrave { color: transparent;
  -webkit-text-stroke: 1px var(--button-accent);
  opacity: .3;
  transform: translate(.75px, .75px);
  transition: opacity var(--duration) var(--ease); }
@media (hover: hover) and (pointer: fine) {
.he-btn-engraved-label:not(:disabled):hover .engrave { opacity: .7; }


}
.he-btn-engraved-label:not(:disabled):focus-visible .engrave { opacity: .7; }
@supports not (-webkit-text-stroke: 1px #000) {
.he-btn-engraved-label .engrave { -webkit-text-stroke: 0; color: var(--button-accent); opacity: .2; }


}

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-engraved-label, .he-btn-engraved-label *, .he-btn-engraved-label *::before, .he-btn-engraved-label *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnEngravedLabel: HoverEffect = {
  id: "btn-engraved-label",
  title: "Engraved Label",
  category: "buttons",
  description: "An offset outline layer gains definition on hover.",
  tags: ["buttons","engraved","label","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnEngravedLabel() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-engraved-label" type="button">
        <span className="label-stack">
          <span className="label">Sign agreement</span>
          <span className="engrave deco" aria-hidden="true">Sign agreement</span>
        </span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-engraved-label" type="button">
        <span class="label-stack">
          <span class="label">Sign agreement</span>
          <span class="engrave deco" aria-hidden="true">Sign agreement</span>
        </span>
      </button>`,
};
