import { btnRailRegistration } from "@/data/buttons/btn-rail-registration";

export default function BtnRailRegistration() {
  return (
    <>
      <style>{btnRailRegistration.css}</style>
      <button className="he-btn-rail-registration" type="button">
        <span className="surface" aria-hidden="true">
          <span className="rail rail-top deco"></span>
          <span className="rail rail-bottom deco"></span>
        </span>
        <span className="label">Create project</span>
      </button>
    </>
  );
}
