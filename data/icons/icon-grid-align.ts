import type { HoverEffect } from "../types";

const css = `.he-icon-grid-align{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-grid-align, .he-icon-grid-align *, .he-icon-grid-align *::before, .he-icon-grid-align *::after { box-sizing: border-box; }
.he-icon-grid-align h2, .he-icon-grid-align h3, .he-icon-grid-align p, .he-icon-grid-align figure, .he-icon-grid-align ol, .he-icon-grid-align ul { margin: 0; }
.he-icon-grid-align img, .he-icon-grid-align svg { display: block; max-width: 100%; }
.he-icon-grid-align a { color: inherit; }
.he-icon-grid-align :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-grid-align {
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
  transition: border-color .24s var(--ease), background-color .24s var(--ease);
}
.he-icon-grid-align:hover { border-color: var(--accent-2); background: var(--accent-soft); }
.he-icon-grid-align:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-grid-align:active { border-color: var(--accent); }
.hi04-icon { display: block; }
.hi04-t {
  transform: translate(var(--dx, 0px), var(--dy, 0px));
  transition: transform .3s var(--ease-out), fill .24s var(--ease);
}
/* Tiles rest slightly spread, then pull into the grid on hover. Offsets live
   here (not inline) so the hover rule can win the cascade. */
.hi04-t1 { --dx: -2.8px; --dy: -2.6px; fill: var(--accent-2); }
.hi04-t2 { --dx: 2.6px; --dy: -2.8px; fill: var(--line-strong); transition-delay: 0ms, 0ms; }
.hi04-t3 { --dx: -2.6px; --dy: 2.8px; fill: var(--line-strong); transition-delay: 50ms, 0ms; }
.hi04-t4 { --dx: 2.8px; --dy: 2.6px; fill: var(--accent); transition-delay: 100ms, 0ms; }
@media (hover: hover) and (pointer: fine) {
  .he-icon-grid-align:hover .hi04-t { --dx: 0px; --dy: 0px; }
  .he-icon-grid-align:hover .hi04-t2,
  .he-icon-grid-align:hover .hi04-t3 { fill: var(--accent-2); }
}
.he-icon-grid-align:focus-visible .hi04-t { --dx: 0px; --dy: 0px; }
.he-icon-grid-align:focus-visible .hi04-t2,
.he-icon-grid-align:focus-visible .hi04-t3 { fill: var(--accent-2); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-grid-align, .he-icon-grid-align *, .he-icon-grid-align *::before, .he-icon-grid-align *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconGridAlign: HoverEffect = {
  id: "icon-grid-align",
  title: "Grid Align",
  category: "icons",
  description: "Four spread tiles pull together into a tidy grid",
  tags: ["icons","grid","align","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconGridAlign() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-grid-align" type="button">
        <svg className="hi04-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect className="hi04-t hi04-t1" x="4" y="4" width="7" height="7" rx="1.6" />
          <rect className="hi04-t hi04-t2" x="13" y="4" width="7" height="7" rx="1.6" />
          <rect className="hi04-t hi04-t3" x="4" y="13" width="7" height="7" rx="1.6" />
          <rect className="hi04-t hi04-t4" x="13" y="13" width="7" height="7" rx="1.6" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-grid-align" type="button">
        <svg class="hi04-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect class="hi04-t hi04-t1" x="4" y="4" width="7" height="7" rx="1.6"/>
          <rect class="hi04-t hi04-t2" x="13" y="4" width="7" height="7" rx="1.6"/>
          <rect class="hi04-t hi04-t3" x="4" y="13" width="7" height="7" rx="1.6"/>
          <rect class="hi04-t hi04-t4" x="13" y="13" width="7" height="7" rx="1.6"/>
        </svg>
      </button>`,
};
