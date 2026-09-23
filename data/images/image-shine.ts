import type { HoverEffect } from "../types";

export const imageShineSweep: HoverEffect = {
  id: "img-shine",
  title: "Shine Sweep",
  category: "images",
  description: "Light sweep glides across the image on hover.",
  tags: ["shine", "sweep", "light"],
  animationType: "translate",
  complexity: "simple",
  react: `export default function ShineSweepImage() {
  return (
    <div className="relative overflow-hidden rounded-2xl group">
      <img src="https://picsum.photos/400/300" alt="Demo"
        className="w-full block" />
      <div className="absolute top-0 -left-full w-1/2 h-full
        bg-linear-to-r from-transparent via-white/40 to-transparent
        group-hover:left-full transition-all duration-600" />
    </div>
  );
}`,
  html: `<div class="img-shine-wrap">
  <img src="https://picsum.photos/400/300" alt="Demo" />
</div>
<style>
.img-shine-wrap { position: relative; overflow: hidden; border-radius: 16px; }
.img-shine-wrap img { width: 100%; display: block; }
.img-shine-wrap::after {
  content: '';
  position: absolute; top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.4), transparent);
  transition: left 0.6s ease;
}
.img-shine-wrap:hover::after { left: 100%; }
</style>`,
};
