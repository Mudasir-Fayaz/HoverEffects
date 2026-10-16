import type { HoverEffect } from "../types";

const css = `.he-badge-segment-highlight{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-segment-highlight, .he-badge-segment-highlight *, .he-badge-segment-highlight *::before, .he-badge-segment-highlight *::after { box-sizing: border-box; }
.he-badge-segment-highlight h2, .he-badge-segment-highlight h3, .he-badge-segment-highlight p, .he-badge-segment-highlight figure, .he-badge-segment-highlight ol, .he-badge-segment-highlight ul { margin: 0; }
.he-badge-segment-highlight h2, .he-badge-segment-highlight h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-segment-highlight img, .he-badge-segment-highlight svg { display: block; max-width: 100%; }
.he-badge-segment-highlight a { color: inherit; }
.he-badge-segment-highlight :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-segment-highlight {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 26px;
  padding: 0 5px 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  text-decoration: none;
}
.bdg28-cat { color: var(--text-2); font-weight: 600; }
.bdg28-val {
  position: relative;
  display: grid;
  place-items: center;
  height: 20px;
  padding: 0 9px;
  border-radius: var(--radius-pill);
  overflow: hidden;
}
.bdg28-hl {
  position: absolute;
  inset: 0;
  background: var(--accent-soft);
  opacity: 0;
  transition: opacity .24s var(--ease);
}
.bdg28-v { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .he-badge-segment-highlight:hover .bdg28-hl { opacity: 1; }
}
.he-badge-segment-highlight:focus-visible .bdg28-hl { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-segment-highlight, .he-badge-segment-highlight *, .he-badge-segment-highlight *::before, .he-badge-segment-highlight *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeSegmentHighlight: HoverEffect = {
  id: "badge-segment-highlight",
  title: "Segment Highlight",
  category: "badges",
  description: "A subtle layer highlights only the value segment of a two-part badge, with no false selection state.",
  tags: ["badges","segment","highlight","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeSegmentHighlight() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <a className="he-badge-segment-highlight" href="https://example.com"><span className="bdg28-cat">Plan</span><span className="bdg28-val"><i className="bdg28-hl" aria-hidden="true"></i><span className="bdg28-v">Team</span></span></a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-badge-segment-highlight" href="https://example.com"><span class="bdg28-cat">Plan</span><span class="bdg28-val"><i class="bdg28-hl" aria-hidden="true"></i><span class="bdg28-v">Team</span></span></a>`,
};
