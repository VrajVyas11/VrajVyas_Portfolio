import {
  Mail,
  Phone,
  MapPin,
  Github,
  Sparkles,
  Linkedin,
  CircleArrowRight,

} from "lucide-react";

const Footer = ({ darkMode, scrollToSection }) => {
  return (
    <footer
      className={`pt-12 pb-7 border-t transition-all duration-500 ${
        darkMode
          ? "bg-[#0a0f1e]/80 border-cyan-500/20 text-gray-400"
          : "bg-gray-50 border-blue-200 text-gray-600"
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${darkMode ? "text-cyan-100" : "text-gray-900"}`}>
              Vraj Vyas
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-cyan-200/70" : "text-gray-600"}`}>
              Thanks for exploring my portfolio! I'm passionate about crafting modern, scalable web applications.
            </p>
            <p className={`font-semibold text-sm flex items-center justify-center md:justify-start gap-2 ${
              darkMode ? "text-cyan-300" : "text-blue-600"
            }`}>
              <Sparkles className="w-4 h-4" />
              Keep Building. Keep Evolving.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/VrajVyas11"
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm border transition-all hover:scale-110 ${
                  darkMode
                    ? "bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-300"
                    : "bg-blue-50 border-blue-200 hover:bg-blue-100 text-blue-600"
                }`}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vraj-vyas"
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm border transition-all hover:scale-110 ${
                  darkMode
                    ? "bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-300"
                    : "bg-blue-50 border-blue-200 hover:bg-blue-100 text-blue-600"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${darkMode ? "text-cyan-100" : "text-gray-900"}`}>
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-sm">
              {["home", "about", "skills", "education", "work", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`flex items-center gap-2 transition-colors capitalize ${
                      darkMode
                        ? "text-cyan-200/70 hover:text-cyan-100"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <CircleArrowRight className="w-4 h-4" />
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${darkMode ? "text-cyan-100" : "text-gray-900"}`}>
              Contact Info
            </h3>
            <div className={`space-y-2 text-sm ${darkMode ? "text-cyan-200/70" : "text-gray-600"}`}>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className={`h-4 w-4 ${darkMode ? "text-cyan-400" : "text-blue-500"}`} />
                <span>+91 9104511100</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className={`h-4 w-4 ${darkMode ? "text-cyan-400" : "text-blue-500"}`} />
                <span>vyasvraj92@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className={`h-4 w-4 ${darkMode ? "text-cyan-400" : "text-blue-500"}`} />
                <span>Nadiad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-cyan-500/20 text-center">
          <p className={`text-sm ${darkMode ? "text-cyan-200/50" : "text-gray-500"}`}>
            © 2025 Vraj Vyas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer