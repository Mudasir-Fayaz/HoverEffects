import type { HoverEffect } from "../types";

const css = `.he-badge-icon-well{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-icon-well, .he-badge-icon-well *, .he-badge-icon-well *::before, .he-badge-icon-well *::after { box-sizing: border-box; }
.he-badge-icon-well h2, .he-badge-icon-well h3, .he-badge-icon-well p, .he-badge-icon-well figure, .he-badge-icon-well ol, .he-badge-icon-well ul { margin: 0; }
.he-badge-icon-well h2, .he-badge-icon-well h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-icon-well img, .he-badge-icon-well svg { display: block; max-width: 100%; }
.he-badge-icon-well a { color: inherit; }
.he-badge-icon-well :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-icon-well {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 26px;
  padding: 0 12px 0 6px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  text-decoration: none;
}
.bdg23-well {
  position: relative;
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
}
.bdg23-disc {
  position: absolute;
  inset: -1px;
  border-radius: 50%;
  background: var(--accent-soft);
  opacity: 0;
  transition: opacity .25s var(--ease);
}
.bdg23-well svg { position: relative; color: var(--accent); }
@media (hover: hover) and (pointer: fine) {
  .he-badge-icon-well:hover .bdg23-disc { opacity: 1; }
}
.he-badge-icon-well:focus-visible .bdg23-disc { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-icon-well, .he-badge-icon-well *, .he-badge-icon-well *::before, .he-badge-icon-well *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeIconWell: HoverEffect = {
  id: "badge-icon-well",
  title: "Icon Well",
  category: "badges",
  description: "A tinted disc fades in behind the leading icon inside its reserved compartment.",
  tags: ["badges","icon","well","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeIconWell() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <a className="he-badge-icon-well" href="https://example.com"><span className="bdg23-well"><i className="bdg23-disc" aria-hidden="true"></i><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 3h8v10.5L8 11l-4 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg></span>Bookmarks</a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-badge-icon-well" href="https://example.com"><span class="bdg23-well"><i class="bdg23-disc" aria-hidden="true"></i><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 3h8v10.5L8 11l-4 2.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg></span>Bookmarks</a>`,
};
