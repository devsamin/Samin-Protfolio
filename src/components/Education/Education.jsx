import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-[10vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          An overview of my academic journey and educational achievements.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 w-1 bg-white h-full z-0 block sm:left-1/2 sm:-translate-x-1/2 sm:block"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative z-10 flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 rounded-full flex justify-center items-center z-20">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Box */}
            <div
              className={`w-full sm:w-[40%] p-4 sm:p-6 rounded-2xl shadow-xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-[51%]" : "sm:mr-[51%]"
              } mt-12 sm:mt-0`}
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-12 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Body */}
              <p className="text-sm text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 text-sm text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
