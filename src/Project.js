import { FaClipboardList, FaBlog, FaCalculator, FaUniversity, FaCircle } from "react-icons/fa";

const Project = () => {

  const projects = [
    {
      name: "TO-DO-List",
      description: "A task management application to keep track of daily activities.",
      icon: <FaClipboardList style={{ color: "#4CAF50" }} />,
      link: "https://github.com/Mithunit18/To-do-list",
    },
    {
      name: "Blog Website",
      description: "A platform for users to create, edit, and share blog posts.",
      icon: <FaBlog style={{ color: "#FF572" }} />,
      link: "https://github.com/Mithunit18/React_blog",
    },
    {
      name: "Calculator",
      description: "A simple yet functional calculator built with React.",
      icon: <FaCalculator style={{ color: "#2196F3" }} />,
      link: "https://github.com/Mithunit18/calculator",
    },
    {
      name: "Mini College Website",
      description: "A website showcasing college details and functionalities.",
      icon: <FaUniversity style={{ color: "#FFC107" }} />,
      link: "https://github.com/Mithunit18/clgwebsite",
    },
    {
      name: "Registration & Login form",
      description: "A secure login and registration form with validation using React.",
      icon: <FaCircle style={{ color: "#795548" }} />,
      link: "https://github.com/Mithunit18/Registration_form",
    }
  ];

  return (
    <div className='project-list'>
      <h2>My Projects</h2>
      <div className="project-scroll-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <span className="project-icon">{project.icon}</span>
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
