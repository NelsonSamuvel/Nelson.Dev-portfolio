import { experienceData } from "../staticData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-[100vh]  scroll-mt-0 bg-black"
      data-aos="fade-in"
    >
      <div className="max-w-screen-lg md:mx-auto  flex flex-col  gap-4 md:gap-8 justify-between items-center px-6 py-12 pb-16">
        <h2 className="heading-2">Experience</h2>

        <div className="flex flex-col gap-12 mt-6">
          {experienceData.map((experience) => (
            <div
              key={experience.id}
              className="relative border-dashed border-l pl-4  border-gray"
            >
              <div
                data-aos="fade-down"
                className="absolute top-0 -left-[7.8px] w-4 h-4 rounded-full bg-primary"
              ></div>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                className="absolute bottom-0 -left-[7.8px] w-4 h-4 rounded-full bg-primary"
              ></div>

              <div data-aos="fade-left">
                <h3 className="text-lg font-medium">{experience.company}</h3>
                <div className="flex gap-2 text-sm text-gray">
                  <p>{experience.role}</p>
                  <p>•</p>
                  <div>
                    <p className="italic">
                      {experience.start} - {experience.end}
                    </p>
                  </div>
                </div>
              </div>
              <ul
                data-aos="fade-left"
                className="text-md mt-4 text-gray space-y-2"
              >
                {experience.experience.map((content, idx) => (
                  <li className="list-disc list-inside" key={idx}>
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
