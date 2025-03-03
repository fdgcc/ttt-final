import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import EducationalPlatform from "./fullstack/pages/domainmain"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Slider from "./components/slider";
import Ahalya from "./fullstack/pages/ahalya";
function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Slider />
              
              <Footer />
            </>
          } />
          <Route path="/fullstack" element={<EducationalPlatform />} />
          <Route path="/ahalya" element={<Ahalya />} />
          
        </Routes>
      </main>
    </Router>
  );
}

export default App;
