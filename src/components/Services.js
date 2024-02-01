import React from "react";
import '../App.css';

function Services() {
  return (
    // <div
    //   style={{
    //     width: "100%",
    //     height: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <div style={{ position: "relative", width: "100%", height: "100%" }}>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: "29%",
    //         left: "1%",
    //         width: "53%",
    //         height: "12%",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <div
    //         style={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           textAlign: "center",
    //         }}
    //       >
    //         <span
    //           style={{
    //             color: "black",
    //             fontSize: 24,
    //             fontFamily: "Cormorant Garamond",
    //             fontWeight: "700",
    //           }}
    //         >
    //           Customized Design Solutions:
    //           <br />
    //         </span>
    //         <span
    //           style={{
    //             color: "#E8D135",
    //             fontSize: 16,
    //             fontFamily: "Comic Neue",
    //             fontWeight: "400",
    //           }}
    //         >
    //           Tailored design solutions based on client needs
    //           <br />
    //           Custom illustrations and artwork
    //           <br />
    //           Specialty design projects
    //         </span>
    //       </div>
    //       <img
    //         alt="custom"
    //         style={{
    //           position: "absolute",
    //           top: "0",
    //           left: "50%",
    //           transform: "translateX(-50%)",
    //           width: "100%",
    //           height: "100%",
    //           objectFit: "cover",
    //         }}
    //         src="https://via.placeholder.com/562x322"
    //       />
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: "61%",
    //         left: "1%",
    //         width: "53%",
    //         height: "12%",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <div
    //         style={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           textAlign: "center",
    //         }}
    //       >
    //         <span
    //           style={{
    //             color: "black",
    //             fontSize: 24,
    //             fontFamily: "Cormorant Garamond",
    //             fontWeight: "700",
    //           }}
    //         >
    //           Online Ordering and Printing:
    //           <br />
    //         </span>
    //         <span
    //           style={{
    //             color: "#17C1EE",
    //             fontSize: 16,
    //             fontFamily: "Comic Neue",
    //             fontWeight: "400",
    //           }}
    //         >
    //           Online design tools for clients to create their own designs
    //           <br />
    //           Printing services for online orders
    //           <br />
    //           Order tracking and management
    //         </span>
    //       </div>
    //       <img
    //         alt="custom"
    //         style={{
    //           position: "absolute",
    //           top: "0",
    //           left: "50%",
    //           transform: "translateX(-50%)",
    //           width: "100%",
    //           height: "100%",
    //           objectFit: "cover",
    //         }}
    //         src="https://via.placeholder.com/562x322"
    //       />
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: "93%",
    //         left: "1%",
    //         width: "53%",
    //         height: "12%",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <div
    //         style={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           textAlign: "center",
    //         }}
    //       >
    //         <span
    //           style={{
    //             color: "black",
    //             fontSize: 24,
    //             fontFamily: "Cormorant Garamond",
    //             fontWeight: "700",
    //           }}
    //         >
    //           Consultation Services:
    //           <br />
    //         </span>
    //         <span
    //           style={{
    //             color: "#E8D135",
    //             fontSize: 16,
    //             fontFamily: "Comic Neue",
    //             fontWeight: "400",
    //           }}
    //         >
    //           Design and branding consultations
    //           <br />
    //           Print strategy consultations
    //           <br />
    //           Marketing collateral planning
    //         </span>
    //       </div>
    //       <img
    //         alt="custom"
    //         style={{
    //           position: "absolute",
    //           top: "0",
    //           left: "50%",
    //           transform: "translateX(-50%)",
    //           width: "100%",
    //           height: "100%",
    //           objectFit: "cover",
    //         }}
    //         src="https://via.placeholder.com/562x322"
    //       />
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: "125%",
    //         left: "1%",
    //         width: "53%",
    //         height: "12%",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <div
    //         style={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           textAlign: "center",
    //         }}
    //       >
    //         <span
    //           style={{
    //             color: "black",
    //             fontSize: 24,
    //             fontFamily: "Cormorant Garamond",
    //             fontWeight: "700",
    //           }}
    //         >
    //           Promotional Products:
    //           <br />
    //         </span>
    //         <span
    //           style={{
    //             color: "#17C1EE",
    //             fontSize: 16,
    //             fontFamily: "Comic Neue",
    //             fontWeight: "400",
    //           }}
    //         >
    //           Customized promotional items (mugs, pens, notepads, etc.)
    //           <br />
    //           Branded merchandise
    //         </span>
    //       </div>
    //       <img
    //         alt="custom"
    //         style={{
    //           position: "absolute",
    //           top: "0",
    //           left: "50%",
    //           transform: "translateX(-50%)",
    //           width: "100%",
    //           height: "100%",
    //           objectFit: "cover",
    //         }}
    //         src="https://via.placeholder.com/562x322"
    //       />
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: "157%",
    //         left: "1%",
    //         width: "53%",
    //         height: "12%",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <div
    //         style={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           textAlign: "center",
    //         }}
    //       >
    //         <span
    //           style={{
    //             color: "black",
    //             fontSize: 24,
    //             fontFamily: "Cormorant Garamond",
    //             fontWeight: "700",
    //           }}
    //         >
    //           Photography Services:
    //           <br />
    //         </span>
    //         <span
    //           style={{
    //             color: "#E8D135",
    //             fontSize: 16,
    //             fontFamily: "Comic Neue",
    //             fontWeight: "400",
    //           }}
    //         >
    //           Product photography for print materials
    //           <br />
    //           Brand and lifestyle photography
    //         </span>
    //       </div>
    //       <img
    //         alt="custom"
    //         style={{
    //           position: "absolute",
    //           top: "0",
    //           left: "50%",
    //           transform: "translateX(-50%)",
    //           width: "100%",
    //           height: "100%",
    //           objectFit: "cover",
    //         }}
    //         src="https://via.placeholder.com/562x322"
    //       />
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: "189%",
    //         left: "1%",
    //         width: "53%",
    //         height: "12%",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <div
    //         style={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           textAlign: "center",
    //         }}
    //       >
    //         <span
    //           style={{
    //             color: "black",
    //             fontSize: 24,
    //             fontFamily: "Cormorant Garamond",
    //             fontWeight: "700",
    //           }}
    //         >
    //           Branding Services:
    //           <br />
    //         </span>
    //         <span
    //           style={{
    //             color: "#17C1EE",
    //             fontSize: 16,
    //             fontFamily: "Comic Neue",
    //             fontWeight: "400",
    //           }}
    //         >
    //           Brand strategy development
    //           <br />
    //           Brand positioning and messaging
    //           <br />
    //           Brand guidelines creation
    //           <br />
    //           Rebranding services
    //         </span>
    //       </div>
    //       <img
    //         alt="custom"
    //         style={{
    //           position: "absolute",
    //           top: "0",
    //           left: "50%",
    //           transform: "translateX(-50%)",
    //           width: "100%",
    //           height: "100%",
    //           objectFit: "cover",
    //         }}
    //         src="https://via.placeholder.com/562x322"
    //       />
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: "221%",
    //         left: "1%",
    //         width: "53%",
    //         height: "12%",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <div
    //         style={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           textAlign: "center",
    //         }}
    //       >
    //         <span
    //           style={{
    //             color: "black",
    //             fontSize: 20,
    //             fontFamily: "Cormorant Garamond",
    //             fontWeight: "600",
    //           }}
    //         >
    //           Printing Services:
    //           <br />
    //         </span>
    //         <span
    //           style={{
    //             color: "#E8D135",
    //             fontSize: 16,
    //             fontFamily: "Comic Neue",
    //             fontWeight: "400",
    //           }}
    //         >
    //           Business card printing
    //           <br />
    //           Brochure printing
    //           <br />
    //           Poster and banner printing
    //           <br />
    //           Flyer and leaflet printing
    //           <br />
    //           Custom packaging printing
    //           <br />
    //           T-shirt and apparel printing
    //           <br />
    //           Large format printing (for signage and banners)
    //         </span>
    //       </div>
    //       <img
    //         alt="custom"
    //         style={{
    //           position: "absolute",
    //           top: "0",
    //           left: "50%",
    //           transform: "translateX(-50%)",
    //           width: "100%",
    //           height: "100%",
    //           objectFit: "cover",
    //         }}
    //         src="https://via.placeholder.com/562x322"
    //       />
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: "253%",
    //         left: "1%",
    //         width: "53%",
    //         height: "12%",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <div
    //         style={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           textAlign: "center",
    //         }}
    //       >
    //         <span
    //           style={{
    //             color: "black",
    //             fontSize: 20,
    //             fontFamily: "Cormorant Garamond",
    //             fontWeight: "600",
    //           }}
    //         >
    //           Print Design Services:
    //           <br />
    //         </span>
    //         <span
    //           style={{
    //             color: "#17C1EE",
    //             fontSize: 16,
    //             fontFamily: "Comic Neue",
    //             fontWeight: "400",
    //           }}
    //         >
    //           Stationery design (letterheads, envelopes, etc.)
    //           <br />
    //           Catalogue and booklet design
    //           <br />
    //           Magazine and newspaper layout
    //           <br />
    //           Calendar design
    //           <br />
    //           Menu design (for restaurants)
    //           <br />
    //           Promotional materials
    //           <br />
    //         </span>
    //       </div>
    //       <img
    //         alt="custom"
    //         style={{
    //           position: "absolute",
    //           top: "0",
    //           left: "50%",
    //           transform: "translateX(-50%)",
    //           width: "100%",
    //           height: "100%",
    //           objectFit: "cover",
    //         }}
    //         src="https://via.placeholder.com/562x322"
    //       />
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: "285%",
    //         left: "1%",
    //         width: "53%",
    //         height: "12%",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <div
    //         style={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           textAlign: "center",
    //         }}
    //       >
    //         <span
    //           style={{
    //             color: "black",
    //             fontSize: 20,
    //             fontFamily: "Cormorant Garamond",
    //             fontWeight: "600",
    //           }}
    //         >
    //           Digital Design Services:
    //           <br />
    //         </span>
    //         <span
    //           style={{
    //             color: "#E8D135",
    //             fontSize: 16,
    //             fontFamily: "Comic Neue",
    //             fontWeight: "400",
    //           }}
    //         >
    //           Website design
    //           <br />
    //           User interface (UI) and user experience (UX) design
    //           <br />
    //           Social media visuals
    //           <br />
    //           Digital advertisements
    //           <br />
    //           Email newsletter design
    //           <br />
    //         </span>
    //       </div>
    //       <img
    //         alt="custom"
    //         style={{
    //           position: "absolute",
    //           top: "0",
    //           left: "50%",
    //           transform: "translateX(-50%)",
    //           width: "100%",
    //           height: "100%",
    //           objectFit: "cover",
    //         }}
    //         src="https://via.placeholder.com/562x322"
    //       />
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: "317%",
    //         left: "1%",
    //         width: "53%",
    //         height: "12%",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <div
    //         style={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           textAlign: "center",
    //         }}
    //       >
    //         <span
    //           style={{
    //             color: "black",
    //             fontSize: 20,
    //             fontFamily: "Cormorant Garamond",
    //             fontWeight: "600",
    //           }}
    //         >
    //           Graphic Design Services:
    //           <br />
    //         </span>
    //         <span
    //           style={{
    //             color: "#17C1EE",
    //             fontSize: 16,
    //             fontFamily: "Comic Neue",
    //             fontWeight: "400",
    //           }}
    //         >
    //           Logo design
    //           <br />
    //           Branding and identity design
    //           <br />
    //           Business card design
    //           <br />
    //           Brochure design
    //           <br />
    //           Poster design
    //           <br />
    //           Packaging design
    //           <br />
    //           Flyer and leaflet design
    //           <br />
    //           Social media graphics
    //         </span>
    //       </div>
    //       <img
    //         alt="custom"
    //         style={{
    //           position: "absolute",
    //           top: "0",
    //           left: "50%",
    //           transform: "translateX(-50%)",
    //           width: "100%",
    //           height: "100%",
    //           objectFit: "cover",
    //         }}
    //         src="https://via.placeholder.com/562x322"
    //       />
    //     </div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         top: "0%",
    //         left: "50%",
    //         transform: "translateX(-50%)",
    //         textAlign: "center",
    //         color: "black",
    //         fontSize: 24,
    //         fontFamily: "Cormorant Garamond",
    //         fontWeight: "700",
    //       }}
    //     >
    //       services
    //     </div>
    //   </div>
    // </div>
    <section className="services">    
    <div className="services">
    <div className="services-2">
      <div className="text-wrapper-13">services</div>
      <div className="customized-design">
        <div className="overlap-group">
          <p className="p">
            <span className="text-wrapper-10">
              <br />
            </span>
            <span className="text-wrapper-11">
              Customized Design Solutions:
              <br />
            </span>
            <span className="text-wrapper-2">
              Tailored design solutions based on client needs
              <br />
              Custom illustrations and artwork
              <br />
              Specialty design projects
            </span>
          </p>
          <img
            className="img"
            alt="Digitaldesign"
            src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/digitaldesign.png"
          />
        </div>
      </div>
      <div className="online-ordering">
        <div className="overlap-group">
          <p className="div-2">
            <span className="text-wrapper-11">
              Online Ordering and Printing:
              <br />
            </span>
            <span className="text-wrapper">
              Online design tools for clients to create their own designs
              <br />
              Printing services for online orders
              <br />
              Order tracking and management
              <br />
            </span>
          </p>
          <img
            className="graphicdesign"
            alt="Graphicdesign"
            src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/graphicdesign.png"
          />
        </div>
      </div>
      <div className="consultancy-service">
        <div className="overlap-group">
          <p className="p">
            <span className="text-wrapper-10">
              <br />
            </span>
            <span className="text-wrapper-11">
              Consultation Services:
              <br />
            </span>
            <span className="text-wrapper-2">
              Design and branding consultations
              <br />
              Print strategy consultations
              <br />
              Marketing collateral planning
              <br />
            </span>
          </p>
          <img
            className="img"
            alt="Digitaldesign"
            src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/digitaldesign-1.png"
          />
        </div>
      </div>
      <div className="promotional-products">
        <div className="overlap-group">
          <p className="promotional-products-2">
            <span className="text-wrapper-10">
              <br />
            </span>
            <span className="text-wrapper-11">
              Promotional Products:
              <br />
            </span>
            <span className="text-wrapper">
              Customized promotional items (mugs, pens, notepads, etc.)
              <br />
              Branded merchandise
            </span>
          </p>
          <img
            className="graphicdesign"
            alt="Graphicdesign"
            src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/graphicdesign-1.png"
          />
        </div>
      </div>
      <div className="photography-services">
        <div className="overlap-group">
          <p className="photography-services-2">
            <span className="text-wrapper-11">
              Photography Services:
              <br />
            </span>
            <span className="text-wrapper-2">
              Product photography for print materials
              <br />
              Brand and lifestyle photography
              <br />
              <br />
            </span>
          </p>
          <img
            className="img"
            alt="Digitaldesign"
            src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/digitaldesign-2.png"
          />
        </div>
      </div>
      <div className="branding-services">
        <div className="overlap-group">
          <p className="div-2">
            <span className="text-wrapper-11">
              Branding Services:
              <br />
            </span>
            <span className="text-wrapper">
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
            className="img-2"
            alt="Branding"
            src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/branding-2.png"
          />
        </div>
      </div>
      <div className="printing-services">
        <div className="overlap-group">
          <p className="printing-services-2">
            <span className="text-wrapper-12">
              Printing Services:
              <br />
            </span>
            <span className="text-wrapper-2">
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
          <img
            className="img"
            alt="Printingservices"
            src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/printingservices.png"
          />
        </div>
      </div>
      <div className="print-design">
        <div className="overlap-group">
          <p className="print-design-2">
            <span className="text-wrapper-12">
              Print Design Services:
              <br />
            </span>
            <span className="text-wrapper">
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
            className="printdesign"
            alt="Printdesign"
            src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/printdesign.png"
          />
        </div>
      </div>
      <div className="digital-design">
        <div className="overlap">
          <p className="digital-design-2">
            <span className="text-wrapper-12">
              Digital Design Services:
              <br />
            </span>
            <span className="text-wrapper-2">
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
          <img
            className="img"
            alt="Digitaldesign"
            src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/digitaldesign-3.png"
          />
        </div>
      </div>
      <div className="graphic-design">
        <div className="overlap-group">
          <p className="graphic-design-2">
            <span className="text-wrapper-12">
              Graphic Design Services:
              <br />
            </span>
            <span className="text-wrapper">
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
            className="img-2"
            alt="Graphicdesign"
            src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/graphicdesign-2.png"
          />
        </div>
      </div>
    </div>
  </div>
  </section>

  );
}

export default Services;