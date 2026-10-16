import type { HoverEffect } from "../types";

const css = `.he-icon-compass-needle-align{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-compass-needle-align, .he-icon-compass-needle-align *, .he-icon-compass-needle-align *::before, .he-icon-compass-needle-align *::after { box-sizing: border-box; }
.he-icon-compass-needle-align h2, .he-icon-compass-needle-align h3, .he-icon-compass-needle-align p, .he-icon-compass-needle-align figure, .he-icon-compass-needle-align ol, .he-icon-compass-needle-align ul { margin: 0; }
.he-icon-compass-needle-align img, .he-icon-compass-needle-align svg { display: block; max-width: 100%; }
.he-icon-compass-needle-align a { color: inherit; }
.he-icon-compass-needle-align :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-compass-needle-align {
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
.he-icon-compass-needle-align:hover { border-color: var(--accent-2); }
.he-icon-compass-needle-align:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-compass-needle-align:active { border-color: var(--accent); }
.hi13-icon { display: block; }
.hi13-needle {
  transform-box: view-box;
  transform-origin: center;
  transform: rotate(-22deg);
  transition: transform .5s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-compass-needle-align:hover .hi13-needle { transform: rotate(-4deg); }
}
.he-icon-compass-needle-align:focus-visible .hi13-needle { transform: rotate(-4deg); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-compass-needle-align, .he-icon-compass-needle-align *, .he-icon-compass-needle-align *::before, .he-icon-compass-needle-align *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconCompassNeedleAlign: HoverEffect = {
  id: "icon-compass-needle-align",
  title: "Compass Needle Align",
  category: "icons",
  description: "Needle nudges ~18° inside a fixed frame",
  tags: ["icons","compass","needle","align","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconCompassNeedleAlign() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-compass-needle-align" type="button">
        <svg className="hi13-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="8.6" stroke="var(--line-strong)" strokeWidth="1.7" />
          <path d="M12 2.6v1.8M12 19.6v1.8M2.6 12h1.8M19.6 12h1.8" stroke="var(--line-strong)" strokeWidth="1.5" strokeLinecap="round" />
          <g className="hi13-needle">
            <path d="M12 6.6 13.5 12h-3z" fill="var(--accent)" />
            <path d="M12 17.4 13.5 12h-3z" fill="var(--text-2)" />
          </g>
          <circle cx="12" cy="12" r="1.3" fill="var(--text-2)" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-compass-needle-align" type="button">
        <svg class="hi13-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="8.6" stroke="var(--line-strong)" stroke-width="1.7"/>
          <path d="M12 2.6v1.8M12 19.6v1.8M2.6 12h1.8M19.6 12h1.8" stroke="var(--line-strong)" stroke-width="1.5" stroke-linecap="round"/>
          <g class="hi13-needle">
            <path d="M12 6.6 13.5 12h-3z" fill="var(--accent)"/>
            <path d="M12 17.4 13.5 12h-3z" fill="var(--text-2)"/>
          </g>
          <circle cx="12" cy="12" r="1.3" fill="var(--text-2)"/>
        </svg>
      </button>`,
};
