import React from "react";

function About() {
  return (
    <section className="hero-section">
      <div className="about mx-12 ">
        <div
          className="flex items-center justify-center h-full text-lg font-bold"
          style={{ fontFamily: "Cormorant Garamond", fontSize: "24px" }}
        >
          about
        </div>
        <div className="grid grid-cols-2 ">
          <p className="flex items-center justify-center">
            Based in Kenya, our dynamic design company comprises a skilled team
            ready to transform visions into impactful designs. From local
            projects to ventures across Africa and globally, our professionals
            bring a versatile and creative touch to every endeavour. Explore the
            intersection of innovation and expertise with our committed team,
            delivering design excellence that transcends borders.
          </p>
          <img
            className="w-562 h-371"
            alt="Element"
            src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/3-1.png"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
