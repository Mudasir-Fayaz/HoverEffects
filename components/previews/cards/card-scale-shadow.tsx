export default function CardScaleShadow() {
  return (
    <div
      className="p-5 bg-white rounded-xl w-full
        shadow-[0_1px_3px_rgba(0,0,0,.08)] transition-all duration-300
        hover:scale-[1.03]
        hover:shadow-[0_16px_40px_rgba(0,0,0,.1)]"
    >
      <div className="h-2.5 w-3/4 bg-slate-200 rounded mb-2" />
      <div className="h-2 w-full bg-slate-100 rounded" />
    </div>
  );
}
