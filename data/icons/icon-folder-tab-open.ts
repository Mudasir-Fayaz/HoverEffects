import type { HoverEffect } from "../types";

const css = `.he-icon-folder-tab-open{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-folder-tab-open, .he-icon-folder-tab-open *, .he-icon-folder-tab-open *::before, .he-icon-folder-tab-open *::after { box-sizing: border-box; }
.he-icon-folder-tab-open h2, .he-icon-folder-tab-open h3, .he-icon-folder-tab-open p, .he-icon-folder-tab-open figure, .he-icon-folder-tab-open ol, .he-icon-folder-tab-open ul { margin: 0; }
.he-icon-folder-tab-open img, .he-icon-folder-tab-open svg { display: block; max-width: 100%; }
.he-icon-folder-tab-open a { color: inherit; }
.he-icon-folder-tab-open :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-folder-tab-open {
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
.he-icon-folder-tab-open:hover { border-color: var(--accent-2); }
.he-icon-folder-tab-open:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-folder-tab-open:active { border-color: var(--accent); }
.hi10-icon { display: block; }
.hi10-tab {
  transform-box: fill-box;
  transform-origin: 0% 100%;
  transform: rotate(0deg);
  transition: transform .26s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-folder-tab-open:hover .hi10-tab { transform: rotate(-8deg); }
}
.he-icon-folder-tab-open:focus-visible .hi10-tab { transform: rotate(-8deg); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-folder-tab-open, .he-icon-folder-tab-open *, .he-icon-folder-tab-open *::before, .he-icon-folder-tab-open *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconFolderTabOpen: HoverEffect = {
  id: "icon-folder-tab-open",
  title: "Folder Tab Open",
  category: "icons",
  description: "Tab opens ~8° on its own hinge",
  tags: ["icons","folder","tab","open","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconFolderTabOpen() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-folder-tab-open" type="button">
        <svg className="hi10-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M4.5 18.2V9.4c0-.9.7-1.6 1.6-1.6h12.2c.9 0 1.6.7 1.6 1.6v8.8c0 .9-.7 1.6-1.6 1.6H6.1c-.9 0-1.6-.7-1.6-1.6z" fill="var(--surface-2)" stroke="var(--text-2)" strokeWidth="1.7" strokeLinejoin="round" />
          <g className="hi10-tab">
            <path d="M4.6 9.6V7.4c0-.6.5-1.1 1.1-1.1h3.9l1.9 2h3.1v1.3z" fill="var(--surface-2)" stroke="var(--accent-2)" strokeWidth="1.5" strokeLinejoin="round" />
          </g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-folder-tab-open" type="button">
        <svg class="hi10-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M4.5 18.2V9.4c0-.9.7-1.6 1.6-1.6h12.2c.9 0 1.6.7 1.6 1.6v8.8c0 .9-.7 1.6-1.6 1.6H6.1c-.9 0-1.6-.7-1.6-1.6z" fill="var(--surface-2)" stroke="var(--text-2)" stroke-width="1.7" stroke-linejoin="round"/>
          <g class="hi10-tab">
            <path d="M4.6 9.6V7.4c0-.6.5-1.1 1.1-1.1h3.9l1.9 2h3.1v1.3z" fill="var(--surface-2)" stroke="var(--accent-2)" stroke-width="1.5" stroke-linejoin="round"/>
          </g>
        </svg>
      </button>`,
};
