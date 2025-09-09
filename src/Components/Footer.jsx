import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  CircleArrowRight,

} from "lucide-react";

function Footer({darkMode,scrollToSection}) {
  return (
          <footer
        className={`pt-12 pb-7 border-t transition-all duration-500 ${darkMode
            ? "bg-[#03050e] border-gray-800 text-gray-400"
            : "bg-gray-900 border-gray-700 text-gray-300"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Left Section: About */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Vraj Vyas</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Thanks for exploring my portfolio! I’m passionate about crafting modern, scalable web applications.
              </p>
              {/* <p className="text-gray-400 text-sm">
                Let’s connect on social platforms to collaborate, innovate, and grow together.
              </p> */}
              <p className="text-gray-200 font-semibold text-sm">
                🚀 Keep Building. Keep Evolving.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com/VrajVyas11"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-sm border border-gray-700 hover:bg-gray-700 transition-colors transform hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vraj-vyas"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-sm border border-gray-700 hover:bg-gray-700 transition-colors transform hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-300" />
                </a>
              </div>
            </div>

            {/* Middle Section: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Quick Links</h3>
              <ul className="gap-y-4 text-sm grid grid-cols-3">
                {["home", "about", "skills", "education", "work", "contact"].map(
                  (section) => (
                    <li key={section}>
                      <button
                        onClick={() => scrollToSection(section)}
                        className="text-gray-400 flex flex-row gap-2 hover:text-white transition-colors capitalize"
                      >
                        <CircleArrowRight />
                        {section}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Right Section: Contact Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="h-4 w-4 text-gray-300" />
                  <span>+91 9104511100</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="h-4 w-4 text-gray-300" />
                  <span>vyasvraj92@gmail.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="h-4 w-4 text-gray-300" />
                  <span>Nadiad, Gujarat, India - 387001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Credit */}
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-500 text-sm mt-2">
              © 2025 Vraj Vyas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer