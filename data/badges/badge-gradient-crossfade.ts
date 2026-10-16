import type { HoverEffect } from "../types";

const css = `.he-badge-gradient-crossfade{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-gradient-crossfade, .he-badge-gradient-crossfade *, .he-badge-gradient-crossfade *::before, .he-badge-gradient-crossfade *::after { box-sizing: border-box; }
.he-badge-gradient-crossfade h2, .he-badge-gradient-crossfade h3, .he-badge-gradient-crossfade p, .he-badge-gradient-crossfade figure, .he-badge-gradient-crossfade ol, .he-badge-gradient-crossfade ul { margin: 0; }
.he-badge-gradient-crossfade h2, .he-badge-gradient-crossfade h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-gradient-crossfade img, .he-badge-gradient-crossfade svg { display: block; max-width: 100%; }
.he-badge-gradient-crossfade a { color: inherit; }
.he-badge-gradient-crossfade :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-gradient-crossfade {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: linear-gradient(120deg, var(--surface-2), var(--accent-soft));
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  overflow: hidden;
}
.bdg10-alt {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, var(--accent-soft), rgb(46 111 92 / .2));
  background: linear-gradient(120deg, var(--accent-soft), color-mix(in srgb, var(--accent) 20%, var(--surface-2)));
  opacity: 0;
  transition: opacity .32s var(--ease);
  pointer-events: none;
}
.bdg10-label { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .he-badge-gradient-crossfade:hover .bdg10-alt { opacity: 1; }
}
.he-badge-gradient-crossfade:focus-within .bdg10-alt { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-gradient-crossfade, .he-badge-gradient-crossfade *, .he-badge-gradient-crossfade *::before, .he-badge-gradient-crossfade *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeGradientCrossfade: HoverEffect = {
  id: "badge-gradient-crossfade",
  title: "Gradient Crossfade",
  category: "badges",
  description: "A second subdued gradient fades over the first, never repainting or moving the label.",
  tags: ["badges","gradient","crossfade","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeGradientCrossfade() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-gradient-crossfade"><i className="bdg10-alt" aria-hidden="true"></i><span className="bdg10-label">Pro plan</span></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-gradient-crossfade"><i class="bdg10-alt" aria-hidden="true"></i><span class="bdg10-label">Pro plan</span></span>`,
};
