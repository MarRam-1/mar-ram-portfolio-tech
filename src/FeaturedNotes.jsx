import React from "react";
import { Link } from "react-router-dom";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";
import notes from "./data/notes";

// Notas destacadas en Home: la 1, la 3 y la 5 (índices 0, 2 y 4).
const featuredIndexes = [0, 2, 4];

export default function FeaturedNotes() {
  const { lang } = useLanguage();
  const t = translations[lang].notes;

  return (
    <section className="notes-section">
      <div className="container">
        <h3 className="section-title mb-4">{t.sectionTitle}</h3>
        <div className="notes-preview-grid">
          {featuredIndexes.map((i) => {
            const note = notes[i];
            return (
              <div key={note.title.en} className="card shadow note-preview-card">
                <div className="card-body">
                  <h5 className="note-preview-title">{note.title[lang]}</h5>
                  <p className="note-preview-excerpt">{note.excerpt[lang]}</p>
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
