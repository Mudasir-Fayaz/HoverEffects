import type { HoverEffect } from "../types";
import { navShell } from "../base-effects-css";

const ACCENT = "#047857";
const ACCENT_ALT = "#6ee7b7";

const labels = ["Home", "Gallery", "Portfolio", "Clients", "Contact"];

const innerHtml = (label: string) =>
  `<span class="he-label">${label}</span><span class="he-helper" aria-hidden="true">${label}</span>`;
const innerJsx = (label: string) =>
  `<span className="he-label">${label}</span><span className="he-helper" aria-hidden="true">${label}</span>`;

const htmlLinks = labels
  .map((label, index) => `  <a href="https://example.com"${index === 0 ? ' aria-current="page"' : ""}>${innerHtml(label)}</a>`)
  .join("\n");
const jsxLinks = labels
  .map((label, index) => `      <a href="https://example.com"${index === 0 ? ' aria-current="page"' : ""}>${innerJsx(label)}</a>`)
  .join("\n");

const css = `${navShell(".nav-drop-line", ACCENT, ACCENT_ALT)}
.nav-drop-line a{overflow:hidden;height:34px}
.nav-drop-line .he-label{position:relative;display:block;transition:transform .3s cubic-bezier(.22,.61,.36,1),opacity .18s ease}
.nav-drop-line .he-helper{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--he-accent);opacity:0;transform:translateY(115%);pointer-events:none;transition:transform .3s cubic-bezier(.22,.61,.36,1),opacity .18s ease}
.nav-drop-line a::after{content:"";position:absolute;left:9px;right:9px;bottom:3px;height:2px;border-radius:2px;background:var(--he-accent);opacity:0;transform:translateY(-13px);transition:transform 0s .3s,opacity .16s ease .3s}
.nav-drop-line a:hover .he-label,.nav-drop-line a:focus-visible .he-label{transform:translateY(-115%);opacity:0}
.nav-drop-line a:hover .he-helper,.nav-drop-line a:focus-visible .he-helper{transform:translateY(0);opacity:1}
.nav-drop-line a:hover::after,.nav-drop-line a:focus-visible::after{opacity:1;transform:translateY(0);transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .14s ease}`;

export const navDropLine: HoverEffect = {
  id: "nav-drop-line",
  title: "Drop Line",
  category: "navigation",
  description: "The label drops away as an accent duplicate falls in, while a rule lowers itself onto the item's bottom edge.",
  tags: ["drop", "label", "line", "navigation"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function DropLineNav() {
  return (
    <nav className="nav-drop-line" aria-label="Demo navigation">
${jsxLinks}
    </nav>
  );
}`,
  html: `<style>${css}</style>
<nav class="nav-drop-line" aria-label="Demo navigation">
${htmlLinks}
</nav>`,
};
