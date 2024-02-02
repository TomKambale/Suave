import React from 'react';
import '../App.css';
import { Link } from 'react-scroll';

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
            <Link to="hero-section" className="text-wrapper-18">about</Link>
            <Link to="service" className="text-wrapper-19">services</Link>
            <Link to="faq" className="faq-s">faq’s</Link>
            <Link to="blog" className="text-wrapper-20">blog</Link>
            <Link to="contact" className="text-wrapper-21">contacts</Link>
            </div>
          </div>
        </div>
  );
}

export default Navbar;
