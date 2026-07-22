import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./MR-logo.png";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    const collapseEl = document.getElementById("navbarSupportedContent");
    const toggler = document.querySelector(".navbar-toggler");
    if (collapseEl && collapseEl.classList.contains("show")) {
      collapseEl.classList.remove("show");
      toggler?.setAttribute("aria-expanded", "false");
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light${isScrolled ? " navbar-scrolled" : ""}`}>
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Mariana Logo" className="logo-bar" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto align-items-lg-center">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              to="/"
              end
              onClick={closeMobileMenu}
            >
              {t.home}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              to="/about"
              onClick={closeMobileMenu}
            >
              {t.about}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              to="/projects"
              onClick={closeMobileMenu}
            >
              {t.projects}
            </NavLink>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="lang-toggle"
              onClick={toggleLang}
              aria-label="Toggle language"
            >
              {t.langToggle}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
