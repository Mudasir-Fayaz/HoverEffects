import type { HoverEffect } from "../types";

const css = `.he-badge-icon-crossfade{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-icon-crossfade, .he-badge-icon-crossfade *, .he-badge-icon-crossfade *::before, .he-badge-icon-crossfade *::after { box-sizing: border-box; }
.he-badge-icon-crossfade h2, .he-badge-icon-crossfade h3, .he-badge-icon-crossfade p, .he-badge-icon-crossfade figure, .he-badge-icon-crossfade ol, .he-badge-icon-crossfade ul { margin: 0; }
.he-badge-icon-crossfade h2, .he-badge-icon-crossfade h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-icon-crossfade img, .he-badge-icon-crossfade svg { display: block; max-width: 100%; }
.he-badge-icon-crossfade a { color: inherit; }
.he-badge-icon-crossfade :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-icon-crossfade {
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
  text-decoration: none;
}
.bdg17-box {
  position: relative;
  width: 14px;
  height: 14px;
}
.bdg17-box svg {
  position: absolute;
  inset: 0;
  transition: opacity .24s var(--ease);
}
.bdg17-a { opacity: 1; color: var(--text-2); }
.bdg17-b { opacity: 0; color: var(--accent); }
@media (hover: hover) and (pointer: fine) {
  .he-badge-icon-crossfade:hover .bdg17-a { opacity: 0; }
  .he-badge-icon-crossfade:hover .bdg17-b { opacity: 1; }
}
.he-badge-icon-crossfade:focus-visible .bdg17-a { opacity: 0; }
.he-badge-icon-crossfade:focus-visible .bdg17-b { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-icon-crossfade, .he-badge-icon-crossfade *, .he-badge-icon-crossfade *::before, .he-badge-icon-crossfade *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeIconCrossfade: HoverEffect = {
  id: "badge-icon-crossfade",
  title: "Icon Crossfade",
  category: "badges",
  description: "The leading icon fades into a related alternate inside one fixed-size icon well.",
  tags: ["badges","icon","crossfade","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeIconCrossfade() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <a className="he-badge-icon-crossfade" href="https://example.com"><span className="bdg17-box" aria-hidden="true"><svg className="bdg17-a" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3.5h4v9H3zM9 3.5h4v9H9z" /></svg><svg className="bdg17-b" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 5 3 3-3 3" /><path d="M11.5 5v6" /></svg></span>API reference</a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-badge-icon-crossfade" href="https://example.com"><span class="bdg17-box" aria-hidden="true"><svg class="bdg17-a" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3.5h4v9H3zM9 3.5h4v9H9z"/></svg><svg class="bdg17-b" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 5 3 3-3 3"/><path d="M11.5 5v6"/></svg></span>API reference</a>`,
};
