import type { HoverEffect } from "../types";

const css = `.he-badge-inline-brackets{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-inline-brackets, .he-badge-inline-brackets *, .he-badge-inline-brackets *::before, .he-badge-inline-brackets *::after { box-sizing: border-box; }
.he-badge-inline-brackets h2, .he-badge-inline-brackets h3, .he-badge-inline-brackets p, .he-badge-inline-brackets figure, .he-badge-inline-brackets ol, .he-badge-inline-brackets ul { margin: 0; }
.he-badge-inline-brackets h2, .he-badge-inline-brackets h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-inline-brackets img, .he-badge-inline-brackets svg { display: block; max-width: 100%; }
.he-badge-inline-brackets a { color: inherit; }
.he-badge-inline-brackets :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-inline-brackets {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 26px;
  padding: 0 10px;
  color: var(--text);
  font-size: .78rem;
  font-weight: 700;
}
.bdg31-b {
  width: 5px;
  height: 13px;
  transition: transform .2s var(--ease);
}
.bdg31-l { border-left: 1.5px solid var(--accent); }
.bdg31-r { border-right: 1.5px solid var(--accent); }
@media (hover: hover) and (pointer: fine) {
  .he-badge-inline-brackets:hover .bdg31-l { transform: translateX(2px); }
  .he-badge-inline-brackets:hover .bdg31-r { transform: translateX(-2px); }
}
.he-badge-inline-brackets:focus-within .bdg31-l { transform: translateX(2px); }
.he-badge-inline-brackets:focus-within .bdg31-r { transform: translateX(-2px); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-inline-brackets, .he-badge-inline-brackets *, .he-badge-inline-brackets *::before, .he-badge-inline-brackets *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeInlineBrackets: HoverEffect = {
  id: "badge-inline-brackets",
  title: "Inline Brackets",
  category: "badges",
  description: "Reserved bracket marks at both ends approach the label slightly without ever touching it.",
  tags: ["badges","inline","brackets","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeInlineBrackets() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-inline-brackets"><i className="bdg31-b bdg31-l" aria-hidden="true"></i>Optional<i className="bdg31-b bdg31-r" aria-hidden="true"></i></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-inline-brackets"><i class="bdg31-b bdg31-l" aria-hidden="true"></i>Optional<i class="bdg31-b bdg31-r" aria-hidden="true"></i></span>`,
};
