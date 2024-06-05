import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo-ma.webp";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar">
      <header>
        <img src={logo} alt="" className="logo" />
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Features</a>
          <a href="/#">About</a>
          <a href="/#">Login</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
