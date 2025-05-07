
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray relative overflow-hidden" id="sobre">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold glow-text">Sobre a A.M.S</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A A.M.S Negócios e Intermediação é uma empresa focada em oferecer 
              soluções personalizadas que atendem a diversos perfis de clientes. 
              Nossa abordagem consiste em desenvolver estratégias exclusivas e 
              sob medida para cada cliente, visando a captação de recursos e o 
              impulsionamento de projetos e negócios que agreguem valor à sua 
              estrutura operacional.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nosso principal foco é atender empresas de médio e grande porte em 
              todo o território nacional.
            </p>
            <Link 
              to="/sobre" 
              className="gold-button px-6 py-3 rounded-md font-medium inline-flex items-center group"
            >
              Saiba mais <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border shadow-[0_0_30px_rgba(252,204,76,0.07)] transform hover:scale-105 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                alt="Consultoria financeira moderna" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ams-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
