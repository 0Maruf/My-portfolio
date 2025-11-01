import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    name: "HTML",
    category: "Frontend",
    description: "Markup language for creating web pages.",
    level: "90%",
    color: "from-orange-500 to-red-500",
    icon: "/image/html.png",
  },
  {
    name: "CSS",
    category: "Frontend",
    description: "Style sheet language for beautiful interfaces.",
    level: "85%",
    color: "from-blue-500 to-indigo-500",
    icon: "/image/css.png",
  },
  {
    name: "TailwindCSS",
    category: "Frontend",
    description: "Utility-first CSS framework.",
    level: "85%",
    color: "from-blue-500 to-indigo-500",
    icon: "/image/tailwind.png",
  },
  {
    name: "DaisyUi",
    category: "Frontend",
    description: "UI component library for TailwindCSS.",
    level: "85%",
    color: "from-blue-500 to-indigo-500",
    icon: "/image/daisy.png",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Dynamic programming language for web apps.",
    level: "80%",
    color: "from-yellow-400 to-orange-400",
    icon: "/image/javascript.png",
  },
  {
    name: "React",
    category: "Frontend",
    description: "JavaScript library for building UI components.",
    level: "75%",
    color: "from-sky-400 to-blue-600",
    icon: "/image/react.png",
  },
  {
    name: "Git",
    category: "Tools",
    description: "Version control system for tracking code changes.",
    level: "75%",
    color: "from-red-500 to-orange-600",
    icon: "/image/git.png",
  },
 
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">My Skills</h2>
        <p className="text-gray-300 mt-3 text-lg">
          Technologies & Tools I love working with 🚀
        </p>
      </div>

      {/* Skills Cards */}
      <div className="relative overflow-hidden mx-auto w-[90%] md:w-[70%]">
        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl p-6 w-64 md:w-72 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            >
              {/* Logo with hover animation */}
              <div className="mb-4 transform hover:scale-110 transition-transform duration-500">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-cyan-400 text-sm mb-2">{skill.category}</p>
              <p className="text-gray-300 mb-4">{skill.description}</p>

              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="text-sm text-gray-400">{skill.level} Proficiency</p>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="border-b-4 border-cyan-400 mt-10 w-[70%] mx-auto"></div>

        {/* Icon Marquee Animation */}
        <div className="mt-6 overflow-hidden">
          <div className="flex animate-marquee gap-6 w-[200%]">
            {skills.map((skill, index) => (
              <img
                key={index}
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
            ))}
            {skills.map((skill, index) => (
              <img
                key={"dup-" + index}
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation CSS */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          gap: 1.5rem;
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
