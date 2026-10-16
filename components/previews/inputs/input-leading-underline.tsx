import { inputLeadingUnderline } from "@/data/inputs/input-leading-underline";

export default function InputLeadingUnderline() {
  return (
    <>
      <style>{inputLeadingUnderline.css}</style>
      <div className="field he-input-leading-underline">
        <label className="inp05-label" htmlFor="input-leading-underline-inp05-input">Display name</label>
        <div className="inp05-wrap">
          <input className="inp05-control" id="input-leading-underline-inp05-input" type="text" placeholder="Mira Tan" aria-describedby="input-leading-underline-inp05-help" />
          <i className="inp05-u" aria-hidden="true"></i>
        </div>
        <p className="inp05-help" id="input-leading-underline-inp05-help">Shown on comments and mentions.</p>
      </div>
    </>
  );
}
