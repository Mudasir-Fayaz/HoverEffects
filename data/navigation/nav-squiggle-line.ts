import type { HoverEffect } from "../types";
import { navShell } from "../base-effects-css";

const ACCENT = "#7c3aed";
const ACCENT_ALT = "#c4b5fd";

const labels = ["Home", "Gallery", "Portfolio", "Clients", "Contact"];
const wavePath = "M2 5 C 14 1.5, 26 8, 40 4.5 C 52 1.5, 62 7.5, 76 4 C 82 2.6, 86 3.4, 88 4.8";

const svgHtml = `<svg class="he-squiggle" viewBox="0 0 90 8" preserveAspectRatio="none" aria-hidden="true"><path d="${wavePath}" pathLength="100"></path></svg>`;
const svgJsx = `<svg className="he-squiggle" viewBox="0 0 90 8" preserveAspectRatio="none" aria-hidden="true"><path d="${wavePath}" pathLength="100" /></svg>`;

const htmlLinks = labels
  .map((label, index) => `  <a href="https://example.com"${index === 0 ? ' aria-current="page"' : ""}>${label}${svgHtml}</a>`)
  .join("\n");
const jsxLinks = labels
  .map((label, index) => `      <a href="https://example.com"${index === 0 ? ' aria-current="page"' : ""}>${label}${svgJsx}</a>`)
  .join("\n");

const css = `${navShell(".nav-squiggle-line", ACCENT, ACCENT_ALT)}
.nav-squiggle-line a .he-squiggle{position:absolute;left:7px;right:7px;bottom:1px;width:calc(100% - 14px);height:7px;overflow:visible;pointer-events:none}
.nav-squiggle-line a .he-squiggle path{fill:none;stroke:var(--he-accent);stroke-width:1.8;stroke-linecap:round;stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset .38s cubic-bezier(.22,.61,.36,1)}
.nav-squiggle-line a:hover .he-squiggle path,.nav-squiggle-line a:focus-visible .he-squiggle path{stroke-dashoffset:0}
.nav-squiggle-line a:hover,.nav-squiggle-line a:focus-visible{color:var(--he-accent)}`;

export const navSquiggleLine: HoverEffect = {
  id: "nav-squiggle-line",
  title: "Squiggle Line",
  category: "navigation",
  description: "A hand-drawn squiggle draws itself under the label, one smooth stroke from left to right.",
  tags: ["squiggle", "svg", "draw", "navigation"],
  animationType: "stroke",
  complexity: "medium",
  css,
  react: `export default function SquiggleLineNav() {
  return (
    <nav className="nav-squiggle-line" aria-label="Demo navigation">
${jsxLinks}
    </nav>
  );
}`,
  html: `<style>${css}</style>
<nav class="nav-squiggle-line" aria-label="Demo navigation">
${htmlLinks}
</nav>`,
};
