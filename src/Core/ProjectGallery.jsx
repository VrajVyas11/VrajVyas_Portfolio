import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import projects from "../constants/projects";
import useInView from "../hooks/useInView";

const ProjectGallery = ({ darkMode = true }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (!selectedProject) return;
    const images = selectedProject.image.split(",");
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    const images = selectedProject.image.split(",");
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="projects"
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        darkMode ? "bg-[#03050e] text-gray-300" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mt-5 md:mt-0 mb-7 md:mb-12">
        <h2
          className={`text-4xl md:text-6xl flex flex-row justify-center items-center gap-4 font-extrabold tracking-tight mb-4 leading-tight ${
            darkMode
              ? "bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"
              : "text-gray-900"
          }`}
        >
          <img
            className="mt-2 w-10 h-10 sm:w-20 sm:h-20"
            src={`https://img.icons8.com/?size=100&id=FVDBGC3QPi3J&format=png&color=${
              darkMode ? "ffffff" : "000000"
            }`}
            alt="Projects Icon"
          />{" "}
          My Projects
        </h2>
        <p
          className={`max-w-3xl mx-auto text-lg md:text-xl font-light italic ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          A curated showcase of my work — elegant, powerful, and thoughtfully
          crafted.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length === 0 ? (
          <p className="col-span-full text-center text-lg text-gray-500">
            No projects found. Try adjusting your filters or search.
          </p>
        ) : (
          projects.map((project) => {            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [ref, inView] = useInView();
            const images = project.image.split(",");

            return (
              <div
                ref={ref}
                key={project.title}
                tabIndex={0}
                role="button"
                onClick={() => openModal(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openModal(project);
                }}
                className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-700 hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gray-500 ${
                  darkMode
                    ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
                    : "bg-white border border-gray-300"
                } ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Project Image */}
                <img
                  src={
                    images[0] ||
                    `https://img.icons8.com/?size=1300&id=PLJWnvM1vQLJ&format=png&color=${
                      darkMode ? "ffffff" : "000000"
                    }`
                  }
                  alt={`${project.title} screenshot`}
                  className="w-full h-56 object-cover rounded-t-xl"
                  loading="lazy"
                />

                {/* Overlay with details on hover */}
                <div
                  className={`absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 rounded-b-xl`}
                >
                  <div>
                    {project.featured && (
                      <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-white text-black rounded-full select-none">
                        Featured
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p
                      className="text-sm mb-4 line-clamp-4 text-gray-300"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-0">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-5 py-2 border rounded-md font-semibold transition-colors duration-300 border-white text-white hover:bg-white hover:text-black"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-5 py-2 border rounded-md font-semibold transition-colors duration-300 border-white text-white hover:bg-white hover:text-black"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          onClick={closeModal}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl bg-gray-900 text-gray-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 id="modal-title" className="text-3xl font-extrabold">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {/* Image Carousel */}
              <div className="relative mb-6">
                {selectedProject.image.includes(",") ? (
                  <>
                    <img
                      src={selectedProject.image.split(",")[currentImageIndex]}
                      alt={`${selectedProject.title} screenshot ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-64 object-cover rounded-lg"
                      loading="lazy"
                    />
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} screenshot`}
                    className="w-full h-64 object-cover rounded-lg"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Description */}
              <p className="text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-900/50 text-blue-300 px-4 py-1 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-6">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProjectGallery;