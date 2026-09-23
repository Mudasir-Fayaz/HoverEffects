export default function BtnAnimatedBeam() {
  return (
    <>
      <style>{'@keyframes beamSpin { to { --angle: 360deg; } }'}</style>
      <button className="group relative px-6 py-2.5 font-semibold text-indigo-400 bg-[#18181b] rounded-xl border-none cursor-pointer z-0 transition-all duration-350 hover:text-white hover:shadow-[inset_0_2px_8px_rgba(0,0,0,.35)]">
        <span className="absolute -inset-[2px] rounded-[14px] -z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{
          background: "conic-gradient(from var(--angle), transparent 0%, #a78bfa 10%, #c084fc 24%, #a78bfa 38%, transparent 48%, transparent 100%)",
          animation: "beamSpin 2s linear infinite",
        }} />
        <span className="absolute inset-0 rounded-xl bg-[#18181b] -z-10" />
        Hover Me
      </button>
    </>
  );
}
