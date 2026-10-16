import { btnCheckerRegister } from "@/data/buttons/btn-checker-register";

export default function BtnCheckerRegister() {
  return (
    <>
      <style>{btnCheckerRegister.css}</style>
      <button className="he-btn-checker-register" type="button">
        <span className="surface" aria-hidden="true">
          <span className="checker checker-a deco"></span>
          <span className="checker checker-b deco"></span>
        </span>
        <span className="label">Run audit</span>
      </button>
    </>
  );
}
