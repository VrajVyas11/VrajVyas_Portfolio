// src/components/ProjectGallery.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, Star, GitFork, CalendarDays } from "lucide-react";
import useGithubProjects from "../hooks/useGithubProjects";
import ProjectCard from "../Components/ProjectCard";

const ProjectGallery = ({ darkMode = true }) => {
  const { projects, loading, error } = useGithubProjects();
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const nextImage = useCallback(() => {
    if (!selected) return;
    const imgs = (selected.image || "/default_project.png").split(",");
    setImageIndex((i) => (i + 1) % imgs.length);
  }, [selected]);

  const prevImage = useCallback(() => {
    if (!selected) return;
    const imgs = (selected.image || "/default_project.png").split(",");
    setImageIndex((i) => (i - 1 + imgs.length) % imgs.length);
  }, [selected]);

  useEffect(() => {
    const onKey = (e) => {
      if (!selected) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextImage, prevImage, selected]);

  const openModal = (project) => {
    setSelected(project);
    setImageIndex(0);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = "unset";
  };

  if (loading) {
    return (
      <section className={`min-h-screen  flex items-center justify-center ${darkMode ? "bg-black text-gray-300" : "bg-gray-100 text-gray-900"}`}>
        <p>Loading projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-black text-red-400" : "bg-gray-100 text-red-600"}`}>
        <div className="text-center">
          <h3 className="text-xl font-bold">Failed to load projects</h3>
          <p className="mt-2">{error.message}</p>
        </div>
      </section>
    );
  }

  return (
   <section
      id="projects"
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 pt-32 transition-colors duration-500 ${
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
            className="mt-2 transform transition-all duration-0 w-10 h-10 sm:w-20 sm:h-20"
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
        <div className="grid max-w-7xl justify-self-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0,21).map((p, idx) => (
            <div key={p.full_name || `${p.title}-${idx}`} className="relative">
              <div className="absolute right-3 top-3 z-10 bg-black/50 text-yellow-300 px-2 py-1 rounded-full text-xs border border-yellow-400/30">
                #{idx + 1}
              </div>
              <ProjectCard
                projectData={p}
                onViewDetails={openModal}
                darkMode={darkMode}
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            onClick={closeModal}
          >
            <div
              className="max-w-4xl w-full bg-gray-900 text-gray-100 rounded-lg overflow-hidden shadow-2xl border border-blue-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gradient-to-r from-blue-900/30 to-black/30">
                <div>
                  <h3 className="text-2xl font-extrabold">{selected.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{selected.full_name}</p>
                </div>
                <div className="flex items-center gap-3">
                  {selected.githubLink && (
                    <a href={selected.githubLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="px-3 py-1 bg-blue-800 text-white rounded-md flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Repo
                    </a>
                  )}
                  {selected.liveLink && (
                    <a href={selected.liveLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="px-3 py-1 bg-yellow-400 text-black rounded-md flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                  <button onClick={closeModal} className="p-2 rounded-md hover:bg-blue-800/30" aria-label="Close">
                    <X />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 max-h-[70vh] overflow-y-auto">
                {/* Carousel */}
                <div className="relative mb-4">
                  {((selected.image || "/default_project.png").split(",") || []).length > 1 ? (
                    <>
                      <img
                        src={(selected.image || "/default_project.png").split(",")[imageIndex]}
                        alt={`${selected.title} screenshot ${imageIndex + 1}`}
                        className="w-full h-64 object-cover rounded-md"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/default_project.png";
                        }}
                      />
                      <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white">
                        <ChevronLeft />
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white">
                        <ChevronRight />
                      </button>
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-2">
                        {(selected.image || "/default_project.png").split(",").map((_, i) => (
                          <button key={i} onClick={(e) => { e.stopPropagation(); setImageIndex(i); }} className={`w-2 h-2 rounded-full ${i === imageIndex ? "bg-yellow-300" : "bg-gray-400/40"}`} aria-label={`Go to image ${i + 1}`} />
                        ))}
                      </div>
                    </>
                  ) : (
                    <img src={selected.image || "/default_project.png"} alt={selected.title} className="w-full h-64 object-cover rounded-md" />
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <p className="text-gray-200 mb-4">{selected.description || "No description available."}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(selected.tags || []).map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-blue-800 text-blue-100 text-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center gap-2 bg-blue-900/20 px-3 py-2 rounded-md">
                        <Star className="w-4 h-4 text-yellow-300" />
                        <div>
                          <div className="text-sm text-gray-300">Stars</div>
                          <div className="font-semibold">{selected.stargazers_count ?? 0}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-900/20 px-3 py-2 rounded-md">
                        <GitFork className="w-4 h-4 text-yellow-300" />
                        <div>
                          <div className="text-sm text-gray-300">Forks</div>
                          <div className="font-semibold">{selected.forks_count ?? 0}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-900/20 px-3 py-2 rounded-md">
                        <CalendarDays className="w-4 h-4 text-yellow-300" />
                        <div>
                          <div className="text-sm text-gray-300">Updated</div>
                          <div className="font-semibold">{selected.updated_at ? new Date(selected.updated_at).toLocaleDateString() : "N/A"}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <aside className="bg-gray-900/60 p-3 rounded-md border border-blue-800">
                    <div className="text-sm text-gray-300 mb-2 font-semibold">Details</div>
                    <div className="text-sm text-gray-200">
                      <div><strong>Repo:</strong> {selected.full_name}</div>
                      <div><strong>Language:</strong> {selected.language || "N/A"}</div>
                      <div><strong>Branch:</strong> {selected.default_branch || "main"}</div>
                      <div className="mt-3">
                        {selected.githubLink && (
                          <a href={selected.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 bg-blue-800 text-white rounded-md">
                            <Github className="w-4 h-4" /> View on GitHub
                          </a>
                        )}
                      </div>
                      {selected.liveLink && (
                        <div className="mt-2">
                          <a href={selected.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 text-black rounded-md">
                            <ExternalLink className="w-4 h-4" /> Open Live
                          </a>
                        </div>
                      )}
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

  );
};

export default ProjectGallery;