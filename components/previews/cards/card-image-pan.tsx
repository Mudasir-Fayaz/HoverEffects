/* eslint-disable @next/next/no-img-element -- demo art is inlined SVG; next/image adds no value */
import { cardImagePan } from "@/data/cards/card-image-pan";
import { cardImage } from "@/data/cards/assets";

export default function ImagePanCard() {
  return (
    <>
      <style>{cardImagePan.css}</style>
      <article className="he-card-image-pan" aria-labelledby="card-image-pan-title">
      <figure className="media">
        <img src={cardImage("portfolio-kinetic")} alt="Illustration of layered diagonal ribbons crossing a measured grid" width="1400" height="800" />
      </figure>
      <div className="card-body">
        <p className="cat">Public art commission</p>
        <h2 id="card-image-pan-title">Kinetic ribbons for the East Line</h2>
      </div>
    </article>
    </>
  );
}
