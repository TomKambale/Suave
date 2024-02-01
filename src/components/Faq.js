import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className='faq'>    
    <div className="faqs">
      <Accordion open={open === 1} icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${1 === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What design services do you offer?
        </AccordionHeader>
        <AccordionBody>
          Answer: We offer a comprehensive range of design services, including logo design, branding, print design, digital design, and more. Explore our portfolio for a detailed overview.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${2 === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Do you provide printing services?
        </AccordionHeader>
        <AccordionBody>
          Answer: Yes, we offer printing services for a variety of materials, including business cards, brochures, posters, banners, and more. Our printing services ensure high-quality and professional results.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${3 === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Can you handle international projects?
        </AccordionHeader>
        <AccordionBody>
          Answer: Absolutely! Our talented team is equipped to undertake design and printing projects locally, across Africa, and worldwide. We thrive on bringing creativity to a global scale.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${3 === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>}>        <AccordionHeader onClick={() => handleOpen(4)}>
          What is the typical turnaround time for design and printing projects?
        </AccordionHeader>
        <AccordionBody>
          Answer: Turnaround times vary based on the scope and complexity of the project. We work closely with clients to establish realistic timelines, ensuring timely delivery without compromising quality.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5} icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${3 === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>}>        <AccordionHeader onClick={() => handleOpen(5)}>
          Do you offer branding consultations?
        </AccordionHeader>
        <AccordionBody>
          Answer: Yes, we provide branding consultations to help clients define their brand strategy, positioning, and visual identity. Our goal is to create a strong and cohesive brand that resonates with the target audience.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6} icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${3 === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>}>        <AccordionHeader onClick={() => handleOpen(6)}>
          Can I view samples of your previous work?
        </AccordionHeader>
        <AccordionBody>
          Answer: Certainly! Visit our portfolio section to explore a diverse collection of our past projects, showcasing the creativity and quality of our design and printing services.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 7} icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${3 === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>}>        <AccordionHeader onClick={() => handleOpen(7)}>
          How do I request a quote for a project?
        </AccordionHeader>
        <AccordionBody>
          Answer: You can easily request a quote by filling out our online inquiry form or contacting our team directly. Provide details about your project, and we'll promptly get back to you with a customized quote.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 8} icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${3 === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>}>        <AccordionHeader onClick={() => handleOpen(8)}>
          Do you offer custom design solutions for unique projects?
        </AccordionHeader>
        <AccordionBody>
          Answer: Yes, we specialize in tailoring our design services to meet the specific needs of our clients. Whether it's a unique design concept or a special project, we are here to bring your ideas to life.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 9} icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${3 === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>}>        <AccordionHeader onClick={() => handleOpen(9)}>
          What file formats do you accept for design projects?
        </AccordionHeader>
        <AccordionBody>
          Answer: We accept a variety of file formats, and our team is proficient in working with industry-standard design software. We can accommodate formats that best suit your project requirements.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 10} icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${3 === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>}>        <AccordionHeader onClick={() => handleOpen(10)}>
          Can I order and track my print projects online?
        </AccordionHeader>
        <AccordionBody>
          Answer: Yes, we provide online ordering and tracking for print projects. Our user-friendly platform allows clients to place orders, monitor progress, and receive updates conveniently.
        </AccordionBody>
      </Accordion>
        {/* <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
          Do you provide printing services?
          </AccordionHeader>
          <AccordionBody>
          Answer: Yes, we offer printing services for a variety of materials, including business cards, brochures, posters, banners, and more. Our printing services ensure high-quality and professional results.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
          Can you handle international projects?
          </AccordionHeader>
          <AccordionBody>
          Answer: Absolutely! Our talented team is equipped to undertake design and printing projects locally, across Africa, and worldwide. We thrive on bringing creativity to a global scale.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
          What is the typical turnaround time for design and printing projects?
          </AccordionHeader>
          <AccordionBody>
          Answer: Turnaround times vary based on the scope and complexity of the project. We work closely with clients to establish realistic timelines, ensuring timely delivery without compromising quality.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
          Do you offer branding consultations?
          </AccordionHeader>
          <AccordionBody>
          Answer: Yes, we provide branding consultations to help clients define their brand strategy, positioning, and visual identity. Our goal is to create a strong and cohesive brand that resonates with the target audience.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
          Can I view samples of your previous work?
          </AccordionHeader>
          <AccordionBody>
          Answer: Certainly! Visit our portfolio section to explore a diverse collection of our past projects, showcasing the creativity and quality of our design and printing services.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
          How do I request a quote for a project?
          </AccordionHeader>
          <AccordionBody>
          Answer: You can easily request a quote by filling out our online inquiry form or contacting our team directly. Provide details about your project, and we'll promptly get back to you with a customized quote.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
          Do you offer custom design solutions for unique projects?
          </AccordionHeader>
          <AccordionBody>
          Answer: Yes, we specialize in tailoring our design services to meet the specific needs of our clients. Whether it's a unique design concept or a special project, we are here to bring your ideas to life.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
          What file formats do you accept for design projects?
          </AccordionHeader>
          <AccordionBody>
          Answer: We accept a variety of file formats, and our team is proficient in working with industry-standard design software. We can accommodate formats that best suit your project requirements.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
          Can I order and track my print projects online?
          </AccordionHeader>
          <AccordionBody>
          Answer: Yes, we provide online ordering and tracking for print projects. Our user-friendly platform allows clients to place orders, monitor progress, and receive updates conveniently.
          </AccordionBody>
        </Accordion> */}
      {/* </>
     */}
     </div>
     </section>

  );
}

export default Faq;