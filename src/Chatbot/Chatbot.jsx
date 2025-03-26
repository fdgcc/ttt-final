import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    setMessages((prev) => [
      ...prev,
      { text: input, sender: "user" },
    ]);

    const aiResponse = await getAIResponse(input);

    setMessages((prev) => [
      ...prev,
      { text: aiResponse, sender: "ai" },
    ]);

    setInput("");
  };

  const getAIResponse = async (prompt) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return `AI: You said "${prompt}". How can I assist you further?`;
  };

  return (
    <div className="chat-window">
      <div className="message-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user-message" : "ai-message"}`}
          >
            <div className="bubble">{msg.text}</div>
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
