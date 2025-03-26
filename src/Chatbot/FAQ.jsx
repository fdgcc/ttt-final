import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What are the domains available?",
    answer: "Full Stack, Data Analytics, AI/ML, AR/VR, Cloud Computing, Mobile App Development, Gen-Ai"
  },
  {
    question: "Who are the faculty advisors for each domain?",
    answer: "Full Stack: Mrs.S.Padma Devi \n Data Analytics: Mr. Murali \n AI/ML: Prof. Meena R\nCybersecurity: Dr. Arun Kumar\nCloud Computing: Dr. Priya V"
  },
  {
    question: "Who are the trainer leads for each and every domain?",
    answer: "Full Stack: RUBI PREETHI P\nData Science: NAVIN KUMARAN O H\nAI/ML: HARINI S\nCybersecurity: SHEKKINA PAULIN\nCloud Computing: BALAJI"
  },
  {
    question: "Where can students access the course materials?",
    answer: "Students can access the course materials in the 'Domain Section' of the website."
  },
  {
    question: "How many trainers are there in each domain?",
    answer: "Full Stack: 4 Trainers\nData Science: 3 Trainers\nAI/ML: 3 Trainers\nCybersecurity: 2 Trainers\nCloud Computing: 2 Trainers"
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
