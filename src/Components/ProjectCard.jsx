// src/components/ProjectCard.jsx
import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import useInView from "../hooks/useInView"; // keep your hook

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
      className={`group rounded-xl overflow-hidden shadow-md border cursor-pointer transition-all duration-500 transform h-full  flex flex-col ${
        darkMode
          ? "bg-black border-blue-900/50 hover:border-blue-700"
          : "bg-white border-gray-200"
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="h-40 sm:h-44 w-full relative">
        {images.length > 1 ? (
          <div className="grid grid-cols-2 h-full w-full">
            <img
              src={images[0]}
              alt={`${title} screenshot`}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/default_project.png";
              }}
            />
            <img
              src={images[1]}
              alt={`${title} screenshot`}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/default_project.png";
              }}
            />
          </div>
        ) : (
          <img
            src={images[0]}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/default_project.png";
            }}
          />
        )}
        <div className="absolute left-3 top-3 bg-black/60 border border-blue-800 px-3 py-1 rounded-full text-xs text-blue-100">
          {language || "N/A"}
        </div>
        <div className="absolute right-3 bottom-3 bg-black/60 px-3 py-1 rounded-full text-xs text-yellow-100 border border-yellow-400/30">
          {offline ? "Offline" : liveLink ? "Live" : "Repo"}
        </div>
      </div>

      <div className="p-4 flex-1 relative z-40 bg-black min-h-fit h-full flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
            {title}
          </h3>
          <p className="text-sm text-blue-100 mt-2 line-clamp-3">
            {description || "No description available."}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {(tags || []).slice(0, 4).map((t, i) => (
              <span
                key={i}
                className="text-[10px] bg-gray-800/60 text-blue-100 px-2 py-1 rounded-full border border-gray-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {githubLink ? (
              <a
                href={githubLink}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-blue-800 hover:bg-blue-700 text-blue-50 rounded-md text-xs"
                aria-label={`Open ${title} on GitHub`}
              >
                <Github className="w-3 h-3" />
                <span className="font-medium text-xs">Code</span>
              </a>
            ) : (
              <div className="flex items-center gap-1 px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-xs">
                <Code className="w-3 h-3" />
                <span className="text-xs">No Repo</span>
              </div>
            )}

            {liveLink && (
              <a
                href={liveLink}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-yellow-400 hover:bg-yellow-300 text-black rounded-md text-xs"
                aria-label={`Open live demo for ${title}`}
              >
                <ExternalLink className="w-3 h-3" />
                <span className="font-medium text-xs">Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;