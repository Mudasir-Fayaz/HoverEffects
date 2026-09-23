export default function IconBounce() {
  return (
    <div
      className="inline-flex p-3 rounded-xl text-slate-500 cursor-pointer
        transition-all duration-300 hover:text-indigo-500 hover:animate-bounce"
    >
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    </div>
  );
}
