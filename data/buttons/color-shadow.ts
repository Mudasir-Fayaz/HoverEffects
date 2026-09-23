import type { HoverEffect } from "../types";

export const colorShadowButton: HoverEffect = {
  id: "btn-color-shadow",
  title: "Color Shadow",
  category: "buttons",
  description: "Multi-colored stacked shadows appear below the button on hover.",
  tags: ["shadow", "color", "layered"],
  animationType: "transform",
  complexity: "simple",
  react: `export default function ColorShadowButton() {
  return (
    <button className="px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer transition-all duration-300 hover:shadow-[0_4px_0_#f472b6,0_8px_0_#34d399,0_12px_0_#fbbf24,0_16px_0_#60a5fa] hover:-translate-y-1">
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-color-shadow">Hover Me</button>

<style>
.btn-color-shadow {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 0 0 transparent;
}
.btn-color-shadow:hover {
  box-shadow:
    0 4px 0 #f472b6,
    0 8px 0 #34d399,
    0 12px 0 #fbbf24,
    0 16px 0 #60a5fa;
  transform: translateY(-4px);
}
</style>`,
};
