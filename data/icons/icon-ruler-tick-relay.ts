import type { HoverEffect } from "../types";

const css = `.he-icon-ruler-tick-relay{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-ruler-tick-relay, .he-icon-ruler-tick-relay *, .he-icon-ruler-tick-relay *::before, .he-icon-ruler-tick-relay *::after { box-sizing: border-box; }
.he-icon-ruler-tick-relay h2, .he-icon-ruler-tick-relay h3, .he-icon-ruler-tick-relay p, .he-icon-ruler-tick-relay figure, .he-icon-ruler-tick-relay ol, .he-icon-ruler-tick-relay ul { margin: 0; }
.he-icon-ruler-tick-relay img, .he-icon-ruler-tick-relay svg { display: block; max-width: 100%; }
.he-icon-ruler-tick-relay a { color: inherit; }
.he-icon-ruler-tick-relay :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-ruler-tick-relay {
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
.he-icon-ruler-tick-relay:hover { border-color: var(--accent-2); }
.he-icon-ruler-tick-relay:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-ruler-tick-relay:active { border-color: var(--accent); }
.hi28-icon { display: block; }
.hi28-t { opacity: .2; transition: opacity .18s var(--ease); }
.hi28-t:nth-of-type(1) { transition-delay: .15s; }
.hi28-t:nth-of-type(2) { transition-delay: .1s; }
.hi28-t:nth-of-type(3) { transition-delay: .05s; }
.hi28-t:nth-of-type(4) { transition-delay: 0s; }
@media (hover: hover) and (pointer: fine) {
  .he-icon-ruler-tick-relay:hover .hi28-t { opacity: 1; }
  .he-icon-ruler-tick-relay:hover .hi28-t:nth-of-type(1) { transition-delay: 0s; }
  .he-icon-ruler-tick-relay:hover .hi28-t:nth-of-type(2) { transition-delay: .05s; }
  .he-icon-ruler-tick-relay:hover .hi28-t:nth-of-type(3) { transition-delay: .1s; }
  .he-icon-ruler-tick-relay:hover .hi28-t:nth-of-type(4) { transition-delay: .15s; }
}
.he-icon-ruler-tick-relay:focus-visible .hi28-t { opacity: 1; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-ruler-tick-relay, .he-icon-ruler-tick-relay *, .he-icon-ruler-tick-relay *::before, .he-icon-ruler-tick-relay *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconRulerTickRelay: HoverEffect = {
  id: "icon-ruler-tick-relay",
  title: "Ruler Tick Relay",
  category: "icons",
  description: "Tick accents appear left to right",
  tags: ["icons","ruler","tick","relay","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconRulerTickRelay() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-ruler-tick-relay" type="button">
        <svg className="hi28-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="3.6" y="9" width="16.8" height="6" rx="1.5" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <g stroke="var(--text-2)" strokeWidth="1.4" strokeLinecap="round">
            <path d="M6.2 9.6v2.4" />
            <path d="M8.6 9.6v1.7" />
            <path d="M11 9.6v2.4" />
            <path d="M13.4 9.6v1.7" />
            <path d="M15.8 9.6v2.4" />
            <path d="M18.2 9.6v1.7" />
          </g>
          <g stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round">
            <path className="hi28-t" style={{ ["--i" as string]: "0" }} d="M8.6 9.4v1.9" />
            <path className="hi28-t" style={{ ["--i" as string]: "1" }} d="M13.4 9.4v1.9" />
            <path className="hi28-t" style={{ ["--i" as string]: "2" }} d="M18.2 9.4v1.9" />
            <path className="hi28-t" style={{ ["--i" as string]: "3" }} d="M6.2 9.4v.1" />
          </g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-ruler-tick-relay" type="button">
        <svg class="hi28-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="3.6" y="9" width="16.8" height="6" rx="1.5" fill="var(--surface-2)" stroke="var(--line-strong)"/>
          <g stroke="var(--text-2)" stroke-width="1.4" stroke-linecap="round">
            <path d="M6.2 9.6v2.4"/>
            <path d="M8.6 9.6v1.7"/>
            <path d="M11 9.6v2.4"/>
            <path d="M13.4 9.6v1.7"/>
            <path d="M15.8 9.6v2.4"/>
            <path d="M18.2 9.6v1.7"/>
          </g>
          <g stroke="var(--accent)" stroke-width="1.6" stroke-linecap="round">
            <path class="hi28-t" style="--i: 0" d="M8.6 9.4v1.9"/>
            <path class="hi28-t" style="--i: 1" d="M13.4 9.4v1.9"/>
            <path class="hi28-t" style="--i: 2" d="M18.2 9.4v1.9"/>
            <path class="hi28-t" style="--i: 3" d="M6.2 9.4v.1"/>
          </g>
        </svg>
      </button>`,
};
