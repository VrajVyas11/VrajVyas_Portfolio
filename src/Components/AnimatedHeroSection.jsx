/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
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


    useEffect(() => {
        const roles = ["Tech Enthusiast", "DevOps Engineer", "Frontend Dev", "Backend Dev", "Mobile Dev"];

        const currentRoleText = roles[currentRole];

        const timeout = setTimeout(() => {
            if (!isDeleting && displayedText === currentRoleText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
            } else if (isDeleting) {
                setDisplayedText(currentRoleText.substring(0, displayedText.length - 1));
            } else {
                setDisplayedText(currentRoleText.substring(0, displayedText.length + 1));
            }
        }, isDeleting ? 60 : 120);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentRole]);

    const scrollToSection = (sectionId) => {
        console.log(`Scrolling to ${sectionId}`);
    };

    return (
        <section
            id="home"
            className={`min-h-screen overflow-hidden flex items-center transition-all duration-500 ${darkMode ? "bg-transparent text-[#bfdbfe]" : "bg-[#eff6ff]/50 text-[#1e40af]"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-32 pb-10 w-full">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 sm:gap-16 items-center">
                    <div className="space-y-8 relative z-40 sm:space-y-10 col-span-12 lg:col-span-7 order-2 lg:order-1 mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8">
                            <div
                                className={`text-sm sm:text-lg w-full font-extrabold leading-tight tracking-[0.4em] uppercase ${darkMode ? "text-[#dbeafe]" : "text-[#1e40af]"}`}
                            >
                                i'm{" "}
                                <span
                                    className={`${darkMode ? "text-amber-400" : "text-[#06b6d4]"}`}
                                    style={darkMode ? {
                                        color: "transparent",
                                        WebkitTextStrokeWidth: "1.5px",
                                        WebkitTextStrokeColor: "#fbbf24",
                                    } : {}}
                                >
                                    Vraj Vyas
                                </span>
                            </div>
                            <div
                                className={`mb-4 sm:mb-8 w-full text-4xl sm:text-5xl md:text-6xl font-black tracking-tight ${darkMode ? "text-[#dbeafe]" : "text-[#1e40af]"}`}
                            >
                                I'm a{" "}
                                <span
                                    className={`inline-block transition-all duration-300 capitalize ${darkMode ? "text-amber-400" : "text-[#06b6d4]"}`}
                                >
                                    {displayedText}
                                    <span
                                        className={`inline-block w-1 h-14 sm:h-20 md:h-16 ml-1 ${darkMode ? "bg-[#22d3ee]" : "bg-[#06b6d4]"} animate-pulse`}
                                    />
                                </span>
                            </div>
                            <p
                                className={`w-full mb-10 sm:mb-16 leading-relaxed text-base sm:text-xl md:text-2xl transition-all duration-500 ${darkMode ? "text-[#93c5fd] opacity-85" : "text-[#1d4ed8] opacity-85"}`}
                            >
                                A 21-year-old full stack developer passionate about creating responsive, intuitive web apps, excelling in frontend innovation.
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-4 sm:gap-6">
                            <div>
                                <Button
                                    onClick={() => scrollToSection("work")}
                                    icon={BookOpenText}
                                    containerClassName={`${darkMode ? "bg-[#1e3a8a] hover:bg-[#3b82f6]" : "bg-[#3b82f6] hover:bg-[#1e40af]"} text-white`}
                                    OuterContainerClassName="border-0 shadow-lg"
                                >
                                    Explore My Portfolio
                                </Button>
                            </div>
                            <div className="flex space-x-4 sm:space-x-6">
                                <a
                                    href="https://github.com/VrajVyas11"
                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-md border-2 transition-all duration-300 hover:scale-110 ${darkMode
                                            ? "bg-[#0a0f1e] border-[#1e3a8a] hover:border-[#3b82f6] text-[#bfdbfe]"
                                            : "bg-[#f0f4ff] border-[#bfdbfe] hover:border-[#1e40af] text-[#1e40af]"
                                        }`}
                                >
                                    <Github className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vraj-vyas"
                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-md border-2 transition-all duration-300 hover:scale-110 ${darkMode
                                            ? "bg-[#0a0f1e] border-[#1e3a8a] hover:border-[#3b82f6] text-[#bfdbfe]"
                                            : "bg-[#f0f4ff] border-[#bfdbfe] hover:border-[#1e40af] text-[#1e40af]"
                                        }`}
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-20 top-[40%] left-1/2 opacity-70 md:top-auto md:left-auto md:opacity-100 md:relative col-span-12 lg:col-span-5 order-1 lg:order-2">
                        <div
                            className={`relative z-20 -mt-16 rounded-3xl transform w-full h-fit hover:-translate-y-2 flex justify-center lg:justify-end items-center transition-all duration-500`}
                        >
                            <div className="relative  rounded-3xl shadow-2xl ">
                                <div className={`absolute inset-0 rounded-full ${darkMode ? "bg-[#22d3ee10]" : "bg-[#06b5d417]"} animate-ping`}></div>
                                <img
                                    src="/hero.png"
                                    className={`w-[220px] sm:w-[420px] md:w-[520px] rounded-full transform duration-500 scale-x-[-1] h-auto relative z-10 ${darkMode ? "bg-[#0a0f1e]" : "bg-[#f0f4ff]"
                                        }`}
                                    style={{
                                        filter: darkMode ? "drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))" : "drop-shadow(0 0 15px rgba(30, 64, 175, 0.3))",
                                    }}
                                    alt="Hero"
                                />
                            </div>
                        </div>

                        <div
                            className={`absolute z-10 h-14 w-14 sm:h-18 sm:w-18 -bottom-8 sm:-bottom-12 duration-1000 -right-2 sm:-right-2 rounded-full animate-pulse flex justify-center items-center shadow-lg ${darkMode ? "bg-[#1e3a8a]/60" : "bg-[#3b82f6]/40"
                                }`}
                        >
                            <Code
                                className={`h-7 w-7 ${darkMode ? "text-[#dbeafe]" : "text-[#eff6ff]"}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown
                    className={`${darkMode ? "text-amber-400" : "text-[#3b82f6]"} h-8 w-8`}
                />
            </div>
        </section>
    );
};

export default AnimatedHeroSection;