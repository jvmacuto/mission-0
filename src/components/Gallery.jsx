import React from "react";
import "../styles/gallery.css";
import landscape1 from "../assets/calle-crisologo.jpg";
import landscape2 from "../assets/tagaytay.jpg";
import landscape3 from "../assets/museum.jpg";

function Gallery() {
  return (
    <div>
      <div className="display-container">
        <div className="card-container">
          <article className="card-article">
            <img src={landscape1} alt="image" className="card-img" />

            <div className="card-data">
              <span className="card-description">Vigan City, Ilocos Sur</span>
              <h2 className="card-title">Calle Crisologo</h2>
              <a href="#" className="card-button">
                Read More
              </a>
            </div>
          </article>

          <article className="card-article">
            <img src={landscape2} alt="image" className="card-img" />

            <div className="card-data">
              <span className="card-description">Tagaytay City, Batangas</span>
              <h2 className="card-title">Taal Volcano</h2>
              <a href="#" className="card-button">
                Read More
              </a>
            </div>
          </article>

          <article className="card-article">
            <img src={landscape3} alt="image" className="card-img" />

            <div className="card-data">
              <span className="card-description">Manila City, Philippines</span>
              <h2 className="card-title">Museum of Natural History</h2>
              <a href="#" className="card-button">
                Read More
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
