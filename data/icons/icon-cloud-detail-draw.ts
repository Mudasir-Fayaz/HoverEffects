import type { HoverEffect } from "../types";

const css = `.he-icon-cloud-detail-draw{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-cloud-detail-draw, .he-icon-cloud-detail-draw *, .he-icon-cloud-detail-draw *::before, .he-icon-cloud-detail-draw *::after { box-sizing: border-box; }
.he-icon-cloud-detail-draw h2, .he-icon-cloud-detail-draw h3, .he-icon-cloud-detail-draw p, .he-icon-cloud-detail-draw figure, .he-icon-cloud-detail-draw ol, .he-icon-cloud-detail-draw ul { margin: 0; }
.he-icon-cloud-detail-draw img, .he-icon-cloud-detail-draw svg { display: block; max-width: 100%; }
.he-icon-cloud-detail-draw a { color: inherit; }
.he-icon-cloud-detail-draw :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-cloud-detail-draw {
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
.he-icon-cloud-detail-draw:hover { border-color: var(--accent-2); }
.he-icon-cloud-detail-draw:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-cloud-detail-draw:active { border-color: var(--accent); }
.hi09-icon { display: block; }
.hi09-draw { transition: stroke-dashoffset .4s var(--ease-out); }
.hi09-d2 { transition-delay: .07s; }
.hi09-d3 { transition-delay: .14s; }
@media (hover: hover) and (pointer: fine) {
  .he-icon-cloud-detail-draw:hover .hi09-draw { stroke-dashoffset: 0; }
}
.he-icon-cloud-detail-draw:focus-visible .hi09-draw { stroke-dashoffset: 0; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-cloud-detail-draw, .he-icon-cloud-detail-draw *, .he-icon-cloud-detail-draw *::before, .he-icon-cloud-detail-draw *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconCloudDetailDraw: HoverEffect = {
  id: "icon-cloud-detail-draw",
  title: "Cloud Detail Draw",
  category: "icons",
  description: "Three lower detail strokes draw in sequence",
  tags: ["icons","cloud","detail","draw","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconCloudDetailDraw() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-cloud-detail-draw" type="button">
        <svg className="hi09-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M17.5 18a4 4 0 0 0 0-8 5.6 5.6 0 0 0-10.6 1.6A3.6 3.6 0 0 0 8.2 18z" stroke="var(--text-2)" strokeWidth="1.8" strokeLinejoin="round" />
          <g stroke="var(--text-2)" strokeWidth="1.6" strokeLinecap="round" opacity=".55">
            <path d="M9.4 18v2.2" />
            <path d="M12 18v2.8" />
            <path d="M14.6 18v2" />
          </g>
          <g stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round">
            <path className="hi09-draw hi09-d1" d="M9.4 18v2.2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi09-draw hi09-d2" d="M12 18v2.8" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi09-draw hi09-d3" d="M14.6 18v2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
          </g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-cloud-detail-draw" type="button">
        <svg class="hi09-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M17.5 18a4 4 0 0 0 0-8 5.6 5.6 0 0 0-10.6 1.6A3.6 3.6 0 0 0 8.2 18z" stroke="var(--text-2)" stroke-width="1.8" stroke-linejoin="round"/>
          <g stroke="var(--text-2)" stroke-width="1.6" stroke-linecap="round" opacity=".55">
            <path d="M9.4 18v2.2"/>
            <path d="M12 18v2.8"/>
            <path d="M14.6 18v2"/>
          </g>
          <g stroke="var(--accent)" stroke-width="1.6" stroke-linecap="round">
            <path class="hi09-draw hi09-d1" d="M9.4 18v2.2" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
            <path class="hi09-draw hi09-d2" d="M12 18v2.8" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
            <path class="hi09-draw hi09-d3" d="M14.6 18v2" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
          </g>
        </svg>
      </button>`,
};
