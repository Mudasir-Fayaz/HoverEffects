import { btnEndcapRegister } from "@/data/buttons/btn-endcap-register";

export default function BtnEndcapRegister() {
  return (
    <>
      <style>{btnEndcapRegister.css}</style>
      <button className="he-btn-endcap-register" type="button">
        <span className="surface" aria-hidden="true">
          <span className="face-tex deco"></span>
          <span className="endcap endcap-left deco"></span>
          <span className="endcap endcap-right deco"></span>
        </span>
        <span className="label">Open terminal</span>
      </button>
    </>
  );
}
