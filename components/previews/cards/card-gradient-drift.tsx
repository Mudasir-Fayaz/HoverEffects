import { cardGradientDrift } from "@/data/cards/card-gradient-drift";

export default function GradientDriftCard() {
  return (
    <>
      <style>{cardGradientDrift.css}</style>
      <article className="he-card-gradient-drift" aria-labelledby="card-gradient-drift-title">
      <span className="drift" aria-hidden="true"></span>
      <div className="card-content">
        <span className="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20 14 4l6 16z" /><circle cx="8" cy="8" r="2.6" />
          </svg>
        </span>
        <h2 id="card-gradient-drift-title">Campaign toolkit</h2>
        <p className="body-copy">Templates, motion presets and a royalty-free asset set for teams that ship campaigns without an agency.</p>
      </div>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Browse the toolkit
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
