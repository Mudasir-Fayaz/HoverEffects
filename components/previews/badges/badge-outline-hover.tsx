export default function BadgeOutlineHover() {
  return (
    <span
      className="inline-flex items-center px-3 py-1
        text-xs font-semibold rounded-full border-2
        bg-indigo-500 text-white border-indigo-500
        cursor-default transition-all duration-300
        hover:bg-transparent hover:text-indigo-500"
    >
      Featured
    </span>
  );
}
