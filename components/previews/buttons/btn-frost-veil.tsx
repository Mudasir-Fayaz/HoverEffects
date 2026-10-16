import { btnFrostVeil } from "@/data/buttons/btn-frost-veil";

export default function BtnFrostVeil() {
  return (
    <>
      <style>{btnFrostVeil.css}</style>
      <button className="he-btn-frost-veil" type="button">
        <span className="surface" aria-hidden="true">
          <span className="veil deco"></span>
        </span>
        <span className="label">Open catalog</span>
      </button>
    </>
  );
}
