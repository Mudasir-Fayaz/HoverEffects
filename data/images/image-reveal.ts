import type { HoverEffect } from "../types";

export const imageReveal: HoverEffect = {
  id: "img-caption-slide",
  title: "Caption Slide Up",
  category: "images",
  description: "Caption panel slides up from the bottom on hover.",
  tags: ["caption", "slide", "reveal"],
  animationType: "translate",
  complexity: "simple",
  react: `export default function CaptionSlideImage() {
  return (
    <div className="relative overflow-hidden rounded-2xl group">
      <img src="https://picsum.photos/400/300" alt="Demo"
        className="w-full block" />
      <div className="absolute bottom-0 inset-x-0 p-4
        bg-linear-to-t from-black/70 to-transparent text-white
        translate-y-full group-hover:translate-y-0
        transition-transform duration-400">
        <h4 className="font-semibold mb-1">Photo Title</h4>
        <p className="text-sm opacity-80">A short description</p>
      </div>
    </div>
  );
}`,
  html: `<div class="img-caption-wrap">
  <img src="https://picsum.photos/400/300" alt="Demo" />
  <div class="caption"><h4>Photo Title</h4><p>A short description</p></div>
</div>
<style>
.img-caption-wrap { position: relative; overflow: hidden; border-radius: 16px; }
.img-caption-wrap img { width: 100%; display: block; }
.img-caption-wrap .caption {
  position: absolute; bottom: 0; left: 0; right: 0; padding: 16px;
  background: linear-gradient(transparent, rgba(0,0,0,.7)); color: #fff;
  transform: translateY(100%); transition: transform 0.4s ease;
}
.img-caption-wrap:hover .caption { transform: translateY(0); }
.img-caption-wrap .caption h4 { margin: 0 0 4px; font-weight: 600; }
.img-caption-wrap .caption p { margin: 0; font-size: 14px; opacity: .8; }
</style>`,
};
