import type { HoverEffect } from "../types";
import { navShell } from "../base-effects-css";

const ACCENT = "#4f46e5";
const ACCENT_ALT = "#818cf8";

const links = ["Home", "Gallery", "Portfolio", "Clients", "Contact"];

const htmlLinks = links
  .map((label, index) => `  <a href="https://example.com"${index === 0 ? ' aria-current="page"' : ""}>${label}</a>`)
  .join("\n");
const jsxLinks = links
  .map((label, index) => `      <a href="https://example.com"${index === 0 ? ' aria-current="page"' : ""}>${label}</a>`)
  .join("\n");

const css = `${navShell(".nav-line-track", ACCENT, ACCENT_ALT)}
.nav-line-track{gap:0}
.nav-line-track a{flex:1 1 0;padding:9px 10px;text-align:center}
.nav-line-track .he-line{position:absolute;left:5px;bottom:5px;width:calc((100% - 10px)/5);height:2px;border-radius:2px;background:var(--he-accent);pointer-events:none;transition:transform .38s cubic-bezier(.65,.05,.36,1)}
.nav-line-track:has(a:nth-child(2):is(:hover,:focus-visible)) .he-line{transform:translateX(100%)}
.nav-line-track:has(a:nth-child(3):is(:hover,:focus-visible)) .he-line{transform:translateX(200%)}
.nav-line-track:has(a:nth-child(4):is(:hover,:focus-visible)) .he-line{transform:translateX(300%)}
.nav-line-track:has(a:nth-child(5):is(:hover,:focus-visible)) .he-line{transform:translateX(400%)}`;

export const navLineTrack: HoverEffect = {
  id: "nav-line-track",
  title: "Line Track",
  category: "navigation",
  description: "A single accent line glides along the bar and parks under whichever item is hovered or focused.",
  tags: ["line", "track", "underline", "navigation"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function LineTrackNav() {
  return (
    <nav className="nav-line-track" aria-label="Demo navigation">
${jsxLinks}
      <span className="he-line" aria-hidden="true"></span>
    </nav>
  );
}`,
  html: `<style>${css}</style>
<nav class="nav-line-track" aria-label="Demo navigation">
${htmlLinks}
  <span class="he-line" aria-hidden="true"></span>
</nav>`,
};
