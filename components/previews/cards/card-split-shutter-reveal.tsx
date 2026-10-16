/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardSplitShutterReveal } from "@/data/cards/card-split-shutter-reveal";
import { cardImage } from "@/data/cards/assets";

export default function SplitShutterRevealCard() {
  return (
    <>
      <style>{cardSplitShutterReveal.css}</style>
      <article className="he-card-split-shutter-reveal" aria-labelledby="card-split-shutter-reveal-title">
      <figure className="media">
        <img src={cardImage("portfolio-atrium")} alt="Illustration of an atrium building with layered concrete slabs" width="1200" height="750" />
        <span className="shutter shutter-left" aria-hidden="true"></span>
        <span className="shutter shutter-right" aria-hidden="true"></span>
      </figure>
      <div className="card-body">
        <h2 id="card-split-shutter-reveal-title">Slab house, north elevation</h2>
        <p className="body-copy">A study in stacked concrete floors, modelled and rendered during the concept phase.</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Explore the model
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
