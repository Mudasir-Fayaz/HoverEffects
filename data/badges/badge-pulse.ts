import type { HoverEffect } from "../types";

export const badgePulse: HoverEffect = {
  id: "badge-pulse",
  title: "Pulse Badge",
  category: "badges",
  description: "Badge pulses with a soft glow on hover.",
  tags: ["badge", "pulse", "glow"],
  animationType: "opacity",
  complexity: "simple",
  react: `export default function PulseBadge() {
  return (
    <span className="relative inline-flex items-center gap-1.5
      px-3 py-1 text-xs font-semibold rounded-full
      bg-emerald-50 text-emerald-600 border border-emerald-200
      cursor-default transition-all duration-300
      hover:shadow-[0_0_12px_rgba(16,185,129,.25)] hover:bg-emerald-100">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full
          rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      Live
    </span>
  );
}`,
  html: `<span class="badge-pulse">
  <span class="badge-dot"></span>
  Live
</span>

<style>
.badge-pulse {
  position: relative;
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 12px; font-size: 12px; font-weight: 600;
  border-radius: 999px; background: #ecfdf5; color: #059669;
  border: 1px solid #a7f3d0; cursor: default;
  transition: all 0.3s ease;
}
.badge-pulse:hover { box-shadow: 0 0 12px rgba(16,185,129,.25); background: #d1fae5; }
.badge-dot {
  display: inline-block; width: 8px; height: 8px;
  border-radius: 50%; background: #10b981;
  animation: pulse-dot 1.5s ease-in-out infinite;
}
@keyframes pulse-dot { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: .5; } }
</style>`,
};
