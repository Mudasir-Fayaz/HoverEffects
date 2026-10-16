import type { HoverEffect } from "../types";

const css = `.he-icon-puzzle-align{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-puzzle-align, .he-icon-puzzle-align *, .he-icon-puzzle-align *::before, .he-icon-puzzle-align *::after { box-sizing: border-box; }
.he-icon-puzzle-align h2, .he-icon-puzzle-align h3, .he-icon-puzzle-align p, .he-icon-puzzle-align figure, .he-icon-puzzle-align ol, .he-icon-puzzle-align ul { margin: 0; }
.he-icon-puzzle-align img, .he-icon-puzzle-align svg { display: block; max-width: 100%; }
.he-icon-puzzle-align a { color: inherit; }
.he-icon-puzzle-align :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-puzzle-align {
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
.he-icon-puzzle-align:hover { border-color: var(--accent-2); }
.he-icon-puzzle-align:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-puzzle-align:active { border-color: var(--accent); }
.hi19-icon { display: block; }
.hi19-piece { transition: transform .24s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .he-icon-puzzle-align:hover .hi19-piece { transform: translateX(0); }
}
.he-icon-puzzle-align:focus-visible .hi19-piece { transform: translateX(0); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-puzzle-align, .he-icon-puzzle-align *, .he-icon-puzzle-align *::before, .he-icon-puzzle-align *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconPuzzleAlign: HoverEffect = {
  id: "icon-puzzle-align",
  title: "Puzzle Align",
  category: "icons",
  description: "Pieces move 2 px toward alignment",
  tags: ["icons","puzzle","align","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconPuzzleAlign() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-puzzle-align" type="button">
        <svg className="hi19-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M3.4 8h9.1v3.1a1.9 1.9 0 1 1 0 3.8V18H3.4z" fill="var(--surface-2)" stroke="var(--accent-2)" strokeWidth="1.6" strokeLinejoin="round" />
          <path className="hi19-piece" d="M20.6 8h-9.1v3.1a1.9 1.9 0 1 0 0 3.8V18h9.1z" fill="var(--surface-2)" stroke="var(--text-2)" strokeWidth="1.6" strokeLinejoin="round" transform="translate(2px, 0)" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-puzzle-align" type="button">
        <svg class="hi19-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M3.4 8h9.1v3.1a1.9 1.9 0 1 1 0 3.8V18H3.4z" fill="var(--surface-2)" stroke="var(--accent-2)" stroke-width="1.6" stroke-linejoin="round"/>
          <path class="hi19-piece" d="M20.6 8h-9.1v3.1a1.9 1.9 0 1 0 0 3.8V18h9.1z" fill="var(--surface-2)" stroke="var(--text-2)" stroke-width="1.6" stroke-linejoin="round" transform="translate(2px, 0)"/>
        </svg>
      </button>`,
};
