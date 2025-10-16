/* eslint-disable no-unused-vars */

import { useState } from "react";
import {
  MapPin,
  Code,
  Smartphone,
  BookOpen,
  Briefcase,
  Sparkles,
  Mail,
  Phone,
} from "lucide-react";

function AboutSection({ darkMode = true }) {

  const [activeCard, setActiveCard] = useState(null);


  const highlights = [
    { icon: Briefcase, label: "4 Months", sublabel: "at Codewing", color: "cyan" },
    { icon: BookOpen, label: "MCA", sublabel: "In Progress", color: "blue" },
    { icon: Smartphone, label: "Web & Mobile", sublabel: "Developer", color: "cyan" },
    { icon: MapPin, label: "Nadiad", sublabel: "Gujarat, India", color: "blue" },
    { icon: Mail, label: "Email", sublabel: "vyasvraj92@gmail.com", color: "cyan" },
    { icon: Phone, label: "Phone", sublabel: "+91 9104511100", color: "blue" },
  ];

  return (
    <section
      id="about"
      className={`relative min-h-screen pb-20 pt-20 transition-all duration-700 overflow-hidden `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 backdrop-blur-sm mb-6 ${darkMode
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                : "bg-blue-500/10 border-blue-500/30 text-blue-600"
              }`}
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide">About Me</span>
          </div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Meet{" "}
            <span className={darkMode ? "text-cyan-400" : "text-blue-600"}>
              Vraj Vyas
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${darkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            Transforming ideas into elegant digital solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div
              className={`px-6 sm:px-12 lg:px-16 py-8 sm:py-12 h-auto flex justify-center items-center flex-col w-full rounded-[60px] sm:rounded-[114px] border-2 backdrop-blur-sm transition-all duration-500 ${darkMode
                  ? "bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/40"
                  : "bg-white/80 border-blue-500/20 hover:border-blue-500/40"
                }`}
            >
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${darkMode ? "bg-cyan-500/20" : "bg-blue-500/20"
                    }`}
                >
                  <Code
                    className={`w-6 h-6 ${darkMode ? "text-cyan-400" : "text-blue-600"}`}
                  />
                </div>
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold ${darkMode
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "bg-blue-500/20 text-blue-700"
                    }`}
                >
                  Full Stack Developer
                </span>
              </div>

              <h3
                className={`text-xl sm:text-2xl font-bold mb-4 text-center ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                Hello, I'm Vraj! 👋
              </h3>

              <div
                className={`space-y-4 text-sm sm:text-md leading-relaxed text-center sm:text-left ${darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                <p>
                  I'm a <span className="font-semibold">21-year-old developer</span> from
                  Nadiad, pursuing my MCA at Maharaja Sayajirao University. My journey in
                  tech is driven by a passion for creating seamless, user-centric
                  applications.
                </p>
                <p>
                  Specializing in the <span className="font-semibold">MERN stack</span>, I
                  build responsive, scalable applications using React, Next.js, and
                  Node.js. I'm passionate about open-source and transforming complex ideas
                  into elegant, polished products.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 sm:py-5 items-center gap-3 h-full w-full">
            {highlights.map(({ icon: Icon, label, sublabel, color }, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative p-4 sm:p-6 rounded-3xl sm:rounded-full backdrop-blur-sm transition-all duration-500 cursor-pointer ${activeCard === idx ? "scale-105" : ""
                  } ${darkMode
                    ? `bg-gray-900/50 !shadow-[inset_0_0px_12px_rgba(34,211,238,0.2)]`
                    : `bg-white/80 !shadow-[inset_0_0px_5px_rgba(0,200,238,0.7)]`
                  }`}
              >
                <div className="relative flex flex-row gap-4 sm:gap-6 z-10 items-center">
                  <div
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${darkMode
                        ? `bg-${color}-500/20 group-hover:bg-${color}-500/30`
                        : `bg-${color}-500/20 group-hover:bg-${color}-500/30`
                      }`}
                  >
                    <Icon
                      className={`w-5 h-5 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 ${darkMode ? `text-${color}-400` : `text-${color}-600`
                        }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4
                      className={`text-base sm:text-lg font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                      {label}
                    </h4>
                    <p
                      className={`text-xs sm:text-sm break-words ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {sublabel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;