import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const educationData = [
    {
      title: "Internship Training - Web Development",
      institute: "BdCalling Accademi Ltd (Batch-5)",
      year: "2025 (Ongoing)",
      desc: "MERN STACK (Front-End) Developer.",
      aos: "fade-right",
    },
    {
      title: "Diploma in Computer Science & Technology",
      institute: "Rangpur Polytechnic Institute",
      board: "Bangladesh Technical Education Board",
      year: "2021 - 2026",
      desc: "Completed major courses on web development, software engineering, and database management.",
      aos: "fade-left",
    },
    {
      title: "Secondary School Certificate (SSC)",
      institute: "Rangpur Technical School & College,Rangpur",
      board: "Bangladesh Technical Education Board",
      year: "2021",
      desc: "Completed SSC with a strong foundation in Computer science and technology subjects.",
      aos: "fade-right",
    },
  ];

  return (
    <section id="education" className="bg-[#0a0a1a] text-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
          🎓 Education
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Learning is the foundation of growth — here’s a glimpse of my academic and professional journey.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-cyan-500 w-1 h-full z-0 hidden md:block"></div>

        {/* Education Cards */}
        <div className="flex flex-col gap-20">
          {educationData.map((edu, index) => (
            <div
              key={index}
              data-aos={edu.aos}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
            >
              {/* Connector Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-cyan-400 w-6 h-6 rounded-full shadow-md z-10 border-4 border-[#0a0a1a]"></div>

              {/* Card */}
              <div
                className={`card bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl w-full md:w-[45%] p-8 z-10 transition-transform duration-500 hover:scale-105 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
              >
                <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
                  {edu.title}
                </h3>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-white">Institute:</span> {edu.institute}
                </p>
                {edu.board && (
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold text-white">Board:</span> {edu.board}
                  </p>
                )}
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-white">Year:</span> {edu.year}
                </p>
                <p className="text-gray-400">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
