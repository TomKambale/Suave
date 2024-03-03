import React from "react";
import call from "../assets/Headset.png";
import email from "../assets/email.png";
import location from "../assets/map.png";
import time from "../assets/Clock_.png";

function Footer() {
  return (
    <section className="contact">
      <div className="mx-12">
        <div
          className="flex items-center justify-center h-full text-lg font-bold"
          style={{ fontFamily: "Cormorant Garamond", fontSize: "24px" }}
        >
          contacts
        </div>
        <div className="grid grid-cols-2">
          <div className="first-half">
            <p className="explore-excellence">
              <span className="text-blue-400">Explore Excellence</span>
              <span className="span">.</span>
              <span className="text-yellow-300">Elevate Your Brand</span>
              <span className="span">.</span>
              <span className="text-blue-400">Embrace Innovation </span>
              <span className="span">.</span>
            </p>
            <div className="text-wrapper-3">suavedesign.africa @2024</div>
          </div>
          <div className="justify-items-end reach-us-on">
            <div className="flex call">
              <img
                className="icon-headset"
                alt="Icon headset"
                src={call}  />
              <div className="text-wrapper-5">0725611196</div>
            </div>
            <div className="flex email">
              <img
                className="icon-envelope-open"
                alt="Icon envelope open"
                src={email}
                 />
              <div className="text-wrapper-6"> suavedesign.africa</div>
            </div>
            <div className="flex location">
              <img
                className="icon-alternate-map"
                alt="Icon alternate map"
                src={location}  />
              <div className="text-wrapper-7">Nairobi, Kenya</div>
            </div>
            <div className="flex time">
              <img
                className="icon-clock"
                alt="Icon clock"
                src={time}
                 />
              <div className="text-wrapper-6">
                Mon-Fri: 08.00 - 17.00, Saturday $ Sunday: Closed
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center h-screen">
  <img
    className="w-24 h-24 "
    alt="Solar home linear"
    src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/solar-home-linear.svg"
  />
</div> */}
      </div>
    </section>
  );
}

export default Footer;
