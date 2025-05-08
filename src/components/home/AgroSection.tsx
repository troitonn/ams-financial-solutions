
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AgroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent w-1/2 mx-auto"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold glow-text">
              Soluções para o Agronegócio
            </h2>
            
            <p className="text-gray-300 mb-6">
              Desenvolvemos estratégias financeiras específicas para o setor agro, 
              entendendo a sazonalidade e os desafios particulares do campo.
            </p>
            
            <ul className="mb-8 space-y-3">
              {[
                "Consultoria voltada ao setor agro, com foco em crédito rural",
                "Apoio na renegociação de dívidas e estruturação de operações",
                "Estratégias financeiras que atendem às peculiaridades do setor",
                "Acompanhamento especializado para produtores e cooperativas"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-ams-gold mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://wa.me/5511999285273?text=Olá,%20tenho%20interesse%20em%20saber%20mais%20sobre%20as%20soluções%20para%20o%20Agronegócio" 
              target="_blank" 
              rel="noreferrer"
              className="gold-button px-6 py-3 rounded-md font-medium inline-flex items-center group"
            >
              Fale com um especialista em agronegócio
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="order-1 md:order-2 mb-8 md:mb-0 transform -rotate-6">
            <div className="droplet-shape overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                alt="Agronegócio" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ams-black to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .droplet-shape {
          width: 100%;
          height: 400px;
          border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
          transform: rotate(-5deg);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border: 1px solid rgba(252, 204, 76, 0.3);
        }
        `}
      </style>
    </section>
  );
};

export default AgroSection;
