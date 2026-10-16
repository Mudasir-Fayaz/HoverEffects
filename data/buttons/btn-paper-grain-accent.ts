import type { HoverEffect } from "../types";

const css = `.he-btn-paper-grain-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-paper-grain-accent, .he-btn-paper-grain-accent *, .he-btn-paper-grain-accent *::before, .he-btn-paper-grain-accent *::after { box-sizing: border-box; }
.he-btn-paper-grain-accent h2, .he-btn-paper-grain-accent h3, .he-btn-paper-grain-accent p, .he-btn-paper-grain-accent figure, .he-btn-paper-grain-accent ol, .he-btn-paper-grain-accent ul { margin: 0; }
.he-btn-paper-grain-accent h2, .he-btn-paper-grain-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-paper-grain-accent img, .he-btn-paper-grain-accent svg { display: block; max-width: 100%; }
.he-btn-paper-grain-accent a { color: inherit; }
.he-btn-paper-grain-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-paper-grain-accent { position: relative;
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
.he-btn-paper-grain-accent:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-paper-grain-accent:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-paper-grain-accent:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-paper-grain-accent .label, .he-btn-paper-grain-accent .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-paper-grain-accent .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-paper-grain-accent .deco { pointer-events: none; }
.he-btn-paper-grain-accent:disabled .deco { transition: none; }
.he-btn-paper-grain-accent { --duration: .28s; }
.he-btn-paper-grain-accent .grain { position: absolute;
  inset: 0;
  background-image:
    radial-gradient(var(--button-accent) 0.5px, transparent 0.8px),
    radial-gradient(var(--button-accent) 0.4px, transparent 0.7px);
  background-size: 4px 4px, 7px 7px;
  background-position: 0 0, 2px 3px;
  opacity: .16;
  transition: opacity var(--duration) var(--ease); }
@media (hover: hover) and (pointer: fine) {
.he-btn-paper-grain-accent:not(:disabled):hover .grain { opacity: .3; }


}
.he-btn-paper-grain-accent:not(:disabled):focus-visible .grain { opacity: .3; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-paper-grain-accent, .he-btn-paper-grain-accent *, .he-btn-paper-grain-accent *::before, .he-btn-paper-grain-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnPaperGrainAccent: HoverEffect = {
  id: "btn-paper-grain-accent",
  title: "Paper Grain Accent",
  category: "buttons",
  description: "A static stipple pattern's contrast strengthens on hover and holds.",
  tags: ["buttons","paper","grain","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnPaperGrainAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-paper-grain-accent" type="button">
        <span className="surface" aria-hidden="true">
          <span className="grain deco"></span>
        </span>
        <span className="label">Send invite</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-paper-grain-accent" type="button">
        <span class="surface" aria-hidden="true">
          <span class="grain deco"></span>
        </span>
        <span class="label">Send invite</span>
      </button>`,
};
