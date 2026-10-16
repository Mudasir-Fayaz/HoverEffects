import { btnWordAccent } from "@/data/buttons/btn-word-accent";

export default function BtnWordAccent() {
  return (
    <>
      <style>{btnWordAccent.css}</style>
      <button className="he-btn-word-accent" type="button">
        <span className="label"><span className="word">Move</span> <span className="word">to</span> <span className="word pick">archive</span></span>
      </button>
    </>
  );
}
