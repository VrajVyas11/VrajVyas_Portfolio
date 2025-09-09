import React from "react";
import useInView from "../hooks/useInView";

/**
 * New look:
 * - Solid accent left stripe, card with prominent degree title,
 * - Institution + tiny pill for year, smaller details under,
 * - Avatar/logo circle on left (no stretched images),
 * - Uses useInView for entrance animation (no re-renders).
 */
const EducationCard = ({
  degree,
  image,
  institution,
  year,
  details,
  darkMode = true,
}) => {
  const [ref, inView] = useInView({threshold:0.5});

  const cardBg = darkMode ? "bg-[#040917]" : "bg-white";
  const cardBorder = darkMode ? "border-gray-700" : "border-gray-200";
  const primaryText = darkMode ? "text-gray-100" : "text-gray-900";
  const mutedText = darkMode ? "text-gray-300" : "text-gray-600";

  return (
    <article
      ref={ref}
      className={`relative overflow-hidden rounded-2xl border ${cardBorder} ${cardBg} shadow-sm cursor-pointer hover:scale-[102%] transform transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      aria-label={`${degree} at ${institution}`}
    >
      {/* Solid accent stripe */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-2 ${darkMode ? "bg-amber-500" : "bg-amber-600"
          }`}
        aria-hidden
      />
      <div className="flex items-center gap-4 p-4 sm:p-5 pl-6 sm:pl-8">
        {/* logo/avatar */}
        <div
          className={`flex-shrink-0 rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
        >
          {/* keep object-cover but contained */}
          <img
            src={image}
            alt={`${degree} logo`}
            className=" object-fill h-full w-full"
            loading="lazy"
          />
        </div>

        {/* content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3
                className={`text-lg sm:text-2xl font-extrabold leading-tight ${primaryText}`}
              >
                {degree}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <p className={`text-sm ${mutedText} truncate`}>{institution}</p>
                <span
                  className={`ml-2 inline-block text-xs font-semibold px-2 py-1 rounded-full ${darkMode ? "bg-gray-800 text-amber-300" : "bg-amber-50 text-amber-700"
                    }`}
                >
                  {year}
                </span>
              </div>
            </div>
          </div>

          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed ${mutedText} max-w-prose`}
            title={details}
          >
            {details}
          </p>

        </div>
      </div>
    </article>
  );
};

export default EducationCard;