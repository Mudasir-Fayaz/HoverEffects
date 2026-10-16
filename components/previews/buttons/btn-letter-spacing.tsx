import { letterSpacingButton } from "@/data/buttons/letter-spacing";

export default function BtnLetterSpacing() {
  return (
    <>
      <style>{letterSpacingButton.css}</style>
      <button type="button" className="btn-letter-spacing">
        Read the guide
      </button>
    </>
  );
}