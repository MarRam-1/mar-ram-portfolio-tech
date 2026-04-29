import React from "react";
import developer from "./MRHeaderDev.png";
import psycho from "./MRHeaderPsy.png";

export default function Header() {
  return (
    <header className="shadow">
      <div className="gallery w-75">
        <img src={developer} alt="developer" />
        <img src={psycho} alt="psychologist" />
      </div>
    </header>
  );
}
