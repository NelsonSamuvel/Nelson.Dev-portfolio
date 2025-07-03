import { Code, FileSignature } from "lucide-react";

const Hero = () => {
  return (
    <section className="custom-container min-h-[calc(100vh-72px)] flex gap-6  items-center md:items-start justify-center flex-col md:min-h-[calc(100vh-60px)] px-6 md:px-12">
      <div className="flex flex-col gap-4 w-full">
        <h2
          data-aos="fade-right"
          data-aos-duration="800"
          className="font-semibold text-3xl sm:text-4xl md:text-5xl  leading-[42px] md:leading-[60px] text-center"
        >
          Bringing interfaces to life with{"     "}
          <span className="whitespace-nowrap">
            <span className="text-primary">React</span> &{" "}
            <span className="text-primary">Next.js</span> web.
          </span>
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-md w-full text-gray-300 text-center md:self-start"
        >
          Crafting fast, scalable UIs with modern web tools.
        </p>
      </div>
      <div
        className="flex gap-4 w-full flex-wrap justify-center"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <button className="btn sm:w-auto  shadow-2xl shadow-primary  bg-primary hover:bg-primary/90">
          My Works
          <Code className="icon-sm" />
        </button>
        <a
          href="/resume.pdf"
          download
          target="_blank"
          className="btn shadow-2xl shadow-light-gray bg-light-gray hover:bg-light-gray/90"
        >
          Resume
          <FileSignature className="icon-sm" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
