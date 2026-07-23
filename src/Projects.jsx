import React from "react";
import { Helmet } from "react-helmet-async";
import ProjectCard from "./ProjectCard";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";
import { featuredProjects, moreProjects } from "./data/projects";
import testimonials from "./data/testimonials";
import { SITE_URL } from "./constants";

export default function Projects() {
  const { lang } = useLanguage();
  const meta = translations[lang].meta.projects;
  const t = translations[lang].projectsSection;
  const findQuote = (title) => testimonials.find((item) => item.business === title)?.quote[lang];
  const url = `${SITE_URL}/sitios-web`;
  const image = `${SITE_URL}/MR-logo.png`;

  return (
    <div className="projects-page">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content={lang === "es" ? "es_MX" : "en_US"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <div className="container">
        <h1 className="sr-only">{t.pageHeading}</h1>
        <h3 className="section-title mt-5 mb-4">{t.featuredTitle}</h3>
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

        <h3 className="section-title mt-5 mb-4">{t.moreTitle}</h3>
        <div className="row">
          {moreProjects.map((project) => (
            <div key={project.title} className="col-sm-6 col-lg-4">
              <ProjectCard
                img={project.img}
                title={project.title}
                url={project.url}
                description={project.description[lang]}
                tags={project.tags[lang]}
                visitLabel={t.visit}
                screenshotLabel={t.screenshotOf}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
