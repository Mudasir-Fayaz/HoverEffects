import type { HoverEffect } from "../types";

const css = `.he-icon-download-stem-reach{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-download-stem-reach, .he-icon-download-stem-reach *, .he-icon-download-stem-reach *::before, .he-icon-download-stem-reach *::after { box-sizing: border-box; }
.he-icon-download-stem-reach h2, .he-icon-download-stem-reach h3, .he-icon-download-stem-reach p, .he-icon-download-stem-reach figure, .he-icon-download-stem-reach ol, .he-icon-download-stem-reach ul { margin: 0; }
.he-icon-download-stem-reach img, .he-icon-download-stem-reach svg { display: block; max-width: 100%; }
.he-icon-download-stem-reach a { color: inherit; }
.he-icon-download-stem-reach :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-download-stem-reach {
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
.he-icon-download-stem-reach:hover { border-color: var(--accent-2); }
.he-icon-download-stem-reach:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-download-stem-reach:active { border-color: var(--accent); }
.hi08-icon { display: block; }
.hi08-reach {
  transform-box: fill-box;
  transform-origin: top center;
  transform: scaleY(1);
  transition: transform .22s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-download-stem-reach:hover .hi08-reach { transform: scaleY(1.08); }
}
.he-icon-download-stem-reach:focus-visible .hi08-reach { transform: scaleY(1.08); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-download-stem-reach, .he-icon-download-stem-reach *, .he-icon-download-stem-reach *::before, .he-icon-download-stem-reach *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconDownloadStemReach: HoverEffect = {
  id: "icon-download-stem-reach",
  title: "Download Stem Reach",
  category: "icons",
  description: "Stem lengthens ~1 px toward the fixed tray",
  tags: ["icons","download","stem","reach","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconDownloadStemReach() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-download-stem-reach" type="button">
        <svg className="hi08-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g className="hi08-reach">
            <path d="M12 4.2v8.6" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M8.4 9.6 12 13.2l3.6-3.6" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <path d="M4.6 17.2v1.6c0 .9.7 1.6 1.6 1.6h11.6c.9 0 1.6-.7 1.6-1.6v-1.6" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-download-stem-reach" type="button">
        <svg class="hi08-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g class="hi08-reach">
            <path d="M12 4.2v8.6" stroke="var(--text-2)" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M8.4 9.6 12 13.2l3.6-3.6" stroke="var(--text-2)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <path d="M4.6 17.2v1.6c0 .9.7 1.6 1.6 1.6h11.6c.9 0 1.6-.7 1.6-1.6v-1.6" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>`,
};
