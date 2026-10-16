/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardImageZoom } from "@/data/cards/card-image-zoom";
import { cardImage } from "@/data/cards/assets";

export default function ImageZoomCard() {
  return (
    <>
      <style>{cardImageZoom.css}</style>
      <article className="he-card-image-zoom" aria-labelledby="card-image-zoom-title">
      <figure className="media">
        <img src={cardImage("photo-studio")} alt="Illustration of a studio desk with a lamp, notebook and window light" width="1200" height="800" />
      </figure>
      <div className="card-body">
        <h2 id="card-image-zoom-title">Studio session: light and paper</h2>
        <p className="body-copy">Process notes from a print series photographed across a single overcast morning.</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">View the image notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
