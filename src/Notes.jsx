import React from "react";
import { Helmet } from "react-helmet-async";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";
import { SITE_URL } from "./constants";
import notes from "./data/notes";

export default function Notes() {
  const { lang } = useLanguage();
  const meta = translations[lang].meta.coordination;
  const t = translations[lang].notes;
  const url = `${SITE_URL}/coordinacion`;
  const image = `${SITE_URL}/MR-logo.png`;

  return (
    <div className="notes-page">
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
        <h1 className="section-title mt-5 mb-2">{t.pageTitle}</h1>
        <p className="notes-subtitle text-center mb-4">{t.pageSubtitle}</p>
        <div className="notes-list">
          {notes.map((note) => (
            <div key={note.title.en} className="card shadow note-card">
              <div className="card-body">
                <h3 className="note-title">{note.title[lang]}</h3>
                <p className="note-text text-justify">{note.text[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
