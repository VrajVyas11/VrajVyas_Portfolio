// src/components/ProjectCard.jsx
import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import useInView from "../hooks/useInView"; // keep your hook

// ===== PROJECT CARD COMPONENT =====
const ProjectCard = ({ projectData, onViewDetails, darkMode = true }) => {
    const [ref, inView] = useInView();
  const {
    title,
    description,
    image,
    tags = [],
    liveLink,
    githubLink,
    language,
    offline,
  } = projectData || {};

  const images = (image || "/default_project.png").split(",");

  const handleClick = () => {
    if (onViewDetails) onViewDetails(projectData);
  };

  return (
    <div
         ref={ref}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
      className={`group rounded-2xl overflow-hidden shadow-lg border cursor-pointer transition-all duration-500 transform h-full flex flex-col ${
        darkMode
          ? "bg-[#0a0f1e]/80 border-cyan-500/20 hover:border-cyan-500/50"
          : "bg-white border-blue-200 hover:border-blue-400"
      } hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="h-40 sm:h-44 w-full relative overflow-hidden">
        {images.length > 1 ? (
          <div className="grid grid-cols-2 h-full w-full">
            {images.slice(0, 2).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${title} screenshot ${idx + 1}`}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/default_project.png";
                }}
              />
            ))}
          </div>
        ) : (
          <img
            src={images[0]}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/default_project.png";
            }}
          />
        )}
        
        <div className={`absolute left-3 top-3 px-3 py-1 rounded-full text-xs border ${
          darkMode
            ? "bg-black/60 border-cyan-500/50 text-cyan-100"
            : "bg-white/80 border-blue-300 text-blue-900"
        }`}>
          {language || "N/A"}
        </div>
        
        <div className={`absolute right-3 bottom-3 px-3 py-1 rounded-full text-xs border ${
          darkMode
            ? "bg-black/60 border-yellow-400/50 text-yellow-100"
            : "bg-white/80 border-yellow-400 text-yellow-700"
        }`}>
          {offline ? "Offline" : liveLink ? "Live" : "Repo"}
        </div>
      </div>

      <div className={`p-4 flex-1 flex flex-col justify-between ${
        darkMode ? "bg-[#0a0f1e]/90" : "bg-white"
      }`}>
        <div>
          <h3 className={`text-lg sm:text-xl font-bold leading-tight mb-2 ${
            darkMode ? "text-cyan-100" : "text-gray-900"
          }`}>
            {title}
          </h3>
          <p className={`text-sm mt-2 line-clamp-3 ${
            darkMode ? "text-cyan-200/70" : "text-gray-600"
          }`}>
            {description || "No description available."}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className={`text-[10px] px-2 py-1 rounded-full border ${
                  darkMode
                    ? "bg-cyan-500/10 text-cyan-200 border-cyan-500/30"
                    : "bg-blue-50 text-blue-700 border-blue-200"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {githubLink && (
              <a
                href={githubLink}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs transition-colors ${
                  darkMode
                    ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
                aria-label={`Open ${title} on GitHub`}
              >
                <Github className="w-3 h-3" />
                <span className="font-medium">Code</span>
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-yellow-400 hover:bg-yellow-300 text-black rounded-md text-xs transition-colors"
                aria-label={`Open live demo for ${title}`}
              >
                <ExternalLink className="w-3 h-3" />
                <span className="font-medium">Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;