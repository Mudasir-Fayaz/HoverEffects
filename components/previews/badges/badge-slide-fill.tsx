export default function BadgeSlideFill() {
  return (
    <span
      className="relative inline-flex items-center px-3 py-1
        text-xs font-semibold rounded-full overflow-hidden
        border border-indigo-500 text-indigo-500
        cursor-default transition-colors duration-300
        hover:text-white group/sf"
    >
      <span
        className="absolute inset-0 bg-indigo-500
          -translate-x-full group-hover/sf:translate-x-0
          transition-transform duration-300"
      />
      <span className="relative">New</span>
    </span>
  );
}
