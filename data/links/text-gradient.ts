import type { HoverEffect } from "../types";
import { linkShell } from "../base-effects-css";

const ACCENT = "#4f46e5";
const ACCENT_ALT = "#818cf8";

const css = `${linkShell(".he-link-gradient-text", ACCENT, ACCENT_ALT)}
.he-link-gradient-text .he-gradient{position:absolute;inset:6px 2px;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;opacity:0;transition:opacity .3s ease;pointer-events:none}
.he-link-gradient-text:hover .he-gradient,.he-link-gradient-text:focus-visible .he-gradient{opacity:1}`;

export const textGradient: HoverEffect = {
  id: "link-gradient-text",
  title: "Gradient Fill",
  category: "links",
  description: "A layered gradient text treatment fills the glyphs while the plain label stays in the DOM.",
  tags: ["gradient", "text", "color", "link"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function GradientFillLink() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <a className="he-link-gradient-text" href="https://example.com">
        <span className="he-link-text">Explore the gallery</span>
        <span className="he-gradient" aria-hidden="true">Explore the gallery</span>
      </a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-link-gradient-text" href="https://example.com">
  <span class="he-link-text">Explore the gallery</span>
  <span class="he-gradient" aria-hidden="true">Explore the gallery</span>
</a>`,
};