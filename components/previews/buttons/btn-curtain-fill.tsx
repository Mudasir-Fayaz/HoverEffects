export default function BtnCurtainFill() {
  return (
    <button className="group relative px-6 py-2.5 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden z-0">
      <span className="absolute inset-x-0 top-0 h-1/2 bg-indigo-600 -z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -translate-y-full group-hover:translate-y-0" />
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-indigo-600 -z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0" />
      Hover Me
    </button>
  );
}
