import type { HoverEffect } from "../types";

export const layerShadowButton: HoverEffect = {
  id: "btn-layer-shadow",
  title: "Layer Shadow",
  category: "buttons",
  description: "Stacked offset shadows in shades of the button color appear below on hover.",
  tags: ["shadow", "layered", "depth"],
  animationType: "transform",
  complexity: "simple",
  react: `export default function LayerShadowButton() {
  return (
    <button className="px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer transition-all duration-300 hover:shadow-[0_4px_0_#4f46e5,0_8px_0_rgba(79,70,229,0.6),0_12px_0_rgba(79,70,229,0.3),0_16px_0_rgba(79,70,229,0.15)] hover:-translate-y-1">
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-layer-shadow">Hover Me</button>

<style>
.btn-layer-shadow {
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
.btn-layer-shadow:hover {
  box-shadow:
    0 4px 0 #4f46e5,
    0 8px 0 rgba(79, 70, 229, 0.6),
    0 12px 0 rgba(79, 70, 229, 0.3),
    0 16px 0 rgba(79, 70, 229, 0.15);
  transform: translateY(-4px);
}
</style>`,
};
