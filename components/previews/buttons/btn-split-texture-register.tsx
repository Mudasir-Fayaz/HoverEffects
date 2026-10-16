import { btnSplitTextureRegister } from "@/data/buttons/btn-split-texture-register";

export default function BtnSplitTextureRegister() {
  return (
    <>
      <style>{btnSplitTextureRegister.css}</style>
      <button className="he-btn-split-texture-register" type="button">
        <span className="surface" aria-hidden="true">
          <span className="tex-half tex-left deco"></span>
          <span className="tex-half tex-right deco"></span>
        </span>
        <span className="label">Merge branches</span>
      </button>
    </>
  );
}
