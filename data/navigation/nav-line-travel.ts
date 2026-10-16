import type { HoverEffect } from "../types";
import { navShell } from "../base-effects-css";

const ACCENT = "#db2777";
const ACCENT_ALT = "#f9a8d4";

const css = `${navShell(".nav-line-travel", ACCENT, ACCENT_ALT)}
.nav-line-travel a{height:34px;padding:0 12px}
.nav-line-travel a::before{content:"";position:absolute;left:9px;right:9px;top:5px;bottom:5px;border-left:2px solid var(--he-accent);border-right:2px solid var(--he-accent);opacity:0;transform:scaleY(0);transform-origin:50% 100%;transition:transform .22s cubic-bezier(.4,0,.2,1),opacity .16s ease}
.nav-line-travel a::after{content:"";position:absolute;left:9px;right:9px;bottom:5px;height:2px;border-radius:2px;background:var(--he-accent);transition:transform .3s cubic-bezier(.7,0,.3,1) .26s}
.nav-line-travel a:hover::after,.nav-line-travel a:focus-visible::after{transform:translateY(-22px);transition-delay:0s}
.nav-line-travel a:hover::before,.nav-line-travel a:focus-visible::before{opacity:1;transform:scaleY(1);transition-delay:.26s}
.nav-line-travel a:hover,.nav-line-travel a:focus-visible{color:var(--he-accent)}`;

export const navLineTravel: HoverEffect = {
  id: "nav-line-travel",
  title: "Line Travel",
  category: "navigation",
  description: "The baseline lifts to the top of the item and two slim side rails rise behind it to close the shape.",
  tags: ["travel", "line", "rails", "navigation"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function LineTravelNav() {
  return (
    <nav className="nav-line-travel" aria-label="Demo navigation">
      <a href="https://example.com" aria-current="page">Home</a>
      <a href="https://example.com">Gallery</a>
      <a href="https://example.com">Portfolio</a>
      <a href="https://example.com">Clients</a>
      <a href="https://example.com">Contact</a>
    </nav>
  );
}`,
  html: `<style>${css}</style>
<nav class="nav-line-travel" aria-label="Demo navigation">
  <a href="https://example.com" aria-current="page">Home</a>
  <a href="https://example.com">Gallery</a>
  <a href="https://example.com">Portfolio</a>
  <a href="https://example.com">Clients</a>
  <a href="https://example.com">Contact</a>
</nav>`,
};
