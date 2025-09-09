import {
    Github,
    ExternalLink,
    Code,
} from "lucide-react";

import useInView from "../hooks/useInView";

const ProjectCard = ({
    title,
    description,
    tags,
    link,
    githubLink,
    image,
    darkMode = true,
}) => {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={`group relative rounded-xl overflow-hidden shadow-sm border transition-all duration-700 transform h-[250px] ${darkMode
                ? "bg-gray-700 border-gray-800"
                : "bg-white border-gray-100"
                } ${inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } hover:shadow-lg hover:-translate-y-2`}
        >
            {/* Image or Placeholder */}
            <div className="relative w-full h-full">
                {image ? (
                    title === "easyocr-js" || title=="AI_Calories_Tracker" ? (
                        <div className="flex flex-row h-full">
                            <img
                                src={image.split(",")[0]}
                                alt={`${title} image 1`}
                                className="h-full w-1/2 object-cover transition-all duration-500 group-hover:brightness-50 group-hover:scale-105"
                            />
                            <img
                                src={image.split(",")[1]}
                                alt={`${title} image 2`}
                                className="h-full w-1/2 object-cover transition-all duration-500 group-hover:brightness-50 group-hover:scale-105"
                            />
                        </div>
                    ) : (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-center transition-all duration-500 group-hover:brightness-50 group-hover:scale-105"
                        />
                    )
                ) : (
                    <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                        <Code className="h-16 w-16 text-gray-400 group-hover:text-gray-600 transition-colors duration-500" />
                    </div>
                )}
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow-md">{title}</h3>
                </div>
            </div>
            {/* Hover Content */}
            <div
                style={{ scrollbarWidth: "none" }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 sm:p-6 overflow-auto"
            >
                <div className="space-y-2 sm:space-y-4 text-white">
                    <p
                        style={{ scrollbarWidth: "none" }}
                        className="text-xs sm:text-sm leading-relaxed max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-2"
                    >
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white/10 text-white rounded-full text-xs font-medium backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-row justify-between items-center gap-2 sm:gap-4">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-white hover:text-gray-200 transition-colors text-xs sm:text-sm"
                        >
                            <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span>Project's GitHub</span>
                        </a>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-white hover:text-gray-200 transition-colors text-xs sm:text-sm"
                        >
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                            <span>View</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard