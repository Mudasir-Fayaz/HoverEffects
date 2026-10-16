import type { HoverEffect } from "../types";

const css = `.he-btn-duotone-balance{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-duotone-balance, .he-btn-duotone-balance *, .he-btn-duotone-balance *::before, .he-btn-duotone-balance *::after { box-sizing: border-box; }
.he-btn-duotone-balance h2, .he-btn-duotone-balance h3, .he-btn-duotone-balance p, .he-btn-duotone-balance figure, .he-btn-duotone-balance ol, .he-btn-duotone-balance ul { margin: 0; }
.he-btn-duotone-balance h2, .he-btn-duotone-balance h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-duotone-balance img, .he-btn-duotone-balance svg { display: block; max-width: 100%; }
.he-btn-duotone-balance a { color: inherit; }
.he-btn-duotone-balance :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-duotone-balance { position: relative;
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
.he-btn-duotone-balance:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-duotone-balance:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-duotone-balance:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-duotone-balance .label, .he-btn-duotone-balance .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-duotone-balance .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-duotone-balance .deco { pointer-events: none; }
.he-btn-duotone-balance:disabled .deco { transition: none; }
.he-btn-duotone-balance { --duration: .28s; }
.he-btn-duotone-balance .tone { position: absolute;
  left: 0;
  right: 0;
  transition: opacity var(--duration) var(--ease); }
.he-btn-duotone-balance .tone-top { top: 0; bottom: 50%; background: var(--button-accent-soft); opacity: .5; }
.he-btn-duotone-balance .tone-bottom { top: 50%; bottom: 0; background: var(--button-accent-2); opacity: .12; }
@media (hover: hover) and (pointer: fine) {
.he-btn-duotone-balance:not(:disabled):hover .tone-top { opacity: .22; }
.he-btn-duotone-balance:not(:disabled):hover .tone-bottom { opacity: .26; }


}
.he-btn-duotone-balance:not(:disabled):focus-visible .tone-top { opacity: .22; }
.he-btn-duotone-balance:not(:disabled):focus-visible .tone-bottom { opacity: .26; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-duotone-balance, .he-btn-duotone-balance *, .he-btn-duotone-balance *::before, .he-btn-duotone-balance *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnDuotoneBalance: HoverEffect = {
  id: "btn-duotone-balance",
  title: "Duotone Balance",
  category: "buttons",
  description: "Two fixed-boundary tones exchange emphasis on hover.",
  tags: ["buttons","duotone","balance","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnDuotoneBalance() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-duotone-balance" type="button">
        <span className="surface" aria-hidden="true">
          <span className="tone tone-top deco"></span>
          <span className="tone tone-bottom deco"></span>
        </span>
        <span className="label">Compare tiers</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-duotone-balance" type="button">
        <span class="surface" aria-hidden="true">
          <span class="tone tone-top deco"></span>
          <span class="tone tone-bottom deco"></span>
        </span>
        <span class="label">Compare tiers</span>
      </button>`,
};
