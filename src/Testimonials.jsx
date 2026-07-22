import React from "react";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";
import testimonials from "./data/testimonials";

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = translations[lang].testimonials;

  return (
    <section className="testimonials-section">
      <div className="container">
        <h3 className="section-title mb-4">{t.sectionTitle}</h3>
        <div className="row">
          {testimonials.map((item, i) => (
            <div key={i} className="col-md-4">
              <div className="card shadow testimonial-card">
                <div className="card-body">
                  <p className="testimonial-quote">&ldquo;{item.quote[lang]}&rdquo;</p>
                  <p className="testimonial-business">— {item.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
