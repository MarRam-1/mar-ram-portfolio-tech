import React, { useRef, useState, useEffect } from "react";

export default function ProjectCard({ img, title, url, description }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const bg = visible ? { backgroundImage: `url(${img})` } : {};

  return (
    <div className="card shadow" ref={cardRef}>
      <div className="card-img-top view viewFold ">
        <div className="view-back">
          <a href={url} target="_blank" rel="noopener noreferrer">
            VISIT
          </a>
        </div>

        <span className="touch-hint material-symbols-outlined">ads_click</span>

        <div className="slice s1" style={bg}>
          <span className="overlay"></span>

          <div className="slice s2" style={bg}>
            <span className="overlay"></span>

            <div className="slice s3" style={bg}>
              <span className="overlay"></span>

              <div className="slice s4" style={bg}>
                <span className="overlay"></span>

                <div className="slice s5" style={bg}>
                  <span className="overlay"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-justify">{description}</p>
      </div>
    </div>
  );
}
