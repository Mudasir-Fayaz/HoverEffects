import type { HoverEffect } from "../types";

const css = `.he-btn-checker-register{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-checker-register, .he-btn-checker-register *, .he-btn-checker-register *::before, .he-btn-checker-register *::after { box-sizing: border-box; }
.he-btn-checker-register h2, .he-btn-checker-register h3, .he-btn-checker-register p, .he-btn-checker-register figure, .he-btn-checker-register ol, .he-btn-checker-register ul { margin: 0; }
.he-btn-checker-register h2, .he-btn-checker-register h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-checker-register img, .he-btn-checker-register svg { display: block; max-width: 100%; }
.he-btn-checker-register a { color: inherit; }
.he-btn-checker-register :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-checker-register { position: relative;
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
.he-btn-checker-register:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-checker-register:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-checker-register:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-checker-register .label, .he-btn-checker-register .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-checker-register .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-checker-register .deco { pointer-events: none; }
.he-btn-checker-register:disabled .deco { transition: none; }
.he-btn-checker-register { --duration: .28s; }
.he-btn-checker-register .checker { position: absolute;
  inset: 0;
  background-image: conic-gradient(
    var(--button-accent) 25%,
    transparent 25% 50%,
    var(--button-accent) 50% 75%,
    transparent 75%
  );
  background-size: 8px 8px;
  opacity: .12;
  transition: transform var(--duration) var(--ease), opacity var(--duration) var(--ease); }
.he-btn-checker-register .checker-b { transform: translateX(4px); opacity: .16; }
@media (hover: hover) and (pointer: fine) {
.he-btn-checker-register:not(:disabled):hover .checker-b { transform: translateX(0); opacity: .22; }


}
.he-btn-checker-register:not(:disabled):focus-visible .checker-b { transform: translateX(0); opacity: .22; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-checker-register, .he-btn-checker-register *, .he-btn-checker-register *::before, .he-btn-checker-register *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnCheckerRegister: HoverEffect = {
  id: "btn-checker-register",
  title: "Checker Register",
  category: "buttons",
  description: "An accent checker settles half a cell into register on hover.",
  tags: ["buttons","checker","register","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnCheckerRegister() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-checker-register" type="button">
        <span className="surface" aria-hidden="true">
          <span className="checker checker-a deco"></span>
          <span className="checker checker-b deco"></span>
        </span>
        <span className="label">Run audit</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-checker-register" type="button">
        <span class="surface" aria-hidden="true">
          <span class="checker checker-a deco"></span>
          <span class="checker checker-b deco"></span>
        </span>
        <span class="label">Run audit</span>
      </button>`,
};
