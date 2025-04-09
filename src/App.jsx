import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import TestimonialSlider from "./components/test";
import Footer from "./components/Footer";
import Slider from "./components/slider";
import App from "./components/About"
import AnimatedTitle from "./components/AnimatedTitle";
import ChatIcon from "./Chatbot/ChatIcon";
import Chat from "./Chatbot/Chat"; // Import the Chat component
import Chatbot from "./Chatbot/Chatbot";
import FAQ from "./Chatbot/FAQ";
import Ahalya from './fullstack/pages/ahalya';
import Balaji from './fullstack/pages/balaji';
import Minojini from './fullstack/pages/minojini';
import Naveenkumar from './fullstack/pages/naveenkumaran';
import Shapna from './fullstack/pages/shapna';
import Vinothkumar from './fullstack/pages/vinothkumar';
import Varshini from './fullstack/pages/varshini';
import Shekkina from './fullstack/pages/shekkina';
import Harini from './fullstack/pages/harini';
import Hebsiba from './fullstack/pages/hebsiba';
import RubiPreethi from './fullstack/pages/rubipreethi'; // Import the RubiPreethi page
import EducationalPlatform from './fullstack/pages/domainmain';
//import DomainButtonsPage from './first';
import Steve from './ml/pages/steve';
import Jesson from './ml/pages/jesson';
import Lerisha from './ml/pages/lerisha';
import Surya from './ml/pages/surya';
import Ml from './ml/pages/mlmain';
import Aad from './android-app/pages/appmain';
import ArVr from './ar-vr/pages/armain';
import Dataanalyst from './data-analyst/pages/damain';
import Dsa from './dsa/pages/dsamain';
import Cloud from './cloud/pages/cmain';
import Vignesh from './ml/pages/vignesh';
import Amrudan from './cloud/pages/amrudan';
import Nandhetha from './cloud/pages/nanthetha';
import Swathi from './cloud/pages/swathi';
import Karmugilan from './data-analyst/pages/karmugilan';
import Nivetha from './data-analyst/pages/nivetha';
import Mohamedshihab from './ar-vr/pages/mohamedshihab';
import Santhoshmrs  from './ar-vr/pages/santhosh';
import Roshinisj from './dsa/pages/roshini';
import Sabreen from './dsa/pages/sabreen';
import Muthis from './dsa/pages/muthiswari';
import Naveenkumark from './dsa/pages/naveenkumark';
import Shurutika from './dsa/pages/shuruthika';
import Akilarani  from './android-app/pages/akilarani';
import Dineshaad from './android-app/pages/dineshkumar';
import Karthiga from './android-app/pages/karthiga';
import Meerashafrin from './android-app/pages/meerashafrin';
import Naganimesh from './android-app/pages/naganimesh';
import Nitheeshlingam from './android-app/pages/nitheeshlingam';
import Swethanp from './android-app/pages/swethanp';

import Shabarrishp from './dsa/pages/shabarrish';
import Roobalakshmi from './dsa/pages/rooba';
import Jayabharathi from './dsa/pages/jayabharathi';
import Preethi from './dsa/pages/preethi';
import VishalOviya from './dsa/pages/vishaloviya';
import Sreevarshini from './dsa/pages/sreevarshini';

import { Import } from 'lucide-react';
import Aadgmeetpage from './android-app/pages/aadgmeet';
import ARVRGmeetpage from './ar-vr/pages/ARVRgmeet';
import CloudGmeetpage from './cloud/pages/Cloudgmeet';
import DAGmeetpage from './data-analyst/pages/DAgmeet';
import FSGmeetpage from './fullstack/pages/FSgmeet';
import MLGmeetpage from './ml/pages/MLgmeet';
import DSAGmeetpage from './dsa/pages/DSAgmeet';



function MainApp() {

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
                <Slider />
                <About />
                
                <TestimonialSlider /> {/* Added TestimonialSlider here */}
                <Footer />
              </>
            }
          />
          <Route path="/hierarchy" element={<About/>} />
          <Route path="/testimonialslider" element={<TestimonialSlider/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/slider" element={<Slider/>} />
          <Route path="/slider" element={<Slider/>} />
          <Route path="/fullstack" element={<EducationalPlatform />} />
          <Route path="/machine-learning" element={<Ml/>} />
      <Route path="/Data-analyst" element={<Dataanalyst/>} />
      <Route path="/cloud-computing" element={<Cloud/>} />
      <Route path="/aad" element={<Aad/>} />
      <Route path="/Arvr" element={<ArVr/>} />
      <Route path="/Dsa" element={<Dsa/>} />
      <Route path="/rubypreethi" element={<RubiPreethi />} />
      <Route path="/balaji" element={<Balaji/>} />
      <Route path="/minojini" element={<Minojini/>} />
      <Route path="/naveenkumaran" element={<Naveenkumar/>} />
      <Route path="/shapna" element={<Shapna/>} />
      <Route path="/shekkina" element={<Shekkina/>} />
      <Route path="/vinoth" element={<Vinothkumar/>} />
      <Route path="/varshini" element={<Varshini/>} />
      <Route path="/ahalya" element={<Ahalya/>} />
      <Route path="/hebsiba" element={<Hebsiba/>} />
      <Route path="/harini" element={<Harini/>} />
      <Route path="/steve" element={<Steve/>} />
      <Route path='/jesson' element={<Jesson/>} />
      <Route path="/lerisha" element={<Lerisha/>}/>
      <Route path="/surya" element={<Surya/>}/>
      <Route path="/vignesh" element={<Vignesh/>}/>
      <Route path='/amrudan' element={<Amrudan/>}/>
      <Route path='/nanthetha' element={<Nandhetha/>}/>
      <Route path='/swathi' element={<Swathi/>}/>
      <Route path="/karmugilan" element={<Karmugilan/>}/>
      <Route path="/nivetha" element={<Nivetha/>}/>
      <Route path="/mohamedshihab" element={<Mohamedshihab/>}/>
      <Route path="/santhosh" element={<Santhoshmrs/>}/>
      <Route path="/sabreen" element={<Sabreen/>}/>
      <Route path="/roshini" element={<Roshinisj/>}/>
      <Route path="/muthiswari" element={<Muthis/>}/>
      <Route path="/naveenkumark" element={<Naveenkumark/>}/>
      <Route path="/shuruthika" element={<Shurutika/>}/>
      <Route path="/akilarani" element={<Akilarani/>}/>
      <Route path="/dineshkumar" element={<Dineshaad/>}/>
      <Route path="/karthiga" element={<Karthiga/>}/>
      <Route path="/naganimesh" element={<Naganimesh/>}/>
      <Route path="/meerashafrin" element={<Meerashafrin/>}/>
      <Route path="/nitheeshlingam" element={<Nitheeshlingam/>}/>
      <Route path="/swethanp" element={<Swethanp/>}/>
     
     <Route path="/shabarrish" element={<Shabarrishp/>}/>
     <Route path="/rooba" element={<Roobalakshmi/>}/>
     <Route path="/jayabharathi" element={<Jayabharathi/>}/>
     <Route path="/preethi" element={<Preethi/>}/>
     <Route path="/vishaloviya" element={<VishalOviya/>}/>
     <Route path="/sreevarshini" element={<Sreevarshini/>}/>
      
      <Route path="/aadgmeet" element={<Aadgmeetpage/>}/>
      <Route path="/ARVRgmeet" element={<ARVRGmeetpage/>}/>
      <Route path="/Cloudgmeet" element={<CloudGmeetpage/>}/>
      <Route path="/DAgmeet" element={<DAGmeetpage/>}/>
      <Route path="/FSgmeet" element={<FSGmeetpage/>}/>
      <Route path="/MLgmeet" element={<MLGmeetpage/>}/>
      <Route path="/DSAgmeet" element={<DSAGmeetpage/>}/>
    

          <Route path="/chat" element={<Chat />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/faq" element={<FAQ />} />

        </Routes>

      </main>
    </Router>
    
  );
}

export default MainApp;
