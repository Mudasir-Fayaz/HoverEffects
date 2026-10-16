/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardMonochromeToColour } from "@/data/cards/card-monochrome-to-colour";
import { cardImage } from "@/data/cards/assets";

export default function MonochromeToColourCard() {
  return (
    <>
      <style>{cardMonochromeToColour.css}</style>
      <article className="he-card-monochrome-to-colour" aria-labelledby="card-monochrome-to-colour-title">
      <figure className="media">
        <img className="mono" src={cardImage("photo-ceramics")} alt="Illustration of three ceramic bowls on a studio shelf" width="1000" height="750" />
        <img className="colour" src={cardImage("photo-ceramics")} alt="" aria-hidden="true" />
      </figure>
      <div className="card-body">
        <p className="cat">Studio work</p>
        <h2 id="card-monochrome-to-colour-title">Glaze tests, batch 14</h2>
        <p className="meta">Stoneware · oxidation firing · March 2026</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">See the full batch
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
