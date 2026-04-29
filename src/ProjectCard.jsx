import React from "react";
import DictionaryImg from "./1.png";

export default function ProjectCard() {
  return (
    <div className="card shadow ">
      <div class="view viewFold card-img-top">
        <div class="view-back">
          <span>
            <i class="fa fa-facebook"></i>
          </span>
          <span>
            <i class="fa fa-twitter"></i>
          </span>
        </div>

        <div
          class="slice s1"
          style={{ backgroundImage: `url(${DictionaryImg})` }}
        >
          <span class="overlay"></span>

          <div
            class="slice s2"
            style={{ backgroundImage: `url(${DictionaryImg})` }}
          >
            <span class="overlay"></span>

            <div
              class="slice s3"
              style={{ backgroundImage: `url(${DictionaryImg})` }}
            >
              <span class="overlay"></span>

              <div
                class="slice s4"
                style={{ backgroundImage: `url(${DictionaryImg})` }}
              >
                <span class="overlay"></span>

                <div
                  class="slice s5"
                  style={{ backgroundImage: `url(${DictionaryImg})` }}
                >
                  <span class="overlay"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  );
}
