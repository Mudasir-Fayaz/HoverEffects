import type { HoverEffect } from "../types";

const css = `.he-icon-cube-stack-settle{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-cube-stack-settle, .he-icon-cube-stack-settle *, .he-icon-cube-stack-settle *::before, .he-icon-cube-stack-settle *::after { box-sizing: border-box; }
.he-icon-cube-stack-settle h2, .he-icon-cube-stack-settle h3, .he-icon-cube-stack-settle p, .he-icon-cube-stack-settle figure, .he-icon-cube-stack-settle ol, .he-icon-cube-stack-settle ul { margin: 0; }
.he-icon-cube-stack-settle img, .he-icon-cube-stack-settle svg { display: block; max-width: 100%; }
.he-icon-cube-stack-settle a { color: inherit; }
.he-icon-cube-stack-settle :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-cube-stack-settle {
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
  transition: border-color .24s var(--ease), background-color .24s var(--ease);
}
.he-icon-cube-stack-settle:hover { border-color: var(--accent-2); background: var(--accent-soft); }
.he-icon-cube-stack-settle:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-cube-stack-settle:active { border-color: var(--accent); }
.hi26-icon { display: block; }
.hi26-cube {
  transform: translate(var(--tx, 0px), var(--ty, 0px));
  transition: transform .32s cubic-bezier(.34, 1.45, .5, 1);
}
.hi26-cube path { transition: opacity .26s var(--ease); }
/* Resting offsets live here (not inline) so hover can settle every cube to 0. */
.hi26-c1 { --tx: 2.8px; --ty: -3.2px; transition-delay: 0ms; }
.hi26-c2 { --tx: -2.6px; --ty: 2.4px; transition-delay: 60ms; }
.hi26-c3 { --tx: 2.8px; --ty: 2.6px; transition-delay: 90ms; }
@media (hover: hover) and (pointer: fine) {
  .he-icon-cube-stack-settle:hover .hi26-cube { --tx: 0px; --ty: 0px; }
  .he-icon-cube-stack-settle:hover .hi26-c2 { transition-delay: 0ms; }
  .he-icon-cube-stack-settle:hover .hi26-c3 { transition-delay: 45ms; }
  .he-icon-cube-stack-settle:hover .hi26-c1 { transition-delay: 90ms; }
  .he-icon-cube-stack-settle:hover .hi26-cube path { opacity: 1; }
}
.he-icon-cube-stack-settle:focus-visible .hi26-cube { --tx: 0px; --ty: 0px; }
.he-icon-cube-stack-settle:focus-visible .hi26-cube path { opacity: 1; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-cube-stack-settle, .he-icon-cube-stack-settle *, .he-icon-cube-stack-settle *::before, .he-icon-cube-stack-settle *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconCubeStackSettle: HoverEffect = {
  id: "icon-cube-stack-settle",
  title: "Cube Stack Settle",
  category: "icons",
  description: "Three loose cubes settle into a tight stack",
  tags: ["icons","cube","stack","settle","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconCubeStackSettle() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-cube-stack-settle" type="button">
        <svg className="hi26-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g transform="translate(12 7.6)"><g className="hi26-cube hi26-c1">
            <path d="M0-3.2 2.8 0 0 3.2-2.8 0z" fill="var(--accent-2)" />
            <path d="M-2.8 0 0 3.2v4.2l-2.8-2.7z" fill="var(--accent)" opacity=".8" />
            <path d="M2.8 0 0 3.2v4.2l2.8-2.7z" fill="var(--line-strong)" />
          </g></g>
          <g transform="translate(8.6 13.4)"><g className="hi26-cube hi26-c2">
            <path d="M0-3.2 2.8 0 0 3.2-2.8 0z" fill="var(--accent-2)" opacity=".85" />
            <path d="M-2.8 0 0 3.2v4.2l-2.8-2.7z" fill="var(--accent)" opacity=".7" />
            <path d="M2.8 0 0 3.2v4.2l2.8-2.7z" fill="var(--line-strong)" opacity=".9" />
          </g></g>
          <g transform="translate(15.4 13.4)"><g className="hi26-cube hi26-c3">
            <path d="M0-3.2 2.8 0 0 3.2-2.8 0z" fill="var(--accent-2)" opacity=".85" />
            <path d="M-2.8 0 0 3.2v4.2l-2.8-2.7z" fill="var(--accent)" opacity=".7" />
            <path d="M2.8 0 0 3.2v4.2l2.8-2.7z" fill="var(--line-strong)" opacity=".9" />
          </g></g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-cube-stack-settle" type="button">
        <svg class="hi26-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g transform="translate(12 7.6)"><g class="hi26-cube hi26-c1">
            <path d="M0-3.2 2.8 0 0 3.2-2.8 0z" fill="var(--accent-2)"/>
            <path d="M-2.8 0 0 3.2v4.2l-2.8-2.7z" fill="var(--accent)" opacity=".8"/>
            <path d="M2.8 0 0 3.2v4.2l2.8-2.7z" fill="var(--line-strong)"/>
          </g></g>
          <g transform="translate(8.6 13.4)"><g class="hi26-cube hi26-c2">
            <path d="M0-3.2 2.8 0 0 3.2-2.8 0z" fill="var(--accent-2)" opacity=".85"/>
            <path d="M-2.8 0 0 3.2v4.2l-2.8-2.7z" fill="var(--accent)" opacity=".7"/>
            <path d="M2.8 0 0 3.2v4.2l2.8-2.7z" fill="var(--line-strong)" opacity=".9"/>
          </g></g>
          <g transform="translate(15.4 13.4)"><g class="hi26-cube hi26-c3">
            <path d="M0-3.2 2.8 0 0 3.2-2.8 0z" fill="var(--accent-2)" opacity=".85"/>
            <path d="M-2.8 0 0 3.2v4.2l-2.8-2.7z" fill="var(--accent)" opacity=".7"/>
            <path d="M2.8 0 0 3.2v4.2l2.8-2.7z" fill="var(--line-strong)" opacity=".9"/>
          </g></g>
        </svg>
      </button>`,
};
