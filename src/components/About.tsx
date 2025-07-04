const About = () => {
  return (
    <section
      id="about"
      className="min-h-[100vh]  bg-light-gray party-paper -scroll-mt-8"
    >
      <div className="custom-container flex flex-col gap-4 justify-between items-center px-6 py-12">
        <h2 className="heading-2" data-aos="fade-in">
          About Me
        </h2>

        <img
          data-aos="fade-in"
          src="/avatar1.jpg"
          alt=""
          className="rounded-full object-cover w-1/2 md:w-1/4"
        />
        <div>
          <h3 data-aos="fade-right" className="heading-3 text-gradient">
            Frontend Developer
          </h3>
          <p
            data-aos="flip-up"
            className="relative text-center text-xl px-2 py-1 border border-primary rounded-md bg-primary/10 animate-pulse"
          >
            {/* Online indicator */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="font-medium">Nelson Samuvel 🧑‍💻✨🎨</span>
          </p>
          <a
            data-aos="fade-in"
            href="#footer"
            className="text-center block mt-4 bg-gradient-to-r w-fit py-2 px-4 mx-auto bg-primary rounded-full text-white"
          >
            Stay Connected👋
          </a>
        </div>
        <p
          className="text-center max-w-xl"
          data-aos="fade-in"
          data-aos-offset="100"
        >
          I enjoy building fast, intuitive, and visually engaging web
          interfaces. I work primarily with{" "}
          <span className="text-primary">React</span>,{" "}
          <span className="text-primary">Next.js</span>, and{" "}
          <span className="text-primary">Tailwind CSS</span> — crafting smooth
          user experiences with clean and scalable code.{" "}
        </p>

        <p
          data-aos="fade-in"
          className="font-semibold text-lg border-b border-primary"
        >
          What I care about:
        </p>
        <ul data-aos="fade-in" className="space-y-1 text-center">
          <li>⚛️ Building dynamic interfaces with React and Next.js</li>
          <li>🎨 Styling with Tailwind CSS for clean, responsive UIs</li>
          <li>🚀 Focus on performance optimization and fast load times</li>
          <li>♿ Committed to accessibility and user-centered design</li>
          <li>🧩 Writing modular, reusable, and maintainable code</li>
          <li>🛠️ Continuously learning and improving development practices</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
