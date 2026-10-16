import { btnSideTabTuck } from "@/data/buttons/btn-side-tab-tuck";

export default function BtnSideTabTuck() {
  return (
    <>
      <style>{btnSideTabTuck.css}</style>
      <button className="he-btn-side-tab-tuck" type="button">
        <span className="surface" aria-hidden="true">
          <span className="tab tab-left deco"></span>
          <span className="tab tab-right deco"></span>
        </span>
        <span className="label">Pin to sidebar</span>
      </button>
    </>
  );
}
