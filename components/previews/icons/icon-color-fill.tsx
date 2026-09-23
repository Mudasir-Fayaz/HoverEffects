export default function IconColorFill() {
  return (
    <div
      className="inline-flex p-3 rounded-xl text-slate-500 cursor-pointer
        transition-all duration-300 hover:text-red-500 group/heart"
    >
      <svg
        className="w-6 h-6 transition-all duration-300 group-hover/heart:fill-red-500 group-hover/heart:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </div>
  );
}
