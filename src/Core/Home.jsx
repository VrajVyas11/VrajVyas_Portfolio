import { useState, useEffect } from "react";

import skillsData from "../constants/Skills";
import AnimatedHeroSection from "../Components/AnimatedHeroSection";
import NavBar from "../Components/NavBar";
import SkillCard from "../Components/SkillCard";
import ProjectCard from "../Components/ProjectCard";
import EducationCard from "../Components/EducationCard";
import AboutSection from "../Components/AboutSection";
import projects from "../constants/projects";
import Education, { Years } from "../constants/Education";
import ContactMe from "../Components/ContactMe";
import Footer from "../Components/Footer";
import ProjectGallery from "./ProjectGallery";
import { ArrowBigUpDash } from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // default dark mode enabled
  const [showProjectGallery, setShowProjectGallery] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "education", "work", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Show/hide scroll to top button after 300px scroll
      setShowScrollTop(window.scrollY > 300);

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section and hide ProjectGallery if visible
  const scrollToSection = (sectionId) => {
    setShowProjectGallery(false); // Hide ProjectGallery on navbar click
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Show ProjectGallery and hide other sections
  const handleViewAllProjects = () => {
    setShowProjectGallery(true);
    setIsMenuOpen(false);
    // Scroll to top when showing ProjectGallery
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to top button handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        lineHeight: "1.5",
        WebkitTextSizeAdjust: "100%",
        fontFamily: "system-ui, sans-serif",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
        MozOsxFontSmoothing: "grayscale",
        touchAction: "manipulation",
        backgroundImage:
          "radial-gradient(#2d2d2d 0.8px, transparent 0), radial-gradient(#373636 0.5px, transparent 0)",
        backgroundPosition: "0 0, 25px 25px",
        backgroundSize: "50px 50px",
      }}
      className={`body-wrap m-0 sm:min-h-screen min-h-screen font-sans text-body transition-all duration-500 leading-6 text-base box-border -webkit-font-smoothing:antialiased flex flex-col bg-fixed ${
        darkMode ? "bg-[#03050e] text-gray-300" : "text-black bg-gray-100"
      }`}
    >
      <NavBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {!showProjectGallery ? (
        <>
          {/* Home Section */}
          <AnimatedHeroSection darkMode={darkMode} />

          <AboutSection darkMode={darkMode} />

          {/* Skills Section */}
          <section
            id="skills"
            className={`py-12 sm:py-20 transition-all duration-500 ${
              darkMode ? "text-gray-300" : "bg-gray-200/50 text-gray-900"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16 flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 flex flex-row justify-center items-center gap-3 sm:gap-4">
                  <img
                    src={`https://img.icons8.com/?size=64&id=wWh3KNXLFm0y&format=png&color=${
                      darkMode ? "ffffff" : "000000"
                    }`}
                    alt="code "
                    className="w-10 h-10 sm:w-14 sm:h-14"
                  />
                  Skills & Technologies
                </h2>
                <p className="text-lg sm:text-xl max-w-3xl mx-auto">
                  My toolkit for building modern, scalable, and user-friendly
                  applications
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {skillsData.map((category, index) => (
                  <SkillCard
                    key={index}
                    icon={category.icon}
                    title={category.title}
                    skills={category.skills}
                    fallbackIcon={category.icon}
                    isDark={darkMode}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section
            id="education"
            className={`py-12 sm:py-20 transition-all duration-500 ${
              darkMode
                ? "bg-[#03050e]/90 text-white"
                : "bg-white/50 text-gray-900"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 relative">
                <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 flex flex-row justify-center items-center gap-3 sm:gap-4">
                    <img
                      src={`https://img.icons8.com/?size=64&id=11225&format=png&color=${
                        darkMode ? "ffffff" : "000000"
                      }`}
                      alt="education "
                      className="w-10 h-10 sm:w-14 sm:h-14"
                    />
                    My Education
                  </h2>
                  <p className="text-base sm:text-lg max-w-2xl mx-auto">
                    From 10th Standard to MCA, a thrilling ride of learning and
                    coding!
                  </p>
                </div>
              </div>
              <div className="w-full relative flex flex-col md:flex-row-reverse">
                {/* Timeline Spine */}
                <div className="relative flex-1 space-y-6 sm:space-y-8 md:pr-8 lg:pr-12">
                  {Education.map((edu, index) => (
                    <div key={index} className="relative flex items-center group">
                      {/* Education Card */}
                      <div className="flex-1 ml-12 sm:ml-16">
                        <EducationCard
                          degree={edu.degree}
                          image={edu.image}
                          institution={edu.institution}
                          year={edu.year}
                          details={edu.details}
                          darkMode={darkMode}
                        />
                      </div>
                      {/* Timeline Dot */}
                      <div className="absolute left-0 md:left-[30px] w-3 h-3 sm:w-4 sm:h-4 bg-gray-900 rounded-full border-2 border-gray-300 shadow-md group-hover:bg-gray-700 group-hover:scale-125 transition-all duration-300 z-10" />
                    </div>
                  ))}
                </div>
                {/* Timeline Bar with Years */}
                <div className="relative md:flex hidden justify-center items-center w-8 sm:w-12 md:w-16 lg:w-24 flex-shrink-0">
                  <div className="w-12 sm:w-16 md:w-20 inset-0 inset-x-2 absolute border-double border-b-4 sm:border-b-6 md:border-b-8 border-gray-800/50 h-1 backdrop-blur-xl rounded-full" />
                  <div
                    className={`absolute w-0.5 sm:w-1 h-full ${
                      darkMode
                        ? "bg-gradient-to-b from-gray-400/50 to-gray-600/50"
                        : "bg-gradient-to-b from-gray-600/50 to-gray-800/50"
                    } backdrop-blur-xl shadow-sm rounded-full`}
                  />
                  <div className="w-3 h-3 sm:w-4 sm:h-4 inset-y-full -my-0.5 left-[18px] sm:left-[28px] md:left-[38px] inset-x-2 absolute bg-gray-600 backdrop-blur-xl rounded-full" />
                  {Years.map((item, index) => (
                    <div
                      key={index}
                      className={`absolute ${item.offset} whitespace-nowrap min-w-fit w-fit  mx-auto text-sm md:text-base font-semibold text-gray-900 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-200 group-hover:text-gray-700 transition-colors duration-300`}
                    >
                      {item.year}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section
            id="work"
            className={`py-12 sm:py-20 transition-all duration-500 ${
              darkMode
                ? "bg-[#03050e]/90 text-white"
                : "bg-white/50 text-gray-900"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 relative">
                <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 flex flex-row justify-center items-center gap-3 sm:gap-4">
                    <img
                      src={`https://img.icons8.com/?size=80&id=58808&format=png&color=${
                        darkMode ? "ffffff" : "000000"
                      }`}
                      alt="education "
                      className="w-10 h-10 sm:w-14 sm:h-14"
                    />
                    Featured Projects
                  </h2>
                  <p className="text-base sm:text-lg max-w-2xl mx-auto">
                    A selection of my GitHub projects showcasing my development
                    skills
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.slice(0, 6).map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    tags={project.tags.slice(0, 4)}
                    githubLink={project.githubLink}
                    link={project.liveLink}
                    image={project.image}
                    darkMode={darkMode}
                  />
                ))}
              </div>
              <div className="flex w-full align-middle">
                <button
                  onClick={handleViewAllProjects}
                  className="bg-gray-600/20 backdrop-blur-lg mt-12 rounded-xl border border-gray-500/30 hover:scale-[102%] transition-transform hover:border-2 transform duration-300 mx-auto w-fit p-4 px-12 relative"
                >
                  View All
                </button>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <ContactMe darkMode={darkMode} />

          {/* Footer */}
          <Footer darkMode={darkMode} scrollToSection={scrollToSection} />
        </>
      ) : (
        <ProjectGallery darkMode={darkMode} />
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed bottom-8 right-8 p-5 rounded-full  shadow-lg transition-all duration-700 ${darkMode?"hover:bg-gray-700/50 bg-gray-800/50 fill-white text-white":"hover:bg-gray-400 bg-gray-300 fill-black text-black"}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ zIndex: 1000 }}
        >
          <ArrowBigUpDash className={`size-7 md:size-9 ${darkMode?" fill-white text-white":" fill-black text-black"}`}/>
        </button>
      )}
    </div>
  );
};

export default Portfolio;