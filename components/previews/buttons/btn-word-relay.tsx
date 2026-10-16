import { btnWordRelay } from "@/data/buttons/btn-word-relay";

export default function BtnWordRelay() {
  return (
    <>
      <style>{btnWordRelay.css}</style>
      <button className="he-btn-word-relay" type="button">
        <span className="label"><span className="word" style={{ ["--i" as string]: "0" }}>Publish</span> <span className="word" style={{ ["--i" as string]: "1" }}>release</span></span>
      </button>
    </>
  );
}
