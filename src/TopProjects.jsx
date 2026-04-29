import React from "react";
import CalaveritaImg from "./2.png";
import WeatherImg from "./3.png";
import ProjectCard from "./ProjectCard";

export default function TopProjects() {
  return (
    <div className="top-projects w-75 m-auto">
      <h3 className="text-center">Some of my latest projects</h3>
      <div className="card-deck d-flex justify-content-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
