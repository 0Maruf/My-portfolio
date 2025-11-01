import React, { useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center justify-center py-20 px-6"
    >
      {/* Title Section */}
      <div
        className="text-center mb-12 max-w-2xl"
        data-aos="zoom-in"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          📬 Get In Touch
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Feel free to reach out for collaborations, project discussions, or even just a friendly hello!
        </p>
      </div>

      {/* Contact Container */}
      <div
        className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-10"
        data-aos="fade-up"
      >
        {/* Left Side Text */}
        <div className="flex-1 space-y-5" data-aos="fade-right">
          <h3 className="text-3xl font-semibold text-cyan-400">Let’s Connect</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            I’d love to hear from you! Whether you want to collaborate on a
            project, ask a question, or just say hello — feel free to reach out.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-4 text-3xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-125 duration-300"
              data-aos="zoom-in"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-gray-400 transition-transform transform hover:scale-125 duration-300"
              data-aos="zoom-in"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-125 duration-300"
              data-aos="zoom-in"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side Card */}
        <div
          className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 md:p-10 transition-transform transform hover:-translate-y-3 hover:shadow-cyan-500/40 duration-500"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
            Contact Information
          </h3>

          <div className="space-y-4 text-gray-200 text-lg">
            <p>
              <span className="font-semibold text-white">📍 Location:</span>{" "}
              Rangpur, Bangladesh
            </p>
            <p>
              <span className="font-semibold text-white">📞 Phone:</span>{" "}
              01717107939
            </p>
            <p>
              <span className="font-semibold text-white">✉️ Email:</span>{" "}
              marufhasanlipu@gmail.com
            </p>
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="mailto:marufhasanlipu@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105 shadow-lg"
              data-aos="zoom-in"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
