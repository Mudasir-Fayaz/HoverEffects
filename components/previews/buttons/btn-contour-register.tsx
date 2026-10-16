import { btnContourRegister } from "@/data/buttons/btn-contour-register";

export default function BtnContourRegister() {
  return (
    <>
      <style>{btnContourRegister.css}</style>
      <button className="he-btn-contour-register" type="button">
        <span className="surface" aria-hidden="true">
          <span className="contour contour-a deco"></span>
          <span className="contour contour-b deco"></span>
        </span>
        <span className="label">Track order</span>
      </button>
    </>
  );
}
