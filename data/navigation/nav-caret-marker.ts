import type { HoverEffect } from "../types";
import { navShell } from "../base-effects-css";

const ACCENT = "#b45309";
const ACCENT_ALT = "#fbbf24";

const css = `${navShell(".nav-caret-marker", ACCENT, ACCENT_ALT)}
.nav-caret-marker a::before{content:"";position:absolute;left:50%;bottom:-8px;width:0;height:0;border:5px solid transparent;border-top:0;border-bottom:6px solid var(--he-accent);opacity:0;transform:translateX(-50%) translateY(4px);transition:transform .26s cubic-bezier(.34,1.3,.5,1),opacity .2s ease}
.nav-caret-marker a::after{content:"";position:absolute;left:9px;right:9px;bottom:2px;height:1.5px;border-radius:2px;background:var(--he-accent);transform:scaleX(0);transform-origin:50% 50%;transition:transform .28s cubic-bezier(.22,.61,.36,1)}
.nav-caret-marker a:hover::before,.nav-caret-marker a:focus-visible::before{opacity:1;transform:translateX(-50%) translateY(0)}
.nav-caret-marker a:hover::after,.nav-caret-marker a:focus-visible::after{transform:scaleX(1)}
.nav-caret-marker a:hover,.nav-caret-marker a:focus-visible{color:var(--he-accent)}`;

export const navCaretMarker: HoverEffect = {
  id: "nav-caret-marker",
  title: "Caret Marker",
  category: "navigation",
  description: "A small pointer rises beneath the item and a centre-out rule settles along its base.",
  tags: ["caret", "marker", "pointer", "navigation"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function CaretMarkerNav() {
  return (
    <nav className="nav-caret-marker" aria-label="Demo navigation">
      <a href="https://example.com" aria-current="page">Home</a>
      <a href="https://example.com">Gallery</a>
      <a href="https://example.com">Portfolio</a>
      <a href="https://example.com">Clients</a>
      <a href="https://example.com">Contact</a>
    </nav>
  );
}`,
  html: `<style>${css}</style>
<nav class="nav-caret-marker" aria-label="Demo navigation">
  <a href="https://example.com" aria-current="page">Home</a>
  <a href="https://example.com">Gallery</a>
  <a href="https://example.com">Portfolio</a>
  <a href="https://example.com">Clients</a>
  <a href="https://example.com">Contact</a>
</nav>`,
};
