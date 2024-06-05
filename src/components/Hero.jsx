import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 class="hero-title">Discover Philippines</h1>

        <h2 class="hero-subtitle">
          We offer the best adventure holidays and tailor-made trips!
        </h2>

        <div className="search-bar">
          <input type="text" className="hero-search" placeholder="Search" />
          <button type="button" className="hero-button" onclick="/">
            Search for tours
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
