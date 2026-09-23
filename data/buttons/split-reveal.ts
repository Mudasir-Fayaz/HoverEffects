import type { HoverEffect } from "../types";

export const splitRevealButton: HoverEffect = {
  id: "btn-split-reveal",
  title: "Split Reveal",
  category: "buttons",
  description: "Button text splits and halves slide apart on hover to reveal the label.",
  tags: ["split", "text", "reveal"],
  animationType: "transform",
  complexity: "medium",
  react: `export default function SplitRevealButton() {
  return (
    <button className="group px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden">
      <span className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] mr-[1px] group-hover:-translate-x-[8px]">Ho</span>
      <span className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[8px]">ver</span>
    </button>
  );
}`,
  html: `<button class="btn-split-reveal"><span class="l">Ho</span><span class="r">ver</span></button>

<style>
.btn-split-reveal {
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: #6366f1;
  border: none;
  cursor: pointer;
  display: inline-flex;
  gap: 0;
  padding: 0 40px;
}
.btn-split-reveal span {
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  line-height: 52px;
}
.btn-split-reveal .l {
  margin-right: 1px;
}
.btn-split-reveal:hover .l {
  transform: translateX(-8px);
}
.btn-split-reveal:hover .r {
  transform: translateX(8px);
}
</style>`,
};
