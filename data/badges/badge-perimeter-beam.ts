import type { HoverEffect } from "../types";

const css = `.he-badge-perimeter-beam{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-perimeter-beam, .he-badge-perimeter-beam *, .he-badge-perimeter-beam *::before, .he-badge-perimeter-beam *::after { box-sizing: border-box; }
.he-badge-perimeter-beam h2, .he-badge-perimeter-beam h3, .he-badge-perimeter-beam p, .he-badge-perimeter-beam figure, .he-badge-perimeter-beam ol, .he-badge-perimeter-beam ul { margin: 0; }
.he-badge-perimeter-beam h2, .he-badge-perimeter-beam h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-perimeter-beam img, .he-badge-perimeter-beam svg { display: block; max-width: 100%; }
.he-badge-perimeter-beam a { color: inherit; }
.he-badge-perimeter-beam :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-perimeter-beam {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 13px;
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  text-decoration: none;
}
.bdg13-beam {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.bdg13-run {
  opacity: 0;
  stroke-dashoffset: 0;
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-perimeter-beam:hover .bdg13-run {
    opacity: 1;
    stroke-dashoffset: -100;
    transition: opacity .08s linear, stroke-dashoffset .9s var(--ease);
  }
}
.he-badge-perimeter-beam:focus-visible .bdg13-run {
  opacity: 1;
  stroke-dashoffset: -100;
  transition: opacity .08s linear, stroke-dashoffset .9s var(--ease);
}

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-perimeter-beam, .he-badge-perimeter-beam *, .he-badge-perimeter-beam *::before, .he-badge-perimeter-beam *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgePerimeterBeam: HoverEffect = {
  id: "badge-perimeter-beam",
  title: "Perimeter Beam",
  category: "badges",
  description: "One short accent dash travels around an inline-SVG border channel once per hover or focus.",
  tags: ["badges","perimeter","beam","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgePerimeterBeam() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <a className="he-badge-perimeter-beam" href="https://example.com"><svg className="bdg13-beam" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false" aria-hidden="true"><rect x="1" y="1" width="98" height="98" rx="12" fill="none" stroke="var(--line-strong)" strokeWidth="1" vectorEffect="non-scaling-stroke" /><rect className="bdg13-run" x="1" y="1" width="98" height="98" rx="12" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength="100" strokeDasharray="14 86" /></svg>Badge spec</a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-badge-perimeter-beam" href="https://example.com"><svg class="bdg13-beam" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false" aria-hidden="true"><rect x="1" y="1" width="98" height="98" rx="12" fill="none" stroke="var(--line-strong)" stroke-width="1" vector-effect="non-scaling-stroke"/><rect class="bdg13-run" x="1" y="1" width="98" height="98" rx="12" fill="none" stroke="var(--accent)" stroke-width="1.6" stroke-linecap="round" vector-effect="non-scaling-stroke" pathLength="100" stroke-dasharray="14 86"/></svg>Badge spec</a>`,
};
