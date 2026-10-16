import type { HoverEffect } from "../types";

const css = `.he-icon-thread-stitch{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-thread-stitch, .he-icon-thread-stitch *, .he-icon-thread-stitch *::before, .he-icon-thread-stitch *::after { box-sizing: border-box; }
.he-icon-thread-stitch h2, .he-icon-thread-stitch h3, .he-icon-thread-stitch p, .he-icon-thread-stitch figure, .he-icon-thread-stitch ol, .he-icon-thread-stitch ul { margin: 0; }
.he-icon-thread-stitch img, .he-icon-thread-stitch svg { display: block; max-width: 100%; }
.he-icon-thread-stitch a { color: inherit; }
.he-icon-thread-stitch :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-thread-stitch {
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
.he-icon-thread-stitch:hover { border-color: var(--accent-2); }
.he-icon-thread-stitch:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-thread-stitch:active { border-color: var(--accent); }
.hi21-icon { display: block; }
.hi21-thread { transition: stroke-dashoffset .5s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .he-icon-thread-stitch:hover .hi21-thread { stroke-dashoffset: 0; }
}
.he-icon-thread-stitch:focus-visible .hi21-thread { stroke-dashoffset: 0; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-thread-stitch, .he-icon-thread-stitch *, .he-icon-thread-stitch *::before, .he-icon-thread-stitch *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconThreadStitch: HoverEffect = {
  id: "icon-thread-stitch",
  title: "Thread Stitch",
  category: "icons",
  description: "Thread traces the fixed stitch seam once",
  tags: ["icons","thread","stitch","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconThreadStitch() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-thread-stitch" type="button">
        <svg className="hi21-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M4.6 12h14.8" stroke="var(--text-2)" strokeWidth="1.6" strokeDasharray="2.5 2.3" opacity=".7" />
          <path d="M4.6 8.6v6.8M19.4 8.6v6.8" stroke="var(--line-strong)" strokeWidth="1.5" strokeLinecap="round" />
          <path className="hi21-thread" d="M4.6 12h14.8" pathLength="100" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="100" />
          <circle cx="19.4" cy="12" r="1.4" fill="var(--accent-2)" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-thread-stitch" type="button">
        <svg class="hi21-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M4.6 12h14.8" stroke="var(--text-2)" stroke-width="1.6" stroke-dasharray="2.5 2.3" opacity=".7"/>
          <path d="M4.6 8.6v6.8M19.4 8.6v6.8" stroke="var(--line-strong)" stroke-width="1.5" stroke-linecap="round"/>
          <path class="hi21-thread" d="M4.6 12h14.8" pathLength="100" stroke="var(--accent)" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="100" stroke-dashoffset="100"/>
          <circle cx="19.4" cy="12" r="1.4" fill="var(--accent-2)"/>
        </svg>
      </button>`,
};
