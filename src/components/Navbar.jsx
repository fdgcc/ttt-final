import { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Added animation support
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ Icons for mobile menu
import Button from "./Button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Hierarchy", path: "/hierarchy" },
  { name: "Domain", path: "/domain" },
  { name: "Slider", path: "/slider" },
  { name: "Testimonial Slider", path: "/testimonialslider" },
  { name: "Contact", path: "/contact" },
];

const domainCategories = [
  { name: "Fullstack", image: "/img/image.png", path: "/fullstack" },
  { name: "AR/VR", image: "/img/image.png" },
  { name: "AI/ML", image: "/img/image.png" },
  { name: "Cloud Computing", image: "/img/image.png" },
  { name: "Mobile App Development", image: "/img/image.png" },
  { name: "Gen AI", image: "/img/image.png" },
  { name: "Data Analytics", image: "/img/image.png" },
];

const NavBar = () => {
  const [showDomains, setShowDomains] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-black/90 backdrop-blur-lg shadow-lg">
      {/* ✅ Top NavBar */}
      <header className="w-full flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/img/Vcetlogo.jpg" alt="logo" className="w-12" />
        </div>

        {/* ✅ Desktop Nav Items */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => {
                if (item.name === "Domain") {
                  setShowDomains(!showDomains);
                } else {
                  navigate(item.path);
                  setShowDomains(false); // Close domains dropdown if open
                }
              }}
              className="relative px-4 py-2 text-white font-semibold uppercase transition-all duration-300 hover:text-blue-400 group"
              whileHover={{ scale: 1.1 }}
            >
              {item.name}
              {/* 🔥 Underline Effect */}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </div>

        {/* ✅ Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* ✅ Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center bg-black/80 py-4 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (item.name === "Domain") {
                  setShowDomains(!showDomains);
                } else {
                  navigate(item.path);
                  setShowDomains(false); // Close dropdown
                  setIsMobileMenuOpen(false); // Close mobile menu
                }
              }}
              className="text-white font-semibold text-lg uppercase hover:text-blue-400 transition-all"
            >
              {item.name}
            </button>
          ))}
        </motion.div>
      )}

      {/* ✅ Cool Animated Dropdown for Domains */}
      {showDomains && (
        <motion.div
          className="absolute top-full left-0 w-full bg-black/90 p-6 grid grid-cols-3 gap-4 transition-all duration-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {domainCategories.map((domain, index) => (
            <motion.div
              key={index}
              className="relative flex items-center justify-center h-40 bg-cover bg-center text-white text-2xl font-extrabold cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300"
              style={{ backgroundImage: `url(${domain.image})` }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                if (domain.path) {
                  navigate(domain.path);
                  setShowDomains(false);
                }
              }}
            >
              {domain.name}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
