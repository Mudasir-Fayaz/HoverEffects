import type { HoverEffect } from "../types";

const css = `.he-btn-endcap-register{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-endcap-register, .he-btn-endcap-register *, .he-btn-endcap-register *::before, .he-btn-endcap-register *::after { box-sizing: border-box; }
.he-btn-endcap-register h2, .he-btn-endcap-register h3, .he-btn-endcap-register p, .he-btn-endcap-register figure, .he-btn-endcap-register ol, .he-btn-endcap-register ul { margin: 0; }
.he-btn-endcap-register h2, .he-btn-endcap-register h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-endcap-register img, .he-btn-endcap-register svg { display: block; max-width: 100%; }
.he-btn-endcap-register a { color: inherit; }
.he-btn-endcap-register :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-endcap-register { position: relative;
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
.he-btn-endcap-register:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-endcap-register:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-endcap-register:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-endcap-register .label, .he-btn-endcap-register .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-endcap-register .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-endcap-register .deco { pointer-events: none; }
.he-btn-endcap-register:disabled .deco { transition: none; }
.he-btn-endcap-register { --duration: .24s; }
.he-btn-endcap-register .face-tex, .he-btn-endcap-register .endcap { background-image: repeating-linear-gradient(
    0deg,
    transparent 0 6px,
    var(--button-accent) 6px 6.8px
  );
  transition: transform var(--duration) var(--ease); }
.he-btn-endcap-register .face-tex { position: absolute; inset: 0; opacity: .14; }
.he-btn-endcap-register .endcap { position: absolute;
  top: 0;
  bottom: 0;
  width: 24px;
  opacity: .18;
  transform: translateY(1.5px); }
.he-btn-endcap-register .endcap-left { left: 0; }
.he-btn-endcap-register .endcap-right { right: 0; }
@media (hover: hover) and (pointer: fine) {
.he-btn-endcap-register:not(:disabled):hover .endcap { transform: translateY(0); }


}
.he-btn-endcap-register:not(:disabled):focus-visible .endcap { transform: translateY(0); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-endcap-register, .he-btn-endcap-register *, .he-btn-endcap-register *::before, .he-btn-endcap-register *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnEndcapRegister: HoverEffect = {
  id: "btn-endcap-register",
  title: "Endcap Register",
  category: "buttons",
  description: "An endcap texture settles into the face rhythm on hover.",
  tags: ["buttons","endcap","register","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnEndcapRegister() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-endcap-register" type="button">
        <span className="surface" aria-hidden="true">
          <span className="face-tex deco"></span>
          <span className="endcap endcap-left deco"></span>
          <span className="endcap endcap-right deco"></span>
        </span>
        <span className="label">Open terminal</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-endcap-register" type="button">
        <span class="surface" aria-hidden="true">
          <span class="face-tex deco"></span>
          <span class="endcap endcap-left deco"></span>
          <span class="endcap endcap-right deco"></span>
        </span>
        <span class="label">Open terminal</span>
      </button>`,
};
