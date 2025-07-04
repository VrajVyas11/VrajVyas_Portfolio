/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Calendar, Award, Code, Database, Globe, Smartphone, Menu, X } from 'lucide-react';

// Navigation Component
const NavBar = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-gray-900 flex flex-row justify-center items-center gap-4 pacifico-regular"><img src='logo.png' alt='logo' className=' w-14 h-14'/>Vraj Vyas</div>
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'education', 'work', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-colors text-sm font-medium ${activeSection === section ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {section}
            </button>
          ))}
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </div>
    {isMenuOpen && (
      <div className="md:hidden bg-white border-b border-gray-200">
        <div className="px-4 py-2 space-y-1">
          {['home', 'about', 'skills', 'education', 'work', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left py-2 capitalize text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

// SkillCard Component
const SkillCard = ({ icon: Icon, title, description }) => (
  <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
    <div className="flex items-center mb-3">
      <Icon className="h-6 w-6 text-gray-700 mr-3" />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

// ProjectCard Component
const ProjectCard = ({ title, description, tags, link, githubLink, image }) => (
  <div className="group  relative  bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
    {image ? title === "easyocr-js" ? <div className='flex flex-row justify-between'><img src={image.split(",")[0]} alt={title} className='w-full max-h-48' /><img src={image.split(",")[1]} alt={title} className='w-full max-h-48' /></div> : <img src={image} alt={title} className='aspect-auto max-h-48' /> :
      <div className="aspect-video bg-gray-50 flex items-center justify-center">
        <Code className="h-12 w-12 text-gray-400 group-hover:text-gray-600 transition-colors" />
      </div>
    }
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-gray-200 transition-colors">
            {tag}
          </span>
        ))}
      </div>
      
    </div>
    <div className='h-5'/>
    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors text-sm">
          <Github className="h-4 w-4 mr-2" />
          <span>View on GitHub</span>
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors text-sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          <span>View Project</span>
        </a>
      </div>
  </div>
);

// EducationCard Component
const EducationCard = ({ degree, institution, year, details }) => (
  <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{degree}</h3>
        <p className="text-gray-600">{institution}</p>
      </div>
      <div className="text-gray-500 text-sm">{year}</div>
    </div>
    <p className="text-gray-600">{details}</p>
  </div>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Vraj Vyas
                  <br />
                  <span className="text-gray-600 text-5xl">Full Stack Developer</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  I’m a 21-year-old full stack developer with a passion for crafting responsive, user-friendly web applications, specializing in frontend technologies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('work')}
                  className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors transform hover:scale-105"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors transform hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Code className="h-12 w-12 text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">2+ Years Experience</h3>
                  <p className="text-gray-600">Building modern web applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I’m a passionate developer pursuing MCA, focused on creating impactful web solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                I’m Vraj Vyas, a 21-year-old full stack developer from Nadiad, Gujarat, currently pursuing MCA at Maharaja Sayajirao University. With a strong inclination toward frontend development, I specialize in building responsive, user-friendly applications using technologies like React, Next.js, and Tailwind CSS.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I’m not coding, I’m exploring new frameworks, contributing to open-source projects, or honing my skills to stay ahead in the tech world. My goal is to leverage my skills to create meaningful digital experiences.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600">2+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600">10+ Projects</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center transform hover:-translate-y-1 transition-all duration-300">
                  <Code className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm font-medium">Frontend Expertise</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center transform hover:-translate-y-1 transition-all duration-300">
                  <Globe className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm font-medium">Web Apps</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center transform hover:-translate-y-1 transition-all duration-300">
                  <Smartphone className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm font-medium">Mobile First</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center transform hover:-translate-y-1 transition-all duration-300">
                  <Database className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm font-medium">Full Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tools and technologies I use to build modern applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon={Code}
              title="Frontend Development"
              description="React, Next.js, Tailwind CSS, JavaScript, HTML, CSS"
            />
            <SkillCard
              icon={Database}
              title="Backend Development"
              description="Node.js, PHP, Python, SQL, MongoDB, PostgreSQL"
            />
            <SkillCard
              icon={Smartphone}
              title="Mobile Development"
              description="React Native, Android (Java), responsive design"
            />
            <SkillCard
              icon={Globe}
              title="DevOps & Tools"
              description="Docker, Git, GitHub, deployment automation"
            />
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PHP', 'Python', 'SQL', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Docker'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey in computer science
            </p>
          </div>
          <div className="space-y-8">
            <EducationCard
              degree="Master of Computer Applications (MCA)"
              institution="Maharaja Sayajirao University"
              year="2024 - Present"
              details="Pursuing advanced studies in computer science, focusing on software development and modern web technologies."
            />
            <EducationCard
              degree="Bachelor of Computer Applications (BCA)"
              institution="Dharamsinh Desai University, Nadiad"
              year="April 2023"
              details="Graduated with 87% CGPA, specializing in web and mobile application development."
            />
            <EducationCard
              degree="Higher Secondary Certificate (HSC)"
              institution="ShardaMandir Day School"
              year="May 2021"
              details="Completed with 81% in commerce stream."
            />
            <EducationCard
              degree="Secondary School Certificate (SSC)"
              institution="ShardaMandir Day School"
              year="March 2019"
              details="Completed with 81%."
            />
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of my GitHub projects showcasing my development skills
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="AI Manga Reader"
              image="/manga.png"
              description="A next-gen manga app powered by MangaDex API, with AI-powered OCR and text-to-speech for multi-language reading."
              tags={['manga', 'mangadex-api', 'ocr', 'tts', 'javascript']}
              githubLink="https://github.com/VrajVyas11/AI_Manga_Reader"
              liveLink="https://ai-manga-reader.example.com" // Placeholder: Update with actual link if available
            />
            <ProjectCard
              image="/pdf.png"
              title="PDF Manipulator"
              description="A comprehensive PDF tool for editing, merging, splitting, and converting PDFs with a responsive UI."
              tags={['pdf', 'javascript', 'pdf-editor', 'pdf-merger']}
              githubLink="https://github.com/VrajVyas11/PDF-Manipulator"
              liveLink="https://pdf-manipulator-gdqt.onrender.com/"
            />
            <ProjectCard
              image="/windows.png"
              title="React Windows 11"
              description="A Windows 11 clone with draggable windows, Start Menu, and terminal, built with React and Tailwind CSS."
              tags={['react', 'tailwindcss', 'framer-motion', 'javascript']}
              githubLink="https://github.com/VrajVyas11/React_Windows_11"
              liveLink="https://react-windows-11.vercel.app/"
            />
            <ProjectCard
              title="Imaginify"
              image="/imagine.png"
              description="A responsive web app using Cloudinary AI for image transformation, with restoration, generative fill, and object removal. Features a credit system, Stripe payments, and Clerk authentication."
              tags={['react', 'nextjs', 'cloudinary', 'stripe', 'clerk', 'typescript']}
              githubLink="https://github.com/VrajVyas11/Next-JS_Imaginify"
              liveLink="https://next-js-imaginify.vercel.app"
            />
            <ProjectCard
              title="easyocr-js"
              image="/easyocr.webp,/easyocr2.jpg"
              description="A lightweight JavaScript wrapper for EasyOCR, simplifying text recognition in JS environments."
              tags={['easyocr', 'ocr', 'javascript']}
              githubLink="https://github.com/VrajVyas11/easyocr-js"
              liveLink="https://www.npmjs.com/package/easyocr-js"
            />
            <ProjectCard
            image="/signature.png"
              title="React Signature Pad"
              description="A responsive digital signature pad built with React, allowing users to draw and save signatures using Canvas API, with customizable styling and export options."
              tags={['react', 'javascript', 'canvas-api', 'typescript']}
              githubLink="https://github.com/VrajVyas11/react-signature-pad"
              liveLink="https://react-signature-pad.example.com" // Placeholder: Update with actual link if available
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interested in collaborating? Reach out to discuss your project!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">vyasvraj92@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 9104511100</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Nadiad, Gujarat, India</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/VrajVyas11" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors transform hover:scale-105">
                  <Github className="h-5 w-5 text-gray-600" />
                </a>
                <a href="https://www.linkedin.com/in/vraj-vyas" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors transform hover:scale-105">
                  <Linkedin className="h-5 w-5 text-gray-600" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
              Vraj Vyas
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Vraj Vyas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;