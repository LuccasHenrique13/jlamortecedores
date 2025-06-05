import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Navbar } from './components/navbar';
import { WhatsappButton } from './components/whatsappButton';
import { Hero } from './components/hero';
import { About } from './components/about';
import { About2 } from './components/about2';
import { Products } from './components/products';
import { Differences } from './components/differences';
import { Contacts } from './components/contacts';
import { Footer } from './components/footer';

export default function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', 
      distance: '50px', 
      duration: 800,    
      delay: 200,      
      easing: 'cubic-bezier(0.5, 0, 0, 1)', 
      reset: false,    
    });
    sr.reveal('.sr-fade-up', {
     
    });

    sr.reveal('.sr-fade-left', {
      origin: 'left',
      distance: '80px',
      delay: 300,
    });

    sr.reveal('.sr-fade-right', {
      origin: 'right',
      distance: '80px',
      delay: 300,
    });

    sr.reveal('.sr-sequence-item', {
      interval: 150, 
    });
    
     sr.reveal('.sr-zoom', {
      scale: 0.8,
      duration: 700,
    });



  }, []);

  return (
    <>
      <Navbar />
      <WhatsappButton />
      <Hero />
      <About />
      <About2 />
      <Products />
      <Differences />
      <Contacts />
      <Footer />
    </>
  );
}
