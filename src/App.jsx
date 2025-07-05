/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Award, Code, Database, Globe, Smartphone, Menu, X, Captions, GitBranch, Locate, Eye, BookOpen, BookOpenText, User, GitCommit, GitFork, CircleArrowRight, Server, Bug, Brush, MessageCircleQuestionMark, CircleQuestionMark, MessageCircleMore, Headset } from 'lucide-react';
import skillsData from './constants/Skills';
// Navigation Component
const NavBar = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-0 py-2 left-0 right-0 z-50  backdrop-blur-sm border-b shadow-md shadow-gray-600/60 border-sky-950">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="text-3xl font-bold text-black flex flex-row justify-center items-center gap-4 pacifico-regular"><img src='logo.png' alt='logo' className='rounded-full bg-white/90 backdrop-blur-md w-auto h-16' />Vraj Vyas</div>
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'education', 'work', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-colors text-base font-medium ${activeSection === section ? 'text-black' : 'text-gray-600 hover:text-gray-900'}`}
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


const SkillCard = ({ title, skills, icon }) => {
  const [titleIconError, setTitleIconError] = useState(false);
  const [skillIconErrors, setSkillIconErrors] = useState({});

  const handleTitleIconError = () => {
    if (!titleIconError) setTitleIconError(true);
  };

  const handleSkillIconError = (index) => {
    if (!skillIconErrors[index]) {
      setSkillIconErrors((prev) => ({ ...prev, [index]: true }));
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl p-8 px-3 shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 animate-fade-in min-h-[300px]">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/30 to-gray-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-16 h-16 mb-4 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
          onError={handleTitleIconError}
        />
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>

        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-white/90 p-2 rounded-lg hover:bg-gray-200/90 transition-all duration-300 backdrop-blur-sm border border-gray-100"
            >
              <img
                src={skillIconErrors[index] ? 'https://img.icons8.com/ios-filled/50/000000/404.png' : skill.icon}
                alt={`${skill.name} icon`}
                className="w-7 h-7 object-contain"
                onError={() => handleSkillIconError(index)}
              />
              <span className="text-xs font-medium text-gray-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



// ProjectCard Component
const ProjectCard = ({ title, description, tags, link, githubLink, image }) => (
  <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 h-[250px]">
    {/* Image or Placeholder */}
    <div className="relative w-full h-full">
      {image ? (
        title === "easyocr-js" ? (
          <div className="flex flex-col h-full">
            <img
              src={image.split(",")[0]}
              alt={`${title} image 1`}
              className="w-full h-1/2 object-cover transition-all duration-500 group-hover:brightness-50 group-hover:scale-105"
            />
            <img
              src={image.split(",")[1]}
              alt={`${title} image 2`}
              className="w-full h-1/2 object-cover transition-all duration-500 group-hover:brightness-50 group-hover:scale-105"
            />
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-50 group-hover:scale-105"
          />
        )
      ) : (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center">
          <Code className="h-16 w-16 text-gray-400 group-hover:text-gray-600 transition-colors duration-500" />
        </div>
      )}
      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
        <h3 className="text-xl font-semibold text-white drop-shadow-md">{title}</h3>
      </div>
    </div>
    {/* Hover Content */}
    <div
      style={{ scrollbarWidth: "none" }}
      className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 overflow-auto">
      <div className="space-y-4 text-white">
        <p
          style={{ scrollbarWidth: "none" }}
          className="text-sm leading-relaxed max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-200 transition-colors text-sm"
          >
            <Github className="h-4 w-4 mr-2" />
            <span>View on GitHub</span>
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-200 transition-colors text-sm"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            <span>View Project</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

// EducationCard Component
const EducationCard = ({ degree, image, institution, year, details }) => (
  <div className="bg-white rounded-2xl w-full  p-3 pl-0  pr-6 shadow-md border border-gray-200 
                  grid grid-cols-12 gap-6 items-center transition-transform 
                  duration-300 hover:shadow-lg hover:-translate-y-2">
    <div className="col-span-12 md:col-span-2 -ml-2 flex justify-center ">
      <img
        src={image}
        alt={degree}
        className="rounded-2xl w-28 ml-6 h-28 object-cover shadow-sm"
      />
    </div>
    <div className="col-span-12 md:col-span-10 flex flex-col justify-center">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{degree}</h3>
          <p className="text-gray-700 text-lg">{institution}</p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed line-clamp-1">{details}</p>
      <div className="text-gray-500 text-sm md:text-base mt-2 md:mt-0 font-medium">
        {year}
      </div>
    </div>
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
    <div
      style={{
        lineHeight: "1.5",
        WebkitTextSizeAdjust: "100%",
        fontFamily: "system-ui, sans-serif",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
        MozOsxFontSmoothing: "grayscale",
        touchAction: "manipulation",
        backgroundImage:
          "radial-gradient(#2d2d2d 0.8px, transparent 0), radial-gradient(#373636 0.7px, transparent 0)",
        backgroundPosition: "0 0, 25px 25px",
        backgroundSize: "50px 50px",
      }}
      className="body-wrap m-0 sm:min-h-screen min-h-screen text-white font-sans text-body bg-[#ffffff] bg-opacity-95 transition-colors duration-200 leading-6 text-base box-border -webkit-font-smoothing:antialiased flex flex-col bg-fixed">
      <NavBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center bg-gray-200/50 text-black ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="space-y-8 col-span-7">
              <div className="space-y-6">
                <div className="text-[18px] w-full  font-bold leading-[16px] tracking-[0.3em] mb-5 uppercase text-[#91ba0b]">
                  I'm Vraj Vyas
                </div>
                <div className="mb-6 w-full text-6xl font-extrabold">
                  Full Stack Developer
                </div>
                <p className="w-full hidden md:block text-gray-500 mb-14 leading-[32px] text-[18px] md:text-[22px] md:leading-[36px] max-md:mb-10">
                  I’m a 21-year-old full stack developer with a passion for crafting responsive, user-friendly web applications, specializing in frontend technologies.
                </p>

              </div>
              <div className="flex flex-col text-black sm:flex-row gap-4">
                <div className='text-white'><Button onClick={() => scrollToSection('work')} icon={BookOpenText}>View My Work</Button></div>
                {/* <button
                  onClick={() => scrollToSection('work')}
                  className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors transform hover:scale-105"
                >
                  View My Work
                </button> */}
                <Button onClick={() => scrollToSection('contact')} icon={User}>Get In Touch</Button>

              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/VrajVyas11" className="w-12 h-12 bg-gray-300/10 rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors transform hover:scale-105">
                  <Github className="h-5 w-5 text-gray-600" />
                </a>
                <a href="https://www.linkedin.com/in/vraj-vyas" className="w-12 h-12 bg-gray-300/10 rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors transform hover:scale-105">
                  <Linkedin className="h-5 w-5 text-gray-600" />
                </a>
              </div>
            </div>
            <div className="relative col-span-5">
              <div className="relative z-20 -mt-12  rounded-full  transform w-full animate-subtle-bounce duration-300  h-fit hover:-translate-y-1 flex justify-end items-center  transition-all">
                {/* <img src='/hero.png' className=' w-[460px] border shadow-[0_0_30px_rgba(0,0,0,0.3)] shadow-sky-500/30 border-gray-400/20 bg-white/5 backdrop-blur-md rounded-full transform scale-x-[-1]  h-auto '/> */}
                <img
                  src="/hero.png"
                  className="w-[480px]  bg-black/5 backdrop-blur-md  rounded-full transform scale-x-[-1] h-auto"
                  style={{ filter: "drop-shadow(0 0 10px rgba(14, 165, 233, 0.4))" }}
                  alt="Hero"
                />
              </div>
              {/* <div className='absolute z-10 h-20 w-20 -top-14 -left-4 bg-gray-500/20 rounded-full animate-bounce flex justify-center items-center' ><GitFork size={28}/></div> */}
              <div className='absolute z-10 h-16 w-16 -bottom-10 duration-1000  -right-0 bg-gray-500/20 rounded-full animate-bounce flex justify-center items-center' ><Code /></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="about py-20 bg-white/50 " id="about">
        <h2 className="heading text-5xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center gap-4 font-serif">
          {/* <img src='https://img.icons8.com/?size=90&id=11214&format=png&color=000000' className='-mt-2' alt="person" /> */}
          Meet <span className="text-gray-700">Vraj Vyas</span>
        </h2>

        <div className="row max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
          <div className="content flex-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Hello, I'm Vraj!</h3>
            <span className="tag text-lg text-gray-700 font-semibold">Full Stack Innovator | Code Craftsman</span>

            <p className="text-gray-800 mt-4 leading-relaxed">
              I'm a 21-year-old <span className="text-gray-900 font-semibold">Full Stack Developer</span> from Nadiad, Gujarat,
              pursuing my MCA at Maharaja Sayajirao University.
              <b>“I thrive on weaving code into seamless, user-friendly applications that spark joy and solve problems!”</b>
              With expertise in <span className="text-gray-900 font-semibold">React, Next.js, and Tailwind CSS</span> for stunning frontends
              and <span className="text-gray-900 font-semibold">Node.js</span> for robust backends,
              I’ve built projects like AI Manga Reader and Imaginify. My 4-month internship at Codewing Technologies
              honed my skills, and I’m an active <span className="text-gray-900 font-semibold">open-source contributor</span>.
              When not coding, I’m exploring new frameworks or dreaming up the next big app.
              <span className="text-gray-900 font-semibold">Let’s create something extraordinary!</span>
            </p>

            <div className="box-container mt-6 flex flex-wrap gap-4">
              <div className="box text-gray-500">
                <p><span className="font-semibold text-gray-900">Email:</span> vyasvraj92@gmail.com</p>
                <p><span className="font-semibold text-gray-900">Phone:</span> +91 9104511100</p>
                <p><span className="font-semibold text-gray-900">Location:</span> Nadiad, Gujarat, India - 387001</p>
              </div>
            </div>

            {/* <div className="resumebtn mt-6">
              <a
                href="https://drive.google.com/file/d/your-resume-link/view?usp=sharing"
                target="_blank"
                className="inline-flex items-center bg-white text-gray-900 font-semibold py-2 px-5 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-300"
              >
                <span>Grab My Resume</span>
                <i className="fas fa-chevron-right ml-2"></i>
              </a>
            </div> */}
          </div>

          <div className="w-full h-full flex-1">
            <h3 className="text-3xl text-center font-bold text-gray-900 mb-4">Quick View Hightlights</h3>
            <div className="grid grid-cols-2 w-full h-full gap-4">
              {[
                { icon: Calendar, label: '4 Months at Codewing' },
                { icon: BookOpen, label: 'MCA in Progress' },
                { icon: Code, label: 'MERN Stack Developer' },
                { icon: GitFork, label: 'Open Source Enthusiast' },
                { icon: Smartphone, label: 'Web & Mobile Dev' },
                { icon: MapPin, label: 'Nadiad, Gujarat' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-white w-full h-28 rounded-xl p-4 flex items-center justify-center space-x-3 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="h-5 w-5 text-gray-700 flex-shrink-0" />
                  <span className="text-gray-800 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex flex-row justify-center items-center gap-4">
              <img src='https://img.icons8.com/?size=100&id=wWh3KNXLFm0y&format=png&color=000000' alt="code " />
              Skills & Technologies
            </h2>
            < p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My toolkit for building modern, scalable, and user-friendly applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.map((category, index) => (
              <SkillCard
                key={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                fallbackIcon={category.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 to-gray-200/30 rounded-2xl -mx-4 -my-4 opacity-70" />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 flex flex-row justify-center items-center gap-4">
                <img src='https://img.icons8.com/?size=100&id=11225&format=png&color=000000' alt="education " />
                My Education
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                From 10th Standard to MCA, a thrilling ride of learning and coding!
              </p>
            </div>
          </div>
          <div className="w-full relative flex flex-col md:flex-row-reverse">
            {/* Timeline Spine */}
            <div className="relative flex-1 space-y-8 md:pr-12">
              {[
                {
                  degree: "Master of Computer Applications (MCA)",
                  image: "/msu.png",
                  institution: "Maharaja Sayajirao University",
                  year: "2024 - Present",
                  details: "Pursuing advanced studies in computer science, focusing on software development and modern web technologies.",
                },
                {
                  degree: "Bachelor of Computer Applications (BCA)",
                  image: "/ddu.webp",
                  institution: "Dharamsinh Desai University, Nadiad",
                  year: "April 2023",
                  details: "Graduated with 87% CGPA, specializing in web and mobile application development.",
                },
                {
                  degree: "Higher Secondary Certificate (HSC)",
                  image: "/shardamandir.jpeg",
                  institution: "ShardaMandir Day School",
                  year: "May 2021",
                  details: "Completed with 81% in commerce stream.",
                },
                {
                  degree: "Secondary School Certificate (SSC)",
                  image: "/shardamandir.jpeg",
                  institution: "ShardaMandir Day School",
                  year: "March 2019",
                  details: "Completed with 81%.",
                },
              ].map((edu, index) => (
                <div key={index} className="relative flex items-center group">
                  {/* Education Card */}
                  <div className="flex-1 ml-16">
                    <EducationCard
                      degree={edu.degree}
                      image={edu.image}
                      institution={edu.institution}
                      year={edu.year}
                      details={edu.details}
                    />

                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-[30px] w-4 h-4 bg-gray-900 rounded-full border-2 border-gray-300 shadow-md group-hover:bg-gray-700 group-hover:scale-125 transition-all duration-300 z-10" />
                </div>
              ))}
            </div>
            {/* Timeline Bar with Years */}
            <div className="relative flex justify-center items-center w-12 md:w-24 flex-shrink-0">
              <div className=' w-20 inset-0 inset-x-2 absolute border-double border-b-8 border-gray-800/50   h-1 backdrop-blur-xl rounded-full' />
              <div className="absolute  w-1 h-full bg-gradient-to-b from-gray-600/50 to-gray-800/50 backdrop-blur-xl shadow-sm rounded-full" />
              <div className=' w-5 inset-y-full -my-0.5  left-[38px] inset-x-2 absolute  bg-gray-600 h-5 backdrop-blur-xl rounded-full' />
              {[
                { year: "2024 - Present", offset: "top-[11%]" },
                { year: "April 2023", offset: "top-[37%]" },
                { year: "May 2021", offset: "top-[63%]" },
                { year: "March 2019", offset: "top-[89%]" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute ${item.offset} whitespace-nowrap min-w-fit w-fit  mx-auto text-sm md:text-base font-semibold text-gray-900 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-200 group-hover:text-gray-700 transition-colors duration-300`}
                >
                  {item.year}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gray-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex flex-row justify-center items-center gap-4">
              <img src='https://img.icons8.com/?size=80&id=58808&format=png&color=000000' alt="Projects " />
              Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of my GitHub projects showcasing my development skills
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <section id="contact" className="py-20 pb-10 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex flex-row justify-center items-center gap-4"><Headset strokeWidth={3} className='w-16 h-16'/>Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interested in collaborating? Reach out to discuss your project!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 relative">
              <div className="flex justify-center relative z-10">
                <img
                  src="/contact.png"
                  alt="Contact illustration"
                  className="w-full  h-auto  object-cover "
                />
              </div>
              <div className=" absolute -top-12 -left-12 bg-white rounded-xl p-6 shadow-sm border border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
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
              <div className="bg-white  absolute -top-12 -right-0 min-w-64 rounded-xl p-6 shadow-sm border border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
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
              <div className="bg-white absolute bottom-0 -left-12  rounded-xl p-6 shadow-sm border border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
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
              <div className="flex space-x-4 z-40 absolute bottom-8 -right-6">
                <a href="https://github.com/VrajVyas11" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors transform hover:scale-105">
                  <Github className="h-5 w-5 text-gray-600" />
                </a>
                <a href="https://www.linkedin.com/in/vraj-vyas" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors transform hover:scale-105">
                  <Linkedin className="h-5 w-5 text-gray-600" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl -mt-4 p-8 shadow-sm border border-gray-200">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="flex items-center border border-gray-600 rounded-lg focus-within:ring-2 focus-within:ring-gray-500 focus-within:border-transparent transition-all duration-300">
                      <User className="h-6 w-6  text-black mx-3" />
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3  focus:outline-none  bg-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="flex items-center border border-gray-600 rounded-lg focus-within:ring-2 focus-within:ring-gray-500 focus-within:border-transparent transition-all duration-300">
                    <Mail className="h-6 w-6 text-black mx-3" />
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-transparent  focus:outline-none  transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <div className="flex items-center border border-gray-600 rounded-lg focus-within:ring-2 focus-within:ring-gray-500 focus-within:border-transparent transition-all duration-300">
                    <CircleQuestionMark className="h-6 w-6 text-black mx-3" />
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-transparent  focus:outline-none  transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <div className="flex border border-gray-600 rounded-lg focus-within:ring-2 focus-within:ring-gray-500 focus-within:border-transparent transition-all duration-300">
                      <MessageCircleMore className="h-6 w-6 text-black mx-3 mt-3.5" />
                      <textarea
                        id="message"
                        rows={3}
                        className="w-full px-4 py-3 bg-transparent focus:outline-none resize-none transition-all duration-300"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>
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
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-7 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Left Section: About */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Vraj Vyas</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Thanks for exploring my portfolio! I’m passionate about crafting modern, scalable web applications.
              </p>
              <p className="text-gray-400 text-sm">
                Let’s connect on social platforms to collaborate, innovate, and grow together.
              </p>
              <p className="text-gray-200 font-semibold text-sm">
                🚀 Keep Building. Keep Evolving.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com/VrajVyas11"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-sm border border-gray-700 hover:bg-gray-700 transition-colors transform hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vraj-vyas"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-sm border border-gray-700 hover:bg-gray-700 transition-colors transform hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-300" />
                </a>
              </div>
            </div>

            {/* Middle Section: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Quick Links</h3>
              <ul className="gap-y-4 text-sm grid grid-cols-3">
                {['home', 'about', 'skills', 'education', 'work', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-gray-400 flex flex-row gap-2 hover:text-white transition-colors capitalize"
                    >
                      <CircleArrowRight />{section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section: Contact Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="h-4 w-4 text-gray-300" />
                  <span>+91 9104511100</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="h-4 w-4 text-gray-300" />
                  <span>vyasvraj92@gmail.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="h-4 w-4 text-gray-300" />
                  <span>Nadiad, Gujarat, India - 387001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Credit */}
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-500 text-sm mt-2">
              © 2025 Vraj Vyas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

const Button = ({
  icon: Icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
  OuterContainerClassName
}) => {
  const Inner = () => (
    <>
      <span
        style={children == "View My Work" ? { background: `linear-gradient(#253575, #162561)` } : { background: `linear-gradient(#25357533, #16256133)`, border: "2px solid #fafafa11" }}
        className={`relative flex items-center min-h-[60px] px-4  rounded-lg before:g7 before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 before:content-[''] group-hover:before:opacity-100 overflow-hidden ${OuterContainerClassName}`}>
        <span className="absolute  -left-[1px]">
          <svg
            width="8"
            height="22"
            viewBox="0 0 8 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.5 0H0.5V4V18V22H2.5V16.25L7.63991 11.7526C8.09524 11.3542 8.09524 10.6458 7.63991 10.2474L2.5 5.75V0Z"
              fill={markerFill || "#2EF2FF"}
            />
          </svg>
        </span>
        {Icon && (
          <Icon
            className="size-7 mr-3 ml-1 object-contain z-10"
          />
        )}

        <span className="relative z-2 rounded-full font-poppins text-[16px] font-bold leading-[24px] text-p1 uppercase">
          {children}
        </span>
      </span>

      <span className="before:g8   before:absolute before:left-2/5 before:top-0 before:z-4 before:h-0.5 before:w-3/5 before:opacity-0 before:transition-all before:duration-500 before:content-[''] group-hover:before:left-4 group-hover:before:opacity-40 after:g8 after:absolute after:bottom-0 after:left-4 after:z-4 after:h-0.5 after:w-7/20 after:opacity-0 after:transition-all after:duration-500 after:content-[''] group-hover:after:left-3/5 group-hover:after:opacity-40" />
    </>
  );
  return href ? (
    <a
      className={`relative p-0.5 g5 rounded-2xl  shadow-500 group ${containerClassName}`}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={`relative p-0.5 g5 rounded-2xl  shadow-500 group ${containerClassName}`}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};