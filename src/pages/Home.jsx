import React from 'react';
import Hero from '../components/Hero';
import ServicesNew from '../components/ServicesNew';
import Projects from '../components/Projects';
import Capability from '../components/Capability';
import AboutNew from '../components/AboutNew';
import Partners from '../components/Partners';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesNew />
      <Projects />
      <Capability />
      <AboutNew />
      <Partners />
      <CTA />
    </>
  );
};

export default Home;
