import type { HoverEffect } from "../types";

const css = `.he-icon-fingerprint-route{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-fingerprint-route, .he-icon-fingerprint-route *, .he-icon-fingerprint-route *::before, .he-icon-fingerprint-route *::after { box-sizing: border-box; }
.he-icon-fingerprint-route h2, .he-icon-fingerprint-route h3, .he-icon-fingerprint-route p, .he-icon-fingerprint-route figure, .he-icon-fingerprint-route ol, .he-icon-fingerprint-route ul { margin: 0; }
.he-icon-fingerprint-route img, .he-icon-fingerprint-route svg { display: block; max-width: 100%; }
.he-icon-fingerprint-route a { color: inherit; }
.he-icon-fingerprint-route :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-fingerprint-route {
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
.he-icon-fingerprint-route:hover { border-color: var(--accent-2); }
.he-icon-fingerprint-route:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-fingerprint-route:active { border-color: var(--accent); }
.hi32-icon { display: block; }
.hi32-route { transition: stroke-dashoffset .46s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .he-icon-fingerprint-route:hover .hi32-route { stroke-dashoffset: 0; }
}
.he-icon-fingerprint-route:focus-visible .hi32-route { stroke-dashoffset: 0; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-fingerprint-route, .he-icon-fingerprint-route *, .he-icon-fingerprint-route *::before, .he-icon-fingerprint-route *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconFingerprintRoute: HoverEffect = {
  id: "icon-fingerprint-route",
  title: "Fingerprint Route",
  category: "icons",
  description: "Accent follows one ridge and settles",
  tags: ["icons","fingerprint","route","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconFingerprintRoute() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-fingerprint-route" type="button">
        <svg className="hi32-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g stroke="var(--text-2)" strokeWidth="1.5" strokeLinecap="round" opacity=".55">
            <path d="M5.8 15.6a8 8 0 0 1 12.4 0" />
            <path d="M8.2 15.6a5.2 5.2 0 0 1 7.6 0" />
            <path d="M10.6 15.6a2.4 2.4 0 0 1 2.8 0" />
          </g>
          <path className="hi32-route" d="M5.8 15.6a8 8 0 0 1 12.4 0" pathLength="100" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="100" />
          <circle cx="12" cy="17.6" r="1.2" fill="var(--accent-2)" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-fingerprint-route" type="button">
        <svg class="hi32-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g stroke="var(--text-2)" stroke-width="1.5" stroke-linecap="round" opacity=".55">
            <path d="M5.8 15.6a8 8 0 0 1 12.4 0"/>
            <path d="M8.2 15.6a5.2 5.2 0 0 1 7.6 0"/>
            <path d="M10.6 15.6a2.4 2.4 0 0 1 2.8 0"/>
          </g>
          <path class="hi32-route" d="M5.8 15.6a8 8 0 0 1 12.4 0" pathLength="100" stroke="var(--accent)" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="100" stroke-dashoffset="100"/>
          <circle cx="12" cy="17.6" r="1.2" fill="var(--accent-2)"/>
        </svg>
      </button>`,
};
