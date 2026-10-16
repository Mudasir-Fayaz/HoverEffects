import { btnDuotoneBalance } from "@/data/buttons/btn-duotone-balance";

export default function BtnDuotoneBalance() {
  return (
    <>
      <style>{btnDuotoneBalance.css}</style>
      <button className="he-btn-duotone-balance" type="button">
        <span className="surface" aria-hidden="true">
          <span className="tone tone-top deco"></span>
          <span className="tone tone-bottom deco"></span>
        </span>
        <span className="label">Compare tiers</span>
      </button>
    </>
  );
}
