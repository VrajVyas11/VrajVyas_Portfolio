// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import AnimatedHeroSection from "../Components/AnimatedHeroSection";
import NavBar from "../Components/NavBar";
import SkillCard from "../Components/SkillCard";
import EducationCard from "../Components/EducationCard";
import AboutSection from "../Components/AboutSection";
import ContactMe from "../Components/ContactMe";
import Footer from "../Components/Footer";
import ProjectGallery from "./ProjectGallery"; // path used in earlier code
import ProjectCard from "../Components/ProjectCard";
import useGithubProjects from "../hooks/useGithubProjects";
import skillsData from "../constants/Skills";
import Education, { Years } from "../constants/Education";
import { ArrowBigUpDash, Sparkles } from "lucide-react";

const Home = () => {
  const { projects } = useGithubProjects();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showProjectGallery, setShowProjectGallery] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };
  // const closeProjectModal = () => {
  //   setSelectedProject(null);
  //   document.body.style.overflow = "unset";
  // };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "education", "work", "contact"];
      const scrollPosition = window.scrollY + 120;
      setShowScrollTop(window.scrollY > 300);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setShowProjectGallery(false);
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewAllProjects = () => {
    setShowProjectGallery(true);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // small loading/error states handled in ProjectGallery, but show spinner for hero-to-project flow
  return (
    <div className={`min-h-screen font-sans transition-all ${darkMode ? "bg-[#03050e] text-gray-300" : "bg-gray-100 text-black"}`}>
      <NavBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onViewAllProjects={handleViewAllProjects}
      />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 ${darkMode ? "opacity-20" : "opacity-10"}`}
          style={{
            backgroundImage: `linear-gradient(${
              darkMode ? "#1e3a8a" : "#3b82f6"
            } 1px, transparent 1px), linear-gradient(90deg, ${
              darkMode ? "#1e3a8a" : "#3b82f6"
            } 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>
      {!showProjectGallery ? (
        <>
          <section id="home">
            <AnimatedHeroSection darkMode={darkMode} />
          </section>

          <section id="about">
            <AboutSection darkMode={darkMode} />
          </section>

          <section id="skills" className={`py-12 ${darkMode ? "text-gray-300" : "text-gray-900 bg-gray-100"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 backdrop-blur-sm mb-6 ${darkMode
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                : "bg-blue-500/10 border-blue-500/30 text-blue-600"
              }`}
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide">What i use and Know</span>
          </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 flex items-center justify-center gap-3">
                  <img src={`https://img.icons8.com/?size=64&id=wWh3KNXLFm0y&format=png&color=${darkMode ? "ffffff" : "000000"}`} alt="skills" className="w-10 h-10" />
                  Skills & Technologies
                </h2>
                <p className="text-lg max-w-3xl mx-auto">My toolkit for building modern, scalable, and user-friendly applications</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillsData.map((cat, i) => (
                  <SkillCard key={i} icon={cat.icon} title={cat.title} skills={cat.skills} fallbackIcon={cat.icon} isDark={darkMode} />
                ))}
              </div>
            </div>
          </section>

          <section id="education" className={`py-12 ${darkMode ? "bg-[#03050e]/90 text-white" : "bg-white text-gray-900"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                                          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 backdrop-blur-sm mb-6 ${darkMode
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                : "bg-blue-500/10 border-blue-500/30 text-blue-600"
              }`}
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide">What i studied till now</span>
          </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 flex items-center justify-center gap-3">
                  <img src={`https://img.icons8.com/?size=64&id=11225&format=png&color=${darkMode ? "ffffff" : "000000"}`} alt="education" className="w-10 h-10" />
                  My Education
                </h2>
                <p>From 10th Standard to MCA — a continuous journey of learning.</p>
              </div>

              <div className="w-full relative flex flex-col md:flex-row-reverse">
                <div className="relative flex-1 space-y-6">
                  {Education.map((edu, idx) => (
                    <div key={idx} className="relative flex items-center group">
                      <div className="flex-1 ml-12">
                        <EducationCard degree={edu.degree} image={edu.image} institution={edu.institution} year={edu.year} details={edu.details} darkMode={darkMode} />
                      </div>
                      <div className="absolute left-0 md:left-[30px] w-3 h-3 bg-gray-900 rounded-full border-2 border-gray-300 shadow-md group-hover:bg-gray-700 transition-all" />
                    </div>
                  ))}
                </div>

                <div className="relative md:flex hidden justify-center items-center w-16 flex-shrink-0">
                  <div className={`inset-0 flex justify-center items-center absolute -mt-7 border-solid h-16 w-16  rounded-full border-y-8 z-10 ${darkMode?"border-gray-600":"border-gray-400"}   `} >
                    <div className={`h-5 w-5 rounded-full  shadow-[0_0_10px_rgba(6,182,212,1)]  shadow-sky-500 ${darkMode?"bg-blue-200 ":"bg-blue-400 "} `}/>
                    </div>
    <div className={`bottom-0 flex justify-center items-center absolute -mb-7 border-solid h-16 w-16  rounded-full border-y-8 z-10 ${darkMode?"border-gray-600":"border-gray-400"}   `} >
                    <div className={`h-5 w-5 rounded-full  shadow-[0_0_10px_rgba(6,182,212,1)]  shadow-sky-500 ${darkMode?"bg-blue-200 ":"bg-blue-400 "} `}/>
                    </div>                  <div className={`absolute w-0.5 h-full ${darkMode ? "bg-gradient-to-b from-gray-400/50 to-gray-600/50" : "bg-gradient-to-b from-gray-600/50 to-gray-800/50"}`} />
                  {Years.map((y, i) => (
                    <div key={i} className={`absolute ${y.offset} whitespace-nowrap text-sm font-semibold text-gray-900 transform -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full`}>
                      {y.year}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="work" className={`py-12 ${darkMode ? "bg-[#03050e]/90 text-white" : "bg-white text-gray-900"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 flex items-center justify-center gap-3">
                  <img src={`https://img.icons8.com/?size=80&id=58808&format=png&color=${darkMode ? "ffffff" : "000000"}`} alt="projects" className="w-10 h-10" />
                  Featured Projects
                </h2>
                <p className="text-base sm:text-lg max-w-2xl mx-auto">A selection of my GitHub projects.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.slice(0, 6).map((p) => (
                  <ProjectCard key={p.full_name} projectData={p} onViewDetails={openProjectModal} darkMode={darkMode} />
                ))}
              </div>

              <div className="flex mt-8">
                <button onClick={handleViewAllProjects} className="mx-auto px-8 py-3 rounded-xl bg-gray-600/20 border border-gray-500/30 hover:scale-102 transition-transform">
                  View All
                </button>
              </div>
            </div>
          </section>

          <section id="contact">
            <ContactMe darkMode={darkMode} />
          </section>

          <Footer darkMode={darkMode} scrollToSection={scrollToSection} />
        </>
      ) : (
        <ProjectGallery darkMode={darkMode} />
      )}

      {selectedProject && (
        // The ProjectGallery component already provides a modal for its own selected item.
        // If you want a single shared modal here, you can render it — currently we rely on ProjectGallery/ProjectCard to open modals.
        <></>
      )}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg ${darkMode ? "bg-gray-800/50 text-white" : "bg-gray-300 text-black"}`}
          style={{ zIndex: 1000 }}
        >
          <ArrowBigUpDash />
        </button>
      )}
    </div>
  );
};

export default Home;