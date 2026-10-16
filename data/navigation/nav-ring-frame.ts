import type { HoverEffect } from "../types";
import { navShell } from "../base-effects-css";

const ACCENT = "#0e7490";
const ACCENT_ALT = "#67e8f9";

const css = `${navShell(".nav-ring-frame", ACCENT, ACCENT_ALT)}
.nav-ring-frame a::before{content:"";position:absolute;inset:1px;border:1.5px solid var(--he-accent);border-radius:999px;opacity:0;transform:scale(.7);pointer-events:none;transition:transform .32s cubic-bezier(.52,.27,.4,1.3),opacity .18s ease,border-radius .32s ease}
.nav-ring-frame a:hover::before,.nav-ring-frame a:focus-visible::before{opacity:1;transform:scale(1);border-radius:7px}
.nav-ring-frame a:hover,.nav-ring-frame a:focus-visible{color:var(--he-accent)}`;

export const navRingFrame: HoverEffect = {
  id: "nav-ring-frame",
  title: "Ring Frame",
  category: "navigation",
  description: "A soft outline grows out of the item's centre, then squares off into a calm rounded frame.",
  tags: ["ring", "outline", "expand", "navigation"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function RingFrameNav() {
  return (
    <nav className="nav-ring-frame" aria-label="Demo navigation">
      <a href="https://example.com" aria-current="page">Home</a>
      <a href="https://example.com">Gallery</a>
      <a href="https://example.com">Portfolio</a>
      <a href="https://example.com">Clients</a>
      <a href="https://example.com">Contact</a>
    </nav>
  );
}`,
  html: `<style>${css}</style>
<nav class="nav-ring-frame" aria-label="Demo navigation">
  <a href="https://example.com" aria-current="page">Home</a>
  <a href="https://example.com">Gallery</a>
  <a href="https://example.com">Portfolio</a>
  <a href="https://example.com">Clients</a>
  <a href="https://example.com">Contact</a>
</nav>`,
};
