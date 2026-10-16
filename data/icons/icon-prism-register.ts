import type { HoverEffect } from "../types";

const css = `.he-icon-prism-register{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-prism-register, .he-icon-prism-register *, .he-icon-prism-register *::before, .he-icon-prism-register *::after { box-sizing: border-box; }
.he-icon-prism-register h2, .he-icon-prism-register h3, .he-icon-prism-register p, .he-icon-prism-register figure, .he-icon-prism-register ol, .he-icon-prism-register ul { margin: 0; }
.he-icon-prism-register img, .he-icon-prism-register svg { display: block; max-width: 100%; }
.he-icon-prism-register a { color: inherit; }
.he-icon-prism-register :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-prism-register {
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
.he-icon-prism-register:hover { border-color: var(--accent-2); }
.he-icon-prism-register:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-prism-register:active { border-color: var(--accent); }
.hi27-icon { display: block; }
.hi27-p1 { transform: translate(-1.9px, -1.9px); transition: transform .28s var(--ease-out), opacity .28s var(--ease-out); }
.hi27-p3 { transform: translate(1.9px, 1.9px); transition: transform .28s var(--ease-out), opacity .28s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .he-icon-prism-register:hover .hi27-p1,
  .he-icon-prism-register:hover .hi27-p3 { transform: translate(0, 0); opacity: .62; }
}
.he-icon-prism-register:focus-visible .hi27-p1,
.he-icon-prism-register:focus-visible .hi27-p3 { transform: translate(0, 0); opacity: .62; }

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-prism-register, .he-icon-prism-register *, .he-icon-prism-register *::before, .he-icon-prism-register *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconPrismRegister: HoverEffect = {
  id: "icon-prism-register",
  title: "Prism Register",
  category: "icons",
  description: "Plates converge into one flat emblem",
  tags: ["icons","prism","register","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconPrismRegister() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-prism-register" type="button">
        <svg className="hi27-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect className="hi27-p1" x="7.5" y="7.5" width="9" height="9" rx="2" fill="var(--plate-a)" opacity=".5" />
          <rect x="7.5" y="7.5" width="9" height="9" rx="2" fill="var(--accent-2)" opacity=".55" />
          <rect className="hi27-p3" x="7.5" y="7.5" width="9" height="9" rx="2" fill="var(--plate-b)" opacity=".5" />
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-prism-register" type="button">
        <svg class="hi27-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect class="hi27-p1" x="7.5" y="7.5" width="9" height="9" rx="2" fill="var(--plate-a)" opacity=".5"/>
          <rect x="7.5" y="7.5" width="9" height="9" rx="2" fill="var(--accent-2)" opacity=".55"/>
          <rect class="hi27-p3" x="7.5" y="7.5" width="9" height="9" rx="2" fill="var(--plate-b)" opacity=".5"/>
        </svg>
      </button>`,
};
