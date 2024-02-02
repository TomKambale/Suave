import React from 'react';
import '../App.css';

function About() {
  return (
//     <div style={{width: '100%', height: '100%', position: 'relative'}}>
//     <img style={{width: 562, height: 371, left: 563, top: 29, position: 'absolute'}} src="https://via.placeholder.com/562x371" alt='suave' />
//     <div style={{width: 563, height: 143, left: 0, top: 143, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Cormorant Garamond', fontWeight: '600', wordWrap: 'break-word'}}>Based in Kenya, our dynamic design company comprises a skilled team ready to transform visions into impactful designs. From local projects to ventures across Africa and globally, our professionals bring a versatile and creative touch to every endeavour. Explore the intersection of innovation and expertise with our committed team, delivering design excellence that transcends borders.</div>
//     <div style={{left: 523, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Cormorant Garamond', fontWeight: '700', wordWrap: 'break-word'}}>about us</div>
// </div>
<section className='hero-section'>
  <div className="about">
<div className="hero">
  <div className="text-wrapper-15">about us</div>
  <p className="text-wrapper-14">
    Based in Kenya, our dynamic design company comprises a skilled team ready to transform visions into
    impactful designs. From local projects to ventures across Africa and globally, our professionals bring a
    versatile and creative touch to every endeavour. Explore the intersection of innovation and expertise with
    our committed team, delivering design excellence that transcends borders.
  </p>  
  <img
    className="element"
    alt="Element"
    src="https://cdn.animaapp.com/projects/65bb9cf0fa94d15f05bf2831/releases/65bb9e16a590e32820139c52/img/3-1.png"
  />

</div>
</div>
</section>

  )
}

export default About