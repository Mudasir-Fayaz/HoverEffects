import { cardChipSpotlight } from "@/data/cards/card-chip-spotlight";

export default function ChipSpotlightCard() {
  return (
    <>
      <style>{cardChipSpotlight.css}</style>
      <article className="he-card-chip-spotlight" aria-labelledby="card-chip-spotlight-title">
      <h2 id="card-chip-spotlight-title">Practical resources</h2>
      <p className="body-copy">Short guides and templates for the parts of product work that rarely get documented.</p>
      <div className="chips" aria-label="Resource topics">
        <a onClick={(event) => event.preventDefault()} className="chip" href="https://example.com">Analytics</a>
        <a onClick={(event) => event.preventDefault()} className="chip" href="https://example.com">Research</a>
        <a onClick={(event) => event.preventDefault()} className="chip" href="https://example.com">Positioning</a>
        <a onClick={(event) => event.preventDefault()} className="chip" href="https://example.com">Pricing</a>
      </div>
      <p className="card-footer">
        <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Browse the resource library
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}
