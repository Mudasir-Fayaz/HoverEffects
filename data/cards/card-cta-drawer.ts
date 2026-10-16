import type { HoverEffect } from "../types";

const css = `.he-card-cta-drawer{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-cta-drawer, .he-card-cta-drawer *, .he-card-cta-drawer *::before, .he-card-cta-drawer *::after { box-sizing: border-box; }
.he-card-cta-drawer h2, .he-card-cta-drawer h3, .he-card-cta-drawer p, .he-card-cta-drawer figure, .he-card-cta-drawer ol, .he-card-cta-drawer ul { margin: 0; }
.he-card-cta-drawer h2, .he-card-cta-drawer h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-cta-drawer img, .he-card-cta-drawer svg { display: block; max-width: 100%; }
.he-card-cta-drawer a { color: inherit; }
.he-card-cta-drawer :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* =========================================================
   Effect: CTA Drawer
   ========================================================= */.he-card-cta-drawer{
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-cta-drawer .card-icon{
  display: grid; place-items: center;
  width: 44px; height: 44px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}.he-card-cta-drawer h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-cta-drawer .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-cta-drawer .card-footer{ margin-top: 18px; }.he-card-cta-drawer .cta{
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 17px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  font-size: .86rem;
  font-weight: 650;
  text-decoration: none;
  overflow: hidden;
}.he-card-cta-drawer .cta::before{
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: var(--accent-soft);
  transform: translateY(101%);
  transition: transform .34s var(--ease);
}.he-card-cta-drawer .cta:hover{ border-color: var(--accent); }
@media (hover: hover) and (pointer: fine){.he-card-cta-drawer:hover .cta::before{ transform: translateY(0); }
}.he-card-cta-drawer:focus-within .cta::before{ transform: translateY(0); }
@media (prefers-reduced-motion: reduce){.he-card-cta-drawer .cta::before{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-cta-drawer { width: min(320px, 100%); height: 250px; }
.he-card-cta-drawer { overflow: hidden; }
.he-card-cta-drawer { display: flex; flex-direction: column; }
.he-card-cta-drawer .card-footer { margin-top: auto; }
.he-card-cta-drawer h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-cta-drawer .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-cta-drawer .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-cta-drawer .meta { font-size: .75rem; margin-top: 7px; }
.he-card-cta-drawer .price { font-size: .98rem; margin-top: 9px; }
.he-card-cta-drawer .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-cta-drawer .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-cta-drawer .card-icon svg { width: 17px; height: 17px; }
.he-card-cta-drawer .card-body { padding: 13px 16px 14px; }
.he-card-cta-drawer .chips { gap: 6px; margin-top: 12px; }
.he-card-cta-drawer .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-cta-drawer .specs { gap: 5px; margin-top: 9px; }
.he-card-cta-drawer .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-cta-drawer .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-cta-drawer .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-cta-drawer .trail { margin: 14px 6px 0; }
.he-card-cta-drawer .trail::before { top: 13px; }
.he-card-cta-drawer .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-cta-drawer .chart { height: 52px; margin-top: 12px; }
.he-card-cta-drawer .value { font-size: 1.45rem; }`;

export const cardCtaDrawer: HoverEffect = {
  id: "card-cta-drawer",
  title: "CTA Drawer",
  category: "cards",
  description: "An accent surface slides in behind the footer call to action on hover.",
  tags: ["card","cta","drawer","hover"],
  animationType: "translate",
  complexity: "simple",
  css,
  react: `export default function CTADrawerCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-cta-drawer" aria-labelledby="card-cta-drawer-title">
      <span className="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 4 7.5V16l8 4.5 8-4.5V7.5z" /><path d="M12 12v8.5M12 12l8-4.5M12 12 4 7.5" />
        </svg>
      </span>
      <h2 id="card-cta-drawer-title">Usage-based pricing</h2>
      <p className="body-copy">Pay for active seats only, with volume breaks at every tier. No platform fee and no minimum contract.</p>
      <p className="card-footer">
        <a className="cta" href="https://example.com">
          <span className="cta-label">Calculate your plan</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-cta-drawer" aria-labelledby="card-cta-drawer-title">
      <span class="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3 4 7.5V16l8 4.5 8-4.5V7.5z"/><path d="M12 12v8.5M12 12l8-4.5M12 12 4 7.5"/>
        </svg>
      </span>
      <h2 id="card-cta-drawer-title">Usage-based pricing</h2>
      <p class="body-copy">Pay for active seats only, with volume breaks at every tier. No platform fee and no minimum contract.</p>
      <p class="card-footer">
        <a class="cta" href="https://example.com">
          <span class="cta-label">Calculate your plan</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
