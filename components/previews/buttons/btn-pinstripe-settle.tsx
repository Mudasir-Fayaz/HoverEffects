import { btnPinstripeSettle } from "@/data/buttons/btn-pinstripe-settle";

export default function BtnPinstripeSettle() {
  return (
    <>
      <style>{btnPinstripeSettle.css}</style>
      <button className="he-btn-pinstripe-settle" type="button">
        <span className="surface" aria-hidden="true">
          <span className="stripe stripe-a deco"></span>
          <span className="stripe stripe-b deco"></span>
        </span>
        <span className="label">Read guide</span>
      </button>
    </>
  );
}
