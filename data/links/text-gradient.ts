import type { HoverEffect } from "../types";

export const textGradient: HoverEffect = {
  id: "link-gradient-text",
  title: "Gradient Fill",
  category: "links",
  description: "Text fills with a gradient color on hover.",
  tags: ["gradient", "text", "color"],
  animationType: "color",
  complexity: "simple",
  react: `export default function GradientFillLink() {
  return (
    <a href="#" className="no-underline font-semibold text-slate-800
      hover:text-transparent hover:bg-clip-text
      hover:bg-linear-to-r hover:from-indigo-500 hover:to-pink-500
      transition-all duration-400">
      Hover over me
    </a>
  );
}`,
  html: `<a href="#" class="link-gradient-text">Hover over me</a>

<style>
.link-gradient-text {
  text-decoration: none;
  color: #1e293b;
  font-weight: 600;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 0% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.4s ease;
}
.link-gradient-text:hover { background-size: 100% 100%; }
</style>`,
};
