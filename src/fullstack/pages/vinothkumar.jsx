import React from 'react';
import { Mail, Phone, Linkedin, FileText, Building, Code, Calendar } from 'lucide-react';
import Vinothkumarpic from  '../images/Vinoth Kumar KB.jpg';
import { useEffect } from 'react';

const Vinothkumar = () => {

      useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
      }, [])

      
  const experiences = [
    {
      company: "NSIC ,Chennai, India",
      role: "Android Developer Intern",
      duration: "DEC 2023 - JAN 2024",
      responsibilities: [
        "Android Studio,",
        "Java",
        "Android Application Development"
      ]
    },
    {
      company: "Exposys DL, Bengaluru, India",
      role: "Web Developer Internr",
      duration: "2017 - 2020",
      responsibilities: [
        "HTML, CSS",
        "JAVASCRIPT",
        "DJANGO"
      ]
    }
  ];

  const skills = [
    "Android Studio", "Java", "Android Application Development","HTML", "CSS", "JS", "Django",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-900 via-gray-900 to-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <img 
                src = {Vinothkumarpic}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                VINOTH KUMAR K B
              </h1>
              <h2 className="text-2xl text-blue-400 mb-4">Full Stack Developer Trainer</h2>
              <p className="text-xl text-gray-300 max-w-2xl">
              Enthusiastic and results-driven CSE student with 3 years of extensive experience in full-stack web development.
              Seeking an opportunity to apply my skills in front-end and back-end technologies, contributing to the development of
              responsive web applications and scalable systems. Eager to collaborate and continuously learn, while driving innovation
              and delivering impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">Professional Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                </div>
                <div className="flex items-center gap-3 mb-4 text-blue-300">
                  <Calendar className="w-5 h-5" />
                  <span>{exp.duration}</span>
                </div>
                <h4 className="text-lg text-blue-400 mb-4">{exp.role}</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-300">• {resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="px-6 py-3 bg-blue-500/20 rounded-full">
                <span className="text-blue-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-12">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:vinothkumar05kb@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
              <span>vinothkumar05kb@gmail.com</span>
            </a>
            <a href="tel:8428028409" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
              <Phone className="w-6 h-6" />
              <span>+91 8428028409</span>
            </a>
            <a href="https://www.linkedin.com/in/vinoth-kumar-k-b-6b7686265/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-12">
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1pGVoVO4fxoV371jbJ45sTAnW6bmBFew7/view?usp=sharing', '_blank')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vinothkumar;