import type { HoverEffect } from "../types";

const css = `.he-btn-seam-dock{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-seam-dock, .he-btn-seam-dock *, .he-btn-seam-dock *::before, .he-btn-seam-dock *::after { box-sizing: border-box; }
.he-btn-seam-dock h2, .he-btn-seam-dock h3, .he-btn-seam-dock p, .he-btn-seam-dock figure, .he-btn-seam-dock ol, .he-btn-seam-dock ul { margin: 0; }
.he-btn-seam-dock h2, .he-btn-seam-dock h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-seam-dock img, .he-btn-seam-dock svg { display: block; max-width: 100%; }
.he-btn-seam-dock a { color: inherit; }
.he-btn-seam-dock :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-seam-dock { position: relative;
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
.he-btn-seam-dock:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-seam-dock:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-seam-dock:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-seam-dock .label, .he-btn-seam-dock .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-seam-dock .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-seam-dock .deco { pointer-events: none; }
.he-btn-seam-dock:disabled .deco { transition: none; }
.he-btn-seam-dock { --duration: .26s; }
.he-btn-seam-dock .seam { position: absolute;
  background: var(--button-accent);
  opacity: .5;
  transition: transform var(--duration) var(--ease), opacity var(--duration) var(--ease); }
.he-btn-seam-dock .seam-left { left: 7px; top: 7px; bottom: 7px; width: 1.5px; }
.he-btn-seam-dock .seam-right { right: 7px; top: 7px; bottom: 7px; width: 1.5px; }
.he-btn-seam-dock .seam-top, .he-btn-seam-dock .seam-bottom { height: 1.5px; width: 36%; }
.he-btn-seam-dock .seam-top-a { top: 7px; left: 14px; transform: translateX(5px); }
.he-btn-seam-dock .seam-top-b { top: 7px; right: 14px; transform: translateX(5px); }
.he-btn-seam-dock .seam-bottom-a { bottom: 7px; left: 14px; transform: translateX(-5px); }
.he-btn-seam-dock .seam-bottom-b { bottom: 7px; right: 14px; transform: translateX(-5px); }
@media (hover: hover) and (pointer: fine) {
.he-btn-seam-dock:not(:disabled):hover .seam { transform: translateX(0); opacity: .78; }


}
.he-btn-seam-dock:not(:disabled):focus-visible .seam { transform: translateX(0); opacity: .78; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-seam-dock, .he-btn-seam-dock *, .he-btn-seam-dock *::before, .he-btn-seam-dock *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnSeamDock: HoverEffect = {
  id: "btn-seam-dock",
  title: "Seam Dock",
  category: "buttons",
  description: "A segmented outline docks its two seam gaps together on hover.",
  tags: ["buttons","seam","dock","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnSeamDock() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-seam-dock" type="button">
        <span className="surface" aria-hidden="true">
          <span className="seam seam-left deco"></span>
          <span className="seam seam-right deco"></span>
          <span className="seam seam-top seam-top-a deco"></span>
          <span className="seam seam-top seam-top-b deco"></span>
          <span className="seam seam-bottom seam-bottom-a deco"></span>
          <span className="seam seam-bottom seam-bottom-b deco"></span>
        </span>
        <span className="label">Save draft</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-seam-dock" type="button">
        <span class="surface" aria-hidden="true">
          <span class="seam seam-left deco"></span>
          <span class="seam seam-right deco"></span>
          <span class="seam seam-top seam-top-a deco"></span>
          <span class="seam seam-top seam-top-b deco"></span>
          <span class="seam seam-bottom seam-bottom-a deco"></span>
          <span class="seam seam-bottom seam-bottom-b deco"></span>
        </span>
        <span class="label">Save draft</span>
      </button>`,
};
