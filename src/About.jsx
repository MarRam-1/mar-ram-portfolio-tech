import React from "react";
import { Helmet } from "react-helmet-async";
import profileImg from "./Mar  About BG.png";

const techSkills = [
  "HTML5",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Responsive Design",
  "REST APIs",
  "Git",
  "GitHub",
  "VS Code",
  "AI Tools",
];

const softSkills = [
  "Organizational Development",
  "Leadership & Team Management",
  "Project Management",
  "Emotional Intelligence",
  "Effective Communication",
  "Employee Engagement",
  "Continuous Learning",
  "Positive Organizational Culture",
];

const education = [
  {
    title: "Front-End Developer",
    institution: "SheCodes",
    year: "2026",
  },
  {
    title: "Internal Communication & Employee Experience",
    institution: "Eco Consultores",
    year: "2022",
  },
  {
    title: "Psychology Degree",
    institution: "ITESO",
    year: "2014 – 2019",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About | Mariana Ramírez — Front-End Developer & HR Professional</title>
        <meta name="description" content="Learn about Mariana Ramírez — an HR professional with 8 years of experience and a certified Front-End Developer skilled in React, JavaScript, and Python." />
      </Helmet>
      <section className="about-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 about-text">
              <h2 className="about-name ">
                Hi! I'm <span>Mar</span>
              </h2>
              <p className="text-justify">
                An HR professional with 8 years of experience dedicated to
                fostering positive workplace environments and elevating the
                employee experience, now also a{" "}
                <strong>certified Front-End Developer</strong>.
              </p>
              <p className="text-justify">
                Throughout my career, I've gained strong expertise in employee
                relations, performance management, talent acquisition, and
                operational efficiency. I also bring valuable training in search
                and rescue, first aid, and psychological first aid, which
                strengthens my ability to support others in challenging
                situations.
              </p>
              <p className="text-justify">
                Highly organized and detail-oriented, I combine people-centered
                experience with technical knowledge to bring a unique
                perspective to everything I do.
              </p>
              <a
                href="/CV-Mariana-Ramirez.pdf"
                download
                className="btn about-download-btn mt-2"
              >
                Download CV
              </a>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src={profileImg}
                alt="Mariana Ramirez"
                className="about-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CV */}
      <section className="about-cv">
        <div className="container text-center">
          <h3 className="section-title">Technical Skills</h3>
          <div className="about-skills-tech">
            {techSkills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>

          <h3 className="section-title mt-5">Soft Skills</h3>
          <ul className="about-skills-soft">
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h3 className="section-title mt-5">Education & Certifications</h3>
          <div className="about-education">
            {education.map((item) => (
              <div key={item.title} className="edu-item">
                <span className="edu-year">{item.year}</span>
                <div className="edu-dot" />
                <div className="edu-info">
                  <strong>{item.title}</strong>
                  <span>{item.institution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
