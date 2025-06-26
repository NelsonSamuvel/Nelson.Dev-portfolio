import Marquee from "react-fast-marquee";
import { skillsData } from "../staticData";

const Skills = () => {
  const loopedData = [...skillsData, ...skillsData];
  return (
    <section id="skills" className="min-h-[100vh] -scroll-mt-8">
      <div className=" flex flex-col  gap-4 md:gap-8 justify-between items-center py-12">
        <h2 className="heading-2" data-aos="fade-in">
          Tech Stack
        </h2>

        <Marquee pauseOnHover={true}>
          {loopedData.map((skill) => (
            <div
              key={skill.id}
              className="flex mr-4  min-w-[150px] justify-center items-center gap-4 border-1 rounded group hover:bg-light-gray/80 overflow-hidden   border-gray-500 border-dashed px-3 py-1 bg-light-gray"
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
