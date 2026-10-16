import { btnOutlineResolve } from "@/data/buttons/btn-outline-resolve";

export default function BtnOutlineResolve() {
  return (
    <>
      <style>{btnOutlineResolve.css}</style>
      <button className="he-btn-outline-resolve" type="button">
        <span className="label-stack">
          <span className="label">Review draft</span>
          <span className="resolve deco" aria-hidden="true">Review draft</span>
        </span>
      </button>
    </>
  );
}
