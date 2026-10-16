/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardTitleUnderline } from "@/data/cards/card-title-underline";
import { cardImage } from "@/data/cards/assets";

export default function TitleUnderlineCard() {
  return (
    <>
      <style>{cardTitleUnderline.css}</style>
      <article className="he-card-title-underline" aria-labelledby="card-title-underline-title">
      <figure className="media">
        <img src={cardImage("editorial-studio")} alt="Editorial illustration of a studio still life with ceramics and plant shapes" width="1200" height="800" />
      </figure>
      <div className="card-body">
        <p className="cat">Field notes · Essay</p>
        <h2 id="card-title-underline-title"><span className="underline">The quiet return of the workshop studio</span></h2>
        <p className="meta"><time dateTime="2026-03-12">12 March 2026</time> · 6 min read</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Read the essay
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
