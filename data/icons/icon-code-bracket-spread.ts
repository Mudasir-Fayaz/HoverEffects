import type { HoverEffect } from "../types";

const css = `.he-icon-code-bracket-spread{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-code-bracket-spread, .he-icon-code-bracket-spread *, .he-icon-code-bracket-spread *::before, .he-icon-code-bracket-spread *::after { box-sizing: border-box; }
.he-icon-code-bracket-spread h2, .he-icon-code-bracket-spread h3, .he-icon-code-bracket-spread p, .he-icon-code-bracket-spread figure, .he-icon-code-bracket-spread ol, .he-icon-code-bracket-spread ul { margin: 0; }
.he-icon-code-bracket-spread img, .he-icon-code-bracket-spread svg { display: block; max-width: 100%; }
.he-icon-code-bracket-spread a { color: inherit; }
.he-icon-code-bracket-spread :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-code-bracket-spread {
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
.he-icon-code-bracket-spread:hover { border-color: var(--accent-2); }
.he-icon-code-bracket-spread:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-code-bracket-spread:active { border-color: var(--accent); }
.hi06-icon { display: block; }
.hi06-l, .hi06-r { transition: transform .24s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .he-icon-code-bracket-spread:hover .hi06-l { transform: translateX(-2px); }
  .he-icon-code-bracket-spread:hover .hi06-r { transform: translateX(2px); }
}
.he-icon-code-bracket-spread:focus-visible .hi06-l { transform: translateX(-2px); }
.he-icon-code-bracket-spread:focus-visible .hi06-r { transform: translateX(2px); }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-code-bracket-spread, .he-icon-code-bracket-spread *, .he-icon-code-bracket-spread *::before, .he-icon-code-bracket-spread *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconCodeBracketSpread: HoverEffect = {
  id: "icon-code-bracket-spread",
  title: "Code Bracket Spread",
  category: "icons",
  description: "Two brackets part 2 px inside the frame",
  tags: ["icons","code","bracket","spread","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconCodeBracketSpread() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-code-bracket-spread" type="button">
        <svg className="hi06-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path className="hi06-l" d="M9.5 6.5 5 12l4.5 5.5" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path className="hi06-r" d="M14.5 6.5 19 12l-4.5 5.5" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.1" fill="var(--accent)" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-code-bracket-spread" type="button">
        <svg class="hi06-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path class="hi06-l" d="M9.5 6.5 5 12l4.5 5.5" stroke="var(--text-2)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <path class="hi06-r" d="M14.5 6.5 19 12l-4.5 5.5" stroke="var(--text-2)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="12" r="1.1" fill="var(--accent)"/>
        </svg>
      </button>`,
};
