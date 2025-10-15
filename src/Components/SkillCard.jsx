
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
            className={`group relative rounded-2xl p-4 sm:p-6 shadow-lg border transition-all duration-500 transform ${isDark
                ? "bg-[#0a0f1e]/60 border-cyan-500/20 hover:border-cyan-500/50"
                : "bg-white/80 border-blue-200 hover:border-blue-400"
                }${inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
       hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm`}
        >
            <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark
                    ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
                    : "bg-gradient-to-br from-blue-100/50 to-cyan-100/50"
                    }`}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-4">
                    <img
                        src={titleIconError ? fallbackIcon : icon}
                        alt={`${title} icon`}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-500"
                        style={isDark ? { filter: "invert(1) brightness(2) saturate(0)" } : {}}
                        onError={handleTitleIconError}
                    />
                </div>

                <h3 className={`text-lg sm:text-xl font-bold mb-4 ${isDark ? "text-cyan-100" : "text-gray-900"
                    }`}>
                    {title}
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${isDark
                                ? "bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20"
                                : "bg-blue-50 border border-blue-200 hover:bg-blue-100"
                                }`}
                        >
                            <img
                                src={
                                    skillIconErrors[index]
                                        ? "https://img.icons8.com/ios-filled/50/000000/404.png"
                                        : skill.icon
                                }
                                alt={`${skill.name} icon`}
                                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                                onError={() => handleSkillIconError(index)}
                            />
                            <span className={`text-xs font-medium ${isDark ? "text-cyan-200" : "text-gray-800"
                                }`}>
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