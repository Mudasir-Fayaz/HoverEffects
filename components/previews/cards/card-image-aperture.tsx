/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardImageAperture } from "@/data/cards/card-image-aperture";
import { cardImage } from "@/data/cards/assets";

export default function ImageApertureCard() {
  return (
    <>
      <style>{cardImageAperture.css}</style>
      <article className="he-card-image-aperture" aria-labelledby="card-image-aperture-title">
      <figure className="media">
        <img src={cardImage("product-headphones")} alt="Illustration of over-ear studio headphones with dark cups and green pads" width="800" height="800" />
        <span className="matte matte-top" aria-hidden="true"></span>
        <span className="matte matte-right" aria-hidden="true"></span>
        <span className="matte matte-bottom" aria-hidden="true"></span>
        <span className="matte matte-left" aria-hidden="true"></span>
      </figure>
      <div className="card-body">
        <h2 id="card-image-aperture-title">Monitor headphones, studio black</h2>
        <p className="body-copy">Closed-back cups with memory-foam pads and a detachable coiled cable.</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">View the specifications
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
