import type { HoverEffect } from "../types";

export const textHighlight: HoverEffect = {
  id: "link-highlight-bg",
  title: "Highlight Background",
  category: "links",
  description: "Background highlight sweeps in behind the text on hover.",
  tags: ["highlight", "background", "text"],
  animationType: "scale",
  complexity: "simple",
  react: `export default function HighlightLink() {
  return (
    <a href="#" className="relative text-slate-800 font-medium no-underline
      px-1 py-0.5 group hover:text-indigo-500 transition-colors duration-300">
      <span className="absolute inset-0 bg-indigo-500/10 rounded
        scale-x-0 origin-right group-hover:scale-x-100
        group-hover:origin-left transition-transform duration-300" />
      <span className="relative">Hover over me</span>
    </a>
  );
}`,
  html: `<a href="#" class="link-highlight">Hover over me</a>

<style>
.link-highlight {
  position: relative;
  text-decoration: none;
  color: #1e293b;
  font-weight: 500;
  padding: 2px 4px;
  transition: color 0.3s ease;
}
.link-highlight::before {
  content: '';
  position: absolute; inset: 0;
  background: rgba(99,102,241,.1);
  border-radius: 4px;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}
.link-highlight:hover::before { transform: scaleX(1); transform-origin: left; }
.link-highlight:hover { color: #6366f1; }
</style>`,
};
