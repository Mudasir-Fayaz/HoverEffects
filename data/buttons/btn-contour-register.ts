import type { HoverEffect } from "../types";

const css = `.he-btn-contour-register{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-contour-register, .he-btn-contour-register *, .he-btn-contour-register *::before, .he-btn-contour-register *::after { box-sizing: border-box; }
.he-btn-contour-register h2, .he-btn-contour-register h3, .he-btn-contour-register p, .he-btn-contour-register figure, .he-btn-contour-register ol, .he-btn-contour-register ul { margin: 0; }
.he-btn-contour-register h2, .he-btn-contour-register h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-contour-register img, .he-btn-contour-register svg { display: block; max-width: 100%; }
.he-btn-contour-register a { color: inherit; }
.he-btn-contour-register :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-contour-register { position: relative;
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
.he-btn-contour-register:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-contour-register:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-contour-register:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-contour-register .label, .he-btn-contour-register .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-contour-register .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-contour-register .deco { pointer-events: none; }
.he-btn-contour-register:disabled .deco { transition: none; }
.he-btn-contour-register { --duration: .26s; }
.he-btn-contour-register .contour { position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 1.5px solid var(--button-accent);
  opacity: .28;
  transition: transform var(--duration) var(--ease), opacity var(--duration) var(--ease); }
.he-btn-contour-register .contour-a { left: -80px; top: -150px; transform: translate(-2px, 1px); }
.he-btn-contour-register .contour-b { right: -90px; bottom: -160px; transform: translate(2px, -1px); }
@media (hover: hover) and (pointer: fine) {
.he-btn-contour-register:not(:disabled):hover .contour { transform: translate(0, 0); opacity: .5; }


}
.he-btn-contour-register:not(:disabled):focus-visible .contour { transform: translate(0, 0); opacity: .5; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-contour-register, .he-btn-contour-register *, .he-btn-contour-register *::before, .he-btn-contour-register *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnContourRegister: HoverEffect = {
  id: "btn-contour-register",
  title: "Contour Register",
  category: "buttons",
  description: "Clipped open curves nudge into mirrored alignment on hover.",
  tags: ["buttons","contour","register","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnContourRegister() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-contour-register" type="button">
        <span className="surface" aria-hidden="true">
          <span className="contour contour-a deco"></span>
          <span className="contour contour-b deco"></span>
        </span>
        <span className="label">Track order</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-contour-register" type="button">
        <span class="surface" aria-hidden="true">
          <span class="contour contour-a deco"></span>
          <span class="contour contour-b deco"></span>
        </span>
        <span class="label">Track order</span>
      </button>`,
};
