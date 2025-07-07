/* eslint-disable no-unused-vars */
import {
  MapPin,
  Calendar,
  Code,
  Smartphone,
  BookOpen,
  GitFork,
} from "lucide-react";

function AboutSection({ darkMode = true }) {
  return (
    <section
      className={`about py-12 sm:py-20 transition-all duration-500 ${
        darkMode ? "bg-[#03050e]/90 text-gray-300" : "bg-white/50 text-gray-900"
      }`}
      id="about"
    >
      <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center flex items-center justify-center gap-3 sm:gap-4 font-serif">
        <img
          src={`https://img.icons8.com/?size=64&id=6pczL8OSclRq&format=png&color=${
            darkMode ? "ffffff" : "000000"
          }`}
          alt=""
          className="w-10 h-10 sm:w-16 sm:h-16"
        />{" "}
        Meet{" "}
        <span className={darkMode ? "text-gray-400" : "text-gray-700"}>
          Vraj Vyas
        </span>
      </h2>

      <div className="row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse gap-8 sm:gap-12">
        <div className="content w-full md:w-3/5">
          <h3
            className={`text-2xl sm:text-3xl font-bold mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-900"
            }`}
          >
            Hello, I'm Vraj!
          </h3>
          <span
            className={`tag text-base sm:text-lg font-semibold ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Full Stack Innovator | Code Craftsman
          </span>

          <p
            className={`mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base ${
              darkMode ? "text-gray-400" : "text-gray-800"
            }`}
          >
            I'm a 21-year-old{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Full Stack Developer
            </span>{" "}
            from Nadiad, Gujarat, pursuing my MCA at Maharaja Sayajirao University.
            <b>
              "I thrive on weaving code into seamless, user-friendly applications
              that spark joy and solve problems!"
            </b>{" "}
            With expertise in{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              React, Next.js, and Tailwind CSS
            </span>{" "}
            for stunning frontends and{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Node.js
            </span>{" "}
            for robust backends, I've built projects like AI Manga Reader and Imaginify.
            My 4-month internship at Codewing Technologies honed my skills, and I'm an
            active{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              open-source contributor
            </span>
            . When not coding, I'm exploring new frameworks or dreaming up the next big
            app.{" "}
            <span
              className={`font-semibold ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Let's create something extraordinary!
            </span>
          </p>

          <div className="box-container mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4">
            <div
              className={`box text-sm sm:text-base ${
                darkMode ? "text-gray-400" : "text-gray-500"
              } w-full sm:w-auto`}
            >
              <p>
                <span
                  className={`font-semibold ${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  Email:
                </span>{" "}
                vyasvraj92@gmail.com
              </p>
              <p>
                <span
                  className={`font-semibold ${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  Phone:
                </span>{" "}
                +91 9104511100
              </p>
              <p>
                <span
                  className={`font-semibold ${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  Location:
                </span>{" "}
                Nadiad, Gujarat, India - 387001
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5 h-full">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { icon: Calendar, label: "4 Months at Codewing" },
              { icon: BookOpen, label: "MCA in Progress" },
              { icon: Code, label: "MERN Stack Developer" },
              { icon: GitFork, label: "Open Source Enthusiast" },
              { icon: Smartphone, label: "Web & Mobile Dev" },
              { icon: MapPin, label: "Nadiad, Gujarat" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className={`w-full h-20 sm:h-28 rounded-lg p-3 flex items-center justify-center space-x-3 shadow-sm border transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                  darkMode
                    ? "bg-gray-950 border-gray-700"
                    : "bg-white shadow-lg border-gray-100"
                }`}
              >
                <Icon
                  className={`h-6 w-6 flex-shrink-0 ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;