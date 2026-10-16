/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardCornerTagUnfold } from "@/data/cards/card-corner-tag-unfold";
import { cardImage } from "@/data/cards/assets";

export default function CornerTagUnfoldCard() {
  return (
    <>
      <style>{cardCornerTagUnfold.css}</style>
      <article className="he-card-corner-tag-unfold" aria-labelledby="card-corner-tag-unfold-title">
      <figure className="media">
        <img src={cardImage("photo-ceramics")} alt="Three ceramic bowls arranged on a studio shelf" width="1000" height="750" />
        <span className="tag" aria-hidden="true">Staff pick</span>
      </figure>
      <div className="card-body">
        <p className="cat">Editorial</p>
        <h2 id="card-corner-tag-unfold-title">Making glazes from local ash</h2>
        <p className="meta">Workshop notes · April 2026</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Read the workshop notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
