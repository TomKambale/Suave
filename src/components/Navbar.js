import React from "react";
import { Typography } from "@material-tailwind/react";
// import '../App.css';

function Navbar() {
  return (
    <div className="navbar bg-white">
      <div className="mx-12">
        <p className="SUAVE-DESIGN">
          <span className="text-blue-400">SUAVE</span>
          <span className="text-black">|</span>
          <span className="text-yellow-300">DESIGN</span>
        </p>
        {/* <div className="navbar-3">
            <a href="hero-section" className="text-wrapper-18">about</a>
            <a href="service" className="text-wrapper-19">services</a>
            <a href="faq" className="faq-s">faq’s</a>
            <a href="blog" className="text-wrapper-20">blog</a>
            <a href="contact" className="text-wrapper-21">contacts</a>
            </div> */}
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <a
              href="hero-section"
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              about
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <a
              href="services"
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              services
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <a
              href="faq"
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              faq's
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <a
              href="blog"
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              blog
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <a
              href="contact"
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              contacts
            </a>
          </Typography>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
