import "./App.css";
import "./Media.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Header from "./Header";
import TopProjects from "./TopProjects";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <Helmet>
        <title>Mariana Ramírez | Front-End Developer & HR Professional</title>
        <meta name="description" content="Portfolio of Mariana Ramírez — Front-End Developer and HR Professional. Explore my projects built with React, JavaScript, Python, and more." />
      </Helmet>
      <Header />
      <TopProjects />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
