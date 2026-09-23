import type { HoverEffect } from "../types";

export const marqueeLabelButton: HoverEffect = {
  id: "btn-marquee-label",
  title: "Marquee Label",
  category: "buttons",
  description: "Primary text slides up as secondary text marquees in from below on hover.",
  tags: ["marquee", "label", "text", "slide"],
  animationType: "transform",
  complexity: "medium",
  react: `export default function MarqueeLabelButton() {
  return (
    <button className="group relative px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden h-[52px]">
      <span className="flex items-center justify-center h-full px-8 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] bg-indigo-500 group-hover:-translate-y-full">Primary</span>
      <span className="absolute inset-x-0 top-full flex items-center justify-center h-full px-8 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] bg-indigo-500 group-hover:-translate-y-full">Secondary</span>
    </button>
  );
}`,
  html: `<button class="btn-marquee-label"><span class="p">Primary</span><span class="s">Secondary</span></button>

<style>
.btn-marquee-label {
  position: relative;
  padding: 0 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  border: none;
  cursor: pointer;
  overflow: hidden;
  height: 52px;
}
.btn-marquee-label .p,
.btn-marquee-label .s {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0 40px;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  background: #6366f1;
}
.btn-marquee-label .s {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
}
.btn-marquee-label:hover .p {
  transform: translateY(-100%);
}
.btn-marquee-label:hover .s {
  transform: translateY(-100%);
}
</style>`,
};
