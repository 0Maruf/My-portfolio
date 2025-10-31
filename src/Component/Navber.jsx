import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu toggle
  const [dropdown, setDropdown] = useState(false); // left-side menu toggle

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <nav
      data-aos="fade-down"
      className="bg-gray-900 text-white flex justify-around items-center py-5 px-6 fixed top-0 w-full z-50 shadow-md"
    >
      {/* Left side: Menu icon + Logo */}
      <div className="flex items-center gap-4">
        {/* Menu Icon for desktop dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="md:flex hidden p-2 hover:bg-gray-800 rounded"
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

          {/* Dropdown Menu (Desktop) */}
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

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500 flex gap-1.5">Maruf <span className="text-white hidden md:block">Dev</span></h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium text-lg">
        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#education" className="hover:text-blue-400">Education</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>

      {/* Right side: toggle + Resume */}
      <div className="flex items-center gap-4">
        <input type="checkbox" defaultChecked className="toggle toggle-primary" />
        <button className="font-bold text-lg md:text-2xl">Resume</button>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
        <ul className="md:hidden flex flex-col gap-3 bg-gray-800 mt-2 p-4 rounded shadow-md absolute top-16 left-0 w-full z-40">
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
