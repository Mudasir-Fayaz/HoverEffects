import { inputDiagonalWash } from "@/data/inputs/input-diagonal-wash";

export default function InputDiagonalWash() {
  return (
    <>
      <style>{inputDiagonalWash.css}</style>
      <div className="field he-input-diagonal-wash">
        <label className="inp13-label" htmlFor="input-diagonal-wash-inp13-input">Import path</label>
        <div className="inp13-wrap">
          <input className="inp13-control" id="input-diagonal-wash-inp13-input" type="text" placeholder="/data/exports" aria-describedby="input-diagonal-wash-inp13-help" />
          <i className="inp13-wash" aria-hidden="true"></i>
        </div>
        <p className="inp13-help" id="input-diagonal-wash-inp13-help">Relative to the workspace root.</p>
      </div>
    </>
  );
}
