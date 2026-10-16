import { iconHexTileDock } from "@/data/icons/icon-hex-tile-dock";

export default function IconHexTileDock() {
  return (
    <>
      <style>{iconHexTileDock.css}</style>
      <button className="he-icon-hex-tile-dock" type="button">
        <svg className="hi25-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path className="hi25-hex" style={{ ["--dx" as string]: ".4px", ["--dy" as string]: "-.7px" }} d="M12 4 14.9 5.7v3.4L12 10.8 9.1 9.1V5.7z" fill="var(--surface-2)" stroke="var(--accent-2)" strokeWidth="1.5" />
          <path className="hi25-hex" style={{ ["--dx" as string]: "-.7px", ["--dy" as string]: ".4px" }} d="M8.9 9.2 11.8 10.9v3.4L8.9 16 6 14.3v-3.4z" fill="var(--surface-2)" stroke="var(--line-strong)" strokeWidth="1.5" />
          <path className="hi25-hex" style={{ ["--dx" as string]: ".6px", ["--dy" as string]: ".5px" }} d="M15.1 9.2 18 10.9v3.4L15.1 16 12.2 14.3v-3.4z" fill="var(--surface-2)" stroke="var(--line-strong)" strokeWidth="1.5" />
          <circle cx="12" cy="9.9" r="1.2" fill="var(--accent)" />
        </svg>
      </button>
    </>
  );
}
