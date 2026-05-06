import React from "react";
import ProjectCard from "./ProjectCard";
import DictionaryImg from "./1.png";
import WeatherImg from "./3.png";
import CalaveritaImg from "./2.png";

const projects = [
  {
    img: DictionaryImg,
    title: "Dictionary App",
    url: "https://dictionary-app-mr.netlify.app/",
    description:
      "A React app that lets users look up word definitions, pronunciations, and examples in real time.",
  },
  {
    img: WeatherImg,
    title: "Forecast App",
    url: "https://react-meteo-app-mariana.netlify.app/",
    description:
      "A React weather app that displays current conditions and forecasts based on a searched city.",
  },
  {
    img: CalaveritaImg,
    title: "Poem Generator",
    url: "https://funny-calaverita-generator.netlify.app/",
    description:
      "An AI-powered app that generates personalized traditional Mexican Day of the Dead poems.",
  },
];

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="container">
        <h3 className="section-title mt-5 mb-4">PROJECTS</h3>
        <div className="row">
          {projects.map((project) => (
            <div key={project.title} className="col-sm-6 col-lg-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
