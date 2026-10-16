import { cardLabelSwap } from "@/data/cards/card-label-swap";

export default function LabelSwapCard() {
  return (
    <>
      <style>{cardLabelSwap.css}</style>
      <article className="he-card-label-swap" aria-labelledby="card-label-swap-title">
      <span className="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h16M4 12h10M4 17h7" />
        </svg>
      </span>
      <h2 id="card-label-swap-title">The seasonal drop</h2>
      <p className="body-copy">Twelve pieces released each season, made in small batches and never restocked once they sell through.</p>
      <div className="label-viewport" aria-hidden="true">
        <span className="label label-a">New this week</span>
        <span className="label label-b">Back in stock</span>
      </div>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Browse the collection
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
