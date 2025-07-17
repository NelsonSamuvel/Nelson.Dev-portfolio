import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer id="footer" className=" py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex gap-6 items-center bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20 shadow-lg">
            <a
              href="https://www.linkedin.com/in/nelson-samuvel"
              target="_blank"
              className="group p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <img
                src="/linkedin.png"
                alt="linkedin"
                className="w-6 h-6 object-contain group-hover:brightness-125 transition-all duration-300"
              />
            </a>
            <a
              href="https://github.com/NelsonSamuvel"
              target="_blank"
              className="group p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <img
                src="/github.png"
                alt="github"
                className="w-6 h-6 object-contain group-hover:brightness-125 transition-all duration-300"
              />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=nelsonsamvl@gmail.com"
              target="_blank"
              className="group p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <img
                src="/gmail.png"
                alt="gmail"
                className="w-6 h-6 object-contain group-hover:brightness-125 transition-all duration-300"
              />
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"></div>

        {/* Text Content */}
        <motion.div
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg font-light leading-relaxed mb-4">
            Still learning, still building, still curious. ❤️
          </p>
          <p className="text-base text-gray-300 font-medium">
            Thanks for stopping by — Nelson 🙌
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
