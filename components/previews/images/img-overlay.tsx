export default function ImgOverlay() {
  return (
    <div className="relative overflow-hidden rounded-xl w-full group/img">
      <div
        className="h-28 bg-linear-to-br from-indigo-100 to-sky-100
          transition-transform duration-400 group-hover/img:scale-105"
      />
      <div
        className="absolute inset-0 bg-indigo-500/60
          flex items-center justify-center opacity-0
          group-hover/img:opacity-100 transition-opacity duration-300"
      >
        <span className="text-white font-semibold text-sm">View</span>
      </div>
    </div>
  );
}

