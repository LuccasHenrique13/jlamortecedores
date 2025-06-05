import React, { useState, useEffect } from 'react';
import './style/navbar.css';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={isScrolled ? 'header-scrolled' : ''}>
      <button className='logoButton' onClick={() => scrollToSection('Home')}>
        JL AMORTECEDORES
      </button>

      <nav className="nav-links desktop">
        <button className='links' onClick={() => scrollToSection('Home')}>Inicio</button>
        <button className='links' onClick={() => scrollToSection('About')}>Sobre</button>
        <button className='links' onClick={() => scrollToSection('Products')}>Produtos</button>
        <button className='links' onClick={() => scrollToSection('Contacts')}>Contatos</button>
      </nav>

      <button className='buttonSpeak desktop' onClick={() => scrollToSection('Contacts')}>
        Fale Conosco
      </button>

      <div className="hamburger mobile" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>✕</div>
        <button className='links' onClick={() => scrollToSection('Home')}>Inicio</button>
        <button className='links' onClick={() => scrollToSection('About')}>Sobre</button>
        <button className='links' onClick={() => scrollToSection('Products')}>Produtos</button>
        <button className='links' onClick={() => scrollToSection('Contacts')}>Contatos</button>
        <button className='buttonSpeak' onClick={() => scrollToSection('Contacts')}>Fale Conosco</button>
      </div>
    </header>
  );
}
