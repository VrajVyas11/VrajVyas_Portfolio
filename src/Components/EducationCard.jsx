
import useInView from "../hooks/useInView";

const EducationCard = ({
    degree,
    image,
    institution,
    year,
    details,
    darkMode = true,
}) => {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={`rounded-2xl w-full p-2 sm:p-3 pl-0 pr-4 sm:pr-6 shadow-md border grid grid-cols-12 gap-4 sm:gap-6 items-center transition-all duration-700 transform ${darkMode
                    ? "bg-gray-950 border-gray-700"
                    : "bg-white border-gray-200"
                } ${inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } hover:shadow-lg hover:-translate-y-2`}
        >
            <div className="col-span-12 md:col-span-2 -ml-2 flex justify-center">
                <img
                    src={image}
                    alt={degree}
                    className="rounded-2xl w-20 sm:w-28 ml-4 sm:ml-6 h-20 sm:h-28 object-cover shadow-sm"
                />
            </div>
            <div className="col-span-12 text-center md:text-left md:col-span-10 flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 sm:mb-3">
                    <div>
                        <h3 className={`text-lg sm:text-2xl font-bold mb-0 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                            {degree}
                        </h3>
                        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-sm sm:text-lg`}>
                            {institution}
                        </p>
                    </div>
                </div>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-xs sm:text-sm leading-relaxed line-clamp-1`}>
                    {details}
                </p>
                <div className={`${darkMode ? "text-gray-500" : "text-gray-600"} text-xs sm:text-sm mt-1 sm:mt-0 font-medium`}>
                    {year}
                </div>
            </div>
        </div>
    );
};

export default EducationCard