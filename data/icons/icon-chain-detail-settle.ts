import type { HoverEffect } from "../types";

const css = `.he-icon-chain-detail-settle{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-chain-detail-settle, .he-icon-chain-detail-settle *, .he-icon-chain-detail-settle *::before, .he-icon-chain-detail-settle *::after { box-sizing: border-box; }
.he-icon-chain-detail-settle h2, .he-icon-chain-detail-settle h3, .he-icon-chain-detail-settle p, .he-icon-chain-detail-settle figure, .he-icon-chain-detail-settle ol, .he-icon-chain-detail-settle ul { margin: 0; }
.he-icon-chain-detail-settle img, .he-icon-chain-detail-settle svg { display: block; max-width: 100%; }
.he-icon-chain-detail-settle a { color: inherit; }
.he-icon-chain-detail-settle :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-chain-detail-settle {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  background: var(--surface);
  color: var(--text-2);
  cursor: pointer;
  transition: border-color .2s var(--ease);
}
.he-icon-chain-detail-settle:hover { border-color: var(--accent-2); }
.he-icon-chain-detail-settle:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-chain-detail-settle:active { border-color: var(--accent); }
.hi20-icon { display: block; }
.hi20-link2 {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(10deg) translateX(1px);
  transition: transform .28s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-chain-detail-settle:hover .hi20-link2 { transform: rotate(0deg) translateX(0); }
}
.he-icon-chain-detail-settle:focus-visible .hi20-link2 { transform: rotate(0deg) translateX(0); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-chain-detail-settle, .he-icon-chain-detail-settle *, .he-icon-chain-detail-settle *::before, .he-icon-chain-detail-settle *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconChainDetailSettle: HoverEffect = {
  id: "icon-chain-detail-settle",
  title: "Chain Detail Settle",
  category: "icons",
  description: "Links straighten a few degrees",
  tags: ["icons","chain","detail","settle","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconChainDetailSettle() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-chain-detail-settle" type="button">
        <svg className="hi20-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="3.6" y="8.2" width="13.4" height="7.6" rx="3.8" stroke="var(--accent-2)" strokeWidth="1.6" />
          <rect className="hi20-link2" x="10" y="9.6" width="13.4" height="7.6" rx="3.8" stroke="var(--text-2)" strokeWidth="1.6" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-chain-detail-settle" type="button">
        <svg class="hi20-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="3.6" y="8.2" width="13.4" height="7.6" rx="3.8" stroke="var(--accent-2)" stroke-width="1.6"/>
          <rect class="hi20-link2" x="10" y="9.6" width="13.4" height="7.6" rx="3.8" stroke="var(--text-2)" stroke-width="1.6"/>
        </svg>
      </button>`,
};
