import React from "react";
import {
  MapPin,
  Calendar,
  Code,
  Smartphone,
  BookOpen,
  GitFork,
} from "lucide-react";

/**
 * New look:
 * - Strong solid color panels for the info grid,
 * - Left side: bold intro with accent pill,
 * - Right side: 2x3 grid of solid colored stat tiles with icons,
 * - Preserves provided text and icons.
 */
function AboutSection({ darkMode = true }) {
  const sectionBg = darkMode ? "bg-[#040617]" : "bg-white";
  const headingColor = darkMode ? "text-white" : "text-black";
  const subColor = darkMode ? "text-gray-300" : "text-gray-700";

  const tileBg = (idx) =>
    darkMode
      ? ["bg-[#0b2233]", "bg-[#1b2a2f]", "bg-[#2b1a2f]", "bg-[#1a2238]", "bg-[#1f2b16]", "bg-[#28121a"][
        idx % 6
      ]
      : ["bg-[#e6f6ff]", "bg-[#fff6e6]", "bg-[#fef2e8]", "bg-[#eefaf1]", "bg-[#fff0f6]", "bg-[#f0f7ff]"][
        idx % 6
      ];

  const tiles = [
    { icon: Calendar, label: "4 Months at Codewing" },
    { icon: BookOpen, label: "MCA in Progress" },
    { icon: Code, label: "MERN Stack Dev" },
    { icon: GitFork, label: "Open Source" },
    { icon: Smartphone, label: "Web & Mobile" },
    { icon: MapPin, label: "Nadiad, Gujarat" },
  ];

  return (
    <section id="about" className={`py-12 sm:py-20 ${sectionBg} ${darkMode ? "text-gray-300" : "text-gray-900"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? "bg-amber-500 text-black" : "bg-amber-600 text-white"
                }`}
            >
              <BookOpen size={20} />
            </div>
            <h2 className={`text-3xl sm:text-4xl font-bold ${headingColor}`}>
              Meet <span className={subColor}>Vraj Vyas</span>
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3">
            <h3 className={`text-2xl font-bold ${headingColor}`}>Hello, I'm Vraj!</h3>
            <div className={`mt-2 inline-block px-3 py-1 rounded-full font-semibold ${darkMode ? "bg-gray-800 text-amber-300" : "bg-amber-50 text-amber-700"
              }`}>
              Full Stack Innovator
            </div>

            <p className={`mt-4 text-sm sm:text-base ${subColor} max-w-prose`}>
              I'm a 21-year-old <span className="font-semibold">Full Stack Developer</span> from Nadiad,
              pursuing my MCA at Maharaja Sayajirao University. I build responsive, accessible
              applications using React, Next.js and Node.js. I love open-source and turning ideas
              into polished products.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className={`p-4 rounded-lg border ${darkMode ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"} `}>
                <p className="text-xs text-gray-400">Email</p>
                <p className="font-medium mt-1">vyasvraj92@gmail.com</p>
              </div>
              <div className={`p-4 rounded-lg border ${darkMode ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"} `}>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="font-medium mt-1">+91 9104511100</p>
              </div>
            </div>
          </div>

          <aside className="md:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {tiles.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className={`flex flex-col items-start gap-2 p-3 rounded-lg border ${darkMode ? "border-gray-700" : "border-gray-200"
                    } ${tileBg(i)} shadow-sm`}
                >
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${darkMode ? "bg-white/10" : "bg-white/80"
                      }`}
                    aria-hidden
                  >
                    <Icon className={`${darkMode ? "text-amber-300" : "text-amber-700"} w-4 h-4`} />
                  </div>
                  <div className={`${darkMode ? "text-gray-100" : "text-gray-900"} font-medium text-sm`}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;