import { btnHatchRegister } from "@/data/buttons/btn-hatch-register";

export default function BtnHatchRegister() {
  return (
    <>
      <style>{btnHatchRegister.css}</style>
      <button className="he-btn-hatch-register" type="button">
        <span className="surface" aria-hidden="true">
          <span className="hatch hatch-a deco"></span>
          <span className="hatch hatch-b deco"></span>
        </span>
        <span className="label">Export report</span>
      </button>
    </>
  );
}
