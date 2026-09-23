import type { HoverEffect } from "../types";

export const imageGrayscale: HoverEffect = {
  id: "img-grayscale",
  title: "Grayscale to Color",
  category: "images",
  description: "Image transitions from grayscale to full color on hover.",
  tags: ["grayscale", "filter", "color"],
  animationType: "filter",
  complexity: "simple",
  react: `export default function GrayscaleImage() {
  return (
    <div className="overflow-hidden rounded-2xl">
      <img src="https://picsum.photos/400/300" alt="Demo"
        className="w-full block grayscale transition-all duration-500
          hover:grayscale-0 hover:scale-[1.03]" />
    </div>
  );
}`,
  html: `<div class="img-grayscale-wrap">
  <img src="https://picsum.photos/400/300" alt="Demo" />
</div>
<style>
.img-grayscale-wrap { overflow: hidden; border-radius: 16px; }
.img-grayscale-wrap img {
  width: 100%; display: block;
  filter: grayscale(100%); transition: filter 0.5s ease, transform 0.5s ease;
}
.img-grayscale-wrap:hover img { filter: grayscale(0); transform: scale(1.03); }
</style>`,
};
