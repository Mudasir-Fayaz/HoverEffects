export default function ImgCaptionSlide() {
  return (
    <div className="relative overflow-hidden rounded-xl w-full group/cap">
      <div className="h-28 bg-linear-to-br from-indigo-100 to-sky-100" />
      <div
        className="absolute bottom-0 inset-x-0 p-3
          bg-linear-to-t from-black/70 to-transparent text-white
          translate-y-full group-hover/cap:translate-y-0
          transition-transform duration-400"
      >
        <div className="text-sm font-semibold">Photo Title</div>
        <div className="text-xs opacity-80">Description</div>
      </div>
    </div>
  );
}

