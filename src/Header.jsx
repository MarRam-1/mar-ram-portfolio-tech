import React, { useState, useRef, useCallback, useEffect } from "react";
import developer from "./MRHeaderDev.png";
import psycho from "./MRHeaderPsy.png";

export default function Header() {
  const [splitX, setSplitX] = useState(50);
  const galleryRef = useRef(null);

  useEffect(() => {
    const steps = [[600, 100], [1400, 50], [2200, 0], [3000, 50]];
    steps.forEach(([delay, val]) => setTimeout(() => setSplitX(val), delay));
  }, []);

  const calcSplit = (clientX) => {
    const rect = galleryRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const lo = 20, hi = 80;
    setSplitX(Math.max(0, Math.min(100, 100 - ((x - lo) / (hi - lo)) * 100)));
  };

  const handleMouseMove = useCallback((e) => calcSplit(e.clientX), []);
  const handleTouchMove = useCallback((e) => calcSplit(e.touches[0].clientX), []);
  const handleLeave = useCallback(() => setSplitX(50), []);

  return (
    <header className="shadow">
      <div
        className="gallery w-75"
        ref={galleryRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleLeave}
      >
        <img
          src={developer}
          alt="developer"
          style={{
            clipPath: `polygon(0 0, calc(${splitX}% + 1px) 0, calc(${splitX}% + 1px) 100%, 0 100%)`,
            transition: "clip-path 0.6s ease",
          }}
        />
        <img
          src={psycho}
          alt="psychologist"
          style={{
            clipPath: `polygon(${splitX}% 0, 100% 0, 100% 100%, ${splitX}% 100%)`,
            transition: "clip-path 0.6s ease",
          }}
        />
      </div>
    </header>
  );
}
