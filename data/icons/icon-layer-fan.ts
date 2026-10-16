import type { HoverEffect } from "../types";

const css = `.he-icon-layer-fan{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-layer-fan, .he-icon-layer-fan *, .he-icon-layer-fan *::before, .he-icon-layer-fan *::after { box-sizing: border-box; }
.he-icon-layer-fan h2, .he-icon-layer-fan h3, .he-icon-layer-fan p, .he-icon-layer-fan figure, .he-icon-layer-fan ol, .he-icon-layer-fan ul { margin: 0; }
.he-icon-layer-fan img, .he-icon-layer-fan svg { display: block; max-width: 100%; }
.he-icon-layer-fan a { color: inherit; }
.he-icon-layer-fan :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-layer-fan {
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
.he-icon-layer-fan:hover { border-color: var(--accent-2); }
.he-icon-layer-fan:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-layer-fan:active { border-color: var(--accent); }
.hi05-icon { display: block; }
.hi05-rear {
  transform-box: fill-box;
  transform-origin: center;
  transform: translate(0, 0) rotate(0deg);
  transition: transform .26s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-layer-fan:hover .hi05-r1 { transform: translate(-2px, -1.4px) rotate(-4deg); }
  .he-icon-layer-fan:hover .hi05-r2 { transform: translate(2px, -1.8px) rotate(3.5deg); }
}
.he-icon-layer-fan:focus-visible .hi05-r1 { transform: translate(-2px, -1.4px) rotate(-4deg); }
.he-icon-layer-fan:focus-visible .hi05-r2 { transform: translate(2px, -1.8px) rotate(3.5deg); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-layer-fan, .he-icon-layer-fan *, .he-icon-layer-fan *::before, .he-icon-layer-fan *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconLayerFan: HoverEffect = {
  id: "icon-layer-fan",
  title: "Layer Fan",
  category: "icons",
  description: "Rear sheets fan from an anchored stack",
  tags: ["icons","layer","fan","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconLayerFan() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-layer-fan" type="button">
        <svg className="hi05-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect className="hi05-rear hi05-r1" x="7.5" y="5.5" width="9" height="12.5" rx="1.6" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <rect className="hi05-rear hi05-r2" x="7.5" y="5.5" width="9" height="12.5" rx="1.6" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <rect x="7.5" y="5.5" width="9" height="12.5" rx="1.6" fill="var(--surface-2)" stroke="var(--text-2)" />
          <path d="M10.2 10h3.6M10.2 12.4h2.6" stroke="var(--text-2)" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-layer-fan" type="button">
        <svg class="hi05-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect class="hi05-rear hi05-r1" x="7.5" y="5.5" width="9" height="12.5" rx="1.6" fill="var(--surface-2)" stroke="var(--line-strong)"/>
          <rect class="hi05-rear hi05-r2" x="7.5" y="5.5" width="9" height="12.5" rx="1.6" fill="var(--surface-2)" stroke="var(--line-strong)"/>
          <rect x="7.5" y="5.5" width="9" height="12.5" rx="1.6" fill="var(--surface-2)" stroke="var(--text-2)"/>
          <path d="M10.2 10h3.6M10.2 12.4h2.6" stroke="var(--text-2)" stroke-width="1.3" stroke-linecap="round"/>
        </svg>
      </button>`,
};
