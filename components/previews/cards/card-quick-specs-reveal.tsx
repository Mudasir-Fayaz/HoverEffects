/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardQuickSpecsReveal } from "@/data/cards/card-quick-specs-reveal";
import { cardImage } from "@/data/cards/assets";

export default function QuickSpecsRevealCard() {
  return (
    <>
      <style>{cardQuickSpecsReveal.css}</style>
      <article className="he-card-quick-specs-reveal" aria-labelledby="card-quick-specs-reveal-title">
      <figure className="media">
        <img src={cardImage("product-watch")} alt="Illustration of a round field watch with a dark case and a light dial" width="1000" height="750" />
      </figure>
      <div className="card-body">
        <h2 id="card-quick-specs-reveal-title">Atlas Field Watch, 38 mm</h2>
        <p className="price">£148.00 <span className="demo-tag">sample price</span></p>
        <ul className="specs" aria-label="Quick specifications">
          <li style={{ ["--i" as string]: "0" }}>40-hour movement</li>
          <li style={{ ["--i" as string]: "1" }}>Sapphire glass</li>
          <li style={{ ["--i" as string]: "2" }}>50 m water resistant</li>
        </ul>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">View full specifications
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
