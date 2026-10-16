import { btnBaselineSettle } from "@/data/buttons/btn-baseline-settle";

export default function BtnBaselineSettle() {
  return (
    <>
      <style>{btnBaselineSettle.css}</style>
      <button className="he-btn-baseline-settle" type="button">
        <span className="label">Skip tour</span>
      </button>
    </>
  );
}
