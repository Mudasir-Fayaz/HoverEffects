import type { HoverEffect } from "../types";

const css = `.he-badge-dot-pulse-ring{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-dot-pulse-ring, .he-badge-dot-pulse-ring *, .he-badge-dot-pulse-ring *::before, .he-badge-dot-pulse-ring *::after { box-sizing: border-box; }
.he-badge-dot-pulse-ring h2, .he-badge-dot-pulse-ring h3, .he-badge-dot-pulse-ring p, .he-badge-dot-pulse-ring figure, .he-badge-dot-pulse-ring ol, .he-badge-dot-pulse-ring ul { margin: 0; }
.he-badge-dot-pulse-ring h2, .he-badge-dot-pulse-ring h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-dot-pulse-ring img, .he-badge-dot-pulse-ring svg { display: block; max-width: 100%; }
.he-badge-dot-pulse-ring a { color: inherit; }
.he-badge-dot-pulse-ring :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-dot-pulse-ring {
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
.bdg15-dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}
.bdg15-dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1.5px solid var(--accent);
  border-radius: 50%;
  opacity: 0;
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-dot-pulse-ring:hover .bdg15-dot::after { animation: he-badge-dot-pulse-ring-bdg15-pulse .6s var(--ease-out) 1; }
}
.he-badge-dot-pulse-ring:focus-within .bdg15-dot::after { animation: he-badge-dot-pulse-ring-bdg15-pulse .6s var(--ease-out) 1; }
@keyframes he-badge-dot-pulse-ring-bdg15-pulse {
  0%   { opacity: .8; transform: scale(1); }
  100% { opacity: 0; transform: scale(2.4); }
}

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-dot-pulse-ring, .he-badge-dot-pulse-ring *, .he-badge-dot-pulse-ring *::before, .he-badge-dot-pulse-ring *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeDotPulseRing: HoverEffect = {
  id: "badge-dot-pulse-ring",
  title: "Dot Pulse",
  category: "badges",
  description: "An always-visible status dot emits one decorative outer-ring pulse when interacted with.",
  tags: ["badges","dot","pulse","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeDotPulse() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-dot-pulse-ring"><span className="bdg15-dot" aria-hidden="true"></span>Broadcasting</span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-dot-pulse-ring"><span class="bdg15-dot" aria-hidden="true"></span>Broadcasting</span>`,
};
