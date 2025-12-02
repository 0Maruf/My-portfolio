// FooterSection.jsx
import { FaLaptopCode, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-300 px-6 md:px-16 py-12">

      {/* Top Footer */}
      {/* top sec  */}
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-700 pb-10">

        {/* Left Section */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3">
            <FaLaptopCode className="text-4xl text-blue-400" />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              MARUF HASAN
            </h2>
          </div>
          <p className="text-gray-400 text-lg">MERN STACK (Front-End) Developer.</p>

          <div className="flex gap-4 text-2xl pt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#1e293b]/70 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Stay in Touch</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-[#0f172a] text-gray-200 border border-gray-600 focus:outline-none focus:border-cyan-400"
            />
            <textarea
              placeholder="Your message"
              rows="4"
              className="w-full p-3 rounded-md bg-[#0f172a] text-gray-200 border border-gray-600 focus:outline-none focus:border-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 text-sm pt-6">
        © 2025 Md. Maruf Hasan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
