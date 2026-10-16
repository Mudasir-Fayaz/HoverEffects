import type { HoverEffect } from "../types";

const css = `.he-icon-map-panel-spread{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-map-panel-spread, .he-icon-map-panel-spread *, .he-icon-map-panel-spread *::before, .he-icon-map-panel-spread *::after { box-sizing: border-box; }
.he-icon-map-panel-spread h2, .he-icon-map-panel-spread h3, .he-icon-map-panel-spread p, .he-icon-map-panel-spread figure, .he-icon-map-panel-spread ol, .he-icon-map-panel-spread ul { margin: 0; }
.he-icon-map-panel-spread img, .he-icon-map-panel-spread svg { display: block; max-width: 100%; }
.he-icon-map-panel-spread a { color: inherit; }
.he-icon-map-panel-spread :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-map-panel-spread {
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
.he-icon-map-panel-spread:hover { border-color: var(--accent-2); }
.he-icon-map-panel-spread:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-map-panel-spread:active { border-color: var(--accent); }
.hi12-icon { display: block; }
.hi12-p1, .hi12-p3 { transition: transform .26s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .he-icon-map-panel-spread:hover .hi12-p1 { transform: translateX(-1.8px); }
  .he-icon-map-panel-spread:hover .hi12-p3 { transform: translateX(1.8px); }
}
.he-icon-map-panel-spread:focus-visible .hi12-p1 { transform: translateX(-1.8px); }
.he-icon-map-panel-spread:focus-visible .hi12-p3 { transform: translateX(1.8px); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-map-panel-spread, .he-icon-map-panel-spread *, .he-icon-map-panel-spread *::before, .he-icon-map-panel-spread *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconMapPanelSpread: HoverEffect = {
  id: "icon-map-panel-spread",
  title: "Map Panel Spread",
  category: "icons",
  description: "Side panels spread 2 px; folds stay fixed",
  tags: ["icons","map","panel","spread","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconMapPanelSpread() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-map-panel-spread" type="button">
        <svg className="hi12-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect className="hi12-p1" x="4.2" y="7" width="5.2" height="10" rx="1.4" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <rect x="9.6" y="7" width="4.8" height="10" rx="1.4" fill="var(--surface-2)" stroke="var(--text-2)" />
          <rect className="hi12-p3" x="14.6" y="7" width="5.2" height="10" rx="1.4" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <path d="M9.5 7.4v9.2M14.5 7.4v9.2" stroke="var(--accent-2)" strokeWidth="1.2" />
          <path d="M6.2 12.4 7.9 11v2.8z" fill="var(--accent)" />
          <circle cx="17.4" cy="12.6" r="1" fill="var(--accent)" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-map-panel-spread" type="button">
        <svg class="hi12-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect class="hi12-p1" x="4.2" y="7" width="5.2" height="10" rx="1.4" fill="var(--surface-2)" stroke="var(--line-strong)"/>
          <rect x="9.6" y="7" width="4.8" height="10" rx="1.4" fill="var(--surface-2)" stroke="var(--text-2)"/>
          <rect class="hi12-p3" x="14.6" y="7" width="5.2" height="10" rx="1.4" fill="var(--surface-2)" stroke="var(--line-strong)"/>
          <path d="M9.5 7.4v9.2M14.5 7.4v9.2" stroke="var(--accent-2)" stroke-width="1.2"/>
          <path d="M6.2 12.4 7.9 11v2.8z" fill="var(--accent)"/>
          <circle cx="17.4" cy="12.6" r="1" fill="var(--accent)"/>
        </svg>
      </button>`,
};
