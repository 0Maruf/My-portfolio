import { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // dark theme by default

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Theme toggle handler
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
      data-aos="fade-down"
      className="bg-gray-900 dark:bg-gray-900 text-white flex justify-around items-center py-4 px-6 fixed top-0 w-full z-50 shadow-md transition-all duration-500"
    >
      {/* Left side: Logo + Menu Icon */}
      <div className="flex items-center gap-4">
        {/* Menu Icon (Desktop dropdown) */}
        <div className="relative hidden">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="p-2 hover:bg-gray-800 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {dropdown && (
            <ul className="absolute top-10 left-0 bg-gray-800 rounded shadow-md w-40 flex flex-col py-2">
              <li><a href="#home" className="px-4 py-2 hover:bg-gray-700">Home</a></li>
              <li><a href="#about" className="px-4 py-2 hover:bg-gray-700">About</a></li>
              <li><a href="#education" className="px-4 py-2 hover:bg-gray-700">Education</a></li>
              <li><a href="#projects" className="px-4 py-2 hover:bg-gray-700">Projects</a></li>
              <li><a href="#contact" className="px-4 py-2 hover:bg-gray-700">Contact</a></li>
            </ul>
          )}
        </div>

        {/* Logo + Name */}
        <h1 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
          <FaLaptopCode className="text-3xl text-cyan-400" />
          Maruf <span className="text-white hidden md:inline">Dev</span>
        </h1>
      </div>

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
        {/* Dark/Light Toggle */}
        <label className="swap swap-rotate cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          {/* sun icon */}
          <svg
            className="swap-on fill-yellow-400 w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64 17l-.7.7a1 1 0 001.41 1.41l.7-.7A8 8 0 005.64 17zM12 4a1 1 0 011 1V7a1 1 0 01-2 0V5a1 1 0 011-1zm7 8a7 7 0 11-7-7 7 7 0 017 7zM4 13H2a1 1 0 010-2h2a1 1 0 010 2zm16 0h2a1 1 0 000-2h-2a1 1 0 000 2zm-1.36 4.95l.7.7a1 1 0 001.41-1.41l-.7-.7A8 8 0 0018.64 17zM12 20a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z" />
          </svg>
          {/* moon icon */}
          <svg
            className="swap-off fill-gray-300 w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64 13a9 9 0 11-9-9 7.5 7.5 0 009 9z" />
          </svg>
        </label>

        {/* Resume Button */}
        <button className="font-semibold text-lg md:text-xl bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
          Resume
        </button>

        {/* Mobile Menu Icon (only show on mobile) */}
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
        <ul className="lg:hidden flex flex-col gap-3 bg-gray-800 mt-2 p-4 rounded shadow-md absolute top-16 left-0 w-full z-40">
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
