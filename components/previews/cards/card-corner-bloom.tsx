import { cardCornerBloom } from "@/data/cards/card-corner-bloom";

export default function CornerBloomCard() {
  return (
    <>
      <style>{cardCornerBloom.css}</style>
      <article className="he-card-corner-bloom" aria-labelledby="card-corner-bloom-title">
      <span className="bloom" aria-hidden="true"></span>
      <div className="card-content">
        <span className="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            <path d="M12 8.4 13.2 11l2.8 1-2.8 1L12 15.6 10.8 13 8 12l2.8-1z" />
          </svg>
        </span>
        <h2 id="card-corner-bloom-title">Brand sprints</h2>
        <p className="body-copy">Five focused days to name, position and visually sharpen a product before it goes to market.</p>
      </div>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">See how a sprint runs
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
