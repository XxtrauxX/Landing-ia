import React from 'react';
import Hero from '../components/Hero';
import MaestriaExecutiva from '../components/MaestriaExecutiva';
import CursosModulares from '../components/CursosModulares';
import CursosPregrabados from '../components/CursosPregrabados';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <MaestriaExecutiva />
      <CursosModulares />
      <CursosPregrabados />
      <FAQ />
      <Footer />
    </>
  );
};

export default HomePage;