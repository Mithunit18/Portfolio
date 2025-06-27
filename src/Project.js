import { FaClipboardList, FaBlog, FaCircle, FaComments } from "react-icons/fa";
import { RefreshCcw, Sun } from 'lucide-react'

const Project = () => {

  const projects = [
    {
      name: "TO-DO-List",
      description: "A task management application to keep track of daily activities.",
      icon: <FaClipboardList style={{ color: "#4CAF50" }}  className="text-4xl"/>,
      link: "https://github.com/Mithunit18/To-do-list",
    },
    {
      name: "Blog Website",
      description: "A platform for users to create, edit, and share blog posts.",
      icon: <FaBlog style={{ color: "#FF572" }}  className="text-4xl"/>,
      link: "https://github.com/Mithunit18/React_blog",
    },
    {
      name: "Weather App",
      description: "A sleek, responsive weather application that fetches real-time weather data for any city using OpenWeatherMap API.",
      icon: <Sun style={{ color: "yellow" }} className="text-4xl" />,
      link: "https://github.com/Mithunit18/Weather_App",
    },
    {
      name: "Stagyn.io",
      description: "A real-time event management platform designed to handle attendee registration, QR code-based check-ins, and dynamic privilege access.",
      icon: <RefreshCcw style={{ color: "red" }} className="text-4xl" />,
      link: "https://aurelionfutureforge.com/stagyn",
    },
    {
      name: "Registration & Login form",
      description: "A secure login and registration form with validation using React.",
      icon: <FaCircle style={{ color: "#795548" }} className="text-4xl" />,
      link: "https://github.com/Mithunit18/Registration_form",
    },
    {
      name: "Realtime Chat App",
      description: "A chat application with real-time messaging using WebSockets.",
      icon: <FaComments style={{ color: "#673AB7" }} aria-label="Chat App Icon" className="text-4xl" /> ,
      link:"https://chat-app-gwkm.onrender.com",
    },
  ];

  return (
    <div className='max-w-6xl mx-auto pt-8 px-4 py-10 text-white font-bold' data-aos="fade-up">
      <h2 className="text-3xl text-center">My <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent font-extrabold">Projects</span></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pt-12 ">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-gray-700 rounded-xl shadow-sm hover:shadow-cyan-500 hover:scale-105 transform transition animate-pulse">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 flex flex-col items-center justify-center py-6 "
            >
              {project.icon}
              <h3 className="pt-4 text-gray-300 ">{project.name}</h3>
              <p className="pt-2 text-white font-normal">{project.description}</p>
              
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
