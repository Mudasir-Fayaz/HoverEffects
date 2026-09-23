export default function BtnCornerCurtainFill() {
  return (
    <button className="group relative px-6 py-2.5 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden z-0">
      <span className="absolute inset-y-0 left-0 w-1/2 bg-indigo-600 -z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -translate-x-full group-hover:translate-x-0" />
      <span className="absolute inset-y-0 right-0 w-1/2 bg-indigo-600 -z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-x-full group-hover:translate-x-0" />
      Hover Me
    </button>
  );
}
