import type { HoverEffect } from "../types";

const css = `.he-btn-side-tab-tuck{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-side-tab-tuck, .he-btn-side-tab-tuck *, .he-btn-side-tab-tuck *::before, .he-btn-side-tab-tuck *::after { box-sizing: border-box; }
.he-btn-side-tab-tuck h2, .he-btn-side-tab-tuck h3, .he-btn-side-tab-tuck p, .he-btn-side-tab-tuck figure, .he-btn-side-tab-tuck ol, .he-btn-side-tab-tuck ul { margin: 0; }
.he-btn-side-tab-tuck h2, .he-btn-side-tab-tuck h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-side-tab-tuck img, .he-btn-side-tab-tuck svg { display: block; max-width: 100%; }
.he-btn-side-tab-tuck a { color: inherit; }
.he-btn-side-tab-tuck :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-side-tab-tuck { position: relative;
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
.he-btn-side-tab-tuck:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-side-tab-tuck:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-side-tab-tuck:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-side-tab-tuck .label, .he-btn-side-tab-tuck .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-side-tab-tuck .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-side-tab-tuck .deco { pointer-events: none; }
.he-btn-side-tab-tuck:disabled .deco { transition: none; }
.he-btn-side-tab-tuck { --duration: .22s; }
.he-btn-side-tab-tuck .tab { position: absolute;
  top: 50%;
  width: 5px;
  height: 20px;
  margin-top: -10px;
  border-radius: 3px;
  background: var(--button-accent-soft);
  border: 1px solid var(--button-accent-2);
  transition: transform var(--duration) var(--ease); }
.he-btn-side-tab-tuck .tab-left { left: 3px; }
.he-btn-side-tab-tuck .tab-right { right: 3px; }
@media (hover: hover) and (pointer: fine) {
.he-btn-side-tab-tuck:not(:disabled):hover .tab-left { transform: translateX(2px); }
.he-btn-side-tab-tuck:not(:disabled):hover .tab-right { transform: translateX(-2px); }


}
.he-btn-side-tab-tuck:not(:disabled):focus-visible .tab-left { transform: translateX(2px); }
.he-btn-side-tab-tuck:not(:disabled):focus-visible .tab-right { transform: translateX(-2px); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-side-tab-tuck, .he-btn-side-tab-tuck *, .he-btn-side-tab-tuck *::before, .he-btn-side-tab-tuck *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnSideTabTuck: HoverEffect = {
  id: "btn-side-tab-tuck",
  title: "Side Tab Tuck",
  category: "buttons",
  description: "End tabs tuck inward inside reserved bounds on hover.",
  tags: ["buttons","side","tab","tuck","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnSideTabTuck() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-side-tab-tuck" type="button">
        <span className="surface" aria-hidden="true">
          <span className="tab tab-left deco"></span>
          <span className="tab tab-right deco"></span>
        </span>
        <span className="label">Pin to sidebar</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-side-tab-tuck" type="button">
        <span class="surface" aria-hidden="true">
          <span class="tab tab-left deco"></span>
          <span class="tab tab-right deco"></span>
        </span>
        <span class="label">Pin to sidebar</span>
      </button>`,
};
