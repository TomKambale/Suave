import React from 'react';
import Navbar from '../components/Navbar';
import call from '../assets/call.png';
import email from '../assets/email.png';
import location from '../assets/location.png';
import time from '../assets/time.png';

function Contact() {
  return (
    <>
      <Navbar />
      <Contact/> 
      {/* <div className="grid justify-items-end reach-us-on">
        <div className="flex call">
          <img
            className="icon-headset"
            alt="Icon headset"
            src={call}
          />
          <div className="text-wrapper-5">0725611196</div>
        </div>
        <div className="flex email">
          <img
            className="icon-envelope-open"
            alt="Icon envelope open"
            src={email}
          />
          <div className="text-wrapper-6">suavedesign.africa</div>
        </div>
        <div className="flex location">
          <img
            className="icon-alternate-map"
            alt="Icon alternate map"
            src={location}
          />
          <div className="text-wrapper-7">Nairobi, Kenya</div>
        </div>
        <div className="flex time">
          <img
            className="icon-clock"
            alt="Icon clock"
            src={time}
          />
          <div className="text-wrapper-6">
            Mon-Fri: 08.00 - 17.00, Saturday & Sunday: Closed
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Contact;
