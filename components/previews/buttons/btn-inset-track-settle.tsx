import { btnInsetTrackSettle } from "@/data/buttons/btn-inset-track-settle";

export default function BtnInsetTrackSettle() {
  return (
    <>
      <style>{btnInsetTrackSettle.css}</style>
      <button className="he-btn-inset-track-settle" type="button">
        <span className="surface" aria-hidden="true">
          <span className="track track-left deco"></span>
          <span className="track track-right deco"></span>
        </span>
        <span className="label">View pricing</span>
      </button>
    </>
  );
}
