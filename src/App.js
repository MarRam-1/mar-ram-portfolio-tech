import "./App.css";
import "./Media.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import TopProjects from "./TopProjects";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <Header />
      <TopProjects />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
