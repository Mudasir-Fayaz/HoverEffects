export default function BtnShineBorderLoop() {
  return (
    <button className="group relative px-6 py-2.5 font-semibold text-white bg-indigo-500 border-none cursor-pointer z-0 overflow-hidden">
      <span className="absolute -inset-[2px] rounded-[14px] bg-gradient-to-r from-indigo-400 via-amber-400 to-emerald-400 bg-[length:300%_100%] -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ animation: "btnShine 2s linear infinite" }} />
      <span className="absolute inset-0 bg-indigo-500 -z-10" />
      Hover Me
      <style>{'@keyframes btnShine { 0% { background-position: 0 0; } 100% { background-position: 300% 0; } }'}</style>
    </button>
  );
}
