import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, TrendingUp } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="conteudo-principal">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ams-black via-ams-darkGray/70 to-ams-black opacity-90"></div>
        {/* Abstract financial background instead of a photo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(252,204,76,0.1)_0%,_rgba(0,0,0,0)_50%)] animate-pulse"></div>
        <div style={{
        animationDelay: '1s'
      }} className="absolute inset-0 bg-[radial-gradient(120%_100%_at_top_right,_rgba(252,204,76,0.1)_0%,_rgba(0,0,0,0)_100%)] animate-pulse"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-ams-gold/60 animate-float" style={{
        animationDelay: '0s'
      }}></div>
        <div className="absolute top-3/4 left-1/3 h-3 w-3 rounded-full bg-ams-gold/40 animate-float" style={{
        animationDelay: '1.5s'
      }}></div>
        <div className="absolute top-1/2 right-1/4 h-4 w-4 rounded-full bg-ams-gold/30 animate-float" style={{
        animationDelay: '2.8s'
      }}></div>
        <div className="absolute bottom-1/4 right-1/3 h-2 w-2 rounded-full bg-ams-gold/50 animate-float" style={{
        animationDelay: '1s'
      }}></div>
        
        {/* Financial chart lines */}
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20">
          <svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0,150 Q300,50 600,180 T1200,120" stroke="#fccc4c" strokeWidth="2" fill="none" />
            <path d="M0,200 Q300,100 600,230 T1200,170" stroke="#fccc4c" strokeWidth="1.5" fill="none" />
            <path d="M0,100 Q300,200 600,130 T1200,220" stroke="#fccc4c" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white text-center md:text-left md:max-w-3xl">
        <div className="md:ml-12 space-y-6 animate-fade-in">
          <div className="mb-8">
            <span className="bg-ams-gold/20 text-ams-gold px-4 py-1 rounded-full text-sm font-medium inline-flex items-center mb-4">
              <TrendingUp className="mr-1 h-4 w-4" /> Consultoria Financeira de Alto Desempenho
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Movimentamos <span className="gradient-gold glow-text">+R$50MM</span> em 2024
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Desenvolvemos soluções financeiras personalizadas para equilibrar o fluxo de caixa, 
            impulsionar o crescimento da sua empresa e diminuir os custos com capital.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Link to="/servicos" className="gold-button px-8 py-3 rounded-md font-medium text-lg shimmer-gold">
              Conheça nossos serviços
            </Link>
            <Link to="/contato" className="px-8 py-3 rounded-md text-lg font-medium bg-transparent border border-ams-gold text-ams-gold hover:bg-ams-gold hover:text-ams-black transition duration-300">
              Fale com um consultor
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-ams-gold w-8 h-8" />
      </div>
    </section>;
};
export default HeroSection;