import { btnWeaveRegister } from "@/data/buttons/btn-weave-register";

export default function BtnWeaveRegister() {
  return (
    <>
      <style>{btnWeaveRegister.css}</style>
      <button className="he-btn-weave-register" type="button">
        <span className="surface" aria-hidden="true">
          <span className="warp deco"></span>
          <span className="weft deco"></span>
        </span>
        <span className="label">Book session</span>
      </button>
    </>
  );
}
