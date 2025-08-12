import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          An Overview of My Work Experience and Roles Across Various Organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 w-1 bg-white h-full z-0 block sm:left-1/2 sm:-translate-x-1/2 sm:block"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative mb-16 flex flex-col sm:flex-row ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            } items-center sm:items-start`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 sm:translate-y-1/2 z-10">
              <div className="bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Content Box */}
            <div
              className={`w-full sm:max-w-sm p-4 sm:p-5 rounded-xl shadow-lg border border-white bg-gray-900 backdrop-blur-md 
                shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-[1.03]
                ${
                  index % 2 === 0
                    ? "sm:mr-[calc(50%+2rem)] text-right"
                    : "sm:ml-[calc(50%+2rem)] text-left"
                } sm:mt-0 mt-16`}
            >
              {/* Header Row */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-400">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-3">
                <h5 className="font-medium text-white text-sm">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs rounded-md mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
