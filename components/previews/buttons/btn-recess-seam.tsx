import { btnRecessSeam } from "@/data/buttons/btn-recess-seam";

export default function BtnRecessSeam() {
  return (
    <>
      <style>{btnRecessSeam.css}</style>
      <button className="he-btn-recess-seam" type="button">
        <span className="surface" aria-hidden="true">
          <span className="hairline hairline-top deco"></span>
          <span className="hairline hairline-bottom deco"></span>
          <span className="gleam gleam-top deco"></span>
          <span className="gleam gleam-bottom deco"></span>
        </span>
        <span className="label">Edit profile</span>
      </button>
    </>
  );
}
