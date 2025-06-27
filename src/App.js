
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-800 mx-auto w-full text-white">
      <Header />
      <Main/> {/* Optional: give top padding if Header is fixed */}
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
