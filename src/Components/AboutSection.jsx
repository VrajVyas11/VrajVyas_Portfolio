/* eslint-disable no-unused-vars */
import React from "react";
import {
  MapPin,
  Calendar,
  Code,
  Smartphone,
  BookOpen,
  GitFork,
  ShieldUser,
  Projector,
} from "lucide-react";

function AboutSection({ darkMode = true }) {
  const headingColor = darkMode ? "text-white" : "text-black";
  const subColor = darkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = darkMode ? "bg-[#111827] border-gray-700" : "bg-white border-gray-200";

  const tiles = [
    { icon: Calendar, label: "4 Months at Codewing" },
    { icon: BookOpen, label: "MCA in Progress" },
    { icon: Code, label: "MERN Stack Dev" },
    { icon: GitFork, label: "Open Source" },
    { icon: Smartphone, label: "Web & Mobile" },
    { icon: MapPin, label: "Nadiad, Gujarat" },
  ];

  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 flex flex-row justify-center items-center gap-3 sm:gap-4">
            <Projector className="w-10 h-10 sm:w-14 sm:h-14" />
            Meet Vraj Vyas
          </h2>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left side */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className={`text-2xl font-semibold ${headingColor}`}>
              Hello, I'm Vraj!
            </h3>
            <span
              className={`inline-block px-3 py-1 text-sm font-medium rounded-md ${darkMode ? "bg-gray-800 text-amber-400" : "bg-amber-100 text-amber-700"
                }`}
            >
              Full Stack Innovator
            </span>

            <p className={`text-base leading-relaxed ${subColor}`}>
              I'm a 21-year-old <span className="font-semibold">Full Stack Developer</span>
              from Nadiad, pursuing my MCA at Maharaja Sayajirao University.
              I specialize in building responsive, accessible applications
              using React, Next.js and Node.js. I’m passionate about open-source
              and transforming ideas into polished products.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div
                className={`p-4 rounded-lg border ${cardBg}`}
              >
                <p className="text-xs text-gray-400">Email</p>
                <p className="font-medium mt-1">vyasvraj92@gmail.com</p>
              </div>
              <div
                className={`p-4 rounded-lg border ${cardBg}`}
              >
                <p className="text-xs text-gray-400">Phone</p>
                <p className="font-medium mt-1">+91 9104511100</p>
              </div>
            </div>
          </div>

          {/* Right side */}
          <aside className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {tiles.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className={`flex flex-col items-start p-4 rounded-lg border ${cardBg} shadow-sm`}
                >
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${darkMode ? "bg-gray-700" : "bg-gray-100"
                      }`}
                  >
                    <Icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <p
                    className={`mt-3 text-sm font-medium ${darkMode ? "text-gray-100" : "text-gray-900"
                      }`}
                  >
                    {label}
                  </p>
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
