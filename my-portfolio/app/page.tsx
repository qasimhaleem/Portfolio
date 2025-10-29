"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Briefcase, User, Send, Award, Zap, Target, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // CHANGE THESE VALUES
  const config = {
    name: "Muhammad Qasim",
    title: "Full Stack Developer",
    tagline: "Crafting Seamless Digital Solutions from Frontend to Backend",
    email: "mrqasimhaleem@gmail.com",
    whatsapp: "+923038843954", // Add your WhatsApp number with country code
    github: "https://github.com/qasimhaleem",
    linkedin: "https://linkedin.com/in/yourusername",
    profileImage: "/pic.jpg",

    about: {
      description: "As a dedicated Full Stack Developer, I thrive on transforming innovative ideas into powerful, scalable applications. With expertise spanning both frontend and backend technologies, I create comprehensive solutions that deliver exceptional user experiences while maintaining robust server-side functionality. My journey in web development has equipped me with a versatile skill set that bridges the gap between design and functionality, ensuring every project I undertake is not just visually appealing, but also technically sound and performant.",
      mission: "My mission is to leverage cutting-edge technologies to build applications that solve real-world problems, enhance user experiences, and drive business growth. I believe in writing clean, maintainable code and staying ahead of industry trends to deliver solutions that stand the test of time.",
      highlights: [
        { title: "Full Stack Expertise", text: "Proficient in both Frontend & Backend development with modern frameworks" },
        { title: "Modern Technologies", text: "React, Node.js, MongoDB, PostgreSQL & cutting-edge tools" },
        { title: "Performance Focused", text: "Building fast, scalable, and optimized applications" },
        { title: "Problem Solver", text: "Turning complex challenges into elegant solutions" }
      ]
    },

    skills: [
      {
        category: "Frontend",
        color: "from-cyan-400 to-blue-500",
        items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"]
      },
      {
        category: "Backend",
        color: "from-green-400 to-emerald-500",
        items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT Authentication"]
      },
      {
        category: "Database",
        color: "from-orange-400 to-red-500",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Mongoose"]
      },
      {
        category: "Tools & DevOps",
        color: "from-purple-400 to-pink-500",
        items: ["Git & GitHub", "Docker", "Vercel", "Postman", "VS Code", "CI/CD", "Linux"]
      }
    ],

    projects: [
      /* {
        title: "GPA Calculator Pro",
        description: "An intelligent GPA calculation system that helps students track their academic performance with precision. Features include semester-wise calculation, CGPA tracking, grade visualization, and predictive analytics to help students achieve their academic goals.",
        tech: ["React", "Node.js", "MongoDB", "Chart.js"],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
        github: "https://github.com/yourusername/gpa-calculator",
        live: "https://gpa-calculator-demo.com",
        gradient: "from-blue-500 to-cyan-500"
      }, */
      {
        title: "Full CRUD Management System",
        description: "A comprehensive CRUD application demonstrating complete database operations with an intuitive interface. Built with modern best practices, featuring real-time updates, advanced filtering, pagination, authentication, and role-based access control.",
        tech: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        github: "https://github.com/yourusername/crud-app",
        live: "https://crud-demo.com",
        gradient: "from-green-500 to-emerald-500"
      },
      {
        title: "Tic Tac Toe Championship",
        description: "A modern twist on the classic game featuring AI opponent with multiple difficulty levels, multiplayer mode with real-time synchronization, game history tracking, and beautiful animations. Perfect blend of nostalgia and modern technology.",
        tech: ["React", "Socket.io", "Node.js", "CSS Animations"],
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop",
        github: "https://github.com/yourusername/tic-tac-toe",
        live: "https://tictactoe-demo.com",
        gradient: "from-purple-500 to-pink-500"
      },
      {
        title: "Weather Forecast Dashboard",
        description: "Real-time weather application providing accurate forecasts with stunning visualizations. Features include 7-day forecasts, hourly predictions, multiple location tracking, weather alerts, interactive maps, and beautiful weather-based UI themes.",
        tech: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
        github: "https://github.com/yourusername/weather-app",
        live: "https://weather-demo.com",
        gradient: "from-orange-500 to-red-500"
      },
      {
        title: "COVID-19 Analytics Tracker",
        description: "Comprehensive pandemic tracking dashboard with global statistics, country-wise data, vaccination progress, and trend analysis. Features interactive charts, historical data comparison, news integration, and safety guidelines to keep users informed.",
        tech: ["Vue.js", "Node.js", "COVID-19 API", "D3.js"],
        image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop",
        github: "https://github.com/yourusername/covid-tracker",
        live: "https://covid-tracker-demo.com",
        gradient: "from-indigo-500 to-purple-500"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                {config.name}
              </span>
              <span className="text-cyan-400">.</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all relative group ${activeSection === item ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                    }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left transition-transform ${activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                </button>
              ))}
            </div>

            <button className="md:hidden text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-900/50 rounded transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={config.profileImage}
              alt={config.name}
              className="relative w-40 h-40 rounded-full mx-auto border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="space-y-2 mb-6">
            <div className="text-cyan-400 text-lg font-semibold tracking-wider">Hello, I'm</div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {config.name}
            </h1>
            <div className="flex items-center justify-center space-x-3 text-2xl md:text-4xl">
              <span className="text-gray-300">A Passionate</span>
              <span className="font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {config.title}
              </span>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            {config.tagline}
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a href={config.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-full transition-all hover:scale-110 border border-cyan-500/30 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/50">
              <Github size={24} />
            </a>
            <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-full transition-all hover:scale-110 border border-blue-500/30 hover:border-blue-400 shadow-lg hover:shadow-blue-500/50">
              <Linkedin size={24} />
            </a>
            <a href={`https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900/50 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 rounded-full transition-all hover:scale-110 border border-green-500/30 hover:border-green-400 shadow-lg hover:shadow-green-500/50">
              <MessageCircle size={24} />
            </a>
            <a href={`mailto:${config.email}`} className="p-4 bg-slate-900/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full transition-all hover:scale-110 border border-purple-500/30 hover:border-purple-400 shadow-lg hover:shadow-purple-500/50">
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all font-semibold text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={40} className="mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
              <User size={32} />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all shadow-lg hover:shadow-cyan-500/20">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {config.about.description}
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all shadow-lg hover:shadow-blue-500/20">
                <div className="flex items-center mb-4">
                  <Target className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-blue-400">My Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {config.about.mission}
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
                <div className="flex items-center mb-6">
                  <Award className="text-cyan-400 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-cyan-400">Key Strengths</h3>
                </div>
                <div className="space-y-6">
                  {config.about.highlights.map((highlight, idx) => (
                    <div key={idx} className="group/item hover:translate-x-2 transition-transform">
                      <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed ml-5">{highlight.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mr-4">
              <Code size={32} />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Technical Arsenal</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {config.skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all border border-slate-800 hover:border-cyan-500/40 shadow-lg hover:shadow-cyan-500/20 group">
                <div className="flex items-center mb-6">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color} mr-3 group-hover:animate-pulse`}></div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center text-gray-300 hover:text-white transition-colors group/skill">
                      <Zap size={14} className={`mr-2 text-cyan-400 group-hover/skill:animate-pulse`} />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
              <Briefcase size={32} />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {config.projects.map((project, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border border-slate-800 hover:border-cyan-500/40 group">
                <div className="relative overflow-hidden h-56">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full text-sm font-bold shadow-lg`}>
                    Project {idx + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-full text-sm font-semibold border border-cyan-500/30`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group/link"
                    >
                      <Github size={20} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                      <span className="font-semibold">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group/link"
                    >
                      <ExternalLink size={20} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                      <span className="font-semibold">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
              <Send size={32} />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Let's Connect</h2>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-2xl border border-cyan-500/20 mb-8">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects, discuss new opportunities, or simply connect with fellow developers. Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href={`mailto:${config.email}`}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all inline-flex items-center justify-center font-semibold group"
              >
                <Mail className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                Send Email
              </a>
              <a
                href={`https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}?text=Hi! I'd like to connect with you regarding your portfolio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all inline-flex items-center justify-center font-semibold group"
              >
                <MessageCircle className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                WhatsApp Chat
              </a>
              <a
                href={config.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-900 border-2 border-cyan-500/50 hover:border-cyan-400 rounded-full hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all inline-flex items-center justify-center font-semibold group"
              >
                <Linkedin className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2">
            © 2025 <span className="text-cyan-400 font-semibold">{config.name}</span>. Crafted with passion and code.
          </p>
          <p className="text-sm text-gray-500">
            Built with <span className="text-red-400">♥</span> using Next.js, React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;