import type { HoverEffect } from "../types";

const css = `.he-badge-avatar-halo{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-avatar-halo, .he-badge-avatar-halo *, .he-badge-avatar-halo *::before, .he-badge-avatar-halo *::after { box-sizing: border-box; }
.he-badge-avatar-halo h2, .he-badge-avatar-halo h3, .he-badge-avatar-halo p, .he-badge-avatar-halo figure, .he-badge-avatar-halo ol, .he-badge-avatar-halo ul { margin: 0; }
.he-badge-avatar-halo h2, .he-badge-avatar-halo h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-avatar-halo img, .he-badge-avatar-halo svg { display: block; max-width: 100%; }
.he-badge-avatar-halo a { color: inherit; }
.he-badge-avatar-halo :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-avatar-halo {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 28px;
  padding: 0 12px 0 5px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
}
.bdg33-avatar {
  position: relative;
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: .58rem;
  font-weight: 750;
}
.bdg33-halo {
  position: absolute;
  inset: -3px;
  border: 1.5px solid var(--accent-2);
  border-radius: 50%;
  opacity: 0;
  transition: opacity .25s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-avatar-halo:hover .bdg33-halo { opacity: 1; }
}
.he-badge-avatar-halo:focus-within .bdg33-halo { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-avatar-halo, .he-badge-avatar-halo *, .he-badge-avatar-halo *::before, .he-badge-avatar-halo *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeAvatarHalo: HoverEffect = {
  id: "badge-avatar-halo",
  title: "Avatar Halo",
  category: "badges",
  description: "A thin halo appears around the avatar only; the avatar size and the name stay fixed.",
  tags: ["badges","avatar","halo","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeAvatarHalo() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-avatar-halo"><span className="bdg33-avatar"><span className="bdg33-initials" aria-hidden="true">MT</span><i className="bdg33-halo" aria-hidden="true"></i></span>Mira Tan</span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-avatar-halo"><span class="bdg33-avatar"><span class="bdg33-initials" aria-hidden="true">MT</span><i class="bdg33-halo" aria-hidden="true"></i></span>Mira Tan</span>`,
};
