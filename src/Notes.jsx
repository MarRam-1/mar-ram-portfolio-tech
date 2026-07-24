import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";
import { SITE_URL } from "./constants";
import notes from "./data/notes";

function NoteBody({ blocks }) {
  return blocks.map((block, i) =>
    block.type === "ul" ? (
      <ul key={i} className="note-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ) : (
      <p key={i} className="note-text text-justify">
        {block.text}
      </p>
    )
  );
}

function NoteCard({ note, lang, readMore, readLess }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card shadow note-card">
      <div className="card-body">
        <h3 className="note-title">{note.title[lang]}</h3>
        {expanded ? (
          <NoteBody blocks={note.body[lang]} />
        ) : (
          <p className="note-text text-justify">{note.excerpt[lang]}</p>
        )}
        <button
          type="button"
          className={`note-toggle${expanded ? " note-toggle-expanded" : ""}`}
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? readLess : readMore}
          <span className="material-symbols-outlined note-toggle-icon" aria-hidden="true">
            expand_more
          </span>
        </button>
      </div>
    </div>
  );
}

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
            <NoteCard
              key={note.title.en}
              note={note}
              lang={lang}
              readMore={t.readMore}
              readLess={t.readLess}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
