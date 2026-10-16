import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#0d9488";
const ACCENT_ALT = "#5eead4";

const css = `${buttonShell(".btn-3d-flip", ACCENT, ACCENT_ALT)}
.btn-3d-flip{background:${ACCENT};color:#fff;border-color:transparent;border-radius:6px;min-width:168px;transform-origin:50% 100%;transform-style:preserve-3d;transform:perspective(800px) rotateX(0deg);transition:transform .48s cubic-bezier(.22,1,.36,1)}
.btn-3d-flip::before{content:"It worked!";position:absolute;left:0;top:-99%;width:100%;height:100%;display:grid;place-items:center;background:${ACCENT_ALT};color:#0f172a;border-radius:6px;font-weight:750;transform-origin:0% 100%;transform:rotateX(90deg);transition:background-color .3s ease}
.btn-3d-flip.he-flipped{background:color-mix(in srgb,${ACCENT} 70%,#0f172a);transform:perspective(800px) rotateX(-90deg) translateY(100%)}
.btn-3d-flip:not(.he-flipped){transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s ease}
.btn-3d-flip:not(.he-flipped):hover,.btn-3d-flip:not(.he-flipped):focus-visible{transform:perspective(800px) rotateX(-7deg) translateY(-3px) scale(1.02);box-shadow:0 -16px 36px -22px rgba(13,148,136,.4),0 14px 32px -18px rgba(15,23,42,.28)}
.btn-3d-flip:not(.he-flipped):active{transform:perspective(800px) rotateX(-6deg) translateY(-1px) scale(.99);box-shadow:0 -10px 22px -16px rgba(13,148,136,.35)}`;

export const threeDFlipButton: HoverEffect = {
  id: "btn-3d-flip",
  title: "3D Flip",
  category: "buttons",
  description: "A click pivots the button forward on its bottom edge and flips a success face up into view for a moment.",
  tags: ["3D", "flip", "click", "confirmation"],
  animationType: "transform",
  complexity: "complex",
  css,
  react: `import { useEffect, useRef, useState } from "react";

export default function ThreeDFlipButton() {
  const [flipped, setFlipped] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
  }, []);

  const handleClick = () => {
    if (flipped) return;
    setFlipped(true);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setFlipped(false), 1500);
  };

  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button
        type="button"
        className={flipped ? "btn-3d-flip he-flipped" : "btn-3d-flip"}
        onClick={handleClick}
      >
        Submit
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-3d-flip">Submit</button>
<script>
(function () {
  var button = document.querySelector(".btn-3d-flip");
  if (!button) return;
  var timer;
  button.addEventListener("click", function () {
    if (button.classList.contains("he-flipped")) return;
    button.classList.add("he-flipped");
    clearTimeout(timer);
    timer = setTimeout(function () {
      button.classList.remove("he-flipped");
    }, 1500);
  });
})();
</script>`,
};
