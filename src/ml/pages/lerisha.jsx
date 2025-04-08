import React from 'react';
import { Mail, Phone, Linkedin, FileText, Building, Code, Calendar } from 'lucide-react';
import lerishapic from '../images/ERNESTINE LERISHA J.JPG';
import { useEffect } from 'react';

const Lerisha = () => {

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, [])
    
  const experiences = [
    {
      company: "Intern At IBM SkillsBuild",
      role: "Watson Assistant | NLP | Dialog Management | IBM Cloud",
      duration: "DEC 2023 - JAN 2024",
      responsibilities: [
        "Deployed a Chatbot called NourishBot using Watson Assistant deployed it in a webpage enabling those free food resources."
      ]
    },
    {
      company: "Summer Research Intern - NIT, Tiruchirappalli",
      role: "Few Shot Learning | Computer VIsion | PyTorch",
      duration: "MAY 2024 - JUNE 2024",
      responsibilities: ['Designed an FSL Object Detection Model Architecture Deployed a Prototypical Network with 86.25% Accuracy'
      ]
        
    }
  ];

  const skills = [
   "Python", "flutter", "MERN", "Express", 
     "UI/UX", "Firebase", "DeepLearning"
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 via-indigo-50 to-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img 
                src = {lerishapic}
                className="w-full h-full object-cover"
                alt="Lerisha"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
                LERISHA
              </h1>
              <h2 className="text-2xl text-blue-600 mb-4"> Machine learning Trainer</h2>
              <p className="text-xl text-gray-700 max-w-2xl">
                Passionate AI & Machine learning Enthusiast.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center relative">
            <span className="relative">
              Professional Experience
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                </div>
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  <Calendar className="w-5 h-5" />
                  <span>{exp.duration}</span>
                </div>
                <h4 className="text-lg text-blue-600 mb-4">{exp.role}</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-700">• {resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center relative">
            <span className="relative">
              Technical Skills
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="px-6 py-3 bg-blue-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-200">
                <span className="text-blue-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 relative">
            <span className="relative">
              Get in Touch
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:lerishajohn@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
              <span>lerishajohn@gmail.com</span>
            </a>
            <a href="tel:+91 8056414747" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="w-6 h-6" />
              <span>+91 8056414747</span>
            </a>
            <a href="https://www.linkedin.com/in/ernestine-lerisha-john-4a863a204/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-12">
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1sCIDgyClDopAY9_gjZxwTICsabMVHdea/view?usp=sharing', '_blank')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-300/40 hover:scale-105 active:scale-95"
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

export default Lerisha;