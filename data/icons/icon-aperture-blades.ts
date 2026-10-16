import type { HoverEffect } from "../types";

const css = `.he-icon-aperture-blades{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-aperture-blades, .he-icon-aperture-blades *, .he-icon-aperture-blades *::before, .he-icon-aperture-blades *::after { box-sizing: border-box; }
.he-icon-aperture-blades h2, .he-icon-aperture-blades h3, .he-icon-aperture-blades p, .he-icon-aperture-blades figure, .he-icon-aperture-blades ol, .he-icon-aperture-blades ul { margin: 0; }
.he-icon-aperture-blades img, .he-icon-aperture-blades svg { display: block; max-width: 100%; }
.he-icon-aperture-blades a { color: inherit; }
.he-icon-aperture-blades :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-aperture-blades {
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
.he-icon-aperture-blades:hover { border-color: var(--accent-2); }
.he-icon-aperture-blades:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-aperture-blades:active { border-color: var(--accent); }
.hi14-icon { display: block; }
.hi14-blade {
  transform-box: view-box;
  transform-origin: center;
  transform: rotate(var(--r, 0deg));
  transition: transform .38s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-aperture-blades:hover .hi14-blade { transform: rotate(calc(var(--r, 0deg) + 13deg)); }
}
.he-icon-aperture-blades:focus-visible .hi14-blade { transform: rotate(calc(var(--r, 0deg) + 13deg)); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-aperture-blades, .he-icon-aperture-blades *, .he-icon-aperture-blades *::before, .he-icon-aperture-blades *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconApertureBlades: HoverEffect = {
  id: "icon-aperture-blades",
  title: "Aperture Blades",
  category: "icons",
  description: "Six blades twist ~13° to widen the centre",
  tags: ["icons","aperture","blades","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconApertureBlades() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-aperture-blades" type="button">
        <svg className="hi14-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g className="hi14-blade" style={{ ["--r" as string]: "0deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <g className="hi14-blade" style={{ ["--r" as string]: "60deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <g className="hi14-blade" style={{ ["--r" as string]: "120deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <g className="hi14-blade" style={{ ["--r" as string]: "180deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <g className="hi14-blade" style={{ ["--r" as string]: "240deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <g className="hi14-blade" style={{ ["--r" as string]: "300deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <circle cx="12" cy="12" r="3.4" fill="var(--surface-2)" stroke="var(--line-strong)" strokeWidth="1.2" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-aperture-blades" type="button">
        <svg class="hi14-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g class="hi14-blade" style="--r: 0deg"><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6"/></g>
          <g class="hi14-blade" style="--r: 60deg"><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6"/></g>
          <g class="hi14-blade" style="--r: 120deg"><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6"/></g>
          <g class="hi14-blade" style="--r: 180deg"><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6"/></g>
          <g class="hi14-blade" style="--r: 240deg"><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6"/></g>
          <g class="hi14-blade" style="--r: 300deg"><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6"/></g>
          <circle cx="12" cy="12" r="3.4" fill="var(--surface-2)" stroke="var(--line-strong)" stroke-width="1.2"/>
        </svg>
      </button>`,
};
