import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-light-gray party-paper -scroll-mt-8 relative overflow-hidden"
    >
      <motion.div className="custom-container flex flex-col gap-8 justify-between items-center px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-2"
        >
          <h2 className="heading-2">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <motion.img
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: -1 }}
            src="/avatar1.jpg"
            alt=""
            className="relative rounded-full object-cover mx-auto w-1/2 md:w-1/4 border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4"
        >
          <h3 className="heading-3 text-gradient">Frontend Developer</h3>
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 flex-wrap items-center mt-6">
            <div className="relative w-full md:w-fit">
              <p className="relative text-center  text-xl px-6 py-3 border border-primary rounded-2xl bg-primary/10 animate-pulse shadow-lg backdrop-blur-sm">
                {/* Online indicator */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-primary shadow-lg"></span>
                </span>
                <span className="font-medium">Nelson Samuvel 🧑‍💻✨🎨</span>
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary/10 rotate-45 border-r border-b border-primary"></div>
            </div>

            <a
              href="#footer"
              className="inline-block  bg-gradient-to-r w-fit py-3 px-6 mx-auto bg-primary rounded-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white/20"
            >
              Stay Connected👋
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-center text-lg leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg">
            I enjoy building fast, intuitive, and visually engaging web
            interfaces. I work primarily with{" "}
            <span className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300">
              React
            </span>
            ,{" "}
            <span className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300">
              Next.js
            </span>
            , and{" "}
            <span className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300">
              Tailwind CSS
            </span>{" "}
            — crafting smooth user experiences with clean and scalable code.{" "}
          </p>
        </motion.div>

        <div className="w-full max-w-3xl mx-auto">
          <p className="font-semibold text-xl text-center mb-6 pb-2 border-b-2 border-primary inline-block w-full">
            What I care about:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: -1 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl">⚛️</span>
                <span className="text-left">
                  Building dynamic interfaces with React and Next.js
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl">🎨</span>
                <span className="text-left">
                  Styling with Tailwind CSS for clean, responsive UIs
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl">🚀</span>
                <span className="text-left">
                  Focus on performance optimization and fast load times
                </span>
              </motion.li>
            </ul>

            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl">♿</span>
                <span className="text-left">
                  Committed to accessibility and user-centered design
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl">🧩</span>
                <span className="text-left">
                  Writing modular, reusable, and maintainable code
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl">🛠️</span>
                <span className="text-left">
                  Continuously learning and improving development practices
                </span>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
