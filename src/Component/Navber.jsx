import { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  // Smooth scroll
  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const id = href.replace("#", "");
      const section = document.getElementById(id);

      if (section) {
        const offset = -80;
        const position =
          section.getBoundingClientRect().top + window.scrollY + offset;

        window.scrollTo({ top: position, behavior: "smooth" });

        setOpen(false);
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <nav
      className="bg-gray-900 text-white flex justify-between items-center 
                 py-4 px-5 md:px-10 fixed top-0 w-full z-50 shadow-md transition-all"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
        <FaLaptopCode className="text-3xl text-cyan-400" />
        Maruf <span className="hidden md:inline text-white">Dev</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 text-lg font-medium">
        <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
        <li><a href="#about" className="hover:text-cyan-400">About</a></li>
        <li><a href="#education" className="hover:text-cyan-400">Education</a></li>
        <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <a
          href="https://drive.google.com/file/d/1ZjDbEDm3zOXJi-B8tb3yv504PwfNao5w/view"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded hover:bg-gray-800"
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
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul
          className="lg:hidden flex flex-col gap-3 bg-gray-800 p-5 rounded-lg
                     absolute top-16 left-0 w-full shadow-md"
        >
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#education" className="hover:text-cyan-400">Education</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
