import React from "react";
import "./Project.css" 

const projects = [
  {
    link:"https://github.com/SakshamManav/Instagram-Clone",
    title: "Instagram Clone",
    description: "Built an Instagram Clone using the MERN stack with real-time messaging, authentication, and post-sharing.",
  },
  {
    link:"https://github.com/SakshamManav/Chrome-Extension-Weather",
    title: "Chrome Extensions",
    description: "Developed multiple Chrome extensions, including a weather extension, random jokes generator and game (tic-tac-toe etc.) extensions.",
  },
  {
    link:"#",
    title: "Virtual Query Management System",
    description: "A system that allows users to book slots for services like hospitals and banks to avoid long queues.",
  },
  // {
  //   title:"Small Projects",
  //   description:"Some small projects like Weather App, Minion Translator, Currency Converter etc."
  // }
];

const Project = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <a href={project.link} key={index} target="_blank" rel="noreferrer" className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
