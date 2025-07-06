/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import {
    ChevronDown,
    Github,
    Linkedin,
    Code,
    BookOpenText,
} from "lucide-react";
import Button from "./Button";
const AnimatedHeroSection = ({ darkMode }) => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const roles = ["Tech Enthusiast", "DevOps Engineer", "Frontend Dev", "backend Dev", "mobile Dev"];

    useEffect(() => {
        const currentRoleText = roles[currentRole];

        const timeout = setTimeout(() => {
            if (!isDeleting && displayedText === currentRoleText) {
                // Finished typing, wait then start deleting
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayedText === "") {
                // Finished deleting, move to next role
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
            } else if (isDeleting) {
                // Delete one character
                setDisplayedText(currentRoleText.substring(0, displayedText.length - 1));
            } else {
                // Type one character
                setDisplayedText(currentRoleText.substring(0, displayedText.length + 1));
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentRole, roles]);

    const scrollToSection = (sectionId) => {
        console.log(`Scrolling to ${sectionId}`);
    };
    {/* Updated Home Section with typing animation span */ }
    return (
        <section
            id="home"
            className={`min-h-screen overflow-hidden flex items-center transition-all duration-500 ${darkMode ? "bg-transparent text-gray-300" : "bg-gray-200/50 text-black"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-8 w-full">
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-14 items-center">
                    <div className="space-y-6 sm:space-y-8 col-span-12 lg:col-span-7 order-2 lg:order-1 mt-8 lg:mt-0">
                        <div className="space-y-4 sm:space-y-6">
                            <div
                                className={`text-sm sm:text-[18px] w-full font-bold leading-[16px] tracking-[0.3em] mb-3 sm:mb-5 uppercase ${darkMode ? "text-[#ffffff]" : "text-[#000000]"
                                    }`}
                            >
                                i'm {" "}
                                <span
                                    style={darkMode?{
                                        color: "transparent", // Make fill transparent
                                        WebkitTextStrokeWidth: "1px", // Stroke width
                                        WebkitTextStrokeColor: "#22c55e" , // amber-500 / amber-600 hex
                                        textStrokeWidth: "3px", // For other browsers (not widely supported)
                                        textStrokeColor: "#d97706" ,
                                    }:{}}
                                    className={`${darkMode ? "text-green-500" : "text-green-600"
                                        }`}
                                >
                                    Vraj Vyas
                                </span>
                            </div>
                            <div
                                className={`mb-4 sm:mb-6 w-full text-4xl sm:text-5xl md:text-6xl font-extrabold ${darkMode ? "text-white" : "text-black"
                                    }`}
                            >
                                I'm a{" "}
                                <span
                                    className={`inline-block transition-all duration-200 capitalize ease-in-out ${darkMode ? "text-amber-500" : "text-amber-600"
                                        }`}

                                >
                                    {displayedText}
                                    <span
                                        className={`inline-block w-1 h-12 sm:h-14 md:h-12 ml-1 ${darkMode ? "bg-amber-500" : "bg-amber-600"
                                            } animate-pulse`}
                                    />
                                </span>
                            </div>
                            <p
                                className={`w-full mb-8 sm:mb-14 leading-6 sm:leading-[32px] text-sm sm:text-[18px] md:text-[22px] md:leading-[36px] transition-all duration-500 ${darkMode ? "text-gray-400" : "text-gray-500"
                                    }`}
                            >
                                I'm a 21-year-old full stack developer with a passion for crafting
                                responsive, user-friendly web applications, specializing in frontend
                                technologies.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                            <div className="text-white">
                                <Button
                                    onClick={() => scrollToSection("work")}
                                    icon={BookOpenText}
                                    containerClassName="bg-[#253575] hover:bg-[#162561]"
                                    OuterContainerClassName="bg-gradient-to-b from-[#253575] to-[#162561]"
                                >
                                    View My Work
                                </Button>
                            </div>
                            <div className="flex space-x-3 sm:space-x-4">
                                <a
                                    href="https://github.com/VrajVyas11"
                                    className={`w-10 h-10 sm:w-12 sm:h-12 ${darkMode
                                        ? "bg-gray-300 border-gray-600 hover:bg-gray-400 text-black"
                                        : "bg-gray-900 border-gray-600 hover:bg-gray-600 text-gray-300"
                                        }  rounded-full flex items-center justify-center shadow-sm border  transition-colors transform `}
                                >
                                    <Github className="h-4 w-4 sm:h-5 sm:w-5 " />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vraj-vyas"
                                    className={`w-10 h-10 sm:w-12 sm:h-12 ${darkMode
                                        ? "bg-gray-300 border-gray-600 hover:bg-gray-400 text-black"
                                        : "bg-gray-900 border-gray-600 hover:bg-gray-600 text-gray-300"
                                        }  rounded-full flex items-center justify-center shadow-sm border  transition-colors transform `}
                                >
                                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 " />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative col-span-12 lg:col-span-5 order-1 lg:order-2">
                        {/* Hero Image with spinning border */}
                        <div
                            className={`relative z-20 -mt-12 rounded-full transform w-full animate-subtle-bounce duration-300 h-fit hover:-translate-y-1 flex justify-center lg:justify-end items-center transition-all ${darkMode ? "" : ""
                                }`}
                        >
                            <div className="spinning-border-container">
                                <img
                                    src="/hero.png"
                                    className={`w-[280px] sm:w-[380px] md:w-[480px] ${darkMode ? "bg-[#03050e]" : "bg-gray-200 backdrop-blur-md"
                                        } rounded-full transform scale-x-[-1] h-auto relative z-10`}
                                    style={{
                                        filter: darkMode
                                            ? ""
                                            : "drop-shadow(0 0 10px rgba(14, 165, 233, 0.4))",
                                    }}
                                    alt="Hero"
                                />
                            </div>
                        </div>

                        {/* Floating Code Icon */}
                        <div
                            className={`absolute z-10 h-12 w-12 sm:h-16 sm:w-16 -bottom-6 sm:-bottom-10 duration-1000 -right-0 sm:-right-0 rounded-full animate-bounce flex justify-center items-center ${darkMode ? "bg-gray-700/40" : "bg-gray-500/20"
                                }`}
                        >
                            <Code
                                className={`h-5 w-5 sm:h-6 sm:w-6 ${darkMode ? "text-gray-300" : ""
                                    }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown
                    className={darkMode ? "text-gray-500" : "text-gray-400"}
                />
            </div>
        </section>
    );
};

export default AnimatedHeroSection