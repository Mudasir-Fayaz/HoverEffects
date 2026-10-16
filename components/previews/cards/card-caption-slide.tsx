/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardCaptionSlide } from "@/data/cards/card-caption-slide";
import { cardImage } from "@/data/cards/assets";

export default function CaptionSlideCard() {
  return (
    <>
      <style>{cardCaptionSlide.css}</style>
      <article className="he-card-caption-slide" aria-labelledby="card-caption-slide-title">
      <figure className="media">
        <img src={cardImage("editorial-studio")} alt="Editorial illustration of a studio still life with plant and ceramic shapes" width="1200" height="800" />
        <span className="caption">Studio session — spring 2026</span>
      </figure>
      <div className="card-body">
        <h2 id="card-caption-slide-title">Setting the scene in natural light</h2>
        <p className="meta">Process · 4 min read</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Read the caption notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
