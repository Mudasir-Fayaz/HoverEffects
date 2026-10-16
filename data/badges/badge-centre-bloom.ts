import type { HoverEffect } from "../types";

const css = `.he-badge-centre-bloom{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-centre-bloom, .he-badge-centre-bloom *, .he-badge-centre-bloom *::before, .he-badge-centre-bloom *::after { box-sizing: border-box; }
.he-badge-centre-bloom h2, .he-badge-centre-bloom h3, .he-badge-centre-bloom p, .he-badge-centre-bloom figure, .he-badge-centre-bloom ol, .he-badge-centre-bloom ul { margin: 0; }
.he-badge-centre-bloom h2, .he-badge-centre-bloom h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-centre-bloom img, .he-badge-centre-bloom svg { display: block; max-width: 100%; }
.he-badge-centre-bloom a { color: inherit; }
.he-badge-centre-bloom :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-centre-bloom {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 11px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  overflow: hidden;
}
.bdg08-bloom {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  margin: -35px 0 0 -35px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(46 111 92 / .24), transparent 72%);
  background: radial-gradient(closest-side, color-mix(in srgb, var(--accent) 28%, transparent), transparent 72%);
  opacity: 0;
  transform: scale(.2);
  transition: transform .35s var(--ease-out), opacity .3s var(--ease);
  pointer-events: none;
}
.bdg08-label {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.bdg08-label svg { color: var(--accent); }
@media (hover: hover) and (pointer: fine) {
  .he-badge-centre-bloom:hover .bdg08-bloom { opacity: 1; transform: scale(1); }
}
.he-badge-centre-bloom:focus-within .bdg08-bloom { opacity: 1; transform: scale(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-centre-bloom, .he-badge-centre-bloom *, .he-badge-centre-bloom *::before, .he-badge-centre-bloom *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeCentreBloom: HoverEffect = {
  id: "badge-centre-bloom",
  title: "Centre Bloom",
  category: "badges",
  description: "A translucent circle expands from the middle of a clipped pill, tinting the surface behind the label.",
  tags: ["badges","centre","bloom","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeCentreBloom() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-centre-bloom"><i className="bdg08-bloom" aria-hidden="true"></i><span className="bdg08-label"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>Live</span></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-centre-bloom"><i class="bdg08-bloom" aria-hidden="true"></i><span class="bdg08-label"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="3" fill="currentColor"/></svg>Live</span></span>`,
};
