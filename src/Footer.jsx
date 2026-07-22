import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";
import { WHATSAPP_URL } from "./constants";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="footer">
      <div className="container text-center">
        <h3 className="footer-title">{t.title}</h3>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp footer-whatsapp-btn"
        >
          {t.ctaBtn}
        </a>

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
          <a
            href={WHATSAPP_URL}
            className="footer-link footer-link-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>

        <p className="footer-copy">
          © 2026 Mariana Ramírez &nbsp;·&nbsp; {t.openSource}{" "}
          <a
            href="https://github.com/MarRam-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          &nbsp;·&nbsp; {t.copy}
        </p>
      </div>
    </footer>
  );
}
