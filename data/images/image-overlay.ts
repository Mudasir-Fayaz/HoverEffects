import type { HoverEffect } from "../types";

export const imageOverlay: HoverEffect = {
  id: "img-overlay",
  title: "Color Overlay",
  category: "images",
  description: "Color overlay fades in over the image on hover.",
  tags: ["overlay", "opacity", "image"],
  animationType: "opacity",
  complexity: "simple",
  react: `export default function OverlayImage() {
  return (
    <div className="relative overflow-hidden rounded-2xl group">
      <img src="https://picsum.photos/400/300" alt="Demo"
        className="w-full block transition-transform duration-400
          group-hover:scale-105" />
      <div className="absolute inset-0 bg-indigo-500/60 flex items-center
        justify-center opacity-0 group-hover:opacity-100
        transition-opacity duration-300">
        <span className="text-white font-semibold text-lg">View</span>
      </div>
    </div>
  );
}`,
  html: `<div class="img-overlay-wrap">
  <img src="https://picsum.photos/400/300" alt="Demo" />
  <div class="overlay"><span>View</span></div>
</div>
<style>
.img-overlay-wrap { position: relative; overflow: hidden; border-radius: 16px; }
.img-overlay-wrap img { width: 100%; display: block; transition: transform 0.4s ease; }
.img-overlay-wrap .overlay {
  position: absolute; inset: 0; background: rgba(99,102,241,.6);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s ease;
}
.img-overlay-wrap .overlay span { color: #fff; font-weight: 600; font-size: 18px; }
.img-overlay-wrap:hover .overlay { opacity: 1; }
.img-overlay-wrap:hover img { transform: scale(1.05); }
</style>`,
};
