import type { HoverEffect } from "../types";

export const textUnderline: HoverEffect = {
  id: "link-underline-slide",
  title: "Sliding Underline",
  category: "links",
  description: "Underline grows from left to right on hover.",
  tags: ["underline", "slide", "link"],
  animationType: "scale",
  complexity: "simple",
  react: `export default function SlidingUnderlineLink() {
  return (
    <a href="#" className="relative text-slate-800 font-medium no-underline group">
      Hover over me
      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0
        bg-indigo-500 group-hover:w-full transition-all duration-300" />
    </a>
  );
}`,
  html: `<a href="#" class="link-underline-slide">Hover over me</a>

<style>
.link-underline-slide {
  position: relative;
  text-decoration: none;
  color: #1e293b;
  font-weight: 500;
}
.link-underline-slide::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 2px;
  background: #6366f1;
  transition: width 0.3s ease;
}
.link-underline-slide:hover::after { width: 100%; }
</style>`,
};
