import { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Theme toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Smooth scroll fix
  useEffect(() => {
    const handleLinkClick = (e) => {
      if (e.target.tagName === "A" && e.target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = e.target.getAttribute("href").substring(1);
        const section = document.getElementById(id);
        if (section) {
          const yOffset = -80; // adjust for fixed navbar height
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          setOpen(false);
        }
      }
    };
    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <nav
      data-aos="fade-down"
      className="bg-gray-900 text-white flex justify-between   md:justify-around items-center py-4 px-6 fixed top-0 w-full z-50 shadow-lg transition-all duration-500"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
        <FaLaptopCode className="text-3xl text-cyan-400" />
        Maruf <span className="text-white hidden md:inline">Dev</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 font-medium text-lg">
        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#education" className="hover:text-blue-400">Education</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <label className="swap swap-rotate cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </label>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1urZ2iD2ciZEQyepQ53rf8mODqUU5T0Tm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
        >
          Resume
        </a>

        {/* Mobile menu icon */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 hover:bg-gray-800 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul
          data-aos="fade-down"
          className="lg:hidden flex flex-col gap-3 bg-gray-800 mt-2 p-4 rounded shadow-md absolute top-16 left-0 w-full z-40"
        >
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#education" className="hover:text-blue-400">Education</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
