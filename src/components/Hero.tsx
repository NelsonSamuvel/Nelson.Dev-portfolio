import { Code, FileSignature } from "lucide-react";

const Hero = () => {
  return (
    <section className="custom-container min-view-height  flex gap-8 items-center md:items-start justify-center flex-col  px-6 md:px-12 bg-gradient-to-br ">
      {/* Animated Grid Background */}
      <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0)] bg-[size:20px_20px] opacity-30"></div>

      <div
        data-aos="fade-right"
        data-aos-duration="800"
        className="flex flex-col gap-6 w-full backdrop-blur-sm bg-black/10 rounded-3xl p-8 border border-gray-700/30 shadow-2xl"
      >
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-400"></div>
          </div>
          <div className="text-xs text-gray-500 font-mono">~/nelson.dev</div>
        </div>

        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl max-w-2xl mx-auto leading-[42px] md:leading-[60px] text-center bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
          Bringing interfaces to life with{"     "}
          <span className="whitespace-nowrap">
            <span className="text-gradient text-transparent hover:from-orange-400 hover:to-primary transition-all duration-500">
              React
            </span>{" "}
            &{" "}
            <span className="text-gradient bg-clip-text text-transparent hover:from-orange-400 hover:to-primary transition-all duration-500">
              Next.js
            </span>{" "}
            web
          </span>
        </h2>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-400 font-mono">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for work
          </span>
          <span className="text-gray-600">|</span>
          <span>Frontend Developer</span>
        </div>

        <p className="text-lg w-full text-gray-300 text-center md:self-start max-w-xl mx-auto leading-relaxed">
          Crafting fast, scalable UIs with modern web tools.
        </p>
      </div>

      <div
        className="flex gap-4 w-full flex-wrap justify-center"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-offset="100"
      >
        <div className="group">
          <a
            href="#projects"
            className="btn sm:w-auto shadow-2xl bg-primary shadow-primary text-white font-semibold transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white/20"
          >
            <span className="flex items-center gap-2">
              My Works
              <Code className="icon-sm group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </a>
        </div>

        <div className="group">
          <a
            href="/resume.pdf"
            download
            target="_blank"
            className="btn-outline  text-white font-semibold transform hover:scale-105 transition-all duration-300  outline outline-primary/80 "
          >
            <span className="flex items-center gap-2">
              Resume
              <FileSignature className="icon-sm group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
