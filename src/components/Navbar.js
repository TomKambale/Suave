import React from 'react';
import '../App.css';

function Navbar() {
  return (
        <div className="navbar">
          <div className="navbar-2">
            <p className="SUAVE-DESIGN">
              <span className="text-wrapper-16">SUAVE</span>
              <span className="text-wrapper-10">|</span>
              <span className="text-wrapper-17">DESIGN</span>
            </p>
            <div className="navbar-3">
            <a href="hero-section" className="text-wrapper-18">about</a>
            <a href="service" className="text-wrapper-19">services</a>
            <a href="faq" className="faq-s">faq’s</a>
            <a href="blog" className="text-wrapper-20">blog</a>
            <a href="contact" className="text-wrapper-21">contacts</a>
            </div>
          </div>
        </div>
  );
}

export default Navbar;
