import { cardBorderTrace } from "@/data/cards/card-border-trace";

export default function BorderTraceCard() {
  return (
    <>
      <style>{cardBorderTrace.css}</style>
      <article className="he-card-border-trace" aria-labelledby="card-border-trace-title">
      <div className="trace" aria-hidden="true">
        <i className="t-top"></i><i className="t-right"></i><i className="t-bottom"></i><i className="t-left"></i>
      </div>
      <span className="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4.4" /><path d="M12 2.8v4M12 17.2v4M2.8 12h4M17.2 12h4" />
        </svg>
      </span>
      <h2 id="card-border-trace-title">Design systems audit</h2>
      <p className="body-copy">We map every component and token in your product, then document the gaps that slow teams down.</p>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">See what the audit covers
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
