import { iconApertureBlades } from "@/data/icons/icon-aperture-blades";

export default function IconApertureBlades() {
  return (
    <>
      <style>{iconApertureBlades.css}</style>
      <button className="he-icon-aperture-blades" type="button">
        <svg className="hi14-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g className="hi14-blade" style={{ ["--r" as string]: "0deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <g className="hi14-blade" style={{ ["--r" as string]: "60deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <g className="hi14-blade" style={{ ["--r" as string]: "120deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <g className="hi14-blade" style={{ ["--r" as string]: "180deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <g className="hi14-blade" style={{ ["--r" as string]: "240deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <g className="hi14-blade" style={{ ["--r" as string]: "300deg" }}><path d="M12 4.2 13.4 8.3h-2.8z" fill="var(--text-2)" opacity=".6" /></g>
          <circle cx="12" cy="12" r="3.4" fill="var(--surface-2)" stroke="var(--line-strong)" strokeWidth="1.2" />
        </svg>
      </button>
    </>
  );
}
