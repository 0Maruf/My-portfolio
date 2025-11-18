import { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Dark mode toggle effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Smooth scroll behavior
  useEffect(() => {
    const handleLinkClick = (e) => {
      if (e.target.tagName === "A" && e.target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = e.target.getAttribute("href").substring(1);
        const section = document.getElementById(id);
        if (section) {
          const yOffset = -80; // offset for fixed navbar height
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
      className="bg-gray-900 text-white flex justify-between md:justify-around items-center 
                 py-4 px-4 md:px-8 fixed top-0 w-full z-50 shadow-lg transition-all duration-500 
                 overflow-x-hidden"
    >
      {/* ---------- Logo ---------- */}
      <h1 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
        <FaLaptopCode className="text-3xl text-cyan-400" />
        Maruf <span className="text-white hidden md:inline">Dev</span>
      </h1>

      {/* ---------- Desktop Menu ---------- */}
      <ul className="hidden lg:flex gap-8 font-medium text-lg">
        <li><a href="#home" className="hover:text-cyan-400 transition-all">Home</a></li>
        <li><a href="#about" className="hover:text-cyan-400 transition-all">About</a></li>
        <li><a href="#education" className="hover:text-cyan-400 transition-all">Education</a></li>
        <li><a href="#projects" className="hover:text-cyan-400 transition-all">Projects</a></li>
        <li><a href="#contact" className="hover:text-cyan-400 transition-all">Contact</a></li>
      </ul>

      {/* ---------- Right Section ---------- */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
       
        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1ZjDbEDm3zOXJi-B8tb3yv504PwfNao5w/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
        >
          Resume
        </a>

        {/* Mobile Menu Toggle */}
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

      {/* ---------- Mobile Menu ---------- */}
      {open && (
        <ul
          data-aos="fade-down"
          className="lg:hidden flex flex-col gap-3 bg-gray-800 mt-2 p-4 rounded shadow-md 
                     absolute top-16 left-0 w-full z-40 overflow-x-hidden"
        >
          <li><a href="#home" className="hover:text-cyan-400 transition-all">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition-all">About</a></li>
          <li><a href="#education" className="hover:text-cyan-400 transition-all">Education</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition-all">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition-all">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
