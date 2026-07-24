import DictionaryImg from "../1.jpg";
import CalaveritaImg from "../2.jpg";
import WeatherImg from "../3.jpg";
import Fiat90Img from "../4.jpg";
import TravelToImg from "../5.jpg";
import WorldClockImg from "../6.jpg";
import MareaImg from "../7.jpg";
import PopulationImg from "../8.jpg";
import AITravelImg from "../9.jpg";
import CarpinteroImg from "../10-carpintero.jpg";

// Casos de negocio reales, en el orden en que deben mostrarse.
export const featuredProjects = [
  {
    img: CarpinteroImg,
    title: "Colaboratorio Carpintero",
    url: "https://colaboratoriocarpintero.com",
    description: {
      es: "Un taller de carpintería en Guadalajara no tenía presencia en internet. Diseñé y lancé su sitio con dominio propio y optimización SEO para que sus clientes lo encuentren en Google y conozcan su trabajo.",
      en: "A carpentry workshop in Guadalajara had no online presence. I designed and launched their site with a custom domain and SEO optimization so customers can find them on Google and see their work.",
    },
    tags: {
      es: ["Sitio de negocio", "Dominio propio", "SEO", "Responsive"],
      en: ["Business website", "Custom domain", "SEO", "Responsive"],
    },
  },
  {
    img: MareaImg,
    title: "Marea People Partners",
    url: "https://mareapeoplepartners.com.mx",
    description: {
      es: "Diseñé y construí el sitio de Marea People Partners, la consultora de RH que co-fundé. Un sitio profesional que comunica sus servicios y transmite confianza.",
      en: "I designed and built the website for Marea People Partners, the HR consulting firm I co-founded — a professional site that communicates their services and builds trust.",
    },
    tags: {
      es: ["Sitio corporativo", "React", "Responsive"],
      en: ["Corporate website", "React", "Responsive"],
    },
  },
  {
    img: Fiat90Img,
    title: "Fiat90",
    url: "https://fiat90-2026.netlify.app",
    description: {
      es: "App web para un programa espiritual de 90 días, instalable en el celular (PWA) y usada por una comunidad real. Incluye contenido diario, cuenta regresiva, seguimiento de hábitos y formulario de registro.",
      en: "A web app for a 90-day spiritual program, installable on mobile (PWA) and used by a real community. Includes daily content, a countdown, habit tracking, and a sign-up form.",
    },
    tags: {
      es: ["PWA", "App multipágina", "Usuarios reales"],
      en: ["PWA", "Multi-page app", "Real users"],
    },
  },
];

// Proyectos más pequeños / técnicos, para mostrar rango sin robar protagonismo a los casos de negocio.
export const moreProjects = [
  {
    img: TravelToImg,
    title: "Travel to Jalisco",
    url: "https://travel-project-mr.netlify.app/",
    description: {
      es: "Guía de viaje que muestra los mejores destinos, cultura y experiencias de Jalisco, con diseño atractivo y totalmente responsive.",
      en: "A travel guide showcasing the best destinations, culture, and experiences that Jalisco has to offer, with an attractive, fully responsive design.",
    },
    tags: {
      es: ["Sitio de contenido", "Diseño", "Responsive"],
      en: ["Content website", "Design", "Responsive"],
    },
  },
  {
    img: CalaveritaImg,
    title: "Poem Generator (AI Calaverita)",
    url: "https://funny-calaverita-generator.netlify.app/",
    description: {
      es: "App con IA que genera calaveritas literarias personalizadas del Día de Muertos.",
      en: "An AI-powered app that generates personalized traditional Mexican Day of the Dead poems.",
    },
    tags: {
      es: ["React", "IA"],
      en: ["React", "AI"],
    },
  },
  {
    img: DictionaryImg,
    title: "Dictionary App",
    url: "https://dictionary-app-mr.netlify.app/",
    description: {
      es: "App en React para buscar definiciones, pronunciación y ejemplos de palabras en tiempo real.",
      en: "A React app that lets users look up word definitions, pronunciations, and examples in real time.",
    },
    tags: {
      es: ["React", "API"],
      en: ["React", "API"],
    },
  },
  {
    img: WeatherImg,
    title: "Forecast App",
    url: "https://react-meteo-app-mariana.netlify.app/",
    description: {
      es: "App de clima en React con condiciones actuales y pronóstico por ciudad.",
      en: "A React weather app that displays current conditions and forecasts based on a searched city.",
    },
    tags: {
      es: ["React", "API"],
      en: ["React", "API"],
    },
  },
  {
    img: WorldClockImg,
    title: "World Clock",
    url: "https://world-clock-mr.netlify.app/",
    description: {
      es: "Reloj mundial en tiempo real con múltiples zonas horarias simultáneas.",
      en: "A real-time world clock app that displays the current time across multiple time zones simultaneously.",
    },
    tags: {
      es: ["React"],
      en: ["React"],
    },
  },
  {
    img: PopulationImg,
    title: "Population Per Continent",
    url: "https://replit.com/@marianarmrz/Mariana-Ram-Python-Adv-Final-Project#InternetPopulation.png/",
    description: {
      es: "Proyecto de análisis de datos en Python que visualiza la población de internet por continente.",
      en: "A Python data analysis project that visualizes global internet population distribution by continent.",
    },
    tags: {
      es: ["Python", "Datos"],
      en: ["Python", "Data"],
    },
  },
  {
    img: AITravelImg,
    title: "AI Travel Itinerary",
    url: "https://colab.research.google.com/drive/1HV4QfsX7sDv9b_l7GvpylNZ5UPbnUPcs?usp=sharing",
    description: {
      es: "Notebook en Python con IA que genera itinerarios de viaje personalizados.",
      en: "A Python and AI-powered notebook that generates personalized travel itineraries based on user preferences.",
    },
    tags: {
      es: ["Python", "IA"],
      en: ["Python", "AI"],
    },
  },
];
