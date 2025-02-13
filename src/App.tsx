import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Heart } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({
    about: false,
    projects: false,
    contact: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = ['about', 'projects', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-rose-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-rose-400 via-rose-300 to-purple-400 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/70 to-purple-500/70 backdrop-blur-sm"></div>
          <img 
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">Welcome to my portfolio!</h1>
          <p className="text-xl md:text-2xl font-light mb-8 drop-shadow">Nanotechnology Engineering Student at University of Waterloo</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="social-link">
              <Github size={24} />
            </a>
            <a href="#" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="#" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <a 
          href="#about"
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce nav-indicator hover:text-rose-200"
        >
          <ChevronDown size={32} className="drop-shadow-lg" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className={`max-w-4xl mx-auto ${isVisible.about ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl font-serif text-center section-title">
              About Me
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <Heart size={20} className="text-rose-400 fill-rose-400" />
              </span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src="portme.png"
              alt="Profile"
              className={`w-48 h-48 rounded-full object-cover ring-4 ring-rose-100 ${isVisible.about ? 'animate-slide-in-left' : 'opacity-0'}`}
            />
            <div className={`flex-1 ${isVisible.about ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm an aspiring engineer pursuing a Bachelor's degree in Nanotechnology at the University of Waterloo. I'm passionate about problem-solving and developing innovative solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                My technical expertise includes programming in Python, HTML, and CSS, along with extensive experience in data analysis and machine learning using tools like Pandas, NumPy, Matplotlib, Seaborn, and SciPy. Through my coursework, I've gained proficiency in professional software such as COMSOL, AutoCAD, SQL, and MATLAB.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm currently seeking opportunities to collaborate with innovative teams and contribute to cutting-edge solutions in the tech industry. I'm eager to learn and grow as a valuable asset in my field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className={`max-w-4xl mx-auto px-4 ${isVisible.projects ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl font-serif text-center section-title">
              Work Experience
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <Heart size={20} className="text-rose-400 fill-rose-400" />
              </span>
            </h2>
          </div>
          <div className="space-y-12">
            {/* Telus International */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-rose-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-serif text-gray-900">Data Analyst</h3>
                <p className="text-rose-600">JAN 2024 - JUNE 2024</p>
              </div>
              <h4 className="text-lg text-gray-700 mb-2">Telus International, Vancouver, BC (Remote)</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Conducted detailed reviews of AI-generated responses with 98% accuracy in protocol adherence</li>
                <li>Enhanced reliability of user-facing responses by identifying and resolving AI output inconsistencies</li>
                <li>Applied Python (Pandas, NumPy), SQL, and Excel for data cleaning and analysis</li>
                <li>Upskilled in SQL and Databricks, experimenting with database querying and Jupyter Notebooks</li>
              </ul>
            </div>

            {/* AmLive */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-rose-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-serif text-gray-900">Data Engineering Intern</h3>
                <p className="text-rose-600">JAN 2023 - APR 2023</p>
              </div>
              <h4 className="text-lg text-gray-700 mb-2">AmLive, Toronto, ON (Hybrid)</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Utilized Python libraries for data analysis and visualization across 5 projects</li>
                <li>Developed data processing pipeline using MongoDB and Databricks</li>
                <li>Designed ETL process for aggregating music streaming data using SQL, Python, and Databricks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-rose-50">
        <div className={`max-w-6xl mx-auto px-4 ${isVisible.projects ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl font-serif text-center section-title">
              Technical Projects
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <Heart size={20} className="text-rose-400 fill-rose-400" />
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-rose-100 
                  ${isVisible.projects ? 'animate-scale' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-rose-50 text-sm rounded-full text-rose-600 transition-colors hover:bg-rose-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="text-rose-500 hover:text-rose-700 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className={`max-w-4xl mx-auto px-4 ${isVisible.contact ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="flex justify-center mb-12">
            <h2 className="text-3xl font-serif text-center section-title">
              Get In Touch
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <Heart size={20} className="text-rose-400 fill-rose-400" />
              </span>
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-rose-100">
            <form className="space-y-6">
              <div className="transform transition-transform hover:scale-[1.02]">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-rose-200 shadow-sm focus:border-rose-400 focus:ring-rose-400"
                />
              </div>
              <div className="transform transition-transform hover:scale-[1.02]">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-rose-200 shadow-sm focus:border-rose-400 focus:ring-rose-400"
                />
              </div>
              <div className="transform transition-transform hover:scale-[1.02]">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-rose-200 shadow-sm focus:border-rose-400 focus:ring-rose-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-rose-900 text-white py-2 px-4 rounded-md transition-all duration-300 hover:bg-rose-800 hover:transform hover:scale-[1.02] active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-light">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "Data Analysis Pipeline",
    description: "Developed ETL processes for streaming platform data analysis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    technologies: ["Python", "MongoDB", "Databricks"],
    link: "#"
  },
  {
    title: "AI Response Analysis",
    description: "System for reviewing and improving AI-generated content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    technologies: ["Python", "SQL", "Machine Learning"],
    link: "#"
  },
  {
    title: "Music Analytics Platform",
    description: "Analytics system for user listening patterns and playlist performance.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80",
    technologies: ["Python", "Matplotlib", "Seaborn"],
    link: "#"
  }
];

export default App;