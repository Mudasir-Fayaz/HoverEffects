import { cardPerimeterBeam } from "@/data/cards/card-perimeter-beam";

export default function PerimeterBeamCard() {
  return (
    <>
      <style>{cardPerimeterBeam.css}</style>
      <article className="he-card-perimeter-beam" aria-labelledby="card-perimeter-beam-title">
      <svg className="channel" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false" aria-hidden="true">
        <rect className="track" x="1" y="1" width="98" height="98" rx="3" fill="none" stroke="var(--line-strong)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <rect className="beam" x="1" y="1" width="98" height="98" rx="3" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength="100" strokeDasharray="15 85" />
      </svg>
      <span className="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5" /><path d="M20.5 3.5V8H16" />
        </svg>
      </span>
      <h2 id="card-perimeter-beam-title">Automated releases</h2>
      <p className="body-copy">Every merge builds, tests and ships to staging on its own, with a one-click promotion gate to production.</p>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">See the pipeline
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
