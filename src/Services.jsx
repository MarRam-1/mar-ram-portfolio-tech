import React from "react";
import translations from "./i18n/translations";
import { useLanguage } from "./context/LanguageContext";
import servicePricing from "./data/services";
import { WHATSAPP_URL } from "./constants";

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang].services;
  const prices = [servicePricing.websites[lang], servicePricing.coordination[lang]];

  return (
    <section className="services-section">
      <div className="container">
        <h3 className="section-title mb-2">{t.sectionTitle}</h3>
        <p className="services-guarantee text-center mb-1">{t.guarantee}</p>
        <p className="services-guarantee text-center mb-4">{t.remoteNote}</p>
        <div className="row">
          {t.items.map((service, i) => (
            <div key={service.title} className="col-md-6">
              <div className="card shadow service-card">
                <div className="card-body">
                  {service.eyebrow && <p className="service-eyebrow">{service.eyebrow}</p>}
                  <h5 className="card-title service-title">{service.title}</h5>
                  <p className="card-text text-justify">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="service-footer">
                    <div className="service-price-wrap">
                      <span className="service-price">{prices[i]}</span>
                      {service.deliveryNote && (
                        <span className="service-delivery">{service.deliveryNote}</span>
                      )}
                    </div>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                    >
                      {t.ctaBtn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
