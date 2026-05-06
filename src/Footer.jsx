import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="footer-tagline">
          If you're looking for a passionate, organized, and easy-going
          professional, I'd love to connect!
        </p>

        <div className="footer-links">
          <a href="mailto:mariana.rmrz.96@gmail.com" className="footer-link footer-link-email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://www.linkedin.com/in/mariana-ramirez-psicologa/"
            className="footer-link footer-link-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/MarRam-1"
            className="footer-link footer-link-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <p className="footer-copy">
          © 2026 Mariana Ramírez &nbsp;·&nbsp; Open source on{" "}
          <a
            href="https://github.com/MarRam-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          &nbsp;·&nbsp; Built with React · Deployed on Netlify
        </p>
      </div>
    </footer>
  );
}
