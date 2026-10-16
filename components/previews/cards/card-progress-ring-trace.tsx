import { cardProgressRingTrace } from "@/data/cards/card-progress-ring-trace";

export default function ProgressRingTraceCard() {
  return (
    <>
      <style>{cardProgressRingTrace.css}</style>
      <article className="he-card-progress-ring-trace" aria-labelledby="card-progress-ring-trace-title">
      <span className="ring" aria-hidden="true">
        <svg width="92" height="92" viewBox="0 0 92 92">
          <circle className="track" cx="46" cy="46" r="38" fill="none" stroke="var(--line)" strokeWidth="7" />
          <circle className="progress" cx="46" cy="46" r="38" fill="none" stroke="var(--accent)" strokeWidth="7" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100" transform="rotate(-90 46 46)" />
        </svg>
      </span>
      <div className="metric">
        <p className="value">72%</p>
        <h2 id="card-progress-ring-trace-title">Team adoption</h2>
        <p className="meta">Sample metric · Q1 2026</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">View the metric definition
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
