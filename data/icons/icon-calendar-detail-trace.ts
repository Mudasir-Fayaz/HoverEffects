import type { HoverEffect } from "../types";

const css = `.he-icon-calendar-detail-trace{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-calendar-detail-trace, .he-icon-calendar-detail-trace *, .he-icon-calendar-detail-trace *::before, .he-icon-calendar-detail-trace *::after { box-sizing: border-box; }
.he-icon-calendar-detail-trace h2, .he-icon-calendar-detail-trace h3, .he-icon-calendar-detail-trace p, .he-icon-calendar-detail-trace figure, .he-icon-calendar-detail-trace ol, .he-icon-calendar-detail-trace ul { margin: 0; }
.he-icon-calendar-detail-trace img, .he-icon-calendar-detail-trace svg { display: block; max-width: 100%; }
.he-icon-calendar-detail-trace a { color: inherit; }
.he-icon-calendar-detail-trace :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-calendar-detail-trace {
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
.he-icon-calendar-detail-trace:hover { border-color: var(--accent-2); }
.he-icon-calendar-detail-trace:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-calendar-detail-trace:active { border-color: var(--accent); }
.hi29-icon { display: block; }
.hi29-trace { transition: stroke-dashoffset .42s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .he-icon-calendar-detail-trace:hover .hi29-trace { stroke-dashoffset: 0; }
}
.he-icon-calendar-detail-trace:focus-visible .hi29-trace { stroke-dashoffset: 0; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-calendar-detail-trace, .he-icon-calendar-detail-trace *, .he-icon-calendar-detail-trace *::before, .he-icon-calendar-detail-trace *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconCalendarDetailTrace: HoverEffect = {
  id: "icon-calendar-detail-trace",
  title: "Calendar Detail Trace",
  category: "icons",
  description: "Accent traces the existing date cell",
  tags: ["icons","calendar","detail","trace","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconCalendarDetailTrace() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-calendar-detail-trace" type="button">
        <svg className="hi29-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="4" y="5.4" width="16" height="14.6" rx="2" stroke="var(--text-2)" strokeWidth="1.7" />
          <path d="M4 9.4h16" stroke="var(--line-strong)" strokeWidth="1.5" />
          <path d="M8.4 3.6v3M15.6 3.6v3" stroke="var(--text-2)" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="6.8" y="12" width="4.6" height="4.6" rx="1.1" fill="var(--accent-soft)" stroke="var(--accent-2)" strokeWidth="1.2" />
          <path className="hi29-trace" d="M7.9 12h2.4a1.1 1.1 0 0 1 1.1 1.1v2.4a1.1 1.1 0 0 1-1.1 1.1H7.9a1.1 1.1 0 0 1-1.1-1.1v-2.4a1.1 1.1 0 0 1 1.1-1.1z" pathLength="100" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="100" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-calendar-detail-trace" type="button">
        <svg class="hi29-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="4" y="5.4" width="16" height="14.6" rx="2" stroke="var(--text-2)" stroke-width="1.7"/>
          <path d="M4 9.4h16" stroke="var(--line-strong)" stroke-width="1.5"/>
          <path d="M8.4 3.6v3M15.6 3.6v3" stroke="var(--text-2)" stroke-width="1.6" stroke-linecap="round"/>
          <rect x="6.8" y="12" width="4.6" height="4.6" rx="1.1" fill="var(--accent-soft)" stroke="var(--accent-2)" stroke-width="1.2"/>
          <path class="hi29-trace" d="M7.9 12h2.4a1.1 1.1 0 0 1 1.1 1.1v2.4a1.1 1.1 0 0 1-1.1 1.1H7.9a1.1 1.1 0 0 1-1.1-1.1v-2.4a1.1 1.1 0 0 1 1.1-1.1z" pathLength="100" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="100" stroke-dashoffset="100"/>
        </svg>
      </button>`,
};
