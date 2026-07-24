import React from "react";
import { Helmet } from "react-helmet-async";
import profileImg from "./Mar  About BG.jpg";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";
import { WHATSAPP_URL, SITE_URL } from "./constants";

const techSkills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS",
  "Python",
  "Responsive Design",
  "REST APIs",
  "AI Tools",
];

const tools = [
  "Google Workspace",
  "Microsoft Office",
  "Excel",
  "Trello",
  "Notion",
  "Canva",
  "Git",
  "GitHub",
];

export default function About() {
  const { lang } = useLanguage();
  const meta = translations[lang].meta.about;
  const t = translations[lang].about;
  const url = `${SITE_URL}/about`;
  const image = `${SITE_URL}/MR-logo.png`;

  return (
    <div className="about-page">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="profile" />
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
      <section className="about-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 about-text">
              <h1 className="about-name ">
                {t.greeting} <span>{t.greetingName}</span>
              </h1>
              <p className="text-justify">{t.p1}</p>
              <p className="text-justify">{t.p2}</p>
              <p className="text-justify">{t.p3}</p>
              <p className="text-justify">{t.p4}</p>
              <p className="about-differentiator">{t.differentiator}</p>
              <p className="text-justify">{t.closing}</p>
              <div className="about-cta-buttons mt-2">
                <a
                  href="/CV-Mariana-Ramirez.pdf"
                  download
                  className="btn about-download-btn"
                >
                  {t.downloadCv}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  {t.workTogetherBtn}
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src={profileImg}
                alt={t.photoAlt}
                className="about-photo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CV */}
      <section className="about-cv">
        <div className="container text-center">
          <h2 className="section-title">{t.techTitle}</h2>
          <div className="about-skills-tech">
            {techSkills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>

          <h2 className="section-title mt-5">{t.toolsTitle}</h2>
          <div className="about-skills-tools">
            {tools.map((tool) => (
              <span key={tool} className="skill-tag skill-tag-tool">
                {tool}
              </span>
            ))}
          </div>

          <h2 className="section-title mt-5">{t.softTitle}</h2>
          <ul className="about-skills-soft">
            {t.softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h2 className="section-title mt-5">{t.eduTitle}</h2>
          <div
            className="edu-timeline"
            style={{ gridTemplateColumns: `repeat(${t.education.length}, 1fr)` }}
          >
            <div
              className="edu-timeline-line"
              style={{ gridColumn: `1 / span ${t.education.length}` }}
              aria-hidden="true"
            />
            {t.education.map((item, i) => {
              const variant = i % 2 === 0 ? "top" : "bottom";
              const col = i + 1;
              const card = (
                <div className="edu-timeline-card">
                  <strong>{item.title}</strong>
                  <span>{item.institution}</span>
                </div>
              );
              return (
                <div key={item.title} className="edu-timeline-item">
                  <div
                    className="edu-timeline-cell edu-timeline-cell-top"
                    style={{ gridColumn: col, gridRow: 1 }}
                  >
                    {variant === "top" && (
                      <>
                        {card}
                        <span className="edu-timeline-connector" />
                      </>
                    )}
                  </div>
                  <div className="edu-timeline-node" style={{ gridColumn: col, gridRow: 2 }}>
                    <span className="edu-timeline-year">{item.year}</span>
                    <span className="edu-timeline-dot" />
                  </div>
                  <div
                    className="edu-timeline-cell edu-timeline-cell-bottom"
                    style={{ gridColumn: col, gridRow: 3 }}
                  >
                    {variant === "bottom" && (
                      <>
                        <span className="edu-timeline-connector" />
                        {card}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
