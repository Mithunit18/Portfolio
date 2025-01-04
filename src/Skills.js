import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaNode } from "react-icons/fa";
import { SiCplusplus, SiExpress } from "react-icons/si"; // Added SiExpress for Express.js

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon skill-icon-html" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon skill-icon-css" /> },
  { name: "JavaScript", icon: <FaJs className="skill-icon skill-icon-js" /> },
  { name: "React", icon: <FaReact className="skill-icon skill-icon-react" /> },
  { name: "Python", icon: <FaPython className="skill-icon skill-icon-python" /> },
  { name: "Java", icon: <FaJava className="skill-icon skill-icon-java" /> },
  { name: "C++", icon: <SiCplusplus className="skill-icon skill-icon-cpp" /> },
  { name: "Node.js", icon: <FaNode className="skill-icon skill-icon-node" /> },
  { name: "Express", icon: <SiExpress className="skill-icon skill-icon-express" /> }, // Added Express
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-heading">My Skills</h1>
      <div className="skill-set">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
