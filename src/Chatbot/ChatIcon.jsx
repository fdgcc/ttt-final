import ChatbotImg from "./chatbot.png";
import "./ChatIcon.css";


const ChatIcon = ({ onClick }) => {
    return (
        <div className="chat-icon" onClick={onClick}>
            <img src={ChatbotImg} alt="Chat Icon" className="chat-icon-img" />
        </div>
    );
};

export default ChatIcon;