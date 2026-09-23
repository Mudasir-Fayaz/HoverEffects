import type { HoverEffect } from "../types";

export const borderDoubleButton: HoverEffect = {
  id: "btn-border-double",
  title: "Border Double",
  category: "buttons",
  description: "Solid inner border appears on hover with a dashed outer border appearing around it.",
  tags: ["border", "double", "dashed"],
  animationType: "opacity",
  complexity: "medium",
  react: `export default function BorderDoubleButton() {
  return (
    <button className="group relative px-8 py-3 font-semibold text-indigo-400 bg-transparent border-2 border-transparent cursor-pointer transition-all duration-350 hover:text-white hover:border-indigo-400 hover:bg-indigo-400/10">
      Hover Me
      <span className="absolute -inset-1.5 border-2 border-dashed border-transparent pointer-events-none transition-all duration-350 group-hover:border-indigo-400" />
    </button>
  );
}`,
  html: `<button class="btn-border-double">Hover Me</button>

<style>
.btn-border-double {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #818cf8;
  background: transparent;
  border: 2px solid transparent;
  cursor: pointer;
  transition: color 0.35s ease, border-color 0.35s ease, background 0.35s ease;
}
.btn-border-double::before {
  content: '';
  position: absolute;
  inset: -6px;
  border: 2px dashed transparent;
  transition: border-color 0.35s ease;
  pointer-events: none;
}
.btn-border-double:hover {
  color: #fff;
  border-color: #818cf8;
  background: rgba(129, 140, 248, 0.08);
}
.btn-border-double:hover::before {
  border-color: #818cf8;
}
</style>`,
};
