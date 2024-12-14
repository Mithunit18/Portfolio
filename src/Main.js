import { useEffect } from 'react';
import my_main from './my_main.jpg';
import Typed from 'typed.js';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

const Main = () => {

  useEffect(() => {
    var typed = new Typed(".typed-text", {
      strings: ["Frontend Developer", "Full Stack Developer", "Cricketer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <img
        src={my_main}
        alt="Image"
        style={{ width: "300px", height: "300px", borderRadius: "50%", objectFit: "cover" }}
      />
      <div>
        <h3>Hello, It's me</h3>
        <h1>Mithun M</h1>
        <h3>And I'm a <span className='typed-text'></span></h3>
      </div>
      
      {/* Resume Download Button */}
      <div className="download-resume">
        <a href="/my resume.pdf" download>
          <button style={buttonStyle}>Download My Resume</button>
        </a>
      </div>

      <About />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
};

// Optional styling for the button
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  textDecoration: "none",
};

export default Main;
