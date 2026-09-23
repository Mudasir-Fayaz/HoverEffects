import type { HoverEffect } from "../types";

export const shimmerSwipeButton: HoverEffect = {
  id: "btn-shimmer-swipe",
  title: "Shimmer Swipe",
  category: "buttons",
  description: "A glossy highlight sweeps diagonally across the button surface on hover.",
  tags: ["shimmer", "swipe", "gloss", "shine"],
  animationType: "transform",
  complexity: "medium",
  react: `export default function ShimmerSwipeButton() {
  return (
    <button className="group relative px-8 py-3 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden z-0">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[20deg] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -left-[75%] w-[50%] group-hover:left-[125%]" />
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-shimmer-swipe">Shine</button>

<style>
.btn-shimmer-swipe {
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
.btn-shimmer-swipe::before {
  content: '';
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: skewX(-20deg);
  transition: left 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-shimmer-swipe:hover::before {
  left: 125%;
}
</style>`,
};
