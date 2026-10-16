import { inputActionLane } from "@/data/inputs/input-action-lane";

export default function InputActionLane() {
  return (
    <>
      <style>{inputActionLane.css}</style>
      <form className="field he-input-action-lane" role="search" action="#usage" method="get">
        <label className="inp25-label" htmlFor="input-action-lane-inp25-input">Search the handbook</label>
        <div className="inp25-wrap">
          <i className="inp25-lane" aria-hidden="true"></i>
          <input className="inp25-control" id="input-action-lane-inp25-input" type="search" name="q" placeholder="e.g. rollout checklist" aria-describedby="input-action-lane-inp25-help" />
          <button className="inp25-submit" type="submit">Search</button>
        </div>
        <p className="inp25-help" id="input-action-lane-inp25-help">Submitting runs a real GET request and returns to the details section.</p>
      </form>
    </>
  );
}
