
import { useState } from "react";

import useInView from "../hooks/useInView";

const SkillCard = ({ title, skills, icon, fallbackIcon, isDark = true }) => {
    const [titleIconError, setTitleIconError] = useState(false);
    const [skillIconErrors, setSkillIconErrors] = useState({});
    const [ref, inView] = useInView();

    const handleTitleIconError = () => {
        if (!titleIconError) setTitleIconError(true);
    };

    const handleSkillIconError = (index) => {
        if (!skillIconErrors[index]) {
            setSkillIconErrors((prev) => ({ ...prev, [index]: true }));
        }
    };

    return (
        <div
            ref={ref}
            className={`group relative rounded-2xl p-4 sm:p-6 md:p-8 px-3 shadow-md border transition-all duration-700 transform min-h-[300px] ${isDark
                    ? "bg-gray-950 border-gray-700"
                    : "bg-white border-gray-100"
                } ${inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } hover:shadow-2xl hover:-translate-y-3 animate-fade-in`}
        >
            <div
                className={`absolute inset-0 bg-gradient-to-r ${isDark ? "from-gray-700/30 to-gray-900/30" : "from-gray-100/30 to-gray-200/30"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl backdrop-blur-sm`}
            />
            <div className="relative z-10 flex flex-col items-center text-center">
                <img
                    src={titleIconError ? fallbackIcon : icon}
                    alt={`${title} icon`}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 saturate-0 brightness-200 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                    style={isDark ? { filter: "invert(1) brightness(2) saturate(0)" } : {}}
                    onError={handleTitleIconError}
                />
                <h3 className={`text-lg sm:text-xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {title}
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`flex items-center space-x-2 p-1 sm:p-2 rounded-lg transition-all duration-300 backdrop-blur-sm ${isDark
                                    ? "bg-white/5 border border-gray-700"
                                    : "bg-white/90 hover:bg-gray-200/90 border border-gray-100"
                                }`}
                        >
                            <img
                                src={
                                    skillIconErrors[index]
                                        ? "https://img.icons8.com/ios-filled/50/000000/404.png"
                                        : skill.icon
                                }
                                alt={`${skill.name} icon`}
                                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                                onError={() => handleSkillIconError(index)}
                            />
                            <span className={`text-xs font-medium ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillCard