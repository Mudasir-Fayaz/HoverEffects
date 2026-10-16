import type { HoverEffect } from "../types";

const css = `.he-icon-copy-page-offset{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-copy-page-offset, .he-icon-copy-page-offset *, .he-icon-copy-page-offset *::before, .he-icon-copy-page-offset *::after { box-sizing: border-box; }
.he-icon-copy-page-offset h2, .he-icon-copy-page-offset h3, .he-icon-copy-page-offset p, .he-icon-copy-page-offset figure, .he-icon-copy-page-offset ol, .he-icon-copy-page-offset ul { margin: 0; }
.he-icon-copy-page-offset img, .he-icon-copy-page-offset svg { display: block; max-width: 100%; }
.he-icon-copy-page-offset a { color: inherit; }
.he-icon-copy-page-offset :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-copy-page-offset {
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
.he-icon-copy-page-offset:hover { border-color: var(--accent-2); }
.he-icon-copy-page-offset:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-copy-page-offset:active { border-color: var(--accent); }
.hi07-icon { display: block; }
.hi07-rear { transition: transform .24s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .he-icon-copy-page-offset:hover .hi07-rear { transform: translate(2.4px, -2px); }
}
.he-icon-copy-page-offset:focus-visible .hi07-rear { transform: translate(2.4px, -2px); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-copy-page-offset, .he-icon-copy-page-offset *, .he-icon-copy-page-offset *::before, .he-icon-copy-page-offset *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconCopyPageOffset: HoverEffect = {
  id: "icon-copy-page-offset",
  title: "Copy Page Offset",
  category: "icons",
  description: "Rear document reveals its edge and returns",
  tags: ["icons","copy","page","offset","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconCopyPageOffset() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-copy-page-offset" type="button">
        <svg className="hi07-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect className="hi07-rear" x="8" y="4.6" width="10" height="13" rx="2" stroke="var(--line-strong)" fill="var(--surface-2)" />
          <rect x="5" y="6.9" width="10" height="13" rx="2" fill="var(--surface-2)" stroke="var(--text-2)" />
          <path d="M7.6 10.4h4.8M7.6 13h3.4" stroke="var(--text-2)" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-copy-page-offset" type="button">
        <svg class="hi07-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect class="hi07-rear" x="8" y="4.6" width="10" height="13" rx="2" stroke="var(--line-strong)" fill="var(--surface-2)"/>
          <rect x="5" y="6.9" width="10" height="13" rx="2" fill="var(--surface-2)" stroke="var(--text-2)"/>
          <path d="M7.6 10.4h4.8M7.6 13h3.4" stroke="var(--text-2)" stroke-width="1.3" stroke-linecap="round"/>
        </svg>
      </button>`,
};
