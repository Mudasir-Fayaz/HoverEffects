import { badgeDividerExtend } from "@/data/badges/badge-divider-extend";

export default function BadgeDividerExtend() {
  return (
    <>
      <style>{badgeDividerExtend.css}</style>
      <span className="he-badge-divider-extend"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" /><path d="M6 6h4M6 8.5h2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg><i className="bdg22-div" aria-hidden="true"></i>Workspace</span>
    </>
  );
}
