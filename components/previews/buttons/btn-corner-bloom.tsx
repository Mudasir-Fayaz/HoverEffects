export default function BtnCornerBloom() {
  return (
    <button className="group relative px-6 py-2.5 font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden z-0">
      <span className="absolute inset-0 bg-indigo-600 -z-10 transition-[clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(100%_at_50%_50%)]" />
      Hover Me
    </button>
  );
}
