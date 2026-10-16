import { inputCornerBrackets } from "@/data/inputs/input-corner-brackets";

export default function InputCornerBrackets() {
  return (
    <>
      <style>{inputCornerBrackets.css}</style>
      <div className="field he-input-corner-brackets">
        <label className="inp08-label" htmlFor="input-corner-brackets-inp08-input">Serial number</label>
        <div className="inp08-wrap">
          <input className="inp08-control" id="input-corner-brackets-inp08-input" type="text" placeholder="SN-000-000" aria-describedby="input-corner-brackets-inp08-help" />
          <i className="inp08-c inp08-tl" aria-hidden="true"></i>
          <i className="inp08-c inp08-tr" aria-hidden="true"></i>
          <i className="inp08-c inp08-bl" aria-hidden="true"></i>
          <i className="inp08-c inp08-br" aria-hidden="true"></i>
        </div>
        <p className="inp08-help" id="input-corner-brackets-inp08-help">Printed on the device label.</p>
      </div>
    </>
  );
}
