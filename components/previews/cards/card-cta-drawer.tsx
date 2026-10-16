import { cardCtaDrawer } from "@/data/cards/card-cta-drawer";

export default function CTADrawerCard() {
  return (
    <>
      <style>{cardCtaDrawer.css}</style>
      <article className="he-card-cta-drawer" aria-labelledby="card-cta-drawer-title">
      <span className="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 4 7.5V16l8 4.5 8-4.5V7.5z" /><path d="M12 12v8.5M12 12l8-4.5M12 12 4 7.5" />
        </svg>
      </span>
      <h2 id="card-cta-drawer-title">Usage-based pricing</h2>
      <p className="body-copy">Pay for active seats only, with volume breaks at every tier. No platform fee and no minimum contract.</p>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="cta" href="https://example.com">
          <span className="cta-label">Calculate your plan</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
