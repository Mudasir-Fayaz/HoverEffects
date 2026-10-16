/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardDiagonalReveal } from "@/data/cards/card-diagonal-reveal";
import { cardImage } from "@/data/cards/assets";

export default function DiagonalRevealCard() {
  return (
    <>
      <style>{cardDiagonalReveal.css}</style>
      <article className="he-card-diagonal-reveal" aria-labelledby="card-diagonal-reveal-title">
      <figure className="media">
        <img className="base" src={cardImage("portfolio-atrium")} alt="Daylight view: atrium building with layered concrete slabs and warm sky" width="1200" height="750" />
        <img className="alt" src={cardImage("portfolio-atrium-alt")} alt="" aria-hidden="true" />
      </figure>
      <div className="card-body">
        <p className="cat">Architecture · 2025</p>
        <h2 id="card-diagonal-reveal-title">Atrium House at dusk</h2>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">See the dusk renders
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
