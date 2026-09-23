import type { HoverEffect } from "../types";

export const depth3dButton: HoverEffect = {
  id: "btn-3d-depth",
  title: "3D Depth",
  category: "buttons",
  description: "Button presses down into a layered bottom shadow on hover like a 3D keypress.",
  tags: ["3d", "depth", "press", "shadow"],
  animationType: "transform",
  complexity: "simple",
  react: `export default function Depth3dButton() {
  return (
    <button className="px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer transition-all duration-150 shadow-[0_6px_0_#4f46e5] hover:translate-y-[3px] hover:shadow-[0_3px_0_#4f46e5] active:translate-y-[6px] active:shadow-[0_0_0_#4f46e5]">
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-3d-depth">Hover Me</button>

<style>
.btn-3d-depth {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  border: none;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 6px 0 #4f46e5;
}
.btn-3d-depth:hover {
  transform: translateY(3px);
  box-shadow: 0 3px 0 #4f46e5;
}
.btn-3d-depth:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #4f46e5;
}
</style>`,
};
