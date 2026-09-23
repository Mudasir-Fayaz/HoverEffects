export default function CardInnerGlow() {
  return (
    <div
      className="p-5 bg-white rounded-xl w-full
        border border-slate-200 transition-all duration-300
        hover:bg-linear-to-br
        hover:from-indigo-500/4 hover:to-sky-500/6
        hover:border-indigo-500/20"
    >
      <div className="h-2.5 w-3/4 bg-slate-200 rounded mb-2" />
      <div className="h-2 w-full bg-slate-100 rounded" />
    </div>
  );
}

