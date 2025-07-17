import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "../staticData";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-[100vh] scroll-mt-0 bg-light-gray relative overflow-hidden"
      data-aos="fade-in"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="custom-container relative flex flex-col gap-8 md:gap-12 justify-between items-center px-6 py-16 md:py-20">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4"
        >
          <div className="space-y-2">
            <h2 className="heading-2 relative">Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
          </div>
          <p className="text-gray max-w-2xl mx-auto text-lg">
            Discover my latest work and creative solutions
          </p>
        </motion.div>

        {/* Modern Card Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-7xl">
          {projectsData.map((project, index) => (
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => {
                window.open(project.demoLink, "_blank");
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={project.id}
              className="group cursor-pointer"
            >
              {/* Modern Glass Card */}
              <div className="relative bg-extraLight-gray/80 backdrop-blur-sm border-2 border-light-gray/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                {/* Status Indicator */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="flex items-center gap-2 bg-primary/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>Live Project</span>
                  </div>
                </div>

                {/* Image with Overlay Content */}
                <div className="relative h-64 overflow-hidden bg-light-gray">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-80"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Bottom Overlay Content */}
                  <div className="absolute hidden lg:block opacity-0 group-hover:opacity-100  duration-300 delay-100 bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <h3 className="text-2xl  font-bold mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed ">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-5">
                  <div className=" lg:hidden  text-white  transition-all">
                    <h3 className="text-2xl  font-bold mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed ">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <div
                          key={tag.name}
                          className="flex items-center gap-1.5 bg-light-gray/70 hover:bg-light-gray px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 hover:scale-105"
                        >
                          {tag.icon && (
                            <img
                              src={tag.icon}
                              alt={tag.name}
                              className="h-4 w-4"
                            />
                          )}
                          <span>{tag.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-3">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 px-4 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 group/btn"
                    >
                      <span>View Live</span>
                      <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 bg-light-gray/60 hover:bg-light-gray px-4 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group/btn"
                    >
                      <span className="hidden sm:inline">Code</span>
                      <Github className="w-4 h-4 transition-transform duration-200 group-hover/btn:rotate-12" />
                    </a>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-16 translate-x-16 group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl translate-y-12 -translate-x-12 group-hover:bg-primary/10 transition-colors duration-500"></div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Projects;
