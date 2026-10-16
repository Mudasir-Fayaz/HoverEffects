import type { HoverEffect } from "../types";

const css = `.he-btn-satin-balance{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-satin-balance, .he-btn-satin-balance *, .he-btn-satin-balance *::before, .he-btn-satin-balance *::after { box-sizing: border-box; }
.he-btn-satin-balance h2, .he-btn-satin-balance h3, .he-btn-satin-balance p, .he-btn-satin-balance figure, .he-btn-satin-balance ol, .he-btn-satin-balance ul { margin: 0; }
.he-btn-satin-balance h2, .he-btn-satin-balance h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-satin-balance img, .he-btn-satin-balance svg { display: block; max-width: 100%; }
.he-btn-satin-balance a { color: inherit; }
.he-btn-satin-balance :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-satin-balance { position: relative;
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
.he-btn-satin-balance:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-satin-balance:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-satin-balance:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-satin-balance .label, .he-btn-satin-balance .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-satin-balance .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-satin-balance .deco { pointer-events: none; }
.he-btn-satin-balance:disabled .deco { transition: none; }
.he-btn-satin-balance { --duration: .3s; }
.he-btn-satin-balance .band { position: absolute;
  left: 0;
  right: 0;
  transition: opacity var(--duration) var(--ease); }
.he-btn-satin-balance .band-top { top: 0;
  height: 52%;
  background: linear-gradient(180deg, var(--button-seam), transparent);
  opacity: .5; }
.he-btn-satin-balance .band-bottom { bottom: 0;
  height: 52%;
  background: linear-gradient(0deg, var(--button-line), transparent);
  opacity: .45; }
@media (hover: hover) and (pointer: fine) {
.he-btn-satin-balance:not(:disabled):hover .band-top { opacity: .8; }
.he-btn-satin-balance:not(:disabled):hover .band-bottom { opacity: .22; }


}
.he-btn-satin-balance:not(:disabled):focus-visible .band-top { opacity: .8; }
.he-btn-satin-balance:not(:disabled):focus-visible .band-bottom { opacity: .22; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-satin-balance, .he-btn-satin-balance *, .he-btn-satin-balance *::before, .he-btn-satin-balance *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnSatinBalance: HoverEffect = {
  id: "btn-satin-balance",
  title: "Satin Balance",
  category: "buttons",
  description: "Feathered tonal bands rebalance for a satin sheen on hover.",
  tags: ["buttons","satin","balance","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnSatinBalance() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-satin-balance" type="button">
        <span className="surface" aria-hidden="true">
          <span className="band band-top deco"></span>
          <span className="band band-bottom deco"></span>
        </span>
        <span className="label">Upgrade plan</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-satin-balance" type="button">
        <span class="surface" aria-hidden="true">
          <span class="band band-top deco"></span>
          <span class="band band-bottom deco"></span>
        </span>
        <span class="label">Upgrade plan</span>
      </button>`,
};
