import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  User,
  CircleQuestionMark,
  MessageCircleMore,
  Headset,
} from "lucide-react";

function ContactMe({darkMode=true}) {
    return (
        <section
            id="contact"
            className={`py-20 pb-10 transition-all duration-500 ${darkMode ? "bg-[#03050e]/90 text-white" : "bg-white/50 text-gray-900"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 flex flex-row justify-center items-center gap-4">
                        <Headset strokeWidth={3} className="w-16 h-16" />
                        Get In Touch
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Interested in collaborating? Reach out to discuss your project!
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8 relative">
                        <div className="flex justify-center relative z-10">
                            <img
                                src="/contact.png"
                                alt="Contact illustration"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div
                            className={`absolute -top-12 -left-12 rounded-xl p-6 shadow-sm border transform hover:-translate-y-1 transition-all duration-300 ${darkMode ? "bg-gray-950 border-gray-700" : "bg-white border-gray-200"
                                }`}
                        >
                            <div className="flex items-center space-x-4">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-800" : "bg-gray-100"
                                        }`}
                                >
                                    <Mail
                                        className={`h-6 w-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                                    />
                                </div>
                                <div>
                                    <h3 className={`text-lg font-semibold ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
                                        Email
                                    </h3>
                                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                                        vyasvraj92@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`absolute -top-12 -right-0 min-w-64 rounded-xl p-6 shadow-sm border transform hover:-translate-y-1 transition-all duration-300 ${darkMode ? "bg-gray-950 border-gray-700" : "bg-white border-gray-200"
                                }`}
                        >
                            <div className="flex items-center space-x-4">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-800" : "bg-gray-100"
                                        }`}
                                >
                                    <Phone
                                        className={`h-6 w-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                                    />
                                </div>
                                <div>
                                    <h3 className={`text-lg font-semibold ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
                                        Phone
                                    </h3>
                                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                                        +91 9104511100
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`absolute bottom-0 -left-12 rounded-xl p-6 shadow-sm border transform hover:-translate-y-1 transition-all duration-300 ${darkMode ? "bg-gray-950 border-gray-700" : "bg-white border-gray-200"
                                }`}
                        >
                            <div className="flex items-center space-x-4">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-800" : "bg-gray-100"
                                        }`}
                                >
                                    <MapPin
                                        className={`h-6 w-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                                    />
                                </div>
                                <div>
                                    <h3 className={`text-lg font-semibold ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
                                        Location
                                    </h3>
                                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                                        Nadiad, Gujarat, India
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4 z-40 absolute bottom-8 -right-6">
                            <a
                                href="https://github.com/VrajVyas11"
                                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm border transition-colors transform hover:scale-105 ${darkMode
                                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                                    : "bg-white border-gray-200 hover:bg-gray-50"
                                    }`}
                            >
                                <Github
                                    className={`h-5 w-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vraj-vyas"
                                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm border transition-colors transform hover:scale-105 ${darkMode
                                    ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                                    : "bg-white border-gray-200 hover:bg-gray-50"
                                    }`}
                            >
                                <Linkedin
                                    className={`h-5 w-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                                />
                            </a>
                        </div>
                    </div>
                    <div
                        className={`rounded-xl p-8 shadow-sm border transition-colors duration-500 ${darkMode ? "bg-gray-950 border-gray-700" : "bg-white border-gray-200"
                            } -mt-4`}
                    >
                        <form className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"
                                        }`}
                                >
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div
                                        className={`flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-gray-500 focus-within:border-transparent transition-all duration-300 ${darkMode
                                            ? "border-gray-600 bg-black/5 backdrop-blur-md"
                                            : "border-gray-600 bg-transparent"
                                            }`}
                                    >
                                        <User
                                            className={`h-6 w-6 mx-3 ${darkMode ? "text-gray-400" : "text-black"
                                                }`}
                                        />
                                        <input
                                            type="text"
                                            id="name"
                                            className={`w-full px-4 py-3 focus:outline-none transition-all bg-transparent duration-300 ${darkMode ? "text-gray-300" : ""
                                                }`}
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"
                                        }`}
                                >
                                    Email Address
                                </label>
                                <div
                                    className={`flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-gray-500 focus-within:border-transparent transition-all duration-300 ${darkMode
                                        ? "border-gray-600 bg-black/5 backdrop-blur-md"
                                        : "border-gray-600 bg-transparent"
                                        }`}
                                >
                                    <Mail
                                        className={`h-6 w-6 mx-3 ${darkMode ? "text-gray-400" : "text-black"
                                            }`}
                                    />
                                    <input
                                        type="email"
                                        id="email"
                                        className={`w-full px-4 py-3 focus:outline-none transition-all bg-transparent duration-300 ${darkMode ? "text-gray-300" : ""
                                            }`}
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"
                                        }`}
                                >
                                    Subject
                                </label>
                                <div
                                    className={`flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-gray-500 focus-within:border-transparent transition-all duration-300 ${darkMode
                                        ? "border-gray-600 bg-black/5 backdrop-blur-md"
                                        : "border-gray-600 bg-transparent"
                                        }`}
                                >
                                    <CircleQuestionMark
                                        className={`h-6 w-6 mx-3 ${darkMode ? "text-gray-400" : "text-black"
                                            }`}
                                    />
                                    <input
                                        type="text"
                                        id="subject"
                                        className={`w-full px-4 py-3 focus:outline-none transition-all bg-transparent duration-300 ${darkMode ? "text-gray-300" : ""
                                            }`}
                                        placeholder="What's this about?"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"
                                        }`}
                                >
                                    Message
                                </label>
                                <div className="relative">
                                    <div
                                        className={`flex border rounded-lg focus-within:ring-2 focus-within:ring-gray-500 focus-within:border-transparent transition-all duration-300 ${darkMode ? "border-gray-600 bg-gray-950" : "border-gray-600 bg-transparent"
                                            }`}
                                    >
                                        <MessageCircleMore
                                            className={`h-6 w-6 mx-3 mt-3.5 ${darkMode ? "text-gray-400" : "text-black"
                                                }`}
                                        />
                                        <textarea
                                            id="message"
                                            rows={3}
                                            className={`w-full px-4 py-3 focus:outline-none transition-all bg-transparent duration-300 ${darkMode ? "text-gray-300" : ""
                                                }`}
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className={`w-full px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105 ${darkMode
                                    ? "bg-white text-black hover:bg-gray-200"
                                    : "bg-gray-900 text-white hover:bg-gray-800"
                                    }`}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe