import { cardAccentRail } from "@/data/cards/card-accent-rail";

export default function AccentRailCard() {
  return (
    <>
      <style>{cardAccentRail.css}</style>
      <article className="he-card-accent-rail" aria-labelledby="card-accent-rail-title">
      <span className="rail" aria-hidden="true"></span>
      <span className="card-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3v6M15 3v6" /><path d="M6 9h12v3.5a6 6 0 0 1-12 0z" /><path d="M12 18.5V21" />
        </svg>
      </span>
      <div className="card-copy">
        <h2 id="card-accent-rail-title">API design review</h2>
        <p className="body-copy">A two-day session covering naming, versioning and error shapes before you commit to a public surface.</p>
      </div>
      <a onClick={(event) => event.preventDefault()} className="arrow-link" href="https://example.com" aria-label="Read about the API design review">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </a>
    </article>
    </>
  );
}
