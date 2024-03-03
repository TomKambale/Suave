import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Graphic from "../assets/graphicdesign.jpg";
import Digital from "../assets/digitaldesign.jpg";
import printD from "../assets/printdesign.jpg";
import printing from "../assets/printingservices.jpg";
import branding from "../assets/branding.jpg";
import photography from "../assets/photography.jpg";
import promotional from "../assets/promotional products.jpg";
import consultancy from "../assets/consultation service.jpg";
import OO from "../assets/online ordering.jpg";
import Custom from "../assets/nyoni.jpg";

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Set the transition speed to 2 second
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Set the autoplay speed to 2 seconds
  };

  return (
    <section className="services mx-12">
      <div
        className="flex items-center justify-center h-full text-lg font-semibold "
        style={{ fontFamily: "Cormorant Garamond", fontSize: "24px" }}
      >
        services
      </div>
      <Slider {...settings}>
        <div className="graphic-design">
          <div className="columns-2">
            <p className="graphic-design-2">
              <span className="font-cormorant-garamond text-24 font-bold">
                Graphic Design Services:
                <br />
              </span>
              <span
                className="text-blue-400 "
                style={{ fontFamily: "Cosmic Neue", fontSize: "16px" }}
              >
                Logo design
                <br />
                Branding and identity design
                <br />
                Business card design
                <br />
                Brochure design
                <br />
                Poster design
                <br />
                Packaging design
                <br />
                Flyer and leaflet design
                <br />
                Social media graphics
              </span>
            </p>
            <img
              className="img-2 w-562 h-322"
              alt="Graphicdesign"
              src={Graphic}
            />
          </div>
        </div>
        <div className="digital-design">
          <div className="columns-2">
            <img
              className="img w-562 h-322"
              alt="Digitaldesign"
              src={Digital}
            />
            <p className="digital-design-2">
              <span className="font-cormorant-garamond text-24 font-bold">
                Digital Design Services:
                <br />
              </span>
              <span
                className="text-yellow-300"
                style={{ fontFamily: "Cosmic Neue", fontSize: "16px" }}
              >
                Website design
                <br />
                User interface (UI) and user experience (UX) design
                <br />
                Social media visuals
                <br />
                Digital advertisements
                <br />
                Email newsletter design
                <br />
              </span>
            </p>
          </div>
        </div>
        <div className="print-design">
          <div className="columns-2">
            <p className="print-design-2">
              <span className="font-cormorant-garamond text-24 font-bold">
                Print Design Services:
                <br />
              </span>
              <span
                className="text-blue-400"
                style={{ fontFamily: "Cosmic Neue", fontSize: "16px" }}
              >
                Stationery design (letterheads, envelopes, etc.)
                <br />
                Catalogue and booklet design
                <br />
                Magazine and newspaper layout
                <br />
                Calendar design
                <br />
                Menu design (for restaurants)
                <br />
                Promotional materials
                <br />
              </span>
            </p>
            <img
              className="printdesign w-562 h-322"
              alt="Printdesign"
              src={printD}  />
          </div>
        </div>
        <div className="printing-services">
          <div className="columns-2">
            <img
              className="img w-562 h-322"
              alt="Printingservices"
              src={printing} />
            <p className="printing-services-2">
              <span className="font-cormorant-garamond text-24 font-bold">
                Printing Services:
                <br />
              </span>
              <span
                className="text-yellow-300"
                style={{ fontFamily: "Cosmic Neue", fontSize: "16px" }}
              >
                Business card printing
                <br />
                Brochure printing
                <br />
                Poster and banner printing
                <br />
                Flyer and leaflet printing
                <br />
                Custom packaging printing
                <br />
                T-shirt and apparel printing
                <br />
                Large format printing (for signage and banners)
              </span>
            </p>
          </div>
        </div>
        <div className="branding-services">
          <div className="columns-2">
            <p className="div-2">
              <span className="font-cormorant-garamond text-24 font-bold">
                Branding Services:
                <br />
              </span>
              <span
                className="text-blue-400"
                style={{ fontFamily: "Cosmic Neue", fontSize: "16px" }}
              >
                Brand strategy development
                <br />
                Brand positioning and messaging
                <br />
                Brand guidelines creation
                <br />
                Rebranding services
              </span>
            </p>
            <img
              className="img-2 w-562 h-322"
              alt="Branding"
              src={branding}
              />
          </div>
        </div>
        <div className="photography-services">
          <div className="columns-2">
            <img
              className="img w-562 h-322"
              alt="Digitaldesign"
              src={photography}
               />
            <p className="photography-services-2">
              <span className="font-cormorant-garamond text-24 font-bold">
                Photography Services:
                <br />
              </span>
              <span
                className="text-yellow-300"
                style={{ fontFamily: "Cosmic Neue", fontSize: "16px" }}
              >
                Product photography for print materials
                <br />
                Brand and lifestyle photography
                <br />
                <br />
              </span>
            </p>
          </div>
        </div>
        <div className="promotional-products">
          <div className="columns-2">
            <p className="promotional-products-2">
              <span className="text-wrapper-10">
                <br />
              </span>
              <span className="font-cormorant-garamond text-24 font-bold">
                Promotional Products:
                <br />
              </span>
              <span
                className="text-blue-400"
                style={{ fontFamily: "Cosmic Neue", fontSize: "16px" }}
              >
                Customized promotional items (mugs, pens, notepads, etc.)
                <br />
                Branded merchandise
              </span>
            </p>
            <img
              className="graphicdesign w-562 h-322"
              alt="Graphicdesign"
              src={promotional}
                />
          </div>
        </div>
        <div className="consultancy-service">
          <div className="columns-2">
            <img
              className="img w-562 h-322"
              alt="Digitaldesign"
              src={consultancy}
               />
            <p className="p">
              <span className="text-wrapper-10">
                <br />
              </span>
              <span className="font-cormorant-garamond text-24 font-bold">
                Consultation Services:
                <br />
              </span>
              <span
                className="text-yellow-300"
                style={{ fontFamily: "Cosmic Neue", fontSize: "16px" }}
              >
                Design and branding consultations
                <br />
                Print strategy consultations
                <br />
                Marketing collateral planning
                <br />
              </span>
            </p>
          </div>
        </div>
        <div className="online-ordering">
          <div className="columns-2">
            <p className="div-2">
              <span className="font-cormorant-garamond text-24 font-bold">
                Online Ordering and Printing:
                <br />
              </span>
              <span
                className="text-blue-400"
                style={{ fontFamily: "Cosmic Neue", fontSize: "16px" }}
              >
                Online design tools for clients to create their own designs
                <br />
                Printing services for online orders
                <br />
                Order tracking and management
                <br />
              </span>
            </p>
            <img
              className="graphicdesign w-562 h-322"
              alt="Graphicdesign"
              src={OO}
              />
          </div>
        </div>
        <div className="customized-design">
          <div className="columns-2">
            <img
              className="img w-562 h-322"
              alt="Digitaldesign"
              src={Custom}
            />
            <p className="p">
              <span className="text-wrapper-10">
                <br />
              </span>
              <span className="font-cormorant-garamond text-24 font-bold">
                Customized Design Solutions:
                <br />
              </span>
              <span
                className="text-yellow-300"
                style={{ fontFamily: "Cosmic Neue", fontSize: "16px" }}
              >
                Tailored design solutions based on client needs
                <br />
                Custom illustrations and artwork
                <br />
                Specialty design projects
              </span>
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Services;
