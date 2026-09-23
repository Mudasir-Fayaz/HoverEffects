import type { HoverEffect } from "../types";

export const iconBounce: HoverEffect = {
  id: "icon-bounce",
  title: "Bounce",
  category: "icons",
  description: "Playful bounce animation on hover.",
  tags: ["bounce", "animation", "icon"],
  animationType: "translate",
  complexity: "simple",
  react: `import { Bell } from "lucide-react";

export default function BounceIcon() {
  return (
    <div className="inline-flex p-3 rounded-xl text-slate-500 cursor-pointer
      transition-all duration-300 hover:text-indigo-500 hover:animate-bounce">
      <Bell className="w-6 h-6" />
    </div>
  );
}`,
  html: `<div class="icon-bounce">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
</div>
<style>
.icon-bounce { display: inline-flex; padding: 12px; border-radius: 12px; color: #64748b; cursor: pointer; transition: all 0.3s ease; }
.icon-bounce:hover { color: #6366f1; animation: iconBounce 0.5s ease; }
@keyframes iconBounce { 0%, 100% { transform: translateY(0); } 30% { transform: translateY(-6px); } 60% { transform: translateY(-3px); } }
</style>`,
};
