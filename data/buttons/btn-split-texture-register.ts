import type { HoverEffect } from "../types";

const css = `.he-btn-split-texture-register{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-split-texture-register, .he-btn-split-texture-register *, .he-btn-split-texture-register *::before, .he-btn-split-texture-register *::after { box-sizing: border-box; }
.he-btn-split-texture-register h2, .he-btn-split-texture-register h3, .he-btn-split-texture-register p, .he-btn-split-texture-register figure, .he-btn-split-texture-register ol, .he-btn-split-texture-register ul { margin: 0; }
.he-btn-split-texture-register h2, .he-btn-split-texture-register h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-split-texture-register img, .he-btn-split-texture-register svg { display: block; max-width: 100%; }
.he-btn-split-texture-register a { color: inherit; }
.he-btn-split-texture-register :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-split-texture-register { position: relative;
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
.he-btn-split-texture-register:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-split-texture-register:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-split-texture-register:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-split-texture-register .label, .he-btn-split-texture-register .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-split-texture-register .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-split-texture-register .deco { pointer-events: none; }
.he-btn-split-texture-register:disabled .deco { transition: none; }
.he-btn-split-texture-register { --duration: .24s; }
.he-btn-split-texture-register .tex-half { position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  background-image: repeating-linear-gradient(
    90deg,
    transparent 0 7px,
    var(--button-accent) 7px 7.8px
  );
  opacity: .16;
  transition: transform var(--duration) var(--ease); }
.he-btn-split-texture-register .tex-left { left: 0; }
.he-btn-split-texture-register .tex-right { left: 50%; transform: translateX(1.5px); }
@media (hover: hover) and (pointer: fine) {
.he-btn-split-texture-register:not(:disabled):hover .tex-right { transform: translateX(0); }


}
.he-btn-split-texture-register:not(:disabled):focus-visible .tex-right { transform: translateX(0); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-split-texture-register, .he-btn-split-texture-register *, .he-btn-split-texture-register *::before, .he-btn-split-texture-register *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnSplitTextureRegister: HoverEffect = {
  id: "btn-split-texture-register",
  title: "Split Texture Register",
  category: "buttons",
  description: "Two texture halves register the stripe rhythm on hover.",
  tags: ["buttons","split","texture","register","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnSplitTextureRegister() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-split-texture-register" type="button">
        <span className="surface" aria-hidden="true">
          <span className="tex-half tex-left deco"></span>
          <span className="tex-half tex-right deco"></span>
        </span>
        <span className="label">Merge branches</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-split-texture-register" type="button">
        <span class="surface" aria-hidden="true">
          <span class="tex-half tex-left deco"></span>
          <span class="tex-half tex-right deco"></span>
        </span>
        <span class="label">Merge branches</span>
      </button>`,
};
