import type { HoverEffect } from "../types";

const css = `.he-icon-hex-tile-dock{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-hex-tile-dock, .he-icon-hex-tile-dock *, .he-icon-hex-tile-dock *::before, .he-icon-hex-tile-dock *::after { box-sizing: border-box; }
.he-icon-hex-tile-dock h2, .he-icon-hex-tile-dock h3, .he-icon-hex-tile-dock p, .he-icon-hex-tile-dock figure, .he-icon-hex-tile-dock ol, .he-icon-hex-tile-dock ul { margin: 0; }
.he-icon-hex-tile-dock img, .he-icon-hex-tile-dock svg { display: block; max-width: 100%; }
.he-icon-hex-tile-dock a { color: inherit; }
.he-icon-hex-tile-dock :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-hex-tile-dock {
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
.he-icon-hex-tile-dock:hover { border-color: var(--accent-2); }
.he-icon-hex-tile-dock:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-hex-tile-dock:active { border-color: var(--accent); }
.hi25-icon { display: block; }
.hi25-hex {
  transform: translate(var(--dx, 0px), var(--dy, 0px));
  transition: transform .24s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-hex-tile-dock:hover .hi25-hex { --dx: 0px; --dy: 0px; }
}
.he-icon-hex-tile-dock:focus-visible .hi25-hex { --dx: 0px; --dy: 0px; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-hex-tile-dock, .he-icon-hex-tile-dock *, .he-icon-hex-tile-dock *::before, .he-icon-hex-tile-dock *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconHexTileDock: HoverEffect = {
  id: "icon-hex-tile-dock",
  title: "Hex Tile Dock",
  category: "icons",
  description: "Hexes dock into a fixed honeycomb",
  tags: ["icons","hex","tile","dock","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconHexTileDock() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-hex-tile-dock" type="button">
        <svg className="hi25-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path className="hi25-hex" style={{ ["--dx" as string]: ".4px", ["--dy" as string]: "-.7px" }} d="M12 4 14.9 5.7v3.4L12 10.8 9.1 9.1V5.7z" fill="var(--surface-2)" stroke="var(--accent-2)" strokeWidth="1.5" />
          <path className="hi25-hex" style={{ ["--dx" as string]: "-.7px", ["--dy" as string]: ".4px" }} d="M8.9 9.2 11.8 10.9v3.4L8.9 16 6 14.3v-3.4z" fill="var(--surface-2)" stroke="var(--line-strong)" strokeWidth="1.5" />
          <path className="hi25-hex" style={{ ["--dx" as string]: ".6px", ["--dy" as string]: ".5px" }} d="M15.1 9.2 18 10.9v3.4L15.1 16 12.2 14.3v-3.4z" fill="var(--surface-2)" stroke="var(--line-strong)" strokeWidth="1.5" />
          <circle cx="12" cy="9.9" r="1.2" fill="var(--accent)" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-hex-tile-dock" type="button">
        <svg class="hi25-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path class="hi25-hex" style="--dx: .4px; --dy: -.7px" d="M12 4 14.9 5.7v3.4L12 10.8 9.1 9.1V5.7z" fill="var(--surface-2)" stroke="var(--accent-2)" stroke-width="1.5"/>
          <path class="hi25-hex" style="--dx: -.7px; --dy: .4px" d="M8.9 9.2 11.8 10.9v3.4L8.9 16 6 14.3v-3.4z" fill="var(--surface-2)" stroke="var(--line-strong)" stroke-width="1.5"/>
          <path class="hi25-hex" style="--dx: .6px; --dy: .5px" d="M15.1 9.2 18 10.9v3.4L15.1 16 12.2 14.3v-3.4z" fill="var(--surface-2)" stroke="var(--line-strong)" stroke-width="1.5"/>
          <circle cx="12" cy="9.9" r="1.2" fill="var(--accent)"/>
        </svg>
      </button>`,
};
