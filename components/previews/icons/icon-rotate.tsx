export default function IconRotate() {
  return (
    <div
      className="inline-flex p-3 rounded-xl text-slate-500 cursor-pointer
        transition-all duration-300 hover:text-indigo-500 hover:bg-indigo-500/8 group/icon"
    >
      <svg
        className="w-6 h-6 transition-transform duration-500 group-hover/icon:rotate-180"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    </div>
  );
}
