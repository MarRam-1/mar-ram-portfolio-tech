import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";
import { featuredProjects } from "./data/projects";
import testimonials from "./data/testimonials";

export default function TopProjects() {
  const { lang } = useLanguage();
  const t = translations[lang].projectsSection;
  const findQuote = (title) => testimonials.find((item) => item.business === title)?.quote[lang];

  return (
    <section id="projects" className="top-projects w-75 m-auto">
      <h2 className="section-title m-4 mt-5">{t.featuredTitle}</h2>
      <div className="container">
        <div className="row">
          {featuredProjects.map((project) => (
            <div key={project.title} className="col-sm-6 col-lg-4">
              <ProjectCard
                img={project.img}
                title={project.title}
                url={project.url}
                description={project.description[lang]}
                tags={project.tags[lang]}
                resultQuote={findQuote(project.title)}
                visitLabel={t.visit}
                screenshotLabel={t.screenshotOf}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-3 mb-5">
          <Link to="/sitios-web" className="btn btn-hero-outline">
            {t.viewAllBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}
