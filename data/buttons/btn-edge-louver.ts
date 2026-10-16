import type { HoverEffect } from "../types";

const css = `.he-btn-edge-louver{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-edge-louver, .he-btn-edge-louver *, .he-btn-edge-louver *::before, .he-btn-edge-louver *::after { box-sizing: border-box; }
.he-btn-edge-louver h2, .he-btn-edge-louver h3, .he-btn-edge-louver p, .he-btn-edge-louver figure, .he-btn-edge-louver ol, .he-btn-edge-louver ul { margin: 0; }
.he-btn-edge-louver h2, .he-btn-edge-louver h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-edge-louver img, .he-btn-edge-louver svg { display: block; max-width: 100%; }
.he-btn-edge-louver a { color: inherit; }
.he-btn-edge-louver :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-edge-louver { position: relative;
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
.he-btn-edge-louver:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-edge-louver:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-edge-louver:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-edge-louver .label, .he-btn-edge-louver .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-edge-louver .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-edge-louver .deco { pointer-events: none; }
.he-btn-edge-louver:disabled .deco { transition: none; }
.he-btn-edge-louver { --duration: .22s; }
.he-btn-edge-louver .louver { position: absolute;
  left: 16px;
  right: 16px;
  height: 5px;
  background-image: repeating-linear-gradient(
    115deg,
    transparent 0 5px,
    var(--button-accent) 5px 6.2px
  );
  opacity: .45;
  transition: transform var(--duration) var(--ease), opacity var(--duration) var(--ease); }
.he-btn-edge-louver .louver-top { top: 8px; }
.he-btn-edge-louver .louver-bottom { bottom: 8px; }
@media (hover: hover) and (pointer: fine) {
.he-btn-edge-louver:not(:disabled):hover .louver-top { transform: rotate(3deg); opacity: .75; }
.he-btn-edge-louver:not(:disabled):hover .louver-bottom { transform: rotate(-3deg); opacity: .75; }


}
.he-btn-edge-louver:not(:disabled):focus-visible .louver-top { transform: rotate(3deg); opacity: .75; }
.he-btn-edge-louver:not(:disabled):focus-visible .louver-bottom { transform: rotate(-3deg); opacity: .75; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-edge-louver, .he-btn-edge-louver *, .he-btn-edge-louver *::before, .he-btn-edge-louver *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnEdgeLouver: HoverEffect = {
  id: "btn-edge-louver",
  title: "Edge Louver",
  category: "buttons",
  description: "Edge hatch strips rotate a few degrees to open like louvers on hover.",
  tags: ["buttons","edge","louver","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnEdgeLouver() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-edge-louver" type="button">
        <span className="surface" aria-hidden="true">
          <span className="louver louver-top deco"></span>
          <span className="louver louver-bottom deco"></span>
        </span>
        <span className="label">Start trial</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-edge-louver" type="button">
        <span class="surface" aria-hidden="true">
          <span class="louver louver-top deco"></span>
          <span class="louver louver-bottom deco"></span>
        </span>
        <span class="label">Start trial</span>
      </button>`,
};
