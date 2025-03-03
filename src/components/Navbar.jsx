import { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const navItems = ["home", "hierarchy", "Domain", "Slider", "Contact"];

const domainCategories = [
  { name: "Fullstack", image: "/img/fullstack.jpeg", path: "/fullstack" },
  { name: "AR/VR", image: "/img/arvr.jpeg" },
  { name: "AI/ML", image: "/img/aiml.jpeg" },
  { name: "Cloud Computing", image: "/img/cloud.jpeg" },
  { name: "Mobile App Development", image: "/img/mobile.jpeg" },
  { name: "Gen AI", image: "/img/genai.jpeg" },
  { name: "Data Analytics", image: "/img/dataanalytics.jpeg" },
];

const NavBar = () => {
  const [showDomains, setShowDomains] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button id="product-button" title="Products" rightIcon={<TiLocationArrow />} />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => item === "Domain" && setShowDomains(!showDomains)}
                  className="nav-hover-btn mx-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {showDomains && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-80 p-6 grid grid-cols-3 gap-4">
          {domainCategories.map((domain, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center h-40 bg-cover bg-center text-white font-bold text-lg cursor-pointer"
              style={{ backgroundImage: `url(${domain.image})` }}
              onClick={() => {
                if (domain.path) {
                  navigate(domain.path);  
                  setShowDomains(false);  
                }
              }}
            >
              {domain.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
