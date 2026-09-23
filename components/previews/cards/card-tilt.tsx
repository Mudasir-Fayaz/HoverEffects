export default function CardTilt() {
  return (
    <div
      className="p-5 bg-white rounded-xl w-full
        shadow-[0_1px_3px_rgba(0,0,0,.08)] transition-all duration-300
        [transform:perspective(800px)_rotateY(0)_rotateX(0)]
        hover:[transform:perspective(800px)_rotateY(-3deg)_rotateX(2deg)]
        hover:shadow-[0_12px_30px_rgba(0,0,0,.12)]"
    >
      <div className="h-2.5 w-3/4 bg-slate-200 rounded mb-2" />
      <div className="h-2 w-full bg-slate-100 rounded" />
    </div>
  );
}
