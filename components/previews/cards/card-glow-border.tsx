export default function CardGlowBorder() {
  return (
    <div
      className="p-5 bg-white rounded-xl w-full
        border border-slate-200 transition-all duration-300
        hover:border-indigo-500
        hover:shadow-[0_0_20px_rgba(99,102,241,.15)]"
    >
      <div className="h-2.5 w-3/4 bg-slate-200 rounded mb-2" />
      <div className="h-2 w-full bg-slate-100 rounded" />
    </div>
  );
}
