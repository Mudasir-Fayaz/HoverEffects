import type { HoverEffect } from "../types";

export const dotBgButton: HoverEffect = {
  id: "btn-dot-bg",
  title: "Dot BG",
  category: "buttons",
  description: "A dotted grid texture fades in over the button fill on hover.",
  tags: ["dot", "grid", "pattern", "texture"],
  animationType: "opacity",
  complexity: "simple",
  react: `export default function DotBgButton() {
  return (
    <button className="group relative px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden z-0">
      <span className="absolute inset-0 opacity-0 transition-opacity duration-400 -z-10 group-hover:opacity-100" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "8px 8px" }} />
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-dot-bg">Dots</button>

<style>
.btn-dot-bg {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  border: none;
  cursor: pointer;
  z-index: 0;
}
.btn-dot-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px);
  background-size: 8px 8px;
  opacity: 0;
  transition: opacity 0.4s;
  z-index: -1;
}
.btn-dot-bg:hover::before {
  opacity: 1;
}
</style>`,
};
