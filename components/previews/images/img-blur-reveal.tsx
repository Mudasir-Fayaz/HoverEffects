export default function ImgBlurReveal() {
  return (
    <div className="overflow-hidden rounded-xl w-full">
      <div
        className="h-28 bg-linear-to-br from-indigo-200 to-sky-200
          blur-xs transition-all duration-500 hover:blur-0
          hover:scale-[1.03]"
      />
    </div>
  );
}

