import { inputCornerBloom } from "@/data/inputs/input-corner-bloom";

export default function InputCornerBloom() {
  return (
    <>
      <style>{inputCornerBloom.css}</style>
      <div className="field he-input-corner-bloom">
        <label className="inp14-label" htmlFor="input-corner-bloom-inp14-input">Feedback</label>
        <div className="inp14-wrap">
          <input className="inp14-control" id="input-corner-bloom-inp14-input" type="text" placeholder="What went well?" aria-describedby="input-corner-bloom-inp14-help" />
          <i className="inp14-bloom" aria-hidden="true"></i>
        </div>
        <p className="inp14-help" id="input-corner-bloom-inp14-help">Shared with the product team.</p>
      </div>
    </>
  );
}
