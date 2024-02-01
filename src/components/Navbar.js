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
              <div className="text-wrapper-18" href="about">about</div>
              <div className="text-wrapper-19"href="services">services</div>
              <div className="faq-s"href="faq">faq’s</div>
              <div className="text-wrapper-20"href="blog">blog</div>
              <div className="text-wrapper-21"href="footer">contact us</div>
            </div>
          </div>
        </div>
  );
}

export default Navbar;
