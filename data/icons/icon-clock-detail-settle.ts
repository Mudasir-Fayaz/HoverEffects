import type { HoverEffect } from "../types";

const css = `.he-icon-clock-detail-settle{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-clock-detail-settle, .he-icon-clock-detail-settle *, .he-icon-clock-detail-settle *::before, .he-icon-clock-detail-settle *::after { box-sizing: border-box; }
.he-icon-clock-detail-settle h2, .he-icon-clock-detail-settle h3, .he-icon-clock-detail-settle p, .he-icon-clock-detail-settle figure, .he-icon-clock-detail-settle ol, .he-icon-clock-detail-settle ul { margin: 0; }
.he-icon-clock-detail-settle img, .he-icon-clock-detail-settle svg { display: block; max-width: 100%; }
.he-icon-clock-detail-settle a { color: inherit; }
.he-icon-clock-detail-settle :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-clock-detail-settle {
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
.he-icon-clock-detail-settle:hover { border-color: var(--accent-2); }
.he-icon-clock-detail-settle:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-clock-detail-settle:active { border-color: var(--accent); }
.hi30-icon { display: block; }
.hi30-hand {
  transform-box: view-box;
  transform-origin: center;
  transform: rotate(9deg);
  transition: transform .34s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-clock-detail-settle:hover .hi30-hand { transform: rotate(1deg); }
}
.he-icon-clock-detail-settle:focus-visible .hi30-hand { transform: rotate(1deg); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-clock-detail-settle, .he-icon-clock-detail-settle *, .he-icon-clock-detail-settle *::before, .he-icon-clock-detail-settle *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconClockDetailSettle: HoverEffect = {
  id: "icon-clock-detail-settle",
  title: "Clock Detail Settle",
  category: "icons",
  description: "One hand adjusts ~8°; frame fixed",
  tags: ["icons","clock","detail","settle","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconClockDetailSettle() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-clock-detail-settle" type="button">
        <svg className="hi30-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="8.8" stroke="var(--line-strong)" strokeWidth="1.7" />
          <path d="M12 3v1.7M12 19.3V21M3 12h1.7M19.3 12H21" stroke="var(--line-strong)" strokeWidth="1.5" strokeLinecap="round" />
          <g className="hi30-hand">
            <path d="M12 12V6.6" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
          </g>
          <path d="M12 12l4 2.6" stroke="var(--text-2)" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.3" fill="var(--text-2)" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-clock-detail-settle" type="button">
        <svg class="hi30-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="8.8" stroke="var(--line-strong)" stroke-width="1.7"/>
          <path d="M12 3v1.7M12 19.3V21M3 12h1.7M19.3 12H21" stroke="var(--line-strong)" stroke-width="1.5" stroke-linecap="round"/>
          <g class="hi30-hand">
            <path d="M12 12V6.6" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round"/>
          </g>
          <path d="M12 12l4 2.6" stroke="var(--text-2)" stroke-width="1.6" stroke-linecap="round"/>
          <circle cx="12" cy="12" r="1.3" fill="var(--text-2)"/>
        </svg>
      </button>`,
};
