import type { HoverEffect } from "../types";

const css = `.he-icon-volume-detail-trace{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-volume-detail-trace, .he-icon-volume-detail-trace *, .he-icon-volume-detail-trace *::before, .he-icon-volume-detail-trace *::after { box-sizing: border-box; }
.he-icon-volume-detail-trace h2, .he-icon-volume-detail-trace h3, .he-icon-volume-detail-trace p, .he-icon-volume-detail-trace figure, .he-icon-volume-detail-trace ol, .he-icon-volume-detail-trace ul { margin: 0; }
.he-icon-volume-detail-trace img, .he-icon-volume-detail-trace svg { display: block; max-width: 100%; }
.he-icon-volume-detail-trace a { color: inherit; }
.he-icon-volume-detail-trace :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-volume-detail-trace {
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
.he-icon-volume-detail-trace:hover { border-color: var(--accent-2); }
.he-icon-volume-detail-trace:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-volume-detail-trace:active { border-color: var(--accent); }
.hi17-icon { display: block; }
.hi17-trace { transition: stroke-dashoffset .4s var(--ease-out); }
.hi17-t2 { transition-delay: .12s; }
@media (hover: hover) and (pointer: fine) {
  .he-icon-volume-detail-trace:hover .hi17-trace { stroke-dashoffset: 0; }
}
.he-icon-volume-detail-trace:focus-visible .hi17-trace { stroke-dashoffset: 0; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-volume-detail-trace, .he-icon-volume-detail-trace *, .he-icon-volume-detail-trace *::before, .he-icon-volume-detail-trace *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconVolumeDetailTrace: HoverEffect = {
  id: "icon-volume-detail-trace",
  title: "Volume Detail Trace",
  category: "icons",
  description: "Accent traces the existing sound arcs",
  tags: ["icons","volume","detail","trace","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconVolumeDetailTrace() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-volume-detail-trace" type="button">
        <svg className="hi17-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M11.4 5.4 6.8 9.2H3.6c-.4 0-.8.4-.8.8v4c0 .4.4.8.8.8h3.2l4.6 3.8z" fill="var(--surface-2)" stroke="var(--text-2)" strokeWidth="1.7" strokeLinejoin="round" />
          <g stroke="var(--text-2)" strokeWidth="1.7" strokeLinecap="round" opacity=".5">
            <path d="M14.6 9.4a3.7 3.7 0 0 1 0 5.2" />
            <path d="M17 7.2a6.8 6.8 0 0 1 0 9.6" />
          </g>
          <g stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round">
            <path className="hi17-trace hi17-t1" d="M14.6 9.4a3.7 3.7 0 0 1 0 5.2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi17-trace hi17-t2" d="M17 7.2a6.8 6.8 0 0 1 0 9.6" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
          </g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-volume-detail-trace" type="button">
        <svg class="hi17-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M11.4 5.4 6.8 9.2H3.6c-.4 0-.8.4-.8.8v4c0 .4.4.8.8.8h3.2l4.6 3.8z" fill="var(--surface-2)" stroke="var(--text-2)" stroke-width="1.7" stroke-linejoin="round"/>
          <g stroke="var(--text-2)" stroke-width="1.7" stroke-linecap="round" opacity=".5">
            <path d="M14.6 9.4a3.7 3.7 0 0 1 0 5.2"/>
            <path d="M17 7.2a6.8 6.8 0 0 1 0 9.6"/>
          </g>
          <g stroke="var(--accent)" stroke-width="1.7" stroke-linecap="round">
            <path class="hi17-trace hi17-t1" d="M14.6 9.4a3.7 3.7 0 0 1 0 5.2" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
            <path class="hi17-trace hi17-t2" d="M17 7.2a6.8 6.8 0 0 1 0 9.6" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
          </g>
        </svg>
      </button>`,
};
