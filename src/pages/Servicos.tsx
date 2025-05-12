
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceTimeline from '../components/services/ServiceTimeline';

const Servicos = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState('capital');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Check if there's a hash in the URL to activate specific service
    if (location.hash) {
      const serviceId = location.hash.substring(1); // Remove # from the hash
      setActiveService(serviceId);
      setTimeout(() => {
        const element = document.getElementById(serviceId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-ams-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="bg-gradient-radial from-ams-gold/30 to-transparent absolute inset-0"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-gold glow-text">Nossos Serviços</h1>
            <p className="text-xl md:text-2xl font-semibold text-zinc-50">
              Soluções financeiras personalizadas para o sucesso do seu negócio
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Content */}
      <section className="py-20 bg-gradient-to-b from-ams-black to-ams-darkGray md:py-[70px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-16 text-center leading-relaxed">
              Entre em contato conosco para que possamos entender as necessidades da sua 
              empresa e, juntos, estruturar operações financeiras que garantam o equilíbrio 
              do seu fluxo de caixa e impulsionem o crescimento do seu negócio.
            </p>
            
            <ServiceTimeline activeService={activeService} setActiveService={setActiveService} />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Servicos;
