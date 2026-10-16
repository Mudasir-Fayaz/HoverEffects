import { btnEdgeLouver } from "@/data/buttons/btn-edge-louver";

export default function BtnEdgeLouver() {
  return (
    <>
      <style>{btnEdgeLouver.css}</style>
      <button className="he-btn-edge-louver" type="button">
        <span className="surface" aria-hidden="true">
          <span className="louver louver-top deco"></span>
          <span className="louver louver-bottom deco"></span>
        </span>
        <span className="label">Start trial</span>
      </button>
    </>
  );
}
