import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#16a34a";
const ACCENT_ALT = "#4ade80";
const DANGER = "#dc2626";

const checkHtml = `<path d="M20 6.5 9.5 17 4 11.5"></path>`;
const checkJsx = `<path d="M20 6.5 9.5 17 4 11.5" />`;
const crossHtml = `<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>`;
const crossJsx = `<path d="M18 6 6 18" /><path d="m6 6 12 12" />`;

const checkSvgHtml = `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${checkHtml}</svg>`;
const checkSvgJsx = `<svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">${checkJsx}</svg>`;
const crossSvgHtml = `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${crossHtml}</svg>`;
const crossSvgJsx = `<svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">${crossJsx}</svg>`;

const css = `${buttonShell(".btn-click-confirm", ACCENT, ACCENT_ALT)}
.he-click-group{display:inline-flex;align-items:center;gap:10px}
.btn-click-confirm{min-width:132px;color:#fff;overflow:hidden;background:${ACCENT};border-color:transparent;transition:background-color .25s ease,transform .2s cubic-bezier(.23,1,.32,1)}
.btn-click-confirm .he-label{position:relative;z-index:1;transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .22s ease}
.btn-click-confirm .he-icon{position:absolute;left:50%;top:50%;display:grid;place-items:center;opacity:0;transform:translate(-50%,-50%) scale(.4);transition:transform .3s cubic-bezier(.34,1.4,.5,1),opacity .2s ease}
.btn-click-confirm .he-icon svg{display:block}
.btn-click-confirm .he-status{position:absolute;left:0;right:0;bottom:6px;text-align:center;font-size:9px;font-weight:750;letter-spacing:.12em;text-transform:uppercase;opacity:0;transform:translateY(8px);transition:transform .28s cubic-bezier(.23,1,.32,1),opacity .2s ease}
.btn-click-confirm.he-active .he-label{opacity:0;transform:translateY(-10px)}
.btn-click-confirm.he-active .he-icon{opacity:1;transform:translate(-50%,-62%) scale(1)}
.btn-click-confirm.he-active .he-status{opacity:1;transform:translateY(0)}
.btn-click-confirm.he-active{background:#15803d}
.btn-click-confirm.he-error{--he-accent:${DANGER};--he-accent-2:#f87171;background:${DANGER}}
.btn-click-confirm.he-error:focus-visible{outline-color:color-mix(in srgb,${DANGER} 35%,transparent)}
.btn-click-confirm.he-error.he-active{background:#b91c1c;animation:he-click-shake .5s cubic-bezier(.36,.07,.19,.97)}
@keyframes he-click-shake{10%,30%,50%,70%,90%{transform:translateX(-6px)}20%,40%,60%,80%{transform:translateX(6px)}}`;

export const clickConfirmButton: HoverEffect = {
  id: "btn-click-confirm",
  title: "Click Confirm",
  category: "buttons",
  description: "Clicking a button swaps its label for a check or cross with a Success! / Error! caption; the error button shakes it off.",
  tags: ["click", "success", "error", "feedback", "button"],
  animationType: "transform",
  complexity: "complex",
  css,
  react: `import { useEffect, useRef, useState } from "react";

export default function ClickConfirmButton() {
  const [active, setActive] = useState<"success" | "error" | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
  }, []);

  const run = (kind: "success" | "error") => {
    setActive(kind);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActive(null), 1300);
  };

  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <span className="he-click-group">
        <button
          type="button"
          className={active === "success" ? "btn-click-confirm he-success he-active" : "btn-click-confirm he-success"}
          onClick={() => run("success")}
        >
          <span className="he-icon" aria-hidden="true">${checkSvgJsx}</span>
          <span className="he-status" aria-hidden="true">Success!</span>
          <span className="he-label">Submit</span>
        </button>
        <button
          type="button"
          className={active === "error" ? "btn-click-confirm he-error he-active" : "btn-click-confirm he-error"}
          onClick={() => run("error")}
        >
          <span className="he-icon" aria-hidden="true">${crossSvgJsx}</span>
          <span className="he-status" aria-hidden="true">Error!</span>
          <span className="he-label">Retry</span>
        </button>
      </span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-click-group">
  <button type="button" class="btn-click-confirm he-success">
    <span class="he-icon" aria-hidden="true">${checkSvgHtml}</span>
    <span class="he-status" aria-hidden="true">Success!</span>
    <span class="he-label">Submit</span>
  </button>
  <button type="button" class="btn-click-confirm he-error">
    <span class="he-icon" aria-hidden="true">${crossSvgHtml}</span>
    <span class="he-status" aria-hidden="true">Error!</span>
    <span class="he-label">Retry</span>
  </button>
</span>
<script>
(function () {
  var group = document.querySelector(".he-click-group");
  if (!group) return;
  var timer;
  group.querySelectorAll(".btn-click-confirm").forEach(function (button) {
    button.addEventListener("click", function () {
      group.querySelectorAll(".btn-click-confirm").forEach(function (item) {
        item.classList.remove("he-active");
      });
      button.classList.add("he-active");
      clearTimeout(timer);
      timer = setTimeout(function () {
        button.classList.remove("he-active");
      }, 1300);
    });
  });
})();
</script>`,
};
