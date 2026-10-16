import type { HoverEffect } from "../types";

const css = `.he-icon-equalizer-relay{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-equalizer-relay, .he-icon-equalizer-relay *, .he-icon-equalizer-relay *::before, .he-icon-equalizer-relay *::after { box-sizing: border-box; }
.he-icon-equalizer-relay h2, .he-icon-equalizer-relay h3, .he-icon-equalizer-relay p, .he-icon-equalizer-relay figure, .he-icon-equalizer-relay ol, .he-icon-equalizer-relay ul { margin: 0; }
.he-icon-equalizer-relay img, .he-icon-equalizer-relay svg { display: block; max-width: 100%; }
.he-icon-equalizer-relay a { color: inherit; }
.he-icon-equalizer-relay :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-equalizer-relay {
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
.he-icon-equalizer-relay:hover { border-color: var(--accent-2); }
.he-icon-equalizer-relay:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-equalizer-relay:active { border-color: var(--accent); }
.hi16-icon { display: block; }
.hi16-g { opacity: 0; transition: opacity .18s var(--ease); }
.hi16-g1 { transition-delay: .4s; }
.hi16-g2 { transition-delay: .2s; }
.hi16-g3 { transition-delay: 0s; }
@media (hover: hover) and (pointer: fine) {
  .he-icon-equalizer-relay:hover .hi16-g { opacity: 1; }
  .he-icon-equalizer-relay:hover .hi16-g1 { transition-delay: 0s; }
  .he-icon-equalizer-relay:hover .hi16-g2 { transition-delay: .2s; }
  .he-icon-equalizer-relay:hover .hi16-g3 { transition-delay: .4s; }
}
.he-icon-equalizer-relay:focus-visible .hi16-g { opacity: 1; }
.he-icon-equalizer-relay:focus-visible .hi16-g1 { transition-delay: 0s; }
.he-icon-equalizer-relay:focus-visible .hi16-g2 { transition-delay: .2s; }
.he-icon-equalizer-relay:focus-visible .hi16-g3 { transition-delay: .4s; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-equalizer-relay, .he-icon-equalizer-relay *, .he-icon-equalizer-relay *::before, .he-icon-equalizer-relay *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconEqualizerRelay: HoverEffect = {
  id: "icon-equalizer-relay",
  title: "Equalizer Relay",
  category: "icons",
  description: "Accent relay across columns; heights fixed",
  tags: ["icons","equalizer","relay","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconEqualizerRelay() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-equalizer-relay" type="button">
        <svg className="hi16-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g fill="var(--line-strong)" opacity=".5">
            <rect x="5.2" y="6" width="3" height="3.4" rx="1" /><rect x="5.2" y="10.4" width="3" height="3.4" rx="1" /><rect x="5.2" y="14.8" width="3" height="3.4" rx="1" />
            <rect x="10.5" y="6" width="3" height="3.4" rx="1" /><rect x="10.5" y="10.4" width="3" height="3.4" rx="1" /><rect x="10.5" y="14.8" width="3" height="3.4" rx="1" />
            <rect x="15.8" y="6" width="3" height="3.4" rx="1" /><rect x="15.8" y="10.4" width="3" height="3.4" rx="1" /><rect x="15.8" y="14.8" width="3" height="3.4" rx="1" />
          </g>
          <g className="hi16-g hi16-g1" fill="var(--accent)">
            <rect x="5.2" y="6" width="3" height="3.4" rx="1" /><rect x="5.2" y="10.4" width="3" height="3.4" rx="1" /><rect x="5.2" y="14.8" width="3" height="3.4" rx="1" />
          </g>
          <g className="hi16-g hi16-g2" fill="var(--accent)">
            <rect x="10.5" y="6" width="3" height="3.4" rx="1" /><rect x="10.5" y="10.4" width="3" height="3.4" rx="1" /><rect x="10.5" y="14.8" width="3" height="3.4" rx="1" />
          </g>
          <g className="hi16-g hi16-g3" fill="var(--accent)">
            <rect x="15.8" y="6" width="3" height="3.4" rx="1" /><rect x="15.8" y="10.4" width="3" height="3.4" rx="1" /><rect x="15.8" y="14.8" width="3" height="3.4" rx="1" />
          </g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-equalizer-relay" type="button">
        <svg class="hi16-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g fill="var(--line-strong)" opacity=".5">
            <rect x="5.2" y="6" width="3" height="3.4" rx="1"/><rect x="5.2" y="10.4" width="3" height="3.4" rx="1"/><rect x="5.2" y="14.8" width="3" height="3.4" rx="1"/>
            <rect x="10.5" y="6" width="3" height="3.4" rx="1"/><rect x="10.5" y="10.4" width="3" height="3.4" rx="1"/><rect x="10.5" y="14.8" width="3" height="3.4" rx="1"/>
            <rect x="15.8" y="6" width="3" height="3.4" rx="1"/><rect x="15.8" y="10.4" width="3" height="3.4" rx="1"/><rect x="15.8" y="14.8" width="3" height="3.4" rx="1"/>
          </g>
          <g class="hi16-g hi16-g1" fill="var(--accent)">
            <rect x="5.2" y="6" width="3" height="3.4" rx="1"/><rect x="5.2" y="10.4" width="3" height="3.4" rx="1"/><rect x="5.2" y="14.8" width="3" height="3.4" rx="1"/>
          </g>
          <g class="hi16-g hi16-g2" fill="var(--accent)">
            <rect x="10.5" y="6" width="3" height="3.4" rx="1"/><rect x="10.5" y="10.4" width="3" height="3.4" rx="1"/><rect x="10.5" y="14.8" width="3" height="3.4" rx="1"/>
          </g>
          <g class="hi16-g hi16-g3" fill="var(--accent)">
            <rect x="15.8" y="6" width="3" height="3.4" rx="1"/><rect x="15.8" y="10.4" width="3" height="3.4" rx="1"/><rect x="15.8" y="14.8" width="3" height="3.4" rx="1"/>
          </g>
        </svg>
      </button>`,
};
