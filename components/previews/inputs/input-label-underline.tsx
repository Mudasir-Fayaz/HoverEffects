import { inputLabelUnderline } from "@/data/inputs/input-label-underline";

export default function InputLabelUnderline() {
  return (
    <>
      <style>{inputLabelUnderline.css}</style>
      <div className="field he-input-label-underline">
        <label className="inp18-label" htmlFor="input-label-underline-inp18-input">Billing address<i className="inp18-u" aria-hidden="true"></i></label>
        <div className="inp18-wrap">
          <input className="inp18-control" id="input-label-underline-inp18-input" type="text" placeholder="221B Baker Street" aria-describedby="input-label-underline-inp18-help" />
        </div>
        <p className="inp18-help" id="input-label-underline-inp18-help">Appears on invoices and receipts.</p>
      </div>
    </>
  );
}
