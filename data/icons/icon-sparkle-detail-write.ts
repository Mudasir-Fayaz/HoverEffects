import type { HoverEffect } from "../types";

const css = `.he-icon-sparkle-detail-write{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-sparkle-detail-write, .he-icon-sparkle-detail-write *, .he-icon-sparkle-detail-write *::before, .he-icon-sparkle-detail-write *::after { box-sizing: border-box; }
.he-icon-sparkle-detail-write h2, .he-icon-sparkle-detail-write h3, .he-icon-sparkle-detail-write p, .he-icon-sparkle-detail-write figure, .he-icon-sparkle-detail-write ol, .he-icon-sparkle-detail-write ul { margin: 0; }
.he-icon-sparkle-detail-write img, .he-icon-sparkle-detail-write svg { display: block; max-width: 100%; }
.he-icon-sparkle-detail-write a { color: inherit; }
.he-icon-sparkle-detail-write :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-sparkle-detail-write {
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
.he-icon-sparkle-detail-write:hover { border-color: var(--accent-2); }
.he-icon-sparkle-detail-write:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-sparkle-detail-write:active { border-color: var(--accent); }
.hi18-icon { display: block; }
.hi18-ray { transition: stroke-dashoffset .3s var(--ease-out); }
.hi18-y2 { transition-delay: .06s; }
.hi18-y3 { transition-delay: .12s; }
.hi18-y4 { transition-delay: .18s; }
@media (hover: hover) and (pointer: fine) {
  .he-icon-sparkle-detail-write:hover .hi18-ray { stroke-dashoffset: 0; }
}
.he-icon-sparkle-detail-write:focus-visible .hi18-ray { stroke-dashoffset: 0; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-sparkle-detail-write, .he-icon-sparkle-detail-write *, .he-icon-sparkle-detail-write *::before, .he-icon-sparkle-detail-write *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconSparkleDetailWrite: HoverEffect = {
  id: "icon-sparkle-detail-write",
  title: "Sparkle Detail Write",
  category: "icons",
  description: "Four detail rays draw in clockwise order",
  tags: ["icons","sparkle","detail","write","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconSparkleDetailWrite() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-sparkle-detail-write" type="button">
        <svg className="hi18-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 3.6l1.9 5.3 5.3 1.9-5.3 1.9-1.9 5.3-1.9-5.3-5.3-1.9 5.3-1.9z" stroke="var(--text-2)" strokeWidth="1.7" strokeLinejoin="round" />
          <g stroke="var(--text-2)" strokeWidth="1.5" strokeLinecap="round" opacity=".45">
            <path d="M12 1.4v1.5" />
            <path d="M12 21.1v1.5" />
            <path d="M1.4 12h1.5" />
            <path d="M21.1 12h1.5" />
          </g>
          <g stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round">
            <path className="hi18-ray hi18-y1" d="M12 1.4v1.5" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi18-ray hi18-y2" d="M21.1 12h1.5" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi18-ray hi18-y3" d="M12 21.1v1.5" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi18-ray hi18-y4" d="M1.4 12h1.5" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
          </g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-sparkle-detail-write" type="button">
        <svg class="hi18-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 3.6l1.9 5.3 5.3 1.9-5.3 1.9-1.9 5.3-1.9-5.3-5.3-1.9 5.3-1.9z" stroke="var(--text-2)" stroke-width="1.7" stroke-linejoin="round"/>
          <g stroke="var(--text-2)" stroke-width="1.5" stroke-linecap="round" opacity=".45">
            <path d="M12 1.4v1.5"/>
            <path d="M12 21.1v1.5"/>
            <path d="M1.4 12h1.5"/>
            <path d="M21.1 12h1.5"/>
          </g>
          <g stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round">
            <path class="hi18-ray hi18-y1" d="M12 1.4v1.5" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
            <path class="hi18-ray hi18-y2" d="M21.1 12h1.5" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
            <path class="hi18-ray hi18-y3" d="M12 21.1v1.5" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
            <path class="hi18-ray hi18-y4" d="M1.4 12h1.5" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
          </g>
        </svg>
      </button>`,
};
