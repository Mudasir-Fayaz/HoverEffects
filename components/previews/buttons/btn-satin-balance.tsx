import { btnSatinBalance } from "@/data/buttons/btn-satin-balance";

export default function BtnSatinBalance() {
  return (
    <>
      <style>{btnSatinBalance.css}</style>
      <button className="he-btn-satin-balance" type="button">
        <span className="surface" aria-hidden="true">
          <span className="band band-top deco"></span>
          <span className="band band-bottom deco"></span>
        </span>
        <span className="label">Upgrade plan</span>
      </button>
    </>
  );
}
