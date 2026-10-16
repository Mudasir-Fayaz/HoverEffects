import { inputEdgeTrace } from "@/data/inputs/input-edge-trace";

export default function InputEdgeTrace() {
  return (
    <>
      <style>{inputEdgeTrace.css}</style>
      <div className="field he-input-edge-trace">
        <label className="inp09-label" htmlFor="input-edge-trace-inp09-input">Tracking code</label>
        <div className="inp09-wrap">
          <input className="inp09-control" id="input-edge-trace-inp09-input" type="text" placeholder="TRK-88213" aria-describedby="input-edge-trace-inp09-help" />
          <i className="inp09-s inp09-t" aria-hidden="true"></i>
          <i className="inp09-s inp09-r" aria-hidden="true"></i>
          <i className="inp09-s inp09-b" aria-hidden="true"></i>
          <i className="inp09-s inp09-l" aria-hidden="true"></i>
        </div>
        <p className="inp09-help" id="input-edge-trace-inp09-help">Found in the shipping confirmation email.</p>
      </div>
    </>
  );
}
