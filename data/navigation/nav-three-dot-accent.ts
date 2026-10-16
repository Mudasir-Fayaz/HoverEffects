import type { HoverEffect } from "../types";

const css = `.he-nav-three-dot-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-three-dot-accent, .he-nav-three-dot-accent *, .he-nav-three-dot-accent *::before, .he-nav-three-dot-accent *::after { box-sizing: border-box; }
.he-nav-three-dot-accent h2, .he-nav-three-dot-accent h3, .he-nav-three-dot-accent p, .he-nav-three-dot-accent figure, .he-nav-three-dot-accent ol, .he-nav-three-dot-accent ul { margin: 0; }
.he-nav-three-dot-accent h2, .he-nav-three-dot-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-three-dot-accent img, .he-nav-three-dot-accent svg { display: block; max-width: 100%; }
.he-nav-three-dot-accent a { color: inherit; }
.he-nav-three-dot-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav26-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(250px, 100%); }
.nav26-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
}
.nav26-link[aria-current="page"] { color: var(--text); }
.nav26-dots { display: inline-flex; gap: 4px; }
.nav26-dots i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--line-strong);
  transition: background-color .18s var(--ease), transform .18s var(--ease);
  transition-delay: calc(var(--i, 0) * 55ms);
}
@media (hover: hover) and (pointer: fine) {
  .nav26-link:hover .nav26-dots i { background: var(--accent); transform: translateY(-1px); }
}
.nav26-link:focus-visible .nav26-dots i { background: var(--accent); transform: translateY(-1px); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-three-dot-accent, .he-nav-three-dot-accent *, .he-nav-three-dot-accent *::before, .he-nav-three-dot-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navThreeDotAccent: HoverEffect = {
  id: "nav-three-dot-accent",
  title: "Three-Dot Accent",
  category: "navigation",
  description: "A decorative three-dot cluster brightens in a short sequence once — never implying loading.",
  tags: ["navigation","three","dot","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavThreeDotAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-three-dot-accent" aria-label="Example section">
        <ul className="nav26-list">
          <li><a className="nav26-link" href="https://example.com" aria-current="page"><span className="nav26-label">Overview</span><span className="nav26-dots" aria-hidden="true"><i style={{ ["--i" as string]: "0" }}></i><i style={{ ["--i" as string]: "1" }}></i><i style={{ ["--i" as string]: "2" }}></i></span></a></li>
          <li><a className="nav26-link" href="https://example.com"><span className="nav26-label">Guide</span><span className="nav26-dots" aria-hidden="true"><i style={{ ["--i" as string]: "0" }}></i><i style={{ ["--i" as string]: "1" }}></i><i style={{ ["--i" as string]: "2" }}></i></span></a></li>
          <li><a className="nav26-link" href="https://example.com"><span className="nav26-label">Details</span><span className="nav26-dots" aria-hidden="true"><i style={{ ["--i" as string]: "0" }}></i><i style={{ ["--i" as string]: "1" }}></i><i style={{ ["--i" as string]: "2" }}></i></span></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-three-dot-accent" aria-label="Example section">
        <ul class="nav26-list">
          <li><a class="nav26-link" href="https://example.com" aria-current="page"><span class="nav26-label">Overview</span><span class="nav26-dots" aria-hidden="true"><i style="--i: 0"></i><i style="--i: 1"></i><i style="--i: 2"></i></span></a></li>
          <li><a class="nav26-link" href="https://example.com"><span class="nav26-label">Guide</span><span class="nav26-dots" aria-hidden="true"><i style="--i: 0"></i><i style="--i: 1"></i><i style="--i: 2"></i></span></a></li>
          <li><a class="nav26-link" href="https://example.com"><span class="nav26-label">Details</span><span class="nav26-dots" aria-hidden="true"><i style="--i: 0"></i><i style="--i: 1"></i><i style="--i: 2"></i></span></a></li>
        </ul>
      </nav>`,
};
