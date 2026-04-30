import React from "react";
import CalaveritaImg from "./2.png";
import WeatherImg from "./3.png";
import ProjectCard from "./ProjectCard";
import DictionaryImg from "./1.png";

export default function TopProjects() {
  return (
    <div className="top-projects w-75 m-auto">
      <h3 className="section-title m-4 mt-5">PROJECT HIGHLIGHTS</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <ProjectCard
              img={DictionaryImg}
              title="Dictionary App"
              url="https://dictionary-app-mr.netlify.app/"
              description="A React-based dictionary app that lets users look up word definitions, pronunciations, and examples in real time."
            />
          </div>
          <div className="col-sm">
            <ProjectCard
              img={WeatherImg}
              title="Forecast App"
              url="https://react-meteo-app-mariana.netlify.app/"
              description="A React weather app that displays current conditions and forecasts based on a searched city."
            />
          </div>
          <div className="col-sm">
            <ProjectCard
              img={CalaveritaImg}
              title="Poem Generator"
              url="https://funny-calaverita-generator.netlify.app/"
              description="An AI-powered app that generates personalized traditional Mexican Day of the Dead poems."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
