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

import akilapic from '../images/akila.png';
import meerapic from '../images/meera.jpg';
import karthigapic from '../images/karthiga.jpg';
import naganimeshpic from '../images/naganimesh.jpg';
import swethanppic from '../images/Swetha.jpg';
import Nitheeshlingampic from '../images/Nitheeshlingam.jpg';
import dineshaadpic from '../images/Dineshaad.jpg';
// Importing images

const Aad = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

     const floatingIcons = [
        { icon: <Code className="w-6 h-6" />, delay: 0 },
        { icon: <Database className="w-6 h-6" />, delay: 0 },
        { icon: <Globe className="w-6 h-6" />, delay: 0},
        { icon: <Server className="w-6 h-6" />, delay: 0 },
        { icon: <Shield className="w-6 h-6" />, delay: 0 }
      ];
  
  const navigate = useNavigate();



  const trainers = [
    { 
      url: '/akilarani',
      img: akilapic,
      name: 'AKILA RANI B',
      role: 'Android App Developer',
      expertise: ['Java', 'Android Studio', 'Backend', 'JS'],
    },
    {
      url: '/karthiga',
      img: karthigapic,
      name: 'KARTHIGA M',
      role: 'Android App Developer',
      expertise: ['Java', 'Android Studio', 'Backend', 'JS'],
    },
    {
      url: '/dineshkumar',
      img: dineshaadpic,
      name: 'DINESH KUMAR',
      role: 'Android App Developer',
      expertise: ['Java', 'Android Studio', 'Backend', 'JS'],
    },
    { 
      url: '/naganimesh',
      img: naganimeshpic,
      name: 'NAGANIMESH',
      role: 'Android App Developer',
      expertise: ['Java', 'Android Studio', 'Backend', 'JS'],
    },
    { 
      url: '/meerashafrin',
      img: meerapic,
      name: 'MEERA',
      role: 'Android App Developer',
      expertise: ['Java', 'Android Studio', 'Backend', 'JS'],
    },
    { 
      url: '/nitheeshlingam',
      img: Nitheeshlingampic,
      name: 'Nitheeshlingam',
      role: 'Android App Developer',
      expertise: ['Java', 'Android Studio', 'Backend', 'JS'],
    },
    { 
      url: '/swethanp',
      img: swethanppic,
      name: 'SWETHA N P',
      role: 'Android App Developer',
      expertise: ['Java', 'Android Studio', 'Backend', 'JS'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-gray-50">
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
            <div className="relative w-full h-24 mb-8">

            
            </div>

            <div className="relative transform transition-all duration-500 hover:scale-105">
             
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Android App Development
              </h1>
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
                  Trainers
                </h2>
                <div className="absolute -inset-1 bg-blue-500/10 blur-xl"></div>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-blue-800 mb-12 max-w-2xl">
              Master the complete Android App Development with our Trainers
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <button className="px-8 py-4 bg-blue-600 rounded-full font-semibold text-white hover:bg-blue-700 transition-all hover:scale-105 active:scale-95" onClick={() => navigate('/aadgmeet')}>
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

      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-600">
          Meet Your Expert Trainers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"> 
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  style={{ cursor: 'pointer' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ cursor: 'pointer' }} onClick={() => navigate(trainer.url)}>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{trainer.name}</h3>
                    <p className="text-blue-600">{trainer.role}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {trainer.expertise.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-blue-600">Course Materials</h2>
            <p className="text-xl text-gray-700 mb-12">Access comprehensive learning resources</p>
            
            <a
              href="https://drive.google.com/drive/folders/16EITLlq-pERT7SvGO5T26Kj1kew-8d9P"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
            >
              <Download className="w-5 h-5" />
              Access Course Materials
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200">
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
                  <a href="mailto:principal@vcet.ac.in" className="text-gray-600 hover:text-blue-600 transition">
                    principal@vcet.ac.in
                  </a>
                </li>
                <li className="text-gray-600">+91 9994994991</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Follow Us</h3>
              <div className="flex gap-6">
                <a href="mailto:principal@vcet.ac.in" className="text-blue-600 hover:text-blue-700 transition">
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

export default Aad;