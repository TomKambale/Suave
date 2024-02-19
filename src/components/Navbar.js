import React from "react";
import { Typography } from "@material-tailwind/react";

function Navbar() {
  return (
    <div className="navbar bg-white">
      <div className="mx-12">
        <a href="/" className="SUAVE-DESIGN">
          <span className="text-blue-400">SUAVE</span>
          <span className="text-black">|</span>
          <span className="text-yellow-300">DESIGN</span>
        </a>
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <a
              href="about"
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
