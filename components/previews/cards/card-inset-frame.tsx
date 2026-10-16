/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardInsetFrame } from "@/data/cards/card-inset-frame";
import { cardImage } from "@/data/cards/assets";

export default function InsetFrameCard() {
  return (
    <>
      <style>{cardInsetFrame.css}</style>
      <article className="he-card-inset-frame" aria-labelledby="card-inset-frame-title">
      <figure className="media">
        <img src={cardImage("product-watch")} alt="Illustration of a round field watch with a dark case and leather straps" width="1000" height="750" />
        <span className="badge-tag">New arrival</span>
        <span className="frame" aria-hidden="true"></span>
      </figure>
      <div className="card-body">
        <h2 id="card-inset-frame-title">Atlas Field Watch</h2>
        <p className="body-copy">Brushed case, sapphire glass and a 40-hour movement — built for weekdays and long weekends.</p>
        <p className="price">£148.00 <span className="demo-tag">sample price</span></p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">View product details
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
