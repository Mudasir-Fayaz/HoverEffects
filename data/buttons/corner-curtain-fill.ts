import type { HoverEffect } from "../types";

export const cornerCurtainFillButton: HoverEffect = {
  id: "btn-corner-curtain-fill",
  title: "Corner Curtain Fill",
  category: "buttons",
  description: "Curtains close from the left and right corners to fill the button on hover.",
  tags: ["curtain", "corner", "fill", "reveal"],
  animationType: "transform",
  complexity: "medium",
  react: `export default function CornerCurtainFillButton() {
  return (
    <button className="group relative px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden z-0">
      <span className="absolute inset-y-0 left-0 w-1/2 bg-indigo-600 -z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -translate-x-full group-hover:translate-x-0" />
      <span className="absolute inset-y-0 right-0 w-1/2 bg-indigo-600 -z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-x-full group-hover:translate-x-0" />
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-corner-curtain-fill">Curtain</button>

<style>
.btn-corner-curtain-fill {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  border: none;
  cursor: pointer;
  overflow: hidden;
  z-index: 0;
}
.btn-corner-curtain-fill::before,
.btn-corner-curtain-fill::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 51%;
  background: #4f46e5;
  z-index: -1;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-corner-curtain-fill::before {
  left: 0;
  transform: translateX(-100%);
}
.btn-corner-curtain-fill::after {
  right: 0;
  transform: translateX(100%);
}
.btn-corner-curtain-fill:hover::before {
  transform: translateX(0);
}
.btn-corner-curtain-fill:hover::after {
  transform: translateX(0);
}
</style>`,
};
