import type { HoverEffect } from "../types";

const css = `.he-badge-bottom-wash{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-bottom-wash, .he-badge-bottom-wash *, .he-badge-bottom-wash *::before, .he-badge-bottom-wash *::after { box-sizing: border-box; }
.he-badge-bottom-wash h2, .he-badge-bottom-wash h3, .he-badge-bottom-wash p, .he-badge-bottom-wash figure, .he-badge-bottom-wash ol, .he-badge-bottom-wash ul { margin: 0; }
.he-badge-bottom-wash h2, .he-badge-bottom-wash h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-bottom-wash img, .he-badge-bottom-wash svg { display: block; max-width: 100%; }
.he-badge-bottom-wash a { color: inherit; }
.he-badge-bottom-wash :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-bottom-wash {
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
.bdg06-wash {
  position: absolute;
  inset: 0;
  background: var(--accent-soft);
  transform: translateY(101%);
  transition: transform .3s var(--ease);
  pointer-events: none;
}
.bdg06-label {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.bdg06-label svg { color: var(--text-2); }
@media (hover: hover) and (pointer: fine) {
  .he-badge-bottom-wash:hover .bdg06-wash { transform: translateY(0); }
}
.he-badge-bottom-wash:focus-within .bdg06-wash { transform: translateY(0); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-bottom-wash, .he-badge-bottom-wash *, .he-badge-bottom-wash *::before, .he-badge-bottom-wash *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeBottomWash: HoverEffect = {
  id: "badge-bottom-wash",
  title: "Bottom Wash",
  category: "badges",
  description: "A muted surface rises from the lower edge behind the label, which never moves or loses contrast.",
  tags: ["badges","bottom","wash","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeBottomWash() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-bottom-wash"><i className="bdg06-wash" aria-hidden="true"></i><span className="bdg06-label"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="m5.4 8.2 1.8 1.8 3.4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> In stock</span></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-bottom-wash"><i class="bdg06-wash" aria-hidden="true"></i><span class="bdg06-label"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="m5.4 8.2 1.8 1.8 3.4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> In stock</span></span>`,
};
