export default function BtnDotBg() {
  return (
    <button className="group relative px-6 py-2.5 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden z-0">
      <span className="absolute inset-0 opacity-0 transition-opacity duration-400 -z-10 group-hover:opacity-100" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "8px 8px" }} />
      Hover Me
    </button>
  );
}
