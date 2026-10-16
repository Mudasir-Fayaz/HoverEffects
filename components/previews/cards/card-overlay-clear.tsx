/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardOverlayClear } from "@/data/cards/card-overlay-clear";
import { cardImage } from "@/data/cards/assets";

export default function OverlayClearCard() {
  return (
    <>
      <style>{cardOverlayClear.css}</style>
      <article className="he-card-overlay-clear" aria-labelledby="card-overlay-clear-title">
      <figure className="media">
        <img src={cardImage("photo-studio")} alt="Illustration of a print studio desk in window light" width="1200" height="800" />
        <span className="tint" aria-hidden="true"></span>
        <span className="scrim" aria-hidden="true"></span>
        <h2 id="card-overlay-clear-title">Inside the print room</h2>
      </figure>
      <div className="card-body">
        <p className="body-copy">A short documentary on the presses, papers and people behind a small letterpress shop.</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Watch the short film
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
