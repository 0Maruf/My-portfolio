import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { TbFlag3 } from "react-icons/tb";
import about from "../../public/image/about.jpg"

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section id="about" className="bg-[#0a0a1a] text-white py-20 px-6 md:px-16  relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-16">
                {/* Left Side - Image */}
                <div className="relative flex flex-col items-center" data-aos="fade-right">
                    <div className="bg-gradient-to-tr from-cyan-500/40 to-blue-500/10 rounded-full p-2">
                        <img
                            src={about}
                            alt="Md. Maruf Hasan"
                            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-cyan-500/40"
                        />
                    </div>

                    <div> <br />
            <a
              href="../../public/Maruf Hasan Resume.pdf" // 1. Path to your PDF in the public folder
              download="Maruf Hasan Resume - Google Docs.pdf" // 2. This attribute forces the download and sets the default filename
              className="font-semibold text-lg bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition inline-block" // 3. Styling the link to look like a button
            >
              Download Resume
            </a>
          </div>
                </div>

                {/* Right Side - Info */}
                <div className="md:w-2/3" data-aos="fade-left">
                    <h2 className="text-4xl text-cyan-400 md:text-5xl font-bold border-l-4 border-white  mb-6">
                        .ABOUT ME
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        Hello! I'm <span className="text-cyan-400 font-semibold">Md. Maruf Hasan</span>.
                        A passionate <span className="text-cyan-400">Web Designer & Frontend Developer</span> from Bangladesh.
                        I love creating responsive, modern, and user-friendly web interfaces.
                        I'm always eager to learn new technologies and improve my craft to turn creative ideas into real products.
                    </p>

                    <div className="space-y-3 text-gray-200">
                        <p className="flex items-center gap-3">
                            <FaUser className="text-cyan-400" />
                            <span><span className="font-semibold text-white">Name:</span> Md. Maruf Hasan</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-cyan-400" />
                            <span><span className="font-semibold text-white">Address:</span> Dhaka, Bangladesh</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <FaPhone className="text-cyan-400" />
                            <span><span className="font-semibold text-white">Phone:</span> +880 1717-107-939</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <FaEnvelope className="text-cyan-400" />
                            <span><span className="font-semibold text-white">Email:</span>marufhasanlipu@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
