/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
    Github,
    Linkedin,
    Mail,
    ArrowRight,
    Sparkles,
    Code2,
    Terminal,
    Braces,
} from "lucide-react";

const Button = ({ onClick, icon: Icon, children, className = "" }) => (
    <button
        onClick={onClick}
        className={`group relative px-8 py-4 rounded-2xl font-semibold text-base tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-3 ${className}`}
    >
        {Icon && <Icon className="w-5 h-5" />}
        {children}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
);


const AnimatedHeroSection = ({ darkMode }) => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const roles = ["Full Stack Developer", "DevOps Engineer", "UI/UX Enthusiast", "Problem Solver"];

        const currentRoleText = roles[currentRole];

        const timeout = setTimeout(() => {
            if (!isDeleting && displayedText === currentRoleText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
            } else if (isDeleting) {
                setDisplayedText(currentRoleText.substring(0, displayedText.length - 1));
            } else {
                setDisplayedText(currentRoleText.substring(0, displayedText.length + 1));
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentRole]);


    const floatingIcons = [
        { Icon: Code2, delay: 0, duration: 20 },
        { Icon: Terminal, delay: 5, duration: 25 },
        { Icon: Braces, delay: 10, duration: 22 },
        { Icon: Sparkles, delay: 15, duration: 18 },
    ];

    return (
        <section
            className={`min-h-screen relative pt-10 flex items-center transition-all duration-700 overflow-hidden `}
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">


                {/* Floating Icons */}
                {floatingIcons.map(({ Icon, delay, duration }, index) => (
                    <div
                        key={index}
                        className={`absolute ${darkMode ? "text-cyan-500/20" : "text-blue-500/20"}`}
                        style={{
                            left: `${15 + index * 20}%`,
                            top: `${20 + index * 15}%`,
                            animation: `float ${duration}s ease-in-out infinite`,
                            animationDelay: `${delay}s`,
                        }}
                    >
                        <Icon className="w-12 h-12" />
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-20 relative z-10 w-full">
                <div className="grid lg:grid-cols-10  gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 flex justify-center flex-col sm:items-start items-center  lg:col-span-6">
                        {/* Greeting Badge */}
                        <div
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 backdrop-blur-sm ${darkMode
                                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                                : "bg-blue-500/10 border-blue-500/30 text-blue-600"
                                }`}
                        >
                            <Sparkles className="w-4 h-4 animate-pulse" />
                            <span className="text-sm font-semibold tracking-wide">
                                Available for Opportunities
                            </span>
                        </div>

                        {/* Name */}
                        <div className="space-y-4">
                            <h1
                                className={`text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none ${darkMode ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                Vraj&nbsp;
                                <span
                                    className={`${darkMode ? "text-cyan-400" : "text-blue-600"
                                        }`}
                                >
                                    Vyas
                                </span>
                            </h1>

                            {/* Animated Role */}
                            <div className="flex items-center gap-3 text-2xl lg:text-3xl font-bold">
                                <span>I am</span>
                                <span
                                    className={darkMode ? "text-gray-400" : "text-gray-600"}
                                >
                                    {displayedText}
                                </span>
                                <span
                                    className={`inline-block w-1 h-8 ${darkMode ? "bg-cyan-400" : "bg-blue-600"
                                        } animate-pulse`}
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <p
                            className={`text-lg lg:text-xl leading-relaxed ml-6 sm:ml-0 ${darkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Crafting seamless digital experiences with modern web technologies.
                            Specialized in building scalable applications that merge elegant
                            design with powerful functionality.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <Button
                                onClick={() =>
                                    window.open("/Resume/VrajVyasResume.pdf", "_blank")
                                }
                                className={`${darkMode
                                    ? "bg-cyan-500 hover:bg-cyan-400 text-gray-900"
                                    : "bg-blue-600 hover:bg-blue-700 text-white"
                                    } shadow-lg`}
                            >
                                View Resume
                            </Button>

                            <a
                                href="#contact"
                                className={`group px-8 py-4 rounded-2xl font-semibold text-base tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-3 border-2 ${darkMode
                                    ? "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                                    : "border-blue-600/50 text-blue-600 hover:bg-blue-600/10"
                                    }`}
                            >
                                <Mail className="w-5 h-5" />
                                Get in Touch
                            </a>

                            {/* Social Links */}
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/VrajVyas11"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-110 ${darkMode
                                        ? "bg-gray-900 border-gray-800 hover:border-cyan-500 text-gray-400 hover:text-cyan-400"
                                        : "bg-gray-50 border-gray-200 hover:border-blue-600 text-gray-600 hover:text-blue-600"
                                        }`}
                                >
                                    <Github className="w-6 h-6" />
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        GitHub
                                    </span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/vraj-vyas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-110 ${darkMode
                                        ? "bg-gray-900 border-gray-800 hover:border-cyan-500 text-gray-400 hover:text-cyan-400"
                                        : "bg-gray-50 border-gray-200 hover:border-blue-600 text-gray-600 hover:text-blue-600"
                                        }`}
                                >
                                    <Linkedin className="w-6 h-6" />
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        LinkedIn
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Content - Abstract Illustration */}
                    <div className="relative w-full lg:col-span-4 h-full mt-10 lg:block hidden">
                        <div className="relative w-full  aspect-square max-w-7xl mx-auto">
                            {/* Hero Image */}
                            <img
                                src="/hero.png"
                                className={`w-[280px] p-4 sm:w-[500px] md:w-[680px] lg:w-[750px] rounded-full transform duration-500 scale-x-[-1] h-auto relative z-10`}
                                style={{
                                    filter: darkMode ? "drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))" : "drop-shadow(0 0 20px rgba(30, 64, 175, 0.4))",
                                }}
                                alt="Hero"
                            />

                            {/* Rotating Rings */}
                            <div
                                className={`absolute inset-0 rounded-full border-2 ${darkMode ? "border-cyan-500/30" : "border-blue-500/30"
                                    }`}
                                style={{
                                    animation: "spin 30s linear infinite",
                                }}
                            />
                            <div
                                className={`absolute inset-8 rounded-full border-2 border-dashed ${darkMode ? "border-cyan-500/20" : "border-blue-500/20"
                                    }`}
                                style={{
                                    animation: "spin 20s linear infinite reverse",
                                }}
                            />
                            <div
                                className={`absolute inset-16 rounded-full border-2 ${darkMode ? "border-cyan-500/10" : "border-blue-500/10"
                                    }`}
                                style={{
                                    animation: "spin 40s linear infinite",
                                }}
                            />

                            {/* Center Glow */}
                            <div
                                className={`absolute inset-24 rounded-full ${darkMode
                                    ? "bg-cyan-500/20 shadow-[0_0_120px_rgba(6,182,212,0.3)]"
                                    : "bg-blue-500/20 shadow-[0_0_120px_rgba(59,130,246,0.3)]"
                                    } backdrop-blur-3xl animate-pulse`}
                            />

                            {/* Floating Orbs */}
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`absolute w-5 h-5 rounded-full ${darkMode ? "bg-cyan-400" : "bg-blue-600"
                                        } shadow-lg`}
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        animation: `orbit ${15 + i * 5}s linear infinite`,
                                        animationDelay: `${i * 2}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes orbit {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg) translateX(250px) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(360deg) translateX(250px) rotate(-360deg);
                    }
                }
            `}</style>
        </section>
    );
};

export default AnimatedHeroSection;