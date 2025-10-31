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
    icon: "/public/image/html.png",
  },
  {
    name: "CSS",
    category: "Frontend",
    description: "Style sheet language for beautiful interfaces.",
    level: "85%",
    color: "from-blue-500 to-indigo-500",
    icon: "/public/image/css.png",
  },
  {
    name: "TailwimdCSS",
    category: "Frontend",
    description: "Style sheet language for beautiful interfaces.",
    level: "85%",
    color: "from-blue-500 to-indigo-500",
    icon: "/public/image/tailwind.png",
  },
  {
    name: "DaisyUi",
    category: "Frontend",
    description: "Style sheet language for beautiful interfaces.",
    level: "85%",
    color: "from-blue-500 to-indigo-500",
    icon: "/public/image/daisy.png",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Dynamic programming language for web applications.",
    level: "80%",
    color: "from-yellow-400 to-orange-400",
    icon: "/public/image/javascript.png",
  },
  {
    name: "React",
    category: "Frontend",
    description: "JavaScript library for building UI components.",
    level: "75%",
    color: "from-sky-400 to-blue-600",
    icon: "/public/image/react.png",
  },
  {
    name: "Git",
    category: "Tools",
    description: "Version control system for tracking code changes.",
    level: "75%",
    color: "from-red-500 to-orange-600",
    icon: "/public/image/git.png",
  },
  {
    name: "Microsoft Word",
    category: "Productivity",
    description: "Professional documentation and formatting.",
    level: "95%",
    color: "from-blue-600 to-sky-400",
    icon: "/public/image/word.png",
  },
  {
    name: "Microsoft Excel",
    category: "Productivity",
    description: "Data organization, analysis, and formulas.",
    level: "85%",
    color: "from-green-500 to-lime-400",
    icon: "/public/image/excel.png",
  },
  {
    name: "PowerPoint",
    category: "Productivity",
    description: "Presentation design and animations.",
    level: "90%",
    color: "from-orange-400 to-red-400",
    icon: "/public/image/powerpoint.png",
  },
  {
    name: "Access",
    category: "Database",
    description: "Database management and data storage.",
    level: "80%",
    color: "from-purple-500 to-indigo-500",
    icon: "/public/image/access.jpg",
  },
  {
    name: "Email Writing",
    category: "Communication",
    description: "Professional and structured email communication.",
    level: "95%",
    color: "from-pink-400 to-rose-500",
    icon: "/public/image/gmail.jpg",
  },
  {
    name: "Basic Graphics",
    category: "Design",
    description: "Creating simple and attractive visuals.",
    level: "70%",
    color: "from-teal-400 to-cyan-500",
    icon: "/public/image/photoshop.jpg",
  },
  {
    name: "Product Management",
    category: "Management",
    description: "Planning, executing, and delivering projects.",
    level: "80%",
    color: "from-yellow-400 to-amber-500",
    icon: "/public/image/product.jpg",
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
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">My Skills</h2>
        <p className="text-gray-300 mt-3 text-lg">
          Technologies & Tools I love working with 🚀
        </p>
      </div>

      <div className="relative overflow-hidden mx-auto w-[90%] md:w-[70%]">
        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl p-6 w-64 md:w-72 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            >
              {/* 🖼 Logo */}
              <div className="mb-4 hover:scale-110 transition-transform duration-300">
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
        <div className="border-b-4 mt-10">
        </div>
      </div>
  
    </section>
   
  );
};

export default Skills;
