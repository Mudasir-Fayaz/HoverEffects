import type { HoverEffect } from "../types";

const css = `.he-badge-verified-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-verified-accent, .he-badge-verified-accent *, .he-badge-verified-accent *::before, .he-badge-verified-accent *::after { box-sizing: border-box; }
.he-badge-verified-accent h2, .he-badge-verified-accent h3, .he-badge-verified-accent p, .he-badge-verified-accent figure, .he-badge-verified-accent ol, .he-badge-verified-accent ul { margin: 0; }
.he-badge-verified-accent h2, .he-badge-verified-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-verified-accent img, .he-badge-verified-accent svg { display: block; max-width: 100%; }
.he-badge-verified-accent a { color: inherit; }
.he-badge-verified-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-verified-accent {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 0 11px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
}
.bdg19-draw {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset .5s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-verified-accent:hover .bdg19-draw { stroke-dashoffset: 0; }
}
.he-badge-verified-accent:focus-within .bdg19-draw { stroke-dashoffset: 0; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-verified-accent, .he-badge-verified-accent *, .he-badge-verified-accent *::before, .he-badge-verified-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeVerifiedAccent: HoverEffect = {
  id: "badge-verified-accent",
  title: "Verified Accent",
  category: "badges",
  description: "A fine accent traces the already-visible checkmark — it decorates the symbol, never implying new verification.",
  tags: ["badges","verified","accent","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeVerifiedAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-verified-accent"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" opacity=".5" /><path d="m5.4 8.3 1.8 1.8 3.4-4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".5" /><path className="bdg19-draw" d="m5.4 8.3 1.8 1.8 3.4-4.2" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Verified</span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-verified-accent"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.4" opacity=".5"/><path d="m5.4 8.3 1.8 1.8 3.4-4.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity=".5"/><path class="bdg19-draw" d="m5.4 8.3 1.8 1.8 3.4-4.2" pathLength="100" stroke="var(--accent)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>Verified</span>`,
};
