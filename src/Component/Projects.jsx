import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

                    {/* Project Card Template */}
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-full sm:w-80 mb-4 bg-white rounded-lg shadow-lg 
                                       transform transition duration-500 hover:scale-105 
                                       hover:-translate-y-2 hover:shadow-2xl"
                            data-aos="zoom-in"
                            data-aos-easing="ease-in-out"
                            data-aos-delay={i * 100}
                        >
                            <img
                                className="rounded-t-lg w-full h-48 sm:h-64 object-cover"
                                src="https://i.ibb.co/RzdXZB6/Card-image.jpg"
                                alt="Project Thumbnail"
                            />
                            <div className="py-4 px-6">
                                <h2 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl sm:text-2xl tracking-tight">
                                    Front-End Development
                                </h2>
                                <p className="hover:cursor-pointer py-2 text-gray-600 leading-5">
                                    HTML, CSS, JavaScript, and frameworks like React and Vue.js - Learn to craft stunning user interfaces and create responsive websites that leave a lasting impression.
                                </p>
                                <div className='flex gap-5'>
                                    <a href="#"><button className="btn btn-soft btn-primary">Code</button></a>
                                    <a href="#"><button className="btn btn-soft btn-primary">Live</button></a>
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
