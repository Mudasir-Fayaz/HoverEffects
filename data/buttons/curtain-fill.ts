import type { HoverEffect } from "../types";

export const curtainFillButton: HoverEffect = {
  id: "btn-curtain-fill",
  title: "Curtain Fill",
  category: "buttons",
  description: "Two color halves close from top and bottom to fill the button on hover.",
  tags: ["curtain", "fill", "reveal"],
  animationType: "transform",
  complexity: "medium",
  react: `export default function CurtainFillButton() {
  return (
    <button className="group relative px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden z-0">
      <span className="absolute inset-x-0 top-0 h-1/2 bg-indigo-600 -z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -translate-y-full group-hover:translate-y-0" />
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-indigo-600 -z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0" />
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-curtain-fill">Curtain</button>

<style>
.btn-curtain-fill {
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
.btn-curtain-fill::before,
.btn-curtain-fill::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 51%;
  background: #4f46e5;
  z-index: -1;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-curtain-fill::before {
  top: 0;
  transform: translateY(-100%);
}
.btn-curtain-fill::after {
  bottom: 0;
  transform: translateY(100%);
}
.btn-curtain-fill:hover::before {
  transform: translateY(0);
}
.btn-curtain-fill:hover::after {
  transform: translateY(0);
}
</style>`,
};
