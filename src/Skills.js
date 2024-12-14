import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-heading">My Skills</h1>
      <div className="skill-set">
        <div className="skill">
          <FaHtml5 className="skill-icon html" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <FaCss3Alt className="skill-icon css" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <FaJs className="skill-icon js" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaReact className="skill-icon react" />
          <p>React</p>
        </div>
        <div className="skill">
          <FaPython className="skill-icon python" />
          <p>Python</p>
        </div>
        <div className="skill">
          <FaJava className="skill-icon java" />
          <p>Java</p>
        </div>
        <div className="skill">
          <SiCplusplus className="skill-icon cpp" />
          <p>C++</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
