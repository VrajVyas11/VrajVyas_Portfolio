/* eslint-disable no-unused-vars */
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  User,
  MessageCircleMore,
  Headset,
  Send,
  Sparkles,
} from "lucide-react";


function ContactMe({ darkMode = true }) {

  const contactInfo = [
    { icon: Mail, label: "Email", value: "vyasvraj92@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9104511100" },
    { icon: MapPin, label: "Location", value: "Nadiad, Gujarat, India" },
  ];

  return (
    <section
      id="contact"
      className={`relative py-20 transition-all duration-700 overflow-hidden ${
        darkMode ? "bg-[#0a0f1e00]" : "bg-white"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 backdrop-blur-sm mb-6 ${
              darkMode
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                : "bg-blue-500/10 border-blue-500/30 text-blue-600"
            }`}
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide">
              Let's Connect
            </span>
          </div>

          <h2
            className={`text-5xl lg:text-6xl font-black tracking-tight mb-4 flex items-center justify-center gap-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <Headset className="w-12 h-12" />
            Get In Touch
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Interested in collaborating? Reach out to discuss your project!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info Cards */}

          <div className="space-y-6">
            <div className=" flex flex-row  justify-center">
            <div className="relative  w-[500px]  h-full z-10 hidden md:block ">    </div>
              <img
                src="/contact.png"
                alt="Contact illustration"
                className="w-[36%] top-10 left-0 absolute h-full z-10 object-contain rounded-3xl"
              />
        
<div className=" flex flex-col items-end gap-4">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className={`group w-fit p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                    : "bg-white/80 border-blue-500/20 hover:border-blue-500/40 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      darkMode
                        ? "bg-cyan-500/20 group-hover:bg-cyan-500/30"
                        : "bg-blue-500/20 group-hover:bg-blue-500/30"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        darkMode ? "text-cyan-400" : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold mb-1 ${
                        darkMode ? "text-gray-200" : "text-gray-900"
                      }`}
                    >
                      {label}
                    </h3>
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
</div>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/VrajVyas11"
                className={`flex-1 p-4 rounded-2xl border-2 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400"
                    : "bg-white/80 border-blue-500/20 hover:border-blue-500/40 text-blue-600"
                }`}
              >
                <Github className="w-6 h-6" />
                <span className="font-semibold">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vraj-vyas"
                className={`flex-1 p-4 rounded-2xl border-2 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400"
                    : "bg-white/80 border-blue-500/20 hover:border-blue-500/40 text-blue-600"
                }`}
              >
                <Linkedin className="w-6 h-6" />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`p-8 rounded-3xl border-2 backdrop-blur-sm ${
              darkMode
                ? "bg-gray-900/50 border-cyan-500/20"
                : "bg-white/80 border-blue-500/20"
            }`}
          >
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-semibold mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Full Name
                </label>
                <div
                  className={`flex items-center border-2 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? "border-cyan-500/30 bg-gray-800/50 focus-within:border-cyan-500/60"
                      : "border-blue-500/30 bg-white focus-within:border-blue-500/60"
                  }`}
                >
                  <User
                    className={`ml-4 w-5 h-5 ${
                      darkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  />
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-4 bg-transparent focus:outline-none ${
                      darkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-semibold mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <div
                  className={`flex items-center border-2 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? "border-cyan-500/30 bg-gray-800/50 focus-within:border-cyan-500/60"
                      : "border-blue-500/30 bg-white focus-within:border-blue-500/60"
                  }`}
                >
                  <Mail
                    className={`ml-4 w-5 h-5 ${
                      darkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  />
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-4 bg-transparent focus:outline-none ${
                      darkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-semibold mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <div
                  className={`flex border-2 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? "border-cyan-500/30 bg-gray-800/50 focus-within:border-cyan-500/60"
                      : "border-blue-500/30 bg-white focus-within:border-blue-500/60"
                  }`}
                >
                  <MessageCircleMore
                    className={`ml-4 mt-4 w-5 h-5 ${
                      darkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  />
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-4 bg-transparent focus:outline-none resize-none ${
                      darkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full px-8 py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg ${
                  darkMode
                    ? "bg-cyan-500 hover:bg-cyan-400 text-gray-900"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;