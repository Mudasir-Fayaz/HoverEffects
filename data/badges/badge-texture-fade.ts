import type { HoverEffect } from "../types";

const css = `.he-badge-texture-fade{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-texture-fade, .he-badge-texture-fade *, .he-badge-texture-fade *::before, .he-badge-texture-fade *::after { box-sizing: border-box; }
.he-badge-texture-fade h2, .he-badge-texture-fade h3, .he-badge-texture-fade p, .he-badge-texture-fade figure, .he-badge-texture-fade ol, .he-badge-texture-fade ul { margin: 0; }
.he-badge-texture-fade h2, .he-badge-texture-fade h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-texture-fade img, .he-badge-texture-fade svg { display: block; max-width: 100%; }
.he-badge-texture-fade a { color: inherit; }
.he-badge-texture-fade :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-texture-fade {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  text-decoration: none;
  overflow: hidden;
}
.bdg30-texture {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--line-strong) 1px, transparent 1.2px);
  background-size: 7px 7px;
  opacity: 0;
  transition: opacity .3s var(--ease);
  pointer-events: none;
}
.bdg30-label { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .he-badge-texture-fade:hover .bdg30-texture { opacity: .6; }
}
.he-badge-texture-fade:focus-visible .bdg30-texture { opacity: .6; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-texture-fade, .he-badge-texture-fade *, .he-badge-texture-fade *::before, .he-badge-texture-fade *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeTextureFade: HoverEffect = {
  id: "badge-texture-fade",
  title: "Texture Fade",
  category: "badges",
  description: "A faint static dot texture fades in behind the label of a solid pill.",
  tags: ["badges","texture","fade","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeTextureFade() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <a className="he-badge-texture-fade" href="https://example.com"><i className="bdg30-texture" aria-hidden="true"></i><span className="bdg30-label">Resources</span></a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-badge-texture-fade" href="https://example.com"><i class="bdg30-texture" aria-hidden="true"></i><span class="bdg30-label">Resources</span></a>`,
};
