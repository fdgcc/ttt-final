import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import EducationalPlatform from "./fullstack/pages/domainmain"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import TestimonialSlider from "./components/test";
import Footer from "./components/Footer";
import Slider from "./components/slider";
import Ahalya from "./fullstack/pages/ahalya";
import Rubypreethi from "./fullstack/pages/rubipreethi";
import Shekkina from "./fullstack/pages/shekkina";
import Balaji from "./fullstack/pages/balaji";
import Harini from "./fullstack/pages/harini";
import Hebsiba from "./fullstack/pages/hebsiba";
import Minojini from "./fullstack/pages/minojini";
import Shapna from "./fullstack/pages/shapna";
import Varshini from "./fullstack/pages/varshini";
import Vinothkumar from "./fullstack/pages/vinothkumar";
import Naveenkumar from "./fullstack/pages/naveenkumaran";

import ChatIcon from "./Chatbot/ChatIcon";
import Chat from "./Chatbot/Chat"; // Import the Chat component
import Chatbot from "./Chatbot/Chatbot";


function App() {

  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Slider />
                <TestimonialSlider /> {/* Added TestimonialSlider here */}
                <Footer />
              </>
            }
          />
          <Route path="/fullstack" element={<EducationalPlatform />} />
          <Route path="/rubypreethi" element={<Rubypreethi />} />
          <Route path="/ahalya" element={<Ahalya />} />
          <Route path="/shekkina"element={<Shekkina />} />
          <Route path="/balaji"element={<Balaji/>} />
          <Route path="/harini"element={<Harini/>} />
          <Route path="/vinoth"element={<Vinothkumar/>} />
          <Route path="/naveenkumaran"element={<Naveenkumar/>} />
          <Route path="/minojini"element={<Minojini/>} />
          <Route path="/shapna"element={<Shapna/>} />
          <Route path="/varshini"element={<Varshini/>} />
          <Route path="/hebsiba"element={<Hebsiba/>} />
          

          <Route path="/chat" element={<Chat />} />
          <Route path="/chatbot" element={<Chatbot />} />

        </Routes>

      </main>
    </Router>
    
  );
}

export default App;
