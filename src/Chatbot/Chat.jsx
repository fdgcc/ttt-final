import React, { useState } from "react";
import Chatbot from "./Chatbot";
import FAQ from "./FAQ";
import "./Chat.css";

const Chat = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="chat-box">
      {!selectedOption ? (
        <div className="options-container">
          <h2>Chatbot Options</h2>
          <button className="option-button" onClick={() => setSelectedOption("faq")}>
            FAQ
          </button>
          <button className="option-button" onClick={() => setSelectedOption("chatbot")}>
            Chatbot
          </button>
        </div>
      ) : (
        <>
          {selectedOption === "faq" ? <FAQ /> : <Chatbot />}
        </>
      )}
    </div>
  );
};

export default Chat;
