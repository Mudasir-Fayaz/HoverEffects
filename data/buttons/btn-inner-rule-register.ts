import type { HoverEffect } from "../types";

const css = `.he-btn-inner-rule-register{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-inner-rule-register, .he-btn-inner-rule-register *, .he-btn-inner-rule-register *::before, .he-btn-inner-rule-register *::after { box-sizing: border-box; }
.he-btn-inner-rule-register h2, .he-btn-inner-rule-register h3, .he-btn-inner-rule-register p, .he-btn-inner-rule-register figure, .he-btn-inner-rule-register ol, .he-btn-inner-rule-register ul { margin: 0; }
.he-btn-inner-rule-register h2, .he-btn-inner-rule-register h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-inner-rule-register img, .he-btn-inner-rule-register svg { display: block; max-width: 100%; }
.he-btn-inner-rule-register a { color: inherit; }
.he-btn-inner-rule-register :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-inner-rule-register { position: relative;
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
.he-btn-inner-rule-register:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-inner-rule-register:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-inner-rule-register:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-inner-rule-register .label, .he-btn-inner-rule-register .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-inner-rule-register .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-inner-rule-register .deco { pointer-events: none; }
.he-btn-inner-rule-register:disabled .deco { transition: none; }
.he-btn-inner-rule-register { --duration: .22s; }
.he-btn-inner-rule-register .rule { position: absolute;
  left: 50%;
  width: 46px;
  height: 1.5px;
  margin-left: -23px;
  border-radius: 2px;
  background: var(--button-accent);
  opacity: .5;
  transition: transform var(--duration) var(--ease), opacity var(--duration) var(--ease); }
.he-btn-inner-rule-register .rule-above { top: 9px; transform: translateX(2px); }
.he-btn-inner-rule-register .rule-below { bottom: 9px; transform: translateX(-2px); }
@media (hover: hover) and (pointer: fine) {
.he-btn-inner-rule-register:not(:disabled):hover .rule { transform: translateX(0); opacity: .82; }


}
.he-btn-inner-rule-register:not(:disabled):focus-visible .rule { transform: translateX(0); opacity: .82; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-inner-rule-register, .he-btn-inner-rule-register *, .he-btn-inner-rule-register *::before, .he-btn-inner-rule-register *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnInnerRuleRegister: HoverEffect = {
  id: "btn-inner-rule-register",
  title: "Inner Rule Register",
  category: "buttons",
  description: "Short rules slide into centred registration on hover.",
  tags: ["buttons","inner","rule","register","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnInnerRuleRegister() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-inner-rule-register" type="button">
        <span className="rule rule-above deco"></span>
        <span className="rule rule-below deco"></span>
        <span className="label">Rename file</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-inner-rule-register" type="button">
        <span class="rule rule-above deco"></span>
        <span class="rule rule-below deco"></span>
        <span class="label">Rename file</span>
      </button>`,
};
