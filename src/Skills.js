import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaNode,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "Python", icon: <FaPython className="text-blue-400 text-4xl" /> },
  { name: "Java", icon: <FaJava className="text-red-500 text-4xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-indigo-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNode className="text-green-600 text-4xl" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
];

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10" data-aos="fade-up">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">My <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent font-extrabold">Skills</span></h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-xl flex flex-col items-center shadow-sm justify-center hover:scale-105 transform transition hover:shadow-cyan-500 animate-pulse"
          >
            {skill.icon}
            <p className="text-white mt-2 text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
