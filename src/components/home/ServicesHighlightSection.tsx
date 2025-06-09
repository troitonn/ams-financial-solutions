
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard';

const ServicesHighlightSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-ams-black to-ams-darkGray relative overflow-hidden" id="servicos">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-gold glow-text">Nossos Serviços</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Soluções financeiras personalizadas para as necessidades da sua empresa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="perspective-1000">
            <ServiceCard 
              title="Capital de Giro" 
              icon="capital" 
              link="/servicos#capital"
              className=""
            />
          </div>
          <div className="perspective-1000">
            <ServiceCard 
              title="Agronegócio" 
              icon="chemical" 
              link="/servicos#agronegocio"
              className=""
            />
          </div>
          <div className="perspective-1000">
            <ServiceCard 
              title="Antecipação" 
              icon="judicial" 
              link="/servicos#antecipacao"
              className=""
            />
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/servicos" className="gold-button px-5 py-2 rounded-md font-medium inline-flex items-center">
            Ver todos os serviços
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlightSection;
