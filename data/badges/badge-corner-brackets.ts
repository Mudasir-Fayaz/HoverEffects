import type { HoverEffect } from "../types";

const css = `.he-badge-corner-brackets{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-corner-brackets, .he-badge-corner-brackets *, .he-badge-corner-brackets *::before, .he-badge-corner-brackets *::after { box-sizing: border-box; }
.he-badge-corner-brackets h2, .he-badge-corner-brackets h3, .he-badge-corner-brackets p, .he-badge-corner-brackets figure, .he-badge-corner-brackets ol, .he-badge-corner-brackets ul { margin: 0; }
.he-badge-corner-brackets h2, .he-badge-corner-brackets h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-corner-brackets img, .he-badge-corner-brackets svg { display: block; max-width: 100%; }
.he-badge-corner-brackets a { color: inherit; }
.he-badge-corner-brackets :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-corner-brackets {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 13px;
  border: 1px solid var(--line-strong);
  border-radius: 7px;
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
}
.he-badge-corner-brackets i {
  position: absolute;
  width: 7px;
  height: 7px;
  border: 0 solid var(--accent);
  transition: transform .2s var(--ease);
  pointer-events: none;
}
.bdg03-tl { top: 3px; left: 3px; border-top-width: 1.5px; border-left-width: 1.5px; transform-origin: top left; }
.bdg03-tr { top: 3px; right: 3px; border-top-width: 1.5px; border-right-width: 1.5px; transform-origin: top right; }
.bdg03-bl { bottom: 3px; left: 3px; border-bottom-width: 1.5px; border-left-width: 1.5px; transform-origin: bottom left; }
.bdg03-br { bottom: 3px; right: 3px; border-bottom-width: 1.5px; border-right-width: 1.5px; transform-origin: bottom right; }
@media (hover: hover) and (pointer: fine) {
  .he-badge-corner-brackets:hover i { transform: scale(1.6); }
}
.he-badge-corner-brackets:focus-within i { transform: scale(1.6); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-corner-brackets, .he-badge-corner-brackets *, .he-badge-corner-brackets *::before, .he-badge-corner-brackets *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeCornerBrackets: HoverEffect = {
  id: "badge-corner-brackets",
  title: "Corner Brackets",
  category: "badges",
  description: "Four short corner strokes extend outward to frame the label, then retract to their resting marks.",
  tags: ["badges","corner","brackets","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeCornerBrackets() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-corner-brackets"><i className="bdg03-tl" aria-hidden="true"></i><i className="bdg03-tr" aria-hidden="true"></i><i className="bdg03-bl" aria-hidden="true"></i><i className="bdg03-br" aria-hidden="true"></i>v2.4.0</span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-corner-brackets"><i class="bdg03-tl" aria-hidden="true"></i><i class="bdg03-tr" aria-hidden="true"></i><i class="bdg03-bl" aria-hidden="true"></i><i class="bdg03-br" aria-hidden="true"></i>v2.4.0</span>`,
};
