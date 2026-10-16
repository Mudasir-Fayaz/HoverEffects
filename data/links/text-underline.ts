import type { HoverEffect } from "../types";
import { linkShell } from "../base-effects-css";

const ACCENT = "#4f46e5";
const ACCENT_ALT = "#818cf8";

const css = `${linkShell(".he-link-underline-slide", ACCENT, ACCENT_ALT)}
.he-link-underline-slide::after{content:"";position:absolute;left:2px;right:2px;bottom:1px;height:1.5px;border-radius:1px;background:linear-gradient(90deg,var(--he-accent),var(--he-accent-2));transform:scaleX(0);transform-origin:right;transition:transform .3s cubic-bezier(.23,1,.32,1)}
.he-link-underline-slide:hover::after,.he-link-underline-slide:focus-visible::after{transform:scaleX(1);transform-origin:left}`;

export const textUnderline: HoverEffect = {
  id: "link-underline-slide",
  title: "Sliding Underline",
  category: "links",
  description: "A thin line slides in from the leading edge and retracts beyond the trailing edge.",
  tags: ["underline", "slide", "link"],
  animationType: "scale",
  complexity: "simple",
  css,
  react: `export default function SlidingUnderlineLink() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <a className="he-link-underline-slide" href="https://example.com">
        Read the documentation
      </a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-link-underline-slide" href="https://example.com">Read the documentation</a>`,
};