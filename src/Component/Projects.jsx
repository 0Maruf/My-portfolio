import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Ensure the import path is correct based on your file structure
// These imports look a bit unusual in standard React/Webpack/Vite setups,
// but they are kept as is based on your initial code.
import project1 from "../../public/projectss/Projects (1).png";
import project2 from "../../public/projectss/Projects (2).png";
import project3 from "../../public/projectss/Projects (3).png";

// 1. Create a data structure for your projects
const projectsData = [
    {
        image: project2,
        title: "Restaurent",
        description: "A sleek and efficient task management application to help users organize their daily to-dos. Features drag-and-drop functionality.",
        codeLink: "https://github.com/0Maruf/Restaurent_website_Full-Responsive_Final",
        liveLink: "https://0maruf.github.io/Restaurent_website_Full-Responsive_Final/",
    },
    {
        image: project3,
        title: "Tea-House",
        description: "A tool that uses the OpenAI API to generate engaging blog posts based on user prompts. Implemented with Next.js and Tailwind CSS.",
        codeLink: "https://github.com/0Maruf/tea-house-duisyUI-use-",
        liveLink: "https://0maruf.github.io/tea-house-duisyUI-use-/",
    },
    {
        image: project1,
        title: "Personal-Portfolio",
        description: "A full-stack e-commerce site with features like cart management, user authentication, and payment integration. Built with MERN stack.",
        codeLink: "https://github.com/0Maruf/Personal-portfolio_website_FullyRespposive_Use_TailwindCSS", // <--- Add your GitHub link here
        liveLink: "https://0maruf.github.io/Personal-portfolio_website_FullyRespposive_Use_TailwindCSS/", // <--- Add your Live Demo link here
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
        <div className="bg-black border-b-6 border-white">
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

                    {/* 2. Map over the projectsData array */}
                    {projectsData.map((project, index) => (
                        <div
                            key={index} // Using index as key is acceptable here since the list is static
                            className="w-full sm:w-80 mb-4 bg-white rounded-lg shadow-lg 
                                       transform transition duration-500 hover:scale-105 
                                       hover:-translate-y-2 hover:shadow-2xl"
                            data-aos="zoom-in"
                            data-aos-easing="ease-in-out"
                            data-aos-delay={index * 100} // Dynamic delay
                        >
                            {/* 3. Use project.image */}
                            <img
                                className="rounded-t-lg w-full h-48 sm:h-64 object-contain"
                                 src={project.image}
                                 alt={project.title}
                            />
                            <div className="py-4 px-6">
                                {/* 4. Use project.title */}
                                <h2 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl sm:text-2xl tracking-tight">
                                    {project.title}
                                </h2>
                                {/* 5. Use project.description */}
                                <p className="hover:cursor-pointer py-2 text-gray-600 leading-5">
                                    {project.description}
                                </p>
                                <div className='flex gap-5'>
                                    {/* 6. Use project.codeLink */}
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                                        <button className="btn btn-soft btn-primary">Code</button>
                                    </a>
                                    {/* 7. Use project.liveLink */}
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