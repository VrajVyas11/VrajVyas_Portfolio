import {
    Menu,
    X,
} from "lucide-react";

const NavBar = ({
    activeSection,
    scrollToSection,
    isMenuOpen,
    setIsMenuOpen,
    darkMode,
    setDarkMode,
}) => (
    <nav
        className={`fixed top-0 py-3 left-0 right-0 z-50 backdrop-blur-md border-b-2 shadow-xl transition-all duration-500 ${
            darkMode
                ? "border-[#1e3a8a] shadow-[#1e3a8a]/30 bg-[#0a0f1e]/40 text-[#dbeafe]"
                : "border-[#bfdbfe] shadow-[#bfdbfe]/30 bg-[#f0f4ff]/40 text-[#1e40af]"
        }`}
    >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between h-16">
                <div className="text-2xl sm:text-3xl font-extrabold flex flex-row justify-center items-center gap-3 sm:gap-5 tracking-wide pacifico-regular">
                    <img
                        src="logo.png"
                        alt="logo"
                        className="rounded-full bg-white/90  backdrop-blur-lg w-auto h-12 sm:h-16 "
                    />
                    Vraj Vyas
                </div>
                <div className="hidden md:flex space-x-6 lg:space-x-10">
                    {["home", "about", "skills", "education", "work", "contact"].map(
                        (section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`relative capitalize transition-all duration-500 text-base sm:text-lg font-semibold tracking-wide ${
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
                        )
                    )}
                </div>
                <div className="flex items-center space-x-3 sm:space-x-5">
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
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </div>
        {isMenuOpen && (
            <div
                className={`md:hidden transition-all duration-500 overflow-hidden ${
                    darkMode ? "bg-[#0a0f1e]/95 border-[#1e3a8a]" : "bg-[#f0f4ff]/95 border-[#bfdbfe]"
                } border-b-2`}
            >
                <div className="px-6 py-4 space-y-3">
                    {["home", "about", "skills", "education", "work", "contact"].map(
                        (section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`block w-full text-left py-3 capitalize transition-all duration-500 text-base font-medium ${
                                    darkMode
                                        ? "text-[#93c5fd] hover:text-[#dbeafe]"
                                        : "text-[#3b82f6] hover:text-[#1e40af]"
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
export default NavBar;