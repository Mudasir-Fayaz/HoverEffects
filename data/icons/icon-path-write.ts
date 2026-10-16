import type { HoverEffect } from "../types";

const css = `.he-icon-path-write{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-path-write, .he-icon-path-write *, .he-icon-path-write *::before, .he-icon-path-write *::after { box-sizing: border-box; }
.he-icon-path-write h2, .he-icon-path-write h3, .he-icon-path-write p, .he-icon-path-write figure, .he-icon-path-write ol, .he-icon-path-write ul { margin: 0; }
.he-icon-path-write img, .he-icon-path-write svg { display: block; max-width: 100%; }
.he-icon-path-write a { color: inherit; }
.he-icon-path-write :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-path-write {
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
.he-icon-path-write:hover { border-color: var(--accent-2); }
.he-icon-path-write:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-path-write:active { border-color: var(--accent); }
.hi01-icon { display: block; }
.hi01-accent { transition: stroke-dashoffset .45s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .he-icon-path-write:hover .hi01-accent { stroke-dashoffset: 0; }
}
.he-icon-path-write:focus-visible .hi01-accent { stroke-dashoffset: 0; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-path-write, .he-icon-path-write *, .he-icon-path-write *::before, .he-icon-path-write *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconPathWrite: HoverEffect = {
  id: "icon-path-write",
  title: "Path Write",
  category: "icons",
  description: "Accent draws across the check detail once",
  tags: ["icons","path","write","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconPathWrite() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-path-write" type="button">
        <svg className="hi01-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M5 12.5l4.2 4.2L19 6.9" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path className="hi01-accent" d="M5 12.5l4.2 4.2L19 6.9" pathLength="100" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="100" strokeDashoffset="100" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-path-write" type="button">
        <svg class="hi01-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M5 12.5l4.2 4.2L19 6.9" stroke="var(--text-2)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <path class="hi01-accent" d="M5 12.5l4.2 4.2L19 6.9" pathLength="100" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="100" stroke-dashoffset="100"/>
        </svg>
      </button>`,
};
