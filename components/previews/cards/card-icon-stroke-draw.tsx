import { cardIconStrokeDraw } from "@/data/cards/card-icon-stroke-draw";

export default function IconStrokeDrawCard() {
  return (
    <>
      <style>{cardIconStrokeDraw.css}</style>
      <article className="he-card-icon-stroke-draw" aria-labelledby="card-icon-stroke-draw-title">
      <span className="card-icon" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M6.5 3h7l4 4v14h-11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity=".5" />
          <path d="M13.5 3v4h4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity=".5" />
          <path className="draw" d="m9 14.6 2.2 2.2 4.3-5.2" pathLength="100" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <h2 id="card-icon-stroke-draw-title">Compliance checks, automated</h2>
      <p className="body-copy">Every release is scanned against your policy set, with an auditable pass or fail recorded automatically.</p>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">How the checks work
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
