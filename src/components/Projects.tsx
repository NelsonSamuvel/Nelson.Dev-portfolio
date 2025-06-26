import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "../staticData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-[100vh] scroll-mt-0 bg-light-gray"
      data-aos="fade-in"
    >
      <div className="custom-container  flex flex-col  gap-4 md:gap-8 justify-between items-center px-6 py-12">
        <h2 className="heading-2">Projects</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
          {projectsData.map((project) => (
            <li
              onClick={() => window.open(project.demoLink, "_blank")}
              data-aos="fade-up"
              key={project.id}
              className="flex-1 transform hover:scale-[101%] transition-transform duration-150 cursor-pointer"
            >
              <div className="p-1.5 bg-extraLight-gray border border-dashed rounded border-gray-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded w-full "
                />
                <div className="p-4 space-y-2">
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex gap-1 mt-4 items-center">
                    <ul className="flex gap-2 flex-wrap ">
                      {project.tags.map((tag) => (
                        <li
                          key={tag.name}
                          className="flex items-center gap-1 rounded-md bg-light-gray px-2 py-1 text-xs"
                        >
                          {tag.icon && (
                            <img
                              src={tag.icon}
                              alt={tag.name}
                              className="h-4 w-4"
                            />
                          )}
                          <p>{tag.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex items-center gap-4 flex-wrap">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      className="flex items-center gap-1 bg-primary px-2 py-1 rounded-md"
                    >
                      <span className="text-sm">Live</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center gap-1 bg-light-gray/60 px-2 py-1 rounded-md"
                    >
                      <span className="text-sm">Github</span>
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
