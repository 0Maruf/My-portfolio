import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      id="education"
      className="bg-black text-white py-20 px-6 md:px-16"
    >
      <div
        className="max-w-6xl mx-auto text-center mb-12"
        data-aos="fade-down"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
        <p className="text-lg md:text-xl text-gray-100">
          Learning is the foundation of growth — here’s a quick overview of my academic journey and key skills.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Left side - Education details */}
        <div
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl w-full md:w-1/2 shadow-lg border border-white/20"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-semibold mb-3 border-l-4 border-white pl-3">
            Diploma in Computer Science & Technology
          </h3>
          <p className="text-md text-gray-200 mb-2">
            <span className="font-semibold">Institute:</span> Rangpur Polytechnic Institute
          </p>
          <p className="text-md text-gray-200 mb-2">
            <span className="font-semibold">Board:</span> Bangladesh Technical Education Board
          </p>
          <p className="text-md text-gray-200">
            <span className="font-semibold">Session:</span> 2021 - 2026
          </p>
        </div>

        {/* Right side - Skills and summary */}
        <div
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl w-full md:w-1/2 shadow-lg border border-white/20"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold mb-3 border-l-4 border-white pl-3">
            About My Journey
          </h3>
          <p className="leading-relaxed text-gray-100 mb-4">
            Hi, I'm <span className="font-bold text-xl text-white">Md. Maruf Hasan</span>, 
            a passionate <span className="font-semibold text-blue-200">Front-end Developer </span> 
            who loves building interactive and responsive web applications.
          </p>

          <p className="leading-relaxed text-gray-100 mb-4">
            <span className="font-semibold text-pink-200">Skills:</span> React, TailwindCSS, JavaScript, HTML, CSS, Responsive Design.
          </p>

          <p className="leading-relaxed text-gray-100">
            Developed <span className="font-semibold">5+</span> responsive websites, 
            collaborated with design teams to implement modern UI/UX, and contributed 
            to open-source projects. I love turning design ideas into functional, 
            user-friendly websites and continuously learning new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
