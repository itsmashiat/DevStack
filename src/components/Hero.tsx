import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Introduction Banner"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-[#0f172a] leading-[1.12]">
            Build Your Ideal
            <span className="block brand-gradient-text mt-1">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              aria-label="Explore Technologies section"
              className="inline-flex items-center justify-center text-white brand-gradient font-medium text-sm sm:text-base rounded-xl px-7 py-3.5 shadow-sm hover:opacity-95 hover:shadow-md active:scale-98 transition-all duration-200 cursor-pointer"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              aria-label="Learn More about Dev Stack"
              className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-700 font-medium text-sm sm:text-base rounded-xl px-7 py-3.5 hover:bg-slate-50 hover:border-slate-300 active:scale-98 transition-all duration-200 cursor-pointer"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end items-center">
          <img
            src={bannerStack}
            alt="Development Stack Visual"
            className="w-full max-w-sm sm:max-w-md lg:max-w-xl object-contain"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
