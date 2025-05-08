import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-ams-black bg-opacity-90 backdrop-blur-md py-2 shadow-lg border-b border-ams-gold/20' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img alt="A.M.S Logo" className="h-12 md:h-14" src="/lovable-uploads/27e43f12-b3fd-47e6-ba7c-c1dac30a643c.png" />
          </Link>
          
          {/* Skip to content for accessibility */}
          <a href="#conteudo-principal" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:py-2 focus:px-4 focus:bg-ams-gold focus:text-ams-black focus:rounded">
            Pular para o Conteúdo principal
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-white hover:text-ams-gold font-medium transition duration-200">HOME</Link>
            
            {/* Nossa essência dropdown - stays open while hovering on child elements */}
            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="text-white hover:text-ams-gold font-medium transition duration-200 flex items-center uppercase">
                Nossa essência
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-ams-black border border-ams-gold/20 transition-opacity duration-150 ${dropdownOpen ? 'opacity-100' : 'opacity-0 invisible'}`}>
                <div className="py-1 glass-card">
                  <Link to="/sobre" className="block px-4 py-2 text-white hover:bg-ams-gold/10 hover:text-ams-gold">SOBRE NÓS</Link>
                  <Link to="/fundador" className="block px-4 py-2 text-white hover:bg-ams-gold/10 hover:text-ams-gold">FOUNDER</Link>
                  <Link to="/integridade" className="block px-4 py-2 text-white hover:bg-ams-gold/10 hover:text-ams-gold">INTEGRIDADE
                </Link>
                </div>
              </div>
            </div>
            
            <Link to="/servicos" className="text-white hover:text-ams-gold font-medium transition duration-200">NEGÓCIOS E PRODUTOS</Link>
            
            <a href="https://wa.me/5511999285273" target="_blank" rel="noreferrer" className="gold-button px-6 py-2 rounded-md font-medium">
              Fale com um consultor
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden bg-ams-black mt-4 py-4 px-4 rounded-lg animate-fade-in glass-card border border-ams-gold/20">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-ams-gold font-medium transition duration-200 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <div className="py-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">NOSSA ESSÊNCIA</span>
                </div>
                <div className="ml-4 space-y-2 border-l border-ams-gold/30 pl-4">
                  <Link to="/sobre" className="block text-white hover:text-ams-gold transition duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                    Sobre a A.M.S
                  </Link>
                  <Link to="/fundador" className="block text-white hover:text-ams-gold transition duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                    Fundador
                  </Link>
                  <Link to="/integridade" className="block text-white hover:text-ams-gold transition duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                    Integridade
                  </Link>
                </div>
              </div>
              <Link to="/servicos" className="text-white hover:text-ams-gold font-medium transition duration-200 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Nossos Serviços
              </Link>
              <a href="https://wa.me/5511999285273" target="_blank" rel="noreferrer" className="gold-button px-6 py-3 rounded-md font-medium text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Fale com um consultor
              </a>
            </div>
          </div>}
      </div>
    </nav>;
};
export default NavBar;