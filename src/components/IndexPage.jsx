import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Tech from '../components/Tech';
import Works from '../components/Works';
import Certification from '../components/Certification';
import Contact from '../components/Contact';
import StarsCanvas from '../components/canvas/Stars';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';

const IndexPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero/>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Certification />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <SocialLinks />
    </div>
  );
};

export default IndexPage;