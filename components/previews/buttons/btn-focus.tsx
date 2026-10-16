import { focusButton } from "@/data/buttons/focus";

export default function BtnFocus() {
  return (
    <>
      <style>{focusButton.css}</style>
      <button type="button" className="btn-focus">
        Save changes
      </button>
    </>
  );
}