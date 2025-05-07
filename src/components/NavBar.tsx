
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-ams-black bg-opacity-90 backdrop-blur-md py-2 shadow-lg border-b border-ams-gold/20' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b247c5c7-36c8-4b05-a27a-07ea51c089bf.png" 
              alt="A.M.S Logo" 
              className="h-12 md:h-14"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-white hover:text-ams-gold font-medium transition duration-200">
              Home
            </Link>
            <Link to="/sobre" className="text-white hover:text-ams-gold font-medium transition duration-200">
              Sobre a A.M.S
            </Link>
            <Link to="/fundador" className="text-white hover:text-ams-gold font-medium transition duration-200">
              Fundador
            </Link>
            <Link to="/servicos" className="text-white hover:text-ams-gold font-medium transition duration-200">
              Nossos Serviços
            </Link>
            <Link to="/contato" className="gold-button px-6 py-2 rounded-md font-medium">
              Fale com um consultor
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-ams-black mt-4 py-4 px-4 rounded-lg animate-fade-in glass-card border border-ams-gold/20">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-ams-gold font-medium transition duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/sobre" 
                className="text-white hover:text-ams-gold font-medium transition duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre a A.M.S
              </Link>
              <Link 
                to="/fundador" 
                className="text-white hover:text-ams-gold font-medium transition duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fundador
              </Link>
              <Link 
                to="/servicos" 
                className="text-white hover:text-ams-gold font-medium transition duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nossos Serviços
              </Link>
              <Link 
                to="/contato" 
                className="gold-button px-6 py-3 rounded-md font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fale com um consultor
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
