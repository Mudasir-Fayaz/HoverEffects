import type { HoverEffect } from "../types";

const css = `.he-icon-circuit-route{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-circuit-route, .he-icon-circuit-route *, .he-icon-circuit-route *::before, .he-icon-circuit-route *::after { box-sizing: border-box; }
.he-icon-circuit-route h2, .he-icon-circuit-route h3, .he-icon-circuit-route p, .he-icon-circuit-route figure, .he-icon-circuit-route ol, .he-icon-circuit-route ul { margin: 0; }
.he-icon-circuit-route img, .he-icon-circuit-route svg { display: block; max-width: 100%; }
.he-icon-circuit-route a { color: inherit; }
.he-icon-circuit-route :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-circuit-route {
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
.he-icon-circuit-route:hover { border-color: var(--accent-2); }
.he-icon-circuit-route:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-circuit-route:active { border-color: var(--accent); }
.hi24-icon { display: block; }
.hi24-seg { transition: stroke-dashoffset .32s var(--ease-out); }
.hi24-s2 { transition-delay: .1s; }
.hi24-s3 { transition-delay: .2s; }
@media (hover: hover) and (pointer: fine) {
  .he-icon-circuit-route:hover .hi24-seg { stroke-dashoffset: 0; }
}
.he-icon-circuit-route:focus-visible .hi24-seg { stroke-dashoffset: 0; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-circuit-route, .he-icon-circuit-route *, .he-icon-circuit-route *::before, .he-icon-circuit-route *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconCircuitRoute: HoverEffect = {
  id: "icon-circuit-route",
  title: "Circuit Route",
  category: "icons",
  description: "Accent travels the connected route once",
  tags: ["icons","circuit","route","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconCircuitRoute() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-circuit-route" type="button">
        <svg className="hi24-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 18.6v-4.2M12 14.4H6.4V9.2M12 14.4h5.6V9.2" stroke="var(--text-2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity=".5" />
          <g stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path className="hi24-seg hi24-s1" d="M12 18.6v-4.2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi24-seg hi24-s2" d="M12 14.4H6.4V9.2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi24-seg hi24-s3" d="M12 14.4h5.6V9.2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
          </g>
          <g fill="var(--line-strong)">
            <circle cx="6.4" cy="8" r="1.5" />
            <circle cx="17.6" cy="8" r="1.5" />
            <circle cx="12" cy="19.8" r="1.5" />
          </g>
          <circle cx="12" cy="14.4" r="1.3" fill="var(--accent-2)" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-circuit-route" type="button">
        <svg class="hi24-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 18.6v-4.2M12 14.4H6.4V9.2M12 14.4h5.6V9.2" stroke="var(--text-2)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity=".5"/>
          <g stroke="var(--accent)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path class="hi24-seg hi24-s1" d="M12 18.6v-4.2" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
            <path class="hi24-seg hi24-s2" d="M12 14.4H6.4V9.2" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
            <path class="hi24-seg hi24-s3" d="M12 14.4h5.6V9.2" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>
          </g>
          <g fill="var(--line-strong)">
            <circle cx="6.4" cy="8" r="1.5"/>
            <circle cx="17.6" cy="8" r="1.5"/>
            <circle cx="12" cy="19.8" r="1.5"/>
          </g>
          <circle cx="12" cy="14.4" r="1.3" fill="var(--accent-2)"/>
        </svg>
      </button>`,
};
