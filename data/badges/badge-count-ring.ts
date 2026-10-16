import type { HoverEffect } from "../types";

const css = `.he-badge-count-ring{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-count-ring, .he-badge-count-ring *, .he-badge-count-ring *::before, .he-badge-count-ring *::after { box-sizing: border-box; }
.he-badge-count-ring h2, .he-badge-count-ring h3, .he-badge-count-ring p, .he-badge-count-ring figure, .he-badge-count-ring ol, .he-badge-count-ring ul { margin: 0; }
.he-badge-count-ring h2, .he-badge-count-ring h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-count-ring img, .he-badge-count-ring svg { display: block; max-width: 100%; }
.he-badge-count-ring a { color: inherit; }
.he-badge-count-ring :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-count-ring {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 0 10px 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  text-decoration: none;
}
.bdg20-count {
  min-width: 1.4em;
  text-align: center;
  font-variant-numeric: tabular-nums;
  color: var(--text-2);
}
.bdg20-arc { transition: stroke-dashoffset .55s var(--ease-out); }
@media (hover: hover) and (pointer: fine) {
  .he-badge-count-ring:hover .bdg20-arc { stroke-dashoffset: 30; }
}
.he-badge-count-ring:focus-visible .bdg20-arc { stroke-dashoffset: 30; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-count-ring, .he-badge-count-ring *, .he-badge-count-ring *::before, .he-badge-count-ring *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeCountRing: HoverEffect = {
  id: "badge-count-ring",
  title: "Count Ring",
  category: "badges",
  description: "A tiny adjacent ring draws to a predetermined illustrated value — the displayed count never changes.",
  tags: ["badges","count","ring","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeCountRing() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <a className="he-badge-count-ring" href="https://example.com">Inbox <span className="bdg20-count">12</span><svg className="bdg20-ring" width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5.7" fill="none" stroke="var(--line-strong)" strokeWidth="2" /><circle className="bdg20-arc" cx="8" cy="8" r="5.7" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100" transform="rotate(-90 8 8)" /></svg></a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-badge-count-ring" href="https://example.com">Inbox <span class="bdg20-count">12</span><svg class="bdg20-ring" width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5.7" fill="none" stroke="var(--line-strong)" stroke-width="2"/><circle class="bdg20-arc" cx="8" cy="8" r="5.7" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100" transform="rotate(-90 8 8)"/></svg></a>`,
};
