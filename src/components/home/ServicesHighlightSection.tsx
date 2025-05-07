
import React from 'react';
import ServiceCard from '../ServiceCard';

const ServicesHighlightSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-ams-black to-ams-darkGray relative overflow-hidden" id="servicos">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Nossos Serviços</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Atendimento especializado para as necessidades financeiras da sua empresa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="perspective-1000 group">
            <ServiceCard 
              title="Capital de Giro" 
              icon="capital" 
              link="/servicos#capital" 
              className="transform group-hover:rotate-y-10 group-hover:-rotate-x-10"
            />
          </div>
          <div className="perspective-1000 group">
            <ServiceCard 
              title="Agronegócio" 
              icon="chemical" 
              link="/servicos#agronegocio" 
              className="transform group-hover:rotate-y-10 group-hover:-rotate-x-10"
            />
          </div>
          <div className="perspective-1000 group">
            <ServiceCard 
              title="Real Estate" 
              icon="real-estate-agency" 
              link="/servicos#real-estate" 
              className="transform group-hover:rotate-y-10 group-hover:-rotate-x-10"
            />
          </div>
          <div className="perspective-1000 group">
            <ServiceCard 
              title="Trade Finance" 
              icon="exchange-rate" 
              link="/servicos#trade-finance" 
              className="transform group-hover:rotate-y-10 group-hover:-rotate-x-10"
            />
          </div>
          <div className="perspective-1000 group">
            <ServiceCard 
              title="Antecipação de Créditos" 
              icon="judicial" 
              link="/servicos#antecipacao" 
              className="transform group-hover:rotate-y-10 group-hover:-rotate-x-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlightSection;
