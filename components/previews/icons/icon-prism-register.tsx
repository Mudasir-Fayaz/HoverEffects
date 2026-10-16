import { iconPrismRegister } from "@/data/icons/icon-prism-register";

export default function IconPrismRegister() {
  return (
    <>
      <style>{iconPrismRegister.css}</style>
      <button className="he-icon-prism-register" type="button">
        <svg className="hi27-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect className="hi27-p1" x="7.5" y="7.5" width="9" height="9" rx="2" fill="var(--plate-a)" opacity=".5" />
          <rect x="7.5" y="7.5" width="9" height="9" rx="2" fill="var(--accent-2)" opacity=".55" />
          <rect className="hi27-p3" x="7.5" y="7.5" width="9" height="9" rx="2" fill="var(--plate-b)" opacity=".5" />
        </svg>
      </button>
    </>
  );
}
