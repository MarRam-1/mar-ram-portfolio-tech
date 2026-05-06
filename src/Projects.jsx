import React from "react";
import { Helmet } from "react-helmet-async";
import ProjectCard from "./ProjectCard";
import DictionaryImg from "./1.png";
import CalaveritaImg from "./2.png";
import WeatherImg from "./3.png";
import Fiat90Img from "./4.png";
import TravelToImg from "./5.png";
import WorldClockImg from "./6.png";
import MareaImg from "./7.png";
import PopulationImg from "./8.png";
import AITravelImg from "./9.png";

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
  {
    img: Fiat90Img,
    title: "Fiat90",
    url: "https://fiat90-2026.netlify.app/",
    description:
      "A website for a spiritual formation program for women, built around prayer, Marian virtues, and community.",
  },
  {
    img: TravelToImg,
    title: "Travel To Jalisco",
    url: "https://travel-project-mr.netlify.app/",
    description:
      "A travel guide showcasing the best destinations, culture, and experiences that Jalisco, Mexico has to offer.",
  },
  {
    img: WorldClockImg,
    title: "World Clock",
    url: "https://world-clock-mr.netlify.app/",
    description:
      "A real-time world clock app that displays the current time across multiple time zones simultaneously.",
  },
  {
    img: MareaImg,
    title: "Marea People Partners",
    url: "https://mareapeoplepartners.com.mx/",
    description:
      "A professional website for an HR consulting firm, focused on people strategy and organizational development.",
  },
  {
    img: PopulationImg,
    title: "Population Per Continent",
    url: "https://replit.com/@marianarmrz/Mariana-Ram-Python-Adv-Final-Project#InternetPopulation.png/",
    description:
      "A Python data analysis project that visualizes global internet population distribution by continent.",
  },
  {
    img: AITravelImg,
    title: "AI Travel Itinerary",
    url: "https://colab.research.google.com/drive/1HV4QfsX7sDv9b_l7GvpylNZ5UPbnUPcs?usp=sharing",
    description:
      "A Python and AI-powered notebook that generates personalized travel itineraries based on user preferences.",
  },
];

export default function Projects() {
  return (
    <div className="projects-page">
      <Helmet>
        <title>Projects | Mariana Ramírez — Front-End Developer</title>
        <meta name="description" content="Explore the projects of Mariana Ramírez — React apps, Python tools, AI-powered experiences, and professional websites." />
      </Helmet>
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
