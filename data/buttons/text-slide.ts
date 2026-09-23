import type { HoverEffect } from "../types";

export const textSlideButton: HoverEffect = {
  id: "btn-text-slide",
  title: "Text Slide",
  category: "buttons",
  description: "Label slides out to the left as new text slides in from the right on hover.",
  tags: ["text", "slide", "swap"],
  animationType: "transform",
  complexity: "medium",
  react: `export default function TextSlideButton() {
  return (
    <button className="group relative px-8 py-3 font-semibold text-pink-400 bg-transparent border-2 border-pink-400 cursor-pointer overflow-hidden transition-all duration-300 hover:text-white hover:bg-pink-400">
      <span className="block transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-[30px] group-hover:opacity-0">Hover Me</span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-[30px] opacity-0 whitespace-nowrap transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[-50%] group-hover:opacity-100">Click Me</span>
    </button>
  );
}`,
  html: `<button class="btn-text-slide"><span class="default">Hover Me</span><span class="hover">Click Me</span></button>

<style>
.btn-text-slide {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #f472b6;
  background: transparent;
  border: 2px solid #f472b6;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s ease, background 0.3s ease;
}
.btn-text-slide .default,
.btn-text-slide .hover {
  display: block;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-text-slide .default {
  transform: translateX(0);
  opacity: 1;
}
.btn-text-slide .hover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(30px);
  opacity: 0;
  white-space: nowrap;
}
.btn-text-slide:hover .default {
  transform: translateX(-30px);
  opacity: 0;
}
.btn-text-slide:hover .hover {
  transform: translate(-50%, -50%) translateX(0);
  opacity: 1;
}
.btn-text-slide:hover {
  color: #fff;
  background: #f472b6;
}
</style>`,
};
