import { cardStepTrail } from "@/data/cards/card-step-trail";

export default function StepTrailCard() {
  return (
    <>
      <style>{cardStepTrail.css}</style>
      <article className="he-card-step-trail" aria-labelledby="card-step-trail-title">
      <h2 id="card-step-trail-title">How an audit runs</h2>
      <p className="body-copy">Three phases, one prioritised plan — from inventory to a fix list your team can start on Monday.</p>
      <ol className="trail">
        <li className="step">
          <span className="marker" aria-hidden="true">1</span>
          <span className="step-label">Map</span>
        </li>
        <li className="step">
          <span className="marker" aria-hidden="true">2</span>
          <span className="step-label">Measure</span>
        </li>
        <li className="step">
          <span className="marker" aria-hidden="true">3</span>
          <span className="step-label">Fix</span>
        </li>
      </ol>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">See the full method
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
