import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroLogo from "../../public/ResumePicture.png";
import facebook from "../../public/Facebook.png";
import istagram from "../../public/Instagram.png";
import linkedin from "../../public/Linkedin.png";
import Email from "../../public/Email.png";
import github from "../../public/github.jpg";

const Banner = () => {
  return (
    <section className="bg-black  text-white py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-40 ">

        {/* About Text */}
        <div className="md:w-[500px] w-full space-y-6 border-l-6 border-white pl-4 " data-aos="fade-right">
          <h1 className="font-bold sm:text-2xl md:text-4xl lg:text-5xl  inline-block pb-2">
            Hello...
          </h1>

          <p className="text-md md:text-lg leading-relaxed">
            I’m <span className="font-bold text-4xl">MD.<Typewriter
              words={["MARUF HASAN"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={300}
              deleteSpeed={300}
            /></span> <br /> <br /> I’m <span className="font-bold text-2xl ">MERN STACK (Front-End) Developer.</span>
            <br />
            I specialize in creating clean, modern, and functional designs.
          </p>
          <div className="flex gap-4 md:gap-6 flex-wrap  items-center mt-6">
            <a
              href="https://github.com/0Maruf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="Facebook"
                className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300 rounded-3xl "
              />
            </a>
            <a
              href="https://www.facebook.com/lipumarufhasan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
              />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
              />
            </a>

            <a
              href="marufhasanlipu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Email}
                alt="Email"
                className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
              />
            </a>

          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1urZ2iD2ciZEQyepQ53rf8mODqUU5T0Tm/view?usp=sharing" // 1. Path to your PDF in the public folder
              download="Maruf Hasan Resume - Google Docs.pdf" // 2. This attribute forces the download and sets the default filename
              className="font-semibold text-lg bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition inline-block" // 3. Styling the link to look like a button
            >
              Download Resume
            </a>
          </div>

        </div>
        {/* Hero Image */}
        <div className="flex-shrink-0 " data-aos="fade-left" >
          <img
            className="rounded-4xl md:h-[500px] h-[350px] md:w-[426px] w-[350px] shadow-lg border-4 border-white"
            src={HeroLogo}
            alt="Md. Maruf Hasan"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
