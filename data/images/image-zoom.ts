import type { HoverEffect } from "../types";

export const imageZoom: HoverEffect = {
  id: "img-zoom",
  title: "Smooth Zoom",
  category: "images",
  description: "Image scales smoothly inside its frame on hover.",
  tags: ["zoom", "scale", "image"],
  animationType: "scale",
  complexity: "simple",
  react: `export default function SmoothZoomImage() {
  return (
    <div className="overflow-hidden rounded-2xl">
      <img src="https://picsum.photos/400/300" alt="Demo"
        className="w-full block transition-transform duration-500
          hover:scale-[1.08]" />
    </div>
  );
}`,
  html: `<div class="img-zoom-wrap">
  <img src="https://picsum.photos/400/300" alt="Demo" />
</div>
<style>
.img-zoom-wrap { overflow: hidden; border-radius: 16px; }
.img-zoom-wrap img { width: 100%; display: block; transition: transform 0.5s ease; }
.img-zoom-wrap:hover img { transform: scale(1.08); }
</style>`,
};
