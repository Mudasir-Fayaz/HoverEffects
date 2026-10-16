import type { HoverEffect } from "../types";
import { linkShell } from "../base-effects-css";

const ACCENT = "#4f46e5";
const ACCENT_ALT = "#818cf8";

const css = `${linkShell(".he-link-highlight-bg", ACCENT, ACCENT_ALT)}
.he-link-highlight-bg::before{content:"";position:absolute;left:-4px;right:-4px;bottom:3px;height:45%;border-radius:3px;background:color-mix(in srgb,var(--he-accent) 16%,transparent);transform:scaleX(0);transform-origin:left;transition:transform .28s cubic-bezier(.23,1,.32,1)}
.he-link-highlight-bg:hover::before,.he-link-highlight-bg:focus-visible::before{transform:scaleX(1)}`;

export const textHighlight: HoverEffect = {
  id: "link-highlight-bg",
  title: "Highlight Background",
  category: "links",
  description: "A shallow editorial highlighter bar grows behind the lower half of the text.",
  tags: ["highlight", "background", "text", "link"],
  animationType: "scale",
  complexity: "simple",
  css,
  react: `export default function HighlightLink() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <a className="he-link-highlight-bg" href="https://example.com">
        View the changelog
      </a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-link-highlight-bg" href="https://example.com">View the changelog</a>`,
};