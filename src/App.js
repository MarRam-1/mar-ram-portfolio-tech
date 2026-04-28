import "./App.css";
import Navbar from "./Navbar";
import developer from "./MRHeaderDev.png";
import psycho from "./MRHeaderPsy.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <div className="gallery">
          <img src={developer} alt="developer" />
          <img src={psycho} alt="psychologist" />
        </div>
      </header>
    </div>
  );
}

export default App;
