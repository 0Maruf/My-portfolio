import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import project1 from "../../public/projectss/Projects (1).png";
import project2 from "../../public/projectss/Projects (2).png";
import support from "../../public/projectss/support.png"


export const projectsData = [
  {
    image: project2,
    title: "Restaurant",
    description:
      "Fully responsive restaurant website featuring menu, booking system, chef profiles, testimonials, and a contact form. Clean UI with smooth navigation across all devices.",
    codeLink: "https://github.com/0Maruf/Restaurent_website_Full-Responsive_Final",
    liveLink: "https://0maruf.github.io/Restaurent_website_Full-Responsive_Final/",
  },
  {
    image: project1,
    title: "Personal Portfolio",
    description:
      "Fully responsive personal portfolio featuring sections for About, Skills, Projects, and Contact. Clean, modern UI with smooth navigation and responsive design built using Tailwind CSS.",
    codeLink: "https://github.com/0Maruf/Personal-portfolio_website_FullyRespposive_Use_TailwindCSS",
    liveLink: "https://0maruf.github.io/Personal-portfolio_website_FullyRespposive_Use_TailwindCSS/",
  },
  {
    image: support,
    title: "Ultimate Support",
    description:
      "Fully responsive Ultimate Supporting  featuring sections for About, Help, Premiume ,  Coustomer, and Contact. Clean, modern UI  design ",
    codeLink: "https://github.com/0Maruf/FristReact-Repo-SupportProject-",
    liveLink: "https://frist-react-repo-support-project.vercel.app/",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id='projects' className="bg-black border-b-6 border-white">
      <div className="pt-8 text-center">
        <h2
          className="text-2xl text-cyan-400 md:text-4xl font-bold p-2"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        <p
          className="text-gray-500 text-lg mb-5 dark:text-gray-400"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Here are a few projects I've worked on recently. Click the links to view live demos or source code.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mx-auto py-8 px-4 md:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-80 mb-4 bg-white rounded-lg shadow-lg 
                         transform transition duration-500 hover:scale-105 
                         hover:-translate-y-2 hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-delay={index * 100}
            >
              <img
                className="rounded-t-lg w-full h-48 sm:h-64 object-contain"
                src={project.image}
                alt={project.title}
              />
              <div className="py-4 px-6">
                <h2 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl sm:text-2xl tracking-tight">
                  {project.title}
                </h2>
                <p className="hover:cursor-pointer py-2 text-gray-600 leading-5">
                  {project.description}
                </p>
                <div className='flex gap-5'>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-soft btn-primary">Code</button>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-soft btn-primary">Live</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
