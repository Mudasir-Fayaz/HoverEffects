import { btnWeightCrossfade } from "@/data/buttons/btn-weight-crossfade";

export default function BtnWeightCrossfade() {
  return (
    <>
      <style>{btnWeightCrossfade.css}</style>
      <button className="he-btn-weight-crossfade" type="button">
        <span className="label-stack">
          <span className="label label-regular">Download assets</span>
          <span className="label label-bold deco" aria-hidden="true">Download assets</span>
        </span>
      </button>
    </>
  );
}
