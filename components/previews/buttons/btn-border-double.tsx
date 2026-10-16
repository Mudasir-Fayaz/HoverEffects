import { borderDoubleButton } from "@/data/buttons/border-double";

export default function BtnBorderDouble() {
  return (
    <>
      <style>{borderDoubleButton.css}</style>
      <button type="button" className="btn-border-double">
        Submit order
      </button>
    </>
  );
}