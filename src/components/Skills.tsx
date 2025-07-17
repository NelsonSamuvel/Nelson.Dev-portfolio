import Marquee from "react-fast-marquee";
import { skillsData } from "../staticData";
import { motion } from "motion/react";

const Skills = () => {
  const loopedData = [...skillsData, ...skillsData];
  return (
    <section id="skills" className="scroll-mt-0 pb-8" data-aos="fade-in">
      <div className=" flex flex-col  gap-4 md:gap-8 justify-between items-center py-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-2 mb-4"
        >
          <h2 className="heading-2">Tech Stack</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
        </motion.h2>

        <Marquee pauseOnHover={true}>
          {loopedData.map((skill) => (
            <div
              key={skill.id}
              className="flex mr-4 min-w-[150px] justify-center items-center gap-4 rounded-lg group hover:bg-light-gray/80 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 px-3 py-1 bg-light-gray"
            >
              <img
                src={skill.imgLink}
                alt={skill.name}
                className="w-8 h-12 object-contain filter group-hover:brightness-120"
              />
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
