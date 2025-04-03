import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
import "./slider.css"; // Importing styles

const slides = [
  { type: "image", src: "img/first.jpg", description: "Our HOD signed an MoU with Dotcom Company to enhance student learning, industry exposure, and skill development."},
  { type: "image", src: "img/chainsys.jpeg", description: "TTT Coordinator, Mr. K.R. Senthil Murugan, AP/CSE, visited Chainsys Software Pvt. Ltd. at ELCOT IT Park, Madurai, on February 19, 2025, for an intern project discussion." },
  { type: "image", src: "img/ms.jpg", description: "Our Coordinator in Beauroi meet" },
  { type: "image", src: "img/tarcin1.jpg", description: "Tarcin Robotics, K K Nagar, Madurai, hosted a Technical Discussion on 28.01.2025, covering AI, robotics, and IoT. Experts shared industry trends, career opportunities, with interactive Q&A sessions." },
  { type: "image", src: "img/haso.jpg", description: "Projects Discussion via Google Meet by Haso Technology, Madurai on 05.02.2025, providing valuable insights and collaborative opportunities for innovation and development." },
  { type: "image", src: "img/beauroi.jpg", description: "The BEUROI meeting with trainers focused on discussing the intern project, covering key objectives, progress updates, and future milestones." },
  { type: "image", src: "img/trainer.jpg", description: "Our trainers are working on BEUROI internship projects, providing hands-on support and expertise to help interns develop their skills." },
  { type: "image", src: "img/aiml1.jpg", description: "AIML Project Review-1" },
  { type: "image", src: "img/ai1.jpg", description: "AIML Project Review-1" },
  { type: "image", src: "img/c1.jpg", description: "Cloud Computing Project Review-1" },
  { type: "image", src: "img/arvr1.jpg", description: "ARVR Project Review-1" },
  { type: "image", src: "img/mp1.jpg", description: "Mobile App Project Review-1" },
  { type: "image", src: "img/m1.jpg", description: "Mobile App Project Review-1" },
  { type: "image", src: "img/da1.jpg", description: "Data Analytics Project Review-1" },
  { type: "image", src: "img/aiml2.jpg", description: "AIML Project Review-2" },
  { type: "image", src: "img/ai2.jpg", description: "AIML Project Review-2" },
  { type: "image", src: "img/mp2.jpg", description: "Mobile App Project Review-2" },
  { type: "image", src: "img/c2.jpg", description: "Cloud Computing Project Review-2" },
  { type: "image", src: "img/da2.jpg", description: "Data Analytics Project Review-2" },
  { type: "image", src: "img/da22.jpg", description: "Data Analytics Project Review-2" },
  { type: "image", src: "img/new.jpg" },
  { 
    type: "video",
    src: "videos/arvr.mp4", 
    description: "Explore the world of AR/VR with our latest advancements in immersive technology."
  }
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="slider-container">
      <button className="arrow left-arrow enhanced-arrow" onClick={goToPrevious}>
        <FaChevronLeft />
      </button>
      
      <div className="slider">
        {slides.map((slide, index) => (
          <div key={index} className={index === currentIndex ? "slide active" : "slide hidden"}>
            {slide.type === "image" ? (
              <img src={slide.src} alt={`Slide ${index + 1}`} className="full-width slide-image" />
            ) : (
              <video controls autoPlay loop className="full-width slide-video">
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="slide-description">{slide.description}</div>
          </div>
        ))}
      </div>
      
      <button className="arrow right-arrow enhanced-arrow" onClick={goToNext}>
        <FaChevronRight />
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active-dot" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

    </div>
  );
}
