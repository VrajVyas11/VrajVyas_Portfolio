import React from "react";
import useInView from "../hooks/useInView";
import { Calendar, MapPin } from "lucide-react";

const EducationCard = ({
  degree,
  image,
  institution,
  year,
  details,
  darkMode = true,
}) => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <article
      ref={ref}
      className={`group relative overflow-hidden backdrop-blur-lg rounded-3xl border-l-8  shadow-lg cursor-pointer transform transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${
        darkMode
          ? " border-sky-700/50 !shadow-[inset_0_0px_12px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
          : " border-blue-500/20 hover:border-blue-500/40 hover:shadow-xl"
      } hover:scale-[102%]`}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute  inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-cyan-500/5 to-transparent"
            : "bg-gradient-to-br from-blue-500/5 to-transparent"
        }`}
      />

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 p-6">
        {/* Logo/Image */}
        <div
          className={`flex-shrink-0 rounded-2xl overflow-hidden w-24 h-24 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
            darkMode ? "bg-gray-800/50" : "bg-gray-100"
          }`}
        >
          <img
            src={image}
            alt={`${institution} logo`}
            className="object-cover h-full w-full"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Degree */}
          <h3
            className={`text-2xl font-black leading-tight mb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {degree}
          </h3>

          {/* Institution & Year */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              <MapPin
                className={`w-4 h-4 ${darkMode ? "text-cyan-400" : "text-blue-600"}`}
              />
              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {institution}
              </p>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                darkMode
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "bg-blue-500/20 text-blue-700"
              }`}
            >
              <Calendar className="w-3 h-3" />
              {year}
            </span>
          </div>

          {/* Details */}
          <p
            className={`text-sm leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {details}
          </p>
        </div>
      </div>
    </article>
  );
};

export default EducationCard;