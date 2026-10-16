import { cardPaperPeel } from "@/data/cards/card-paper-peel";

export default function PaperPeelCard() {
  return (
    <>
      <style>{cardPaperPeel.css}</style>
      <article className="he-card-paper-peel" aria-labelledby="card-paper-peel-title">
      <p className="cat">Editorial</p>
      <h2 id="card-paper-peel-title">Folding, scoring and the tidy corner</h2>
      <p className="meta">Craft notes · 5 min read</p>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Read the craft notes
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
      <span className="peel" aria-hidden="true"></span>
    </article>
    </>
  );
}
