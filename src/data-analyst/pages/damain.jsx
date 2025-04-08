import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Code, Database, Globe, Server, 
  Shield, Sparkles, Download, ExternalLink, 
  Mail, MapPin, Phone, Facebook, Twitter, 
  Linkedin,
  Import,
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Importing images
import karmugilanpic from '../images/karmugilan.jpg';
import nivipic from '../images/nivetha.jpg';

const Dataanalyst = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const navigate = useNavigate();

  
  const floatingIcons = [
    { icon: <Code className="w-6 h-6" />, delay: 0 },
    { icon: <Database className="w-6 h-6" />, delay: 0 },
    { icon: <Globe className="w-6 h-6" />, delay: 0},
    { icon: <Server className="w-6 h-6" />, delay: 0 },
    { icon: <Shield className="w-6 h-6" />, delay: 0 }
  ];

  const trainers = [
    { 
      url: '/Karmugilan',
      img: karmugilanpic,
      name: 'KARMUGILAN',
      role: 'DATA-ANALYST',
      expertise: ['DATA', 'POWER BI', 'SQL','JAVA'],
    },
    {
      url: '/nivetha',
      img: nivipic,
      name: 'NIVETHA',
      role: 'DATA-ANALYST',
      expertise: ['DATA', 'POWER BI', 'SQL','JAVA'],
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Modern animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-0">
          <div className="absolute inset-0 opacity-20">
            {/* Abstract shapes background */}
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-300 blur-3xl opacity-20"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-purple-300 blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-indigo-300 blur-3xl opacity-20"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full h-24 mb-8">
              {floatingIcons.map((item, index) => (
                <div
                  key={index}
                  className="absolute transition-all duration-1000 hover:-translate-y-2"
                  style={{ 
                    left: `${(index + 1) * 20}%`,
                    transitionDelay: `${item.delay}s`
                  }}
                >
                  <div className="text-blue-400">{item.icon}</div>
                </div>
              ))}
            </div>

            <div className="relative transform transition-all duration-500 hover:scale-105">
              {/* Decorative elements */}
              <div className="absolute -top-12 left-1/4 transform -translate-x-1/2 w-32 h-32 rounded-full bg-blue-100 blur-xl opacity-70"></div>
              <div className="absolute -top-8 right-1/4 transform translate-x-1/2 w-24 h-24 rounded-full bg-purple-100 blur-xl opacity-70"></div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 drop-shadow-sm">
                Data-analyst
              </h1>
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
                  TRAINER
                </h2>
                <div className="absolute -inset-1 bg-blue-500/20 blur-xl"></div>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-blue-700 mb-12 max-w-2xl leading-relaxed">
              Master Data Analytics with our Trainers!
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-semibold text-white hover:from-blue-600 hover:to-blue-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-200" onClick={()=>navigate('/DAgmeet')}>
                Start Your Journey
              </button>
              <a href="https://drive.google.com/file/d/1a_8IkR3_KEZSxkxDZHelSMCtg-k6lt_F/view?usp=sharing">
              <button className="px-8 py-4 bg-transparent border-2 border-blue-600 rounded-full font-semibold text-blue-600 hover:bg-blue-50 transition-all hover:scale-105 active:scale-95">
               View Curriculum
              </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-6 bg-gray-50 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-100 opacity-30 blur-3xl rounded-full"></div>
        
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-600 relative">
          <span className="relative">
            Meet Your Expert Trainers
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"> 

        {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-full h-80 overflow-hidden"> {/* Box-like container */}
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  style={{ cursor: 'pointer' }}
                />
              
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ cursor: 'pointer' }} onClick={() => navigate(trainer.url)}>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{trainer.name}</h3>
                    <p className="text-blue-600 font-medium">{trainer.role}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {trainer.expertise.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-blue-700">{trainer.experience}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-200 opacity-20 blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-200 opacity-20 blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-blue-600">Course Materials</h2>
            <p className="text-xl text-gray-700 mb-12">Access comprehensive learning resources</p>
            
            <a
              href="https://drive.google.com/drive/folders/1khuT5hrMgBrzahq-5Nxfs7qDL1vuwXiz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-300/40 hover:scale-105 active:scale-95"
            >
              <Download className="w-5 h-5" />
              Access Course Materials
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">About VCET</h3>
              <p className="text-gray-600">Velammal College of Engineering and Technology (VCET), Madurai, established in 2007. It offers industry-focused engineering programs, fostering innovation, academic excellence, and holistic development.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Courses', 'Trainers', 'Materials'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Velammal College of Engineering and Technology, Madurai to Rameshwaram Highway, Viraganoor, Madurai-625 009.</li>
                <li>
                  <a href="mailto:info@vcet.edu" className="text-gray-600 hover:text-blue-600 transition">
                  principal@vcet.ac.in
                  </a>
                </li>
                <li className="text-gray-600">+91 9994994991</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Follow Us</h3>
              <div className="flex gap-6">
                <a href="principal@vcet.ac.in" className="text-blue-600 hover:text-blue-700 transition">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/vcetmadurai/" className="text-blue-600 hover:text-blue-700 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/school/velammal-college-of-engineering-&-technology-madurai/" className="text-blue-600 hover:text-blue-700 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://vcet.ac.in/" className="text-blue-600 hover:text-blue-700 transition">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dataanalyst;