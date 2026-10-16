import { inputSurfaceTint } from "@/data/inputs/input-surface-tint";

export default function InputSurfaceTint() {
  return (
    <>
      <style>{inputSurfaceTint.css}</style>
      <div className="field he-input-surface-tint">
        <label className="inp12-label" htmlFor="input-surface-tint-inp12-input">Internal note</label>
        <div className="inp12-wrap">
          <input className="inp12-control" id="input-surface-tint-inp12-input" type="text" placeholder="Add context for reviewers" aria-describedby="input-surface-tint-inp12-help" />
        </div>
        <p className="inp12-help" id="input-surface-tint-inp12-help">Visible to your team only.</p>
      </div>
    </>
  );
}
