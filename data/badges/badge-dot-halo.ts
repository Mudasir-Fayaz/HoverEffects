import type { HoverEffect } from "../types";

const css = `.he-badge-dot-halo{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-dot-halo, .he-badge-dot-halo *, .he-badge-dot-halo *::before, .he-badge-dot-halo *::after { box-sizing: border-box; }
.he-badge-dot-halo h2, .he-badge-dot-halo h3, .he-badge-dot-halo p, .he-badge-dot-halo figure, .he-badge-dot-halo ol, .he-badge-dot-halo ul { margin: 0; }
.he-badge-dot-halo h2, .he-badge-dot-halo h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-dot-halo img, .he-badge-dot-halo svg { display: block; max-width: 100%; }
.he-badge-dot-halo a { color: inherit; }
.he-badge-dot-halo :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-dot-halo {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 26px;
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
}
.bdg14-dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}
.bdg14-halo {
  position: absolute;
  inset: -3px;
  border: 1.5px solid var(--accent);
  border-radius: 50%;
  opacity: 0;
  transform: scale(.4);
  transition: transform .25s var(--ease-out), opacity .25s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-dot-halo:hover .bdg14-halo { opacity: .85; transform: scale(1); }
}
.he-badge-dot-halo:focus-within .bdg14-halo { opacity: .85; transform: scale(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-dot-halo, .he-badge-dot-halo *, .he-badge-dot-halo *::before, .he-badge-dot-halo *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeDotHalo: HoverEffect = {
  id: "badge-dot-halo",
  title: "Dot Halo",
  category: "badges",
  description: "A small halo grows around the unchanged status dot; the dot’s meaning never shifts.",
  tags: ["badges","dot","halo","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeDotHalo() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-dot-halo"><span className="bdg14-dot"><i className="bdg14-halo" aria-hidden="true"></i></span>Operational</span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-dot-halo"><span class="bdg14-dot"><i class="bdg14-halo" aria-hidden="true"></i></span>Operational</span>`,
};
