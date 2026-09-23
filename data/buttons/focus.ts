import type { HoverEffect } from "../types";

export const focusButton: HoverEffect = {
  id: "btn-focus",
  title: "Focus",
  category: "buttons",
  description: "Corner brackets expand outward to form full borders on hover.",
  tags: ["corners", "focus", "brackets"],
  animationType: "transform",
  complexity: "medium",
  react: `export default function FocusButton() {
  const bg = [
    "linear-gradient(#818cf8,#818cf8) top left / 12px 2px no-repeat",
    "linear-gradient(#818cf8,#818cf8) top left / 2px 12px no-repeat",
    "linear-gradient(#818cf8,#818cf8) top right / 12px 2px no-repeat",
    "linear-gradient(#818cf8,#818cf8) top right / 2px 12px no-repeat",
    "linear-gradient(#818cf8,#818cf8) bottom left / 12px 2px no-repeat",
    "linear-gradient(#818cf8,#818cf8) bottom left / 2px 12px no-repeat",
    "linear-gradient(#818cf8,#818cf8) bottom right / 12px 2px no-repeat",
    "linear-gradient(#818cf8,#818cf8) bottom right / 2px 12px no-repeat",
  ].join(", ");
  const bgHover = [
    "50% 2px", "2px 50%",
    "50% 2px", "2px 50%",
    "50% 2px", "2px 50%",
    "50% 2px", "2px 50%",
  ].join(", ");
  return (
    <button
      className="relative px-8 py-3 font-semibold text-indigo-400 bg-transparent border-none cursor-pointer transition-colors duration-300 hover:text-white"
      style={{
        background: bg,
        backgroundSize: "12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px",
        transition: "background-size 0.35s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundSize = bgHover; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundSize = "12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px"; }}
    >
      Hover Me
    </button>
  );
}`,
  html: `<button class="btn-focus">Hover Me</button>

<style>
.btn-focus {
  position: relative;
  padding: 14px 40px;
  font-size: 15px;
  font-weight: 600;
  color: #818cf8;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}
.btn-focus::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(#818cf8, #818cf8) top left / 12px 2px no-repeat,
    linear-gradient(#818cf8, #818cf8) top left / 2px 12px no-repeat,
    linear-gradient(#818cf8, #818cf8) top right / 12px 2px no-repeat,
    linear-gradient(#818cf8, #818cf8) top right / 2px 12px no-repeat,
    linear-gradient(#818cf8, #818cf8) bottom left / 12px 2px no-repeat,
    linear-gradient(#818cf8, #818cf8) bottom left / 2px 12px no-repeat,
    linear-gradient(#818cf8, #818cf8) bottom right / 12px 2px no-repeat,
    linear-gradient(#818cf8, #818cf8) bottom right / 2px 12px no-repeat;
  transition: background-size 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-focus:hover::before {
  background-size:
    50% 2px, 2px 50%,
    50% 2px, 2px 50%,
    50% 2px, 2px 50%,
    50% 2px, 2px 50%;
}
.btn-focus:hover {
  color: #fff;
}
</style>`,
};
