import { btnBevelDetailSettle } from "@/data/buttons/btn-bevel-detail-settle";

export default function BtnBevelDetailSettle() {
  return (
    <>
      <style>{btnBevelDetailSettle.css}</style>
      <button className="he-btn-bevel-detail-settle" type="button">
        <span className="surface" aria-hidden="true">
          <span className="bevel bevel-tl deco"></span>
          <span className="bevel bevel-br deco"></span>
          <span className="seam-acc seam-a deco"></span>
          <span className="seam-acc seam-b deco"></span>
        </span>
        <span className="label">Export data</span>
      </button>
    </>
  );
}
