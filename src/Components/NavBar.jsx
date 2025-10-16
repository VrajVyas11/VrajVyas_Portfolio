import { 
  Menu,
  X
} from "lucide-react";

// ===== NAVBAR COMPONENT =====
const NavBar = ({
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
  darkMode,
  setDarkMode,
}) => (
  <>
      
    {isMenuOpen && (
      <div
        className={`md:hidden fixed inset-0 top-12 w-[85%] justify-self-center z-50 rounded-b-[64px] min-h-fit transition-all duration-500 overflow-hidden ${
          darkMode ? "bg-[#0a0f1e]/95 border-[#1e3a8a]" : "bg-[#f0f4ff]/95 border-[#bfdbfe]"
        } border-b-2`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-3">
          {["home", "about", "skills", "education", "work", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left py-3 capitalize transition-all duration-500 text-base font-medium ${
                darkMode
                  ? "text-[#93c5fd] hover:text-[#dbeafe]"
                  : "text-[#3b82f6] hover:text-[#1e40af]"
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    )}
  <nav
    className={`fixed top-0 justify-self-center px-8 rounded-b-full py-3 w-full left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ${
      darkMode
        ? "shadow-[inset_0_-5px_10px_rgba(34,211,238,0.2)] shadow-cyan-400/20 bg-[#0a0f1e]/10 text-[#dbeafe]"
        : "shadow-[0px_3px_0px_rgba(0,0,0,1)] shadow-cyan-400/30 bg-[#f0f4ff]/40 text-[#1e40af]"
    }`}
  >
    <div className="max-w-7xl mx-auto -mt-2 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-14 sm:h-16">
        <div className="text-xl sm:text-2xl font-extrabold flex flex-row justify-center items-center gap-2 sm:gap-3 lg:gap-5 tracking-wide">
          <img
            src="logo.png"
            alt="logo"
            className="rounded-full bg-white border-2 border-cyan-500 backdrop-blur-xl w-10 h-10 sm:w-12 sm:h-12 lg:h-14 lg:w-14"
          />
          <span className="hidden sm:inline">Vraj Vyas</span>
          <span className="sm:hidden">V.J.Vyas</span>
        </div>
        
        <div className="hidden md:flex space-x-4 lg:space-x-10">
          {["home", "about", "skills", "education", "work", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative capitalize transition-all duration-500 text-sm lg:text-lg font-semibold tracking-wide ${
                activeSection === section
                  ? darkMode
                    ? "text-[#dbeafe] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-1 after:bg-[#3b82f6] after:rounded-full"
                    : "text-[#1e40af] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-1 after:bg-[#3b82f6] after:rounded-full"
                  : darkMode
                    ? "text-[#93c5fd] hover:text-[#dbeafe]"
                    : "text-[#3b82f6] hover:text-[#1e40af]"
              }`}
            >
              {section}
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-5">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className={`p-2 rounded-full transition-all duration-500 shadow-md ${
              darkMode
                ? "bg-[#1e3a8a]/60 hover:bg-[#3b82f6]/60 text-[#dbeafe]"
                : "bg-[#bfdbfe]/60 hover:bg-[#3b82f6]/60 text-[#1e40af]"
            }`}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${darkMode ? "text-[#dbeafe]" : "text-[#1e40af]"}`}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>
    </div>
  </nav>
  </>
);

export default NavBar