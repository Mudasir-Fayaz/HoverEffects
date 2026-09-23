import type { HoverEffect } from "../types";

export const cornerBracketCloseButton: HoverEffect = {
  id: "btn-corner-bracket-close",
  title: "Corner Bracket Close",
  category: "buttons",
  description: "Opposing corner brackets extend to form full borders around the button on hover.",
  tags: ["bracket", "corner", "border"],
  animationType: "transform",
  complexity: "medium",
  react: `export default function CornerBracketCloseButton() {
  return (
    <button className="group relative px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer">
      <span className="absolute -top-[3px] -right-[3px] w-[10px] h-[10px] border-t-2 border-r-2 border-indigo-400 transition-all duration-400 group-hover:w-[calc(100%+6px)] group-hover:h-[calc(100%+6px)]" />
      <span className="absolute -bottom-[3px] -left-[3px] w-[10px] h-[10px] border-b-2 border-l-2 border-indigo-400 transition-all duration-400 group-hover:w-[calc(100%+6px)] group-hover:h-[calc(100%+6px)]" />
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-corner-bracket-close">Bracket</button>

<style>
.btn-corner-bracket-close {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  border: none;
  cursor: pointer;
}
.btn-corner-bracket-close::before,
.btn-corner-bracket-close::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid #a78bfa;
  transition: all 0.4s;
}
.btn-corner-bracket-close::before {
  top: -3px;
  right: -3px;
  border-left: none;
  border-bottom: none;
}
.btn-corner-bracket-close::after {
  bottom: -3px;
  left: -3px;
  border-right: none;
  border-top: none;
}
.btn-corner-bracket-close:hover::before {
  width: calc(100% + 6px);
  height: calc(100% + 6px);
}
.btn-corner-bracket-close:hover::after {
  width: calc(100% + 6px);
  height: calc(100% + 6px);
}
</style>`,
};
