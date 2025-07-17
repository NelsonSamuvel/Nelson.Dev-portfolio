import { experienceData } from "../staticData";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-[100vh] scroll-mt-0 bg-black relative overflow-hidden"
      data-aos="fade-in"
    >
      <div className="max-w-screen-lg md:mx-auto relative flex flex-col gap-8 md:gap-12 justify-between items-center px-6 py-16 md:py-20">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4"
        >
          <h2 className="heading-2 text-white relative">
            Experience
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative w-full max-w-4xl ">
          {/* Main Timeline Line */}
          <div className="absolute hidden md:block left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary opacity-30"></div>

          <div className="flex flex-col gap-12 mt-6">
            {experienceData.map((experience, index) => (
              <div
                key={experience.id}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Timeline Node */}
                <div className="absolute left-[20.5px] hidden md:block top-8 z-10">
                  <div className="relative">
                    {/* Outer Ring */}
                    <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-primary/50 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"></div>
                    {/* Inner Dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="md:ml-16 relative">
                  <div className="bg-primary/10 backdrop-blur-sm border  rounded-2xl p-6 md:p-8 border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                    {/* Card Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                          {experience.company}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                          <span className="font-medium text-primary/80">
                            {experience.role}
                          </span>
                          <span className="hidden sm:inline text-gray-600">
                            •
                          </span>
                          <span className="italic text-sm">
                            {experience.start} - {experience.end}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Experience Content */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {experience.experience.map((content, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-300 leading-relaxed group/item hover:text-white transition-colors duration-200"
                          >
                            {/* Custom Bullet */}
                            <div className="flex-shrink-0 mt-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                            </div>
                            <span className="text-sm md:text-base">
                              {content}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline End Cap */}
          <div className="absolute hidden md:block left-[21px] -bottom-6 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary/50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
