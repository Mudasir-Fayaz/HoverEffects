import type { HoverEffect } from "../types";

const css = `.he-btn-hatch-register{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-hatch-register, .he-btn-hatch-register *, .he-btn-hatch-register *::before, .he-btn-hatch-register *::after { box-sizing: border-box; }
.he-btn-hatch-register h2, .he-btn-hatch-register h3, .he-btn-hatch-register p, .he-btn-hatch-register figure, .he-btn-hatch-register ol, .he-btn-hatch-register ul { margin: 0; }
.he-btn-hatch-register h2, .he-btn-hatch-register h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-hatch-register img, .he-btn-hatch-register svg { display: block; max-width: 100%; }
.he-btn-hatch-register a { color: inherit; }
.he-btn-hatch-register :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-hatch-register { position: relative;
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
.he-btn-hatch-register:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-hatch-register:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-hatch-register:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-hatch-register .label, .he-btn-hatch-register .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-hatch-register .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-hatch-register .deco { pointer-events: none; }
.he-btn-hatch-register:disabled .deco { transition: none; }
.he-btn-hatch-register { --duration: .26s; }
.he-btn-hatch-register .hatch { position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0 5px,
    var(--button-accent) 5px 6px
  );
  opacity: .16;
  transition: transform var(--duration) var(--ease), opacity var(--duration) var(--ease); }
.he-btn-hatch-register .hatch-b { transform: translate(1.6px, -1.6px); }
@media (hover: hover) and (pointer: fine) {
.he-btn-hatch-register:not(:disabled):hover .hatch { opacity: .26; }
.he-btn-hatch-register:not(:disabled):hover .hatch-b { transform: translate(0, 0); }


}
.he-btn-hatch-register:not(:disabled):focus-visible .hatch { opacity: .26; }
.he-btn-hatch-register:not(:disabled):focus-visible .hatch-b { transform: translate(0, 0); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-hatch-register, .he-btn-hatch-register *, .he-btn-hatch-register *::before, .he-btn-hatch-register *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnHatchRegister: HoverEffect = {
  id: "btn-hatch-register",
  title: "Hatch Register",
  category: "buttons",
  description: "Diagonal hatch layers shift slightly into register as one texture on hover.",
  tags: ["buttons","hatch","register","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnHatchRegister() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-hatch-register" type="button">
        <span className="surface" aria-hidden="true">
          <span className="hatch hatch-a deco"></span>
          <span className="hatch hatch-b deco"></span>
        </span>
        <span className="label">Export report</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-hatch-register" type="button">
        <span class="surface" aria-hidden="true">
          <span class="hatch hatch-a deco"></span>
          <span class="hatch hatch-b deco"></span>
        </span>
        <span class="label">Export report</span>
      </button>`,
};
