import { inputSideAccent } from "@/data/inputs/input-side-accent";

export default function InputSideAccent() {
  return (
    <>
      <style>{inputSideAccent.css}</style>
      <div className="field he-input-side-accent">
        <label className="inp10-label" htmlFor="input-side-accent-inp10-input">Referral handle</label>
        <div className="inp10-wrap">
          <input className="inp10-control" id="input-side-accent-inp10-input" type="text" placeholder="@northwind" aria-describedby="input-side-accent-inp10-help" />
          <i className="inp10-rail" aria-hidden="true"></i>
        </div>
        <p className="inp10-help" id="input-side-accent-inp10-help">Your public profile handle.</p>
      </div>
    </>
  );
}
