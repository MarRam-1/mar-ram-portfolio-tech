import React from "react";

export default function ProjectCard({ img, title, url, description }) {
  return (
    <div className="card shadow">
      <div className="card-img-top view viewFold ">
        <div className="view-back">
          <a href={url} target="_blank" rel="noopener noreferrer">
            VISIT
          </a>
        </div>

        <span className="touch-hint material-symbols-outlined">ads_click</span>

        <div className="slice s1" style={{ backgroundImage: `url(${img})` }}>
          <span className="overlay"></span>

          <div className="slice s2" style={{ backgroundImage: `url(${img})` }}>
            <span className="overlay"></span>

            <div
              className="slice s3"
              style={{ backgroundImage: `url(${img})` }}
            >
              <span className="overlay"></span>

              <div
                className="slice s4"
                style={{ backgroundImage: `url(${img})` }}
              >
                <span className="overlay"></span>

                <div
                  className="slice s5"
                  style={{ backgroundImage: `url(${img})` }}
                >
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
