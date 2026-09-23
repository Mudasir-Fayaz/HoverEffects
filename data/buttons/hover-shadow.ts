import type { HoverEffect } from "../types";

export const hoverShadowButton: HoverEffect = {
  id: "btn-hover-shadow",
  title: "Hover Shadow",
  category: "buttons",
  description: "A hard offset shadow appears beneath the button on hover for a lifted effect.",
  tags: ["shadow", "offset", "lift"],
  animationType: "transform",
  complexity: "simple",
  react: `export default function HoverShadowButton() {
  return (
    <button className="px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer transition-all duration-250 hover:shadow-[5px_5px_0_#3730a3] hover:-translate-x-[2px] hover:-translate-y-[2px]">
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-hover-shadow">Hover Me</button>

<style>
.btn-hover-shadow {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
  box-shadow: 0 0 0 transparent;
}
.btn-hover-shadow:hover {
  box-shadow: 5px 5px 0 #3730a3;
  transform: translate(-2px, -2px);
}
</style>`,
};
