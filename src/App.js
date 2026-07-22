import "./App.css";
import "./Media.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import translations from "./i18n/translations";
import { SITE_URL } from "./constants";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Services from "./Services";
import TopProjects from "./TopProjects";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";

function Home() {
  const { lang } = useLanguage();
  const meta = translations[lang].meta.home;
  const url = SITE_URL;
  const image = `${SITE_URL}/MR-logo.png`;

  return (
    <>
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
      <Header />
      <Services />
      <TopProjects />
      <Testimonials />
    </>
  );
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mariana Ramírez",
  url: SITE_URL,
  image: `${SITE_URL}/MR-logo.png`,
  jobTitle: ["Web Developer", "Project Coordinator"],
  description:
    "Desarrolladora web freelance y coordinadora de proyectos, con base en México y disponible para trabajo remoto en México y el extranjero. Crea sitios web para negocios y coordina proyectos para que nada se pierda entre tiempos, personas y entregas.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
  sameAs: [
    "https://www.linkedin.com/in/mariana-ramirez-psicologa/",
    "https://github.com/MarRam-1",
  ],
  knowsAbout: [
    "React",
    "JavaScript",
    "Diseño web responsive",
    "SEO",
    "Gestión de proyectos",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Sitios web para negocios",
        description:
          "Diseño y desarrollo de sitios web para negocios: landing pages y sitios de varias páginas, con diseño responsive y SEO básico.",
        areaServed: ["MX", "Worldwide"],
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Coordinación y seguimiento de proyectos",
        description:
          "Coordinación de tiempos, personas y proveedores para que los proyectos lleguen a tiempo.",
        areaServed: ["MX", "Worldwide"],
      },
    },
  ],
};

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>
      <MotionConfig reducedMotion="user">
        <LanguageProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </LanguageProvider>
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
