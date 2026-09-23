export default function ImgShine() {
  return (
    <div className="relative overflow-hidden rounded-xl w-full group/shine">
      <div className="h-28 bg-linear-to-br from-indigo-100 to-sky-100" />
      <div
        className="absolute top-0 -left-full w-1/2 h-full
          bg-linear-to-r from-transparent via-white/40 to-transparent
          group-hover/shine:left-full transition-all duration-600"
      />
    </div>
  );
}

