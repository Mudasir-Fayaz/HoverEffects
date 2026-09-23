import type { HoverEffect } from "../types";

export const imageBlurReveal: HoverEffect = {
  id: "img-blur-reveal",
  title: "Blur Reveal",
  category: "images",
  description: "Image unblurs to sharp focus on hover.",
  tags: ["blur", "reveal", "filter"],
  animationType: "filter",
  complexity: "simple",
  react: `export default function BlurRevealImage() {
  return (
    <div className="overflow-hidden rounded-2xl">
      <img src="https://picsum.photos/400/300" alt="Demo"
        className="w-full block blur-sm transition-all duration-500
          hover:blur-0 hover:scale-[1.03]" />
    </div>
  );
}`,
  html: `<div class="img-blur-wrap">
  <img src="https://picsum.photos/400/300" alt="Demo" />
</div>
<style>
.img-blur-wrap { overflow: hidden; border-radius: 16px; }
.img-blur-wrap img {
  width: 100%; display: block;
  filter: blur(4px); transition: filter 0.5s ease, transform 0.5s ease;
}
.img-blur-wrap:hover img { filter: blur(0); transform: scale(1.03); }
</style>`,
};
