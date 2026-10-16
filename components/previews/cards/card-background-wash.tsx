import { cardBackgroundWash } from "@/data/cards/card-background-wash";

export default function BackgroundWashCard() {
  return (
    <>
      <style>{cardBackgroundWash.css}</style>
      <article className="he-card-background-wash" aria-labelledby="card-background-wash-title">
      <span className="wash" aria-hidden="true"></span>
      <div className="card-content">
        <span className="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14.5 9.5 9l3.5 3.5L20 6" /><path d="M15 6h5v5" />
          </svg>
        </span>
        <h2 id="card-background-wash-title">Growth analytics</h2>
        <p className="body-copy">Dashboards that connect acquisition, activation and retention into one weekly view your team actually reads.</p>
      </div>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Start a project
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
