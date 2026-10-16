/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardDiagonalSheen } from "@/data/cards/card-diagonal-sheen";
import { cardImage } from "@/data/cards/assets";

export default function DiagonalSheenCard() {
  return (
    <>
      <style>{cardDiagonalSheen.css}</style>
      <article className="he-card-diagonal-sheen" aria-labelledby="card-diagonal-sheen-title">
      <figure className="media">
        <img src={cardImage("portfolio-atrium")} alt="Illustration of an atrium building with layered concrete slabs and columns" width="1200" height="750" />
        <span className="sheen" aria-hidden="true"></span>
      </figure>
      <div className="card-body">
        <h2 id="card-diagonal-sheen-title">Atrium House courtyard</h2>
        <p className="body-copy">A residential courtyard project in warm concrete and shaded glass, completed in 2025.</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Open the project notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
