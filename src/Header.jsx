import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import profilePhoto from "./Mariana Hero.jpg";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";
import { WHATSAPP_URL } from "./constants";
import "./Hero.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Header() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const prefersReducedMotion = useReducedMotion();

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob hero-blob-1" />
        <span className="hero-blob hero-blob-2" />
        <span className="hero-blob hero-blob-3" />
      </div>

      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
          variants={containerVariants}
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            {t.titleLead}{" "}
            <span className="hero-title-accent">{t.titleHighlight}</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            {t.subtitle}
          </motion.p>
          <motion.div className="hero-actions" variants={itemVariants}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              {t.ctaQuote}
            </a>
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="btn btn-hero-outline"
            >
              {t.ctaProjects}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-photo-wrap"
          initial={
            prefersReducedMotion ? undefined : { opacity: 0, scale: 0.9, y: 20 }
          }
          animate={
            prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }
          }
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-photo-glass">
            <img src={profilePhoto} alt={t.photoAlt} />
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        className="hero-scroll-indicator"
        onClick={handleScrollToProjects}
        aria-label={t.ctaProjects}
      >
        <span className="chevron" aria-hidden="true" />
      </button>
    </header>
  );
}
