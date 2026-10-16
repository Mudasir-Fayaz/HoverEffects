import { inputFilePickerAccent } from "@/data/inputs/input-file-picker-accent";

export default function InputFilePickerAccent() {
  return (
    <>
      <style>{inputFilePickerAccent.css}</style>
      <div className="field he-input-file-picker-accent">
        <label className="inp30-label" htmlFor="input-file-picker-accent-inp30-input">Attachments</label>
        <div className="inp30-wrap">
          <i className="inp30-surface" aria-hidden="true"></i>
          <input className="inp30-control" id="input-file-picker-accent-inp30-input" type="file" multiple aria-describedby="input-file-picker-accent-inp30-help" />
        </div>
        <p className="inp30-help" id="input-file-picker-accent-inp30-help">PDF or PNG up to 10 MB each — chosen files are not uploaded by this demo.</p>
      </div>
    </>
  );
}
