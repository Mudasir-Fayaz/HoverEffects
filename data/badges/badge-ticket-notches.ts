import type { HoverEffect } from "../types";

const css = `.he-badge-ticket-notches{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-ticket-notches, .he-badge-ticket-notches *, .he-badge-ticket-notches *::before, .he-badge-ticket-notches *::after { box-sizing: border-box; }
.he-badge-ticket-notches h2, .he-badge-ticket-notches h3, .he-badge-ticket-notches p, .he-badge-ticket-notches figure, .he-badge-ticket-notches ol, .he-badge-ticket-notches ul { margin: 0; }
.he-badge-ticket-notches h2, .he-badge-ticket-notches h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-ticket-notches img, .he-badge-ticket-notches svg { display: block; max-width: 100%; }
.he-badge-ticket-notches a { color: inherit; }
.he-badge-ticket-notches :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-ticket-notches {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 26px;
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  font-variant-numeric: tabular-nums;
}
.bdg26-notch {
  position: relative;
  width: 8px;
  height: 8px;
  border: 1px solid var(--accent-2);
  border-radius: 50%;
  background: var(--bg);
  opacity: 0;
  transition: opacity .28s var(--ease);
}
.bdg26-l { left: -5px; }
.bdg26-r { right: -5px; }
@media (hover: hover) and (pointer: fine) {
  .he-badge-ticket-notches:hover .bdg26-notch { opacity: 1; }
}
.he-badge-ticket-notches:focus-within .bdg26-notch { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-ticket-notches, .he-badge-ticket-notches *, .he-badge-ticket-notches *::before, .he-badge-ticket-notches *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeTicketNotches: HoverEffect = {
  id: "badge-ticket-notches",
  title: "Ticket Notches",
  category: "badges",
  description: "Small end-notch accents fade in on a ticket-shaped badge; the code text never moves.",
  tags: ["badges","ticket","notches","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeTicketNotches() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-ticket-notches"><i className="bdg26-notch bdg26-l" aria-hidden="true"></i><span className="bdg26-code">EVT–1042</span><i className="bdg26-notch bdg26-r" aria-hidden="true"></i></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-ticket-notches"><i class="bdg26-notch bdg26-l" aria-hidden="true"></i><span class="bdg26-code">EVT–1042</span><i class="bdg26-notch bdg26-r" aria-hidden="true"></i></span>`,
};
