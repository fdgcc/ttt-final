import React from 'react';
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Chatbot Options</h2>
        <button style={styles.button} onClick={() => navigate("/faq")}>
          FAQ
        </button>
        <button style={styles.button} onClick={() => navigate("/chatbot")}>
          Chatbot
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    width: "50vh",
    backgroundColor: "#f0f0f0",
  },
  box: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#ffffff",
  },
};

export default Chat;
