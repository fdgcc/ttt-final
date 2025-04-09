import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";

import VideoPreview from "./VideoPreview";
import ChatIcon from "../Chatbot/ChatIcon";
import Chat from "../Chatbot/Chat";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isChatOpen, setChatOpen] = useState(false);

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
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  const getVideoSrc = () => `videos/vcet.mp4`;

  return (
    <div className="relative h-screen w-screen overflow-x-hidden bg-black">
      {/* Loader */}
      {loading && (
        <div className="flex-center absolute z-[100] h-screen w-screen bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      {/* Video Section */}
      <div id="video-frame" className="relative z-10 h-screen w-screen overflow-hidden">
        {/* Desktop/Tablet: Fullscreen */}
        <video
          src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
          onLoadedData={handleVideoLoad}
        />

        {/* Mobile: Minimized */}
        <div className="flex md:hidden h-full w-full justify-center items-center">
          <video
            src={getVideoSrc()}
            autoPlay
            loop
            muted
            playsInline
            className="w-[300px] h-[200px] rounded-lg shadow-lg object-cover"
            onLoadedData={handleVideoLoad}
          />
        </div>
      </div>

      {/* Mini video preview click area (optional) */}
      <div className="absolute top-5 left-5 z-50 hidden md:block">
        <VideoPreview>
          <div
            onClick={handleMiniVdClick}
            className="cursor-pointer transition-all hover:scale-105"
          >
            <video
              ref={nextVdRef}
              src={getVideoSrc()}
              loop
              muted
              playsInline
              className="w-32 h-20 object-cover rounded-md"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </VideoPreview>
      </div>

      {/* Chatbot */}
      <div className="App fixed bottom-5 right-5 z-50">
        <ChatIcon
          onClick={() => setChatOpen(!isChatOpen)}
        />
        {isChatOpen && <Chat onClose={() => setChatOpen(false)} />}
      </div>
    </div>
  );
};

export default Hero;
