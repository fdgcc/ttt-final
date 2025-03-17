import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./test.css"; // Updated CSS file

const professionals = [
  {
    icon: "👨‍💼",
    name: "John Doe",
    position: "CEO, Tech Innovations",
    testimonial: "Tech Innovations transformed the industry with cutting-edge AI solutions.",
  },
  {
    icon: "👩‍💻",
    name: "Jane Smith",
    position: "Lead Developer, CodeCrafters",
    testimonial: "CodeCrafters provided me with an excellent opportunity to innovate and grow.",
  },
  {
    icon: "👨‍🔬",
    name: "Dr. Robert Brown",
    position: "Senior Scientist, Future Labs",
    testimonial: "At Future Labs, we are constantly pushing the boundaries of scientific research.",
  },
  {
    icon: "📊",
    name: "Alice Johnson",
    position: "Finance Head, Money Matters",
    testimonial: "Money Matters helped revolutionize the fintech industry with smart solutions.",
  },
  {
    icon: "🚀",
    name: "Michael Lee",
    position: "Startup Founder, NextGen AI",
    testimonial: "NextGen AI is dedicated to bringing artificial intelligence to every business.",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider-container">
      <div className="slider-wrapper" style={{ paddingBottom: 0, marginBottom: 0 }}>
        <Slider {...settings}>
          {professionals.map((person, index) => (
            <div className="testimonial-card" key={index}>
              <div className="icon">{person.icon}</div>
              <h3>{person.name}</h3>
              <h4>{person.position}</h4>
              <p>"{person.testimonial}"</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
