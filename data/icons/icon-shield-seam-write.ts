import type { HoverEffect } from "../types";

const css = `.he-icon-shield-seam-write{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-shield-seam-write, .he-icon-shield-seam-write *, .he-icon-shield-seam-write *::before, .he-icon-shield-seam-write *::after { box-sizing: border-box; }
.he-icon-shield-seam-write h2, .he-icon-shield-seam-write h3, .he-icon-shield-seam-write p, .he-icon-shield-seam-write figure, .he-icon-shield-seam-write ol, .he-icon-shield-seam-write ul { margin: 0; }
.he-icon-shield-seam-write img, .he-icon-shield-seam-write svg { display: block; max-width: 100%; }
.he-icon-shield-seam-write a { color: inherit; }
.he-icon-shield-seam-write :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-shield-seam-write {
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
.he-icon-shield-seam-write:hover { border-color: var(--accent-2); }
.he-icon-shield-seam-write:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-shield-seam-write:active { border-color: var(--accent); }
.hi31-icon { display: block; }
.hi31-write { transition: stroke-dashoffset .44s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .he-icon-shield-seam-write:hover .hi31-write { stroke-dashoffset: 0; }
}
.he-icon-shield-seam-write:focus-visible .hi31-write { stroke-dashoffset: 0; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-shield-seam-write, .he-icon-shield-seam-write *, .he-icon-shield-seam-write *::before, .he-icon-shield-seam-write *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconShieldSeamWrite: HoverEffect = {
  id: "icon-shield-seam-write",
  title: "Shield Seam Write",
  category: "icons",
  description: "Accent writes along the interior seam",
  tags: ["icons","shield","seam","write","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconShieldSeamWrite() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-shield-seam-write" type="button">
        <svg className="hi31-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 3.4 18.8 5.8v5c0 4.3-2.8 7.4-6.8 8.8-4-1.4-6.8-4.5-6.8-8.8v-5z" stroke="var(--text-2)" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 9.2 14.4 11.6 12 14 9.6 11.6z" stroke="var(--accent-2)" strokeWidth="1.5" strokeLinejoin="round" opacity=".65" />
          <path className="hi31-write" d="M12 9.2 14.4 11.6 12 14 9.6 11.6z" pathLength="100" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="100" strokeDashoffset="100" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-shield-seam-write" type="button">
        <svg class="hi31-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 3.4 18.8 5.8v5c0 4.3-2.8 7.4-6.8 8.8-4-1.4-6.8-4.5-6.8-8.8v-5z" stroke="var(--text-2)" stroke-width="1.7" stroke-linejoin="round"/>
          <path d="M12 9.2 14.4 11.6 12 14 9.6 11.6z" stroke="var(--accent-2)" stroke-width="1.5" stroke-linejoin="round" opacity=".65"/>
          <path class="hi31-write" d="M12 9.2 14.4 11.6 12 14 9.6 11.6z" pathLength="100" stroke="var(--accent)" stroke-width="1.5" stroke-linejoin="round" stroke-dasharray="100" stroke-dashoffset="100"/>
        </svg>
      </button>`,
};
