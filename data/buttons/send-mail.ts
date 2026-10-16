import type { HoverEffect } from "../types";
import { buttonShell } from "../base-effects-css";

const ACCENT = "#2563eb";
const ACCENT_ALT = "#3b82f6";

const css = `${buttonShell(".btn-send-mail", ACCENT, ACCENT_ALT)}
.btn-send-mail{background:#fff;border:1px solid #e2e8f0;color:#1e293b;border-radius:999px;padding:0 22px 0 8px;transition:background-color .3s ease,color .3s ease,border-color .3s ease}
.btn-send-mail .he-send-icon{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:var(--he-accent);color:#fff;transition:background-color .3s ease,color .3s ease,transform .3s ease}
.btn-send-mail .he-send-icon svg{display:block;width:17px;height:17px}
.btn-send-mail .he-label{position:relative;z-index:1}
.btn-send-mail:hover,.btn-send-mail:focus-visible{background:var(--he-accent);border-color:var(--he-accent);color:#fff}
.btn-send-mail:hover .he-send-icon,.btn-send-mail:focus-visible .he-send-icon{background:#fff;color:var(--he-accent);transform:rotate(45deg)}`;

export const sendMailButton: HoverEffect = {
  id: "btn-send-mail",
  title: "Send Mail",
  category: "buttons",
  description: "A paper-plane circle swaps color with the button while the plane rotates right to a straight send arrow on hover.",
  tags: ["icon", "send", "circle", "button"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function SendMailButton() {
  return (
    <>
      <style>{\`${css.replace(/`/g, "\\`")}\`}</style>
      <button type="button" className="btn-send-mail">
        <span className="he-send-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
          </svg>
        </span>
        <span className="he-label">Send</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button type="button" class="btn-send-mail">
  <span class="he-send-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
    </svg>
  </span>
  <span class="he-label">Send</span>
</button>`,
};