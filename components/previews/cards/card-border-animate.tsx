export default function CardBorderAnimate() {
  return (
    <div
      className="relative p-5 bg-white rounded-xl w-full
        border-2 border-transparent transition-all duration-300 group/card"
    >
      <div
        className="absolute -inset-0.5 rounded-xl
          bg-linear-to-r from-indigo-500 via-pink-500 to-indigo-500
          bg-size-[300%_300%] opacity-0
          group-hover/card:opacity-100
          group-hover/card:animate-[borderRotate_3s_linear_infinite]
          -z-10"
      />
      <div className="h-2.5 w-3/4 bg-slate-200 rounded mb-2" />
      <div className="h-2 w-full bg-slate-100 rounded" />
    </div>
  );
}
