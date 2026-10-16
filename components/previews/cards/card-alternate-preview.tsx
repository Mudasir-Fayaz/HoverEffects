/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardAlternatePreview } from "@/data/cards/card-alternate-preview";
import { cardImage } from "@/data/cards/assets";

export default function AlternatePreviewCard() {
  return (
    <>
      <style>{cardAlternatePreview.css}</style>
      <article className="he-card-alternate-preview" aria-labelledby="card-alternate-preview-title">
      <figure className="media">
        <img className="view-alt" src={cardImage("product-headphones-alt")} alt="" aria-hidden="true" />
        <img className="view-primary" src={cardImage("product-headphones")} alt="Front view: studio headphones with dark cups and green pads" width="800" height="800" />
        <span className="view-dots" aria-hidden="true"><i className="dot is-on"></i><i className="dot"></i></span>
      </figure>
      <div className="card-body">
        <h2 id="card-alternate-preview-title">Studio headphones — two colourways</h2>
        <p className="price">£210.00 <span className="demo-tag">sample price</span></p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">See both finishes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
