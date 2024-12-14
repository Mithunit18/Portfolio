import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Main from "./Main";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;