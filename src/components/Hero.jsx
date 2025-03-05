import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa"; // Icons

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [chatOpen, setChatOpen] = useState(false); // Chatbot toggle state
  const [message, setMessage] = useState(""); // User input state

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  const getVideoSrc = () => `videos/vcet.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc()}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            src={getVideoSrc()}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
      </div>

      {/* Chatbot Button - Floating at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-110 transition-transform duration-300 text-white p-4 rounded-full shadow-lg"
        >
          {chatOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
        </button>
      </div>

      {/* Chatbox with Stylish UI */}
      {chatOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-xl rounded-lg p-4 transition-all duration-300 transform animate-slide-in z-50">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold text-gray-800">Chatbot</h2>
            <button onClick={() => setChatOpen(false)} className="text-gray-600 hover:text-gray-800">
              <FaTimes size={20} />
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="h-56 overflow-y-auto p-2 bg-gray-100 rounded-md">
            <p className="text-gray-500 text-sm">Start chatting with us...</p>
          </div>

          {/* Input Box */}
          <div className="mt-2 flex items-center border rounded-lg p-2 bg-white z-[100] relative shadow-md">
            <input
              type="text"
              className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="text-blue-500 hover:text-blue-700 transition duration-300">
              <FaPaperPlane size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
