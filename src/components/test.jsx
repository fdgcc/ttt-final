import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./test.css"; // Updated CSS file

const professionals = [
  {
    icon: "img/clogo.png", // Path to your local image

      "name": "Chella Software",
      //"position": "THE FINANCIAL MARKETS SPECIALIST",
      "testimonial": "THE FINANCIAL MARKETS SPECIALIST."
   },
   {
    "icon": "img/dci.JPG", // Example image
    "name": "Dotcom Infoway",
   // "position": "Leading IT & Digital Marketing Company, Madurai",
    "testimonial": "Dotcom Infoway pioneers IT solutions and digital marketing, driving business growth with innovation."
},
{
  "icon": "img/chainlogo.JPG", // Example image
  "name": "ChainSys",
  //"position": "Enterprise Data Management & Digital Solutions, Madurai",
  "testimonial": "Discover ChainSys' journey of innovation, delivering excellence in data management and digital transformation."
},

  {
    icon: "img/Capture.JPG",
    name: "Tarcin Robotic",
    //position: "Finance Head, Money Matters",
    testimonial: "Empowering Excellence Through Technology, Innovation and Education",
  },
  {
    icon: "img/bea.JPG",
    name: "Beauroi",
    //position: "Startup Founder, NextGen AI",
    testimonial: "Innovate & Conquer",
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
      <div className="slider-wrapper">
        <Slider {...settings}>
          {professionals.map((person, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-image-container">
                <img
                  src={person.icon}
                  alt={person.name}
                  className="icon"
                />
              </div>
              <p className="testimonial-text">"{person.testimonial}"</p>
              <h3 className="testimonial-name">{person.name}</h3>
              <h4 className="testimonial-position">{person.position}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
