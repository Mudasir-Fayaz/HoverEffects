export default function BtnFocus() {
  const bg = [
    "linear-gradient(#818cf8,#818cf8) top left / 12px 2px no-repeat",
    "linear-gradient(#818cf8,#818cf8) top left / 2px 12px no-repeat",
    "linear-gradient(#818cf8,#818cf8) top right / 12px 2px no-repeat",
    "linear-gradient(#818cf8,#818cf8) top right / 2px 12px no-repeat",
    "linear-gradient(#818cf8,#818cf8) bottom left / 12px 2px no-repeat",
    "linear-gradient(#818cf8,#818cf8) bottom left / 2px 12px no-repeat",
    "linear-gradient(#818cf8,#818cf8) bottom right / 12px 2px no-repeat",
    "linear-gradient(#818cf8,#818cf8) bottom right / 2px 12px no-repeat",
  ].join(", ");
  const bgHover = [
    "50% 2px", "2px 50%",
    "50% 2px", "2px 50%",
    "50% 2px", "2px 50%",
    "50% 2px", "2px 50%",
  ].join(", ");
  return (
    <button
      className="relative px-6 py-2.5 font-semibold text-indigo-400 bg-transparent border-none cursor-pointer transition-colors duration-300 hover:text-white"
      style={{
        background: bg,
        backgroundSize: "12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px",
        transition: "background-size 0.35s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundSize = bgHover; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundSize = "12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px"; }}
    >
      Hover Me
    </button>
  );
}
