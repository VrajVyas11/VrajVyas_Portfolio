import {
    Menu,
    X,
} from "lucide-react";
// Navigation Component with Dark Mode Toggle
const NavBar = ({
    activeSection,
    scrollToSection,
    isMenuOpen,
    setIsMenuOpen,
    darkMode,
    setDarkMode,
}) => (
    <nav
        className={`fixed top-0 py-2 left-0 right-0 z-50 backdrop-blur-sm border-b shadow-md transition-all duration-500 ${darkMode
                ? "border-gray-800 shadow-black bg-[#03050e]/30 text-white"
                : "border-sky-950 shadow-gray-600/60 bg-white/50 text-black"
            }`}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="text-xl sm:text-3xl font-bold flex flex-row justify-center items-center gap-2 sm:gap-4 pacifico-regular">
                    <img
                        src="logo.png"
                        alt="logo"
                        className="rounded-full bg-white/90 backdrop-blur-md w-auto h-10 sm:h-16"
                    />
                    Vraj Vyas
                </div>
                <div className="hidden md:flex space-x-4 lg:space-x-8">
                    {["home", "about", "skills", "education", "work", "contact"].map(
                        (section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`capitalize transition-all duration-500 text-sm sm:text-base font-medium ${activeSection === section
                                        ? darkMode
                                            ? "text-white"
                                            : "text-black"
                                        : darkMode
                                            ? "text-gray-400 hover:text-white"
                                            : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {section}
                            </button>
                        )
                    )}
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Toggle Dark Mode"
                        className={`p-1 sm:p-2 rounded-md transition-all duration-500 ${darkMode
                                ? "bg-gray-900 hover:bg-gray-600 text-white"
                                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                            }`}
                    >
                        {darkMode ? " 🌙" : "☀️"}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden p-1 sm:p-2 ${darkMode ? "text-white" : "text-black"}`}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>
        </div>
        {isMenuOpen && (
            <div
                className={`md:hidden transition-all duration-500 ${darkMode ? "bg-[#03050e]/30 border-gray-800" : "bg-white border-gray-200"
                    } border-b`}
            >
                <div className="px-4 py-2 space-y-1">
                    {["home", "about", "skills", "education", "work", "contact"].map(
                        (section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`block w-full text-left py-2 capitalize transition-all duration-500 text-sm ${darkMode
                                        ? "text-gray-400 hover:text-white"
                                        : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {section}
                            </button>
                        )
                    )}
                </div>
            </div>
        )}
    </nav>
);
export default NavBar