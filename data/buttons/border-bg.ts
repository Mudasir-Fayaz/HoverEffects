import type { HoverEffect } from "../types";

export const borderBgButton: HoverEffect = {
  id: "btn-border-bg",
  title: "Border BG",
  category: "buttons",
  description: "Colored bottom border rises to fill the button from bottom to top on hover.",
  tags: ["border", "fill", "bottom-top"],
  animationType: "transform",
  complexity: "simple",
  react: `export default function BorderBgButton() {
  return (
    <button className="group relative px-8 py-3 font-semibold text-indigo-400 bg-[#18181b] border-b-2 border-indigo-400 overflow-hidden transition-colors duration-400 cursor-pointer hover:text-white">
      <span className="relative z-10">Hover Me</span>
      <span className="absolute inset-0 bg-indigo-400 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0" />
    </button>
  );
}`,
  html: `<button class="btn-border-bg">Hover Me</button>

<style>
.btn-border-bg {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #818cf8;
  background: #18181b;
  border: none;
  border-bottom: 2px solid #818cf8;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s ease;
}
.btn-border-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #818cf8;
  z-index: -1;
  transform: translateY(100%);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-border-bg:hover::before {
  transform: translateY(0);
}
.btn-border-bg:hover {
  color: #fff;
}
</style>`,
};
