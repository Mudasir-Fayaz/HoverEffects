/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardGalleryFan } from "@/data/cards/card-gallery-fan";
import { cardImage } from "@/data/cards/assets";

export default function GalleryFanCard() {
  return (
    <>
      <style>{cardGalleryFan.css}</style>
      <article className="he-card-gallery-fan" aria-labelledby="card-gallery-fan-title">
      <div className="stack">
        <figure className="shot shot-rear">
          <img src={cardImage("portfolio-atrium")} alt="" aria-hidden="true" />
        </figure>
        <figure className="shot shot-mid">
          <img src={cardImage("editorial-studio")} alt="" aria-hidden="true" />
        </figure>
        <figure className="shot shot-front">
          <img src={cardImage("photo-ceramics")} alt="Three ceramic bowls photographed on a studio shelf" width="1000" height="750" />
        </figure>
      </div>
      <div className="card-body">
        <h2 id="card-gallery-fan-title">Selected works, 2024 – 2026</h2>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Open the gallery
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
