import type { HoverEffect } from "../types";

const css = `.he-icon-segment-relay{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-segment-relay, .he-icon-segment-relay *, .he-icon-segment-relay *::before, .he-icon-segment-relay *::after { box-sizing: border-box; }
.he-icon-segment-relay h2, .he-icon-segment-relay h3, .he-icon-segment-relay p, .he-icon-segment-relay figure, .he-icon-segment-relay ol, .he-icon-segment-relay ul { margin: 0; }
.he-icon-segment-relay img, .he-icon-segment-relay svg { display: block; max-width: 100%; }
.he-icon-segment-relay a { color: inherit; }
.he-icon-segment-relay :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-segment-relay {
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
.he-icon-segment-relay:hover { border-color: var(--accent-2); }
.he-icon-segment-relay:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-segment-relay:active { border-color: var(--accent); }
.hi02-icon { display: block; }
.hi02-boost { opacity: 0; transition: opacity .2s var(--ease); }
.hi02-b1 { transition-delay: .16s; }
.hi02-b2 { transition-delay: .08s; }
.hi02-b3 { transition-delay: 0s; }
@media (hover: hover) and (pointer: fine) {
  .he-icon-segment-relay:hover .hi02-boost { opacity: 1; }
  .he-icon-segment-relay:hover .hi02-b1 { transition-delay: 0s; }
  .he-icon-segment-relay:hover .hi02-b2 { transition-delay: .08s; }
  .he-icon-segment-relay:hover .hi02-b3 { transition-delay: .16s; }
}
.he-icon-segment-relay:focus-visible .hi02-boost { opacity: 1; }
.he-icon-segment-relay:focus-visible .hi02-b1 { transition-delay: 0s; }
.he-icon-segment-relay:focus-visible .hi02-b2 { transition-delay: .08s; }
.he-icon-segment-relay:focus-visible .hi02-b3 { transition-delay: .16s; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-segment-relay, .he-icon-segment-relay *, .he-icon-segment-relay *::before, .he-icon-segment-relay *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconSegmentRelay: HoverEffect = {
  id: "icon-segment-relay",
  title: "Segment Relay",
  category: "icons",
  description: "Three path segments brighten in relay order",
  tags: ["icons","segment","relay","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconSegmentRelay() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-segment-relay" type="button">
        <svg className="hi02-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round">
            <path d="M5 5.2h14" />
            <path d="M5 12h14" />
            <path d="M5 18.8h9" />
          </g>
          <g className="hi02-boost hi02-b1" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"><path d="M5 5.2h14" /></g>
          <g className="hi02-boost hi02-b2" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14" /></g>
          <g className="hi02-boost hi02-b3" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"><path d="M5 18.8h9" /></g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-segment-relay" type="button">
        <svg class="hi02-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g stroke="var(--text-2)" stroke-width="1.8" stroke-linecap="round">
            <path d="M5 5.2h14"/>
            <path d="M5 12h14"/>
            <path d="M5 18.8h9"/>
          </g>
          <g class="hi02-boost hi02-b1" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round"><path d="M5 5.2h14"/></g>
          <g class="hi02-boost hi02-b2" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round"><path d="M5 12h14"/></g>
          <g class="hi02-boost hi02-b3" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round"><path d="M5 18.8h9"/></g>
        </svg>
      </button>`,
};
