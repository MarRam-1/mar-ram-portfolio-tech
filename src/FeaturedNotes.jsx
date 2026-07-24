import React from "react";
import { Link } from "react-router-dom";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";
import notes from "./data/notes";

// Notas destacadas en Home: la 1, la 3 y la 5 (índices 0, 2 y 4), cada una con su icono.
const featured = [
  { index: 0, icon: "add_task" },
  { index: 2, icon: "communication" },
  { index: 4, icon: "groups" },
];

export default function FeaturedNotes() {
  const { lang } = useLanguage();
  const t = translations[lang].notes;

  return (
    <section className="notes-section">
      <div className="container">
        <h2 className="section-title mb-4">{t.sectionTitle}</h2>
        <div className="notes-preview-grid">
          {featured.map(({ index, icon }) => {
            const note = notes[index];
            return (
              <div key={note.title.en} className="card shadow note-preview-card">
                <div className="card-body">
                  <span className="material-symbols-outlined note-preview-icon" aria-hidden="true">
                    {icon}
                  </span>
                  <h3 className="note-preview-title">{note.title[lang]}</h3>
                  <p className="note-preview-excerpt">{note.excerpt[lang]}</p>
                  <Link to="/coordinacion" className="note-preview-link">
                    {t.readMore}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-4">
          <Link to="/coordinacion" className="btn btn-hero-outline">
            {t.viewAllBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}
