import { btnCapAccent } from "@/data/buttons/btn-cap-accent";

export default function BtnCapAccent() {
  return (
    <>
      <style>{btnCapAccent.css}</style>
      <button className="he-btn-cap-accent" type="button">
        <span className="label caps" aria-hidden="true"><span className="cap cap-first">S</span>AV<span className="cap cap-last">E</span></span>
        <span className="visually-hidden">SAVE</span>
      </button>
    </>
  );
}
