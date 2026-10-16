import type { HoverEffect } from "../types";

const css = `.he-nav-leading-stripe-wash{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-leading-stripe-wash, .he-nav-leading-stripe-wash *, .he-nav-leading-stripe-wash *::before, .he-nav-leading-stripe-wash *::after { box-sizing: border-box; }
.he-nav-leading-stripe-wash h2, .he-nav-leading-stripe-wash h3, .he-nav-leading-stripe-wash p, .he-nav-leading-stripe-wash figure, .he-nav-leading-stripe-wash ol, .he-nav-leading-stripe-wash ul { margin: 0; }
.he-nav-leading-stripe-wash h2, .he-nav-leading-stripe-wash h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-leading-stripe-wash img, .he-nav-leading-stripe-wash svg { display: block; max-width: 100%; }
.he-nav-leading-stripe-wash a { color: inherit; }
.he-nav-leading-stripe-wash :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav21-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(250px, 100%); }
.nav21-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 11px 12px 11px 18px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
}
.nav21-link[aria-current="page"] { color: var(--text); }
.nav21-link[aria-current="page"] .nav21-stripe { transform: scaleY(.4); }
.nav21-wash {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--accent-soft);
  opacity: 0;
  transition: opacity .25s var(--ease);
  pointer-events: none;
}
.nav21-stripe {
  position: absolute;
  left: 6px;
  top: 8px;
  bottom: 8px;
  width: 3px;
  border-radius: 3px;
  background: var(--accent);
  transform: scaleY(0);
  transform-origin: top center;
  transition: transform .26s var(--ease);
  pointer-events: none;
}
.nav21-label { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .nav21-link:hover .nav21-stripe { transform: scaleY(1); }
  .nav21-link:hover .nav21-wash { opacity: .55; }
}
.nav21-link:focus-visible .nav21-stripe { transform: scaleY(1); }
.nav21-link:focus-visible .nav21-wash { opacity: .55; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-leading-stripe-wash, .he-nav-leading-stripe-wash *, .he-nav-leading-stripe-wash *::before, .he-nav-leading-stripe-wash *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navLeadingStripeWash: HoverEffect = {
  id: "nav-leading-stripe-wash",
  title: "Leading Stripe Wash",
  category: "navigation",
  description: "A leading stripe extends down the row while a related background tint fades in on separate layers.",
  tags: ["navigation","leading","stripe","wash","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavLeadingStripeWash() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-leading-stripe-wash" aria-label="Example section">
        <ul className="nav21-list">
          <li><a className="nav21-link" href="https://example.com" aria-current="page"><i className="nav21-wash" aria-hidden="true"></i><i className="nav21-stripe" aria-hidden="true"></i><span className="nav21-label">Overview</span></a></li>
          <li><a className="nav21-link" href="https://example.com"><i className="nav21-wash" aria-hidden="true"></i><i className="nav21-stripe" aria-hidden="true"></i><span className="nav21-label">Guide</span></a></li>
          <li><a className="nav21-link" href="https://example.com"><i className="nav21-wash" aria-hidden="true"></i><i className="nav21-stripe" aria-hidden="true"></i><span className="nav21-label">Details</span></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-leading-stripe-wash" aria-label="Example section">
        <ul class="nav21-list">
          <li><a class="nav21-link" href="https://example.com" aria-current="page"><i class="nav21-wash" aria-hidden="true"></i><i class="nav21-stripe" aria-hidden="true"></i><span class="nav21-label">Overview</span></a></li>
          <li><a class="nav21-link" href="https://example.com"><i class="nav21-wash" aria-hidden="true"></i><i class="nav21-stripe" aria-hidden="true"></i><span class="nav21-label">Guide</span></a></li>
          <li><a class="nav21-link" href="https://example.com"><i class="nav21-wash" aria-hidden="true"></i><i class="nav21-stripe" aria-hidden="true"></i><span class="nav21-label">Details</span></a></li>
        </ul>
      </nav>`,
};
