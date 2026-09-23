import type { HoverEffect } from "../types";

export const animatedBeamButton: HoverEffect = {
  id: "btn-animated-beam",
  title: "Animated Beam",
  category: "buttons",
  description: "A rotating conic gradient beam travels around the border on hover.",
  tags: ["beam", "animated", "border", "conic"],
  animationType: "transform",
  complexity: "complex",
  react: `export default function AnimatedBeamButton() {
  const [hovering, setHovering] = React.useState(false);
  return (
    <>
      <style>{'@property --angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @keyframes beam-spin { to { --angle: 360deg; } }'}</style>
      <button
        className="relative px-8 py-3 font-semibold text-indigo-400 bg-[#18181b] rounded-xl border-none cursor-pointer z-0 transition-all duration-350 hover:text-white hover:shadow-[inset_0_2px_8px_rgba(0,0,0,.35)]"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <span className="absolute -inset-[2px] rounded-[14px] -z-10 transition-opacity duration-300" style={{
          background: "conic-gradient(from var(--angle), transparent 0%, #a78bfa 10%, #c084fc 24%, #a78bfa 38%, transparent 48%, transparent 100%)",
          animation: "beam-spin 2s linear infinite",
          animationPlayState: hovering ? "running" : "paused",
          opacity: hovering ? 1 : 0,
        }} />
        <span className="absolute inset-0 rounded-xl bg-[#18181b] -z-10" />
        Hover Me
      </button>
    </>
  );
}`,
  html: `<button class="btn-animated-beam">Hover Me</button>

<style>
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
@keyframes spin {
  to { --angle: 360deg; }
}
.btn-animated-beam {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #a78bfa;
  background: #18181b;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  z-index: 0;
  transition: color 0.35s ease, box-shadow 0.35s ease;
  box-shadow: inset 0 1px 3px rgba(0,0,0,.2);
}
.btn-animated-beam::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 14px;
  background: conic-gradient(from var(--angle), transparent 0%, #a78bfa 10%, #c084fc 24%, #a78bfa 38%, transparent 48%, transparent 100%);
  z-index: -2;
  animation: spin 2s linear infinite;
  animation-play-state: paused;
}
.btn-animated-beam::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: #18181b;
  z-index: -1;
}
.btn-animated-beam:hover {
  color: #fff;
  box-shadow: inset 0 2px 8px rgba(0,0,0,.35);
}
.btn-animated-beam:hover::before {
  animation-play-state: running;
}
</style>`,
};
