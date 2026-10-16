/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardDoubleFrame } from "@/data/cards/card-double-frame";
import { cardImage } from "@/data/cards/assets";

export default function DoubleFrameCard() {
  return (
    <>
      <style>{cardDoubleFrame.css}</style>
      <article className="he-card-double-frame" aria-labelledby="card-double-frame-title">
      <figure className="media">
        <img src={cardImage("editorial-studio")} alt="Editorial illustration of a studio still life with a vase, ceramics and soft shapes" width="1200" height="800" />
      </figure>
      <div className="card-body">
        <h2 id="card-double-frame-title">Cedar &amp; Co. brand refresh</h2>
        <p className="body-copy">A full identity rework for a small-batch furniture studio — wordmark, packaging and a quieter palette.</p>
        <p className="card-footer">
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">View the case study
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
