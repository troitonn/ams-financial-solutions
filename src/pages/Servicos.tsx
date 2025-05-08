
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceTimeline from '../components/services/ServiceTimeline';
import { ChevronDown, ScrollText, BadgeCheck, Award } from 'lucide-react';
import { ScrollArea } from '../components/ui/scroll-area';

const Servicos = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState('capital');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

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
    
    // Hide scroll indicator after 5 seconds
    const timer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [location]);
  
  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services-content');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ams-black via-ams-black/80 to-ams-black"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-fixed opacity-40"></div>
          
          {/* Abstract Shapes */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-ams-gold/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-ams-gold/5 blur-2xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-gold glow-text tracking-tight">
              Nossos Serviços
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-zinc-50 mb-10">
              Soluções financeiras personalizadas que impulsionam o sucesso do seu negócio
            </p>
            
            <div className="flex flex-col md:flex-row gap-5 justify-center">
              <div className="glass-card p-4 border-ams-gold/30 flex items-center">
                <Award className="text-ams-gold w-8 h-8 mr-3" />
                <span>Excelência Reconhecida</span>
              </div>
              <div className="glass-card p-4 border-ams-gold/30 flex items-center">
                <BadgeCheck className="text-ams-gold w-8 h-8 mr-3" />
                <span>Soluções Customizadas</span>
              </div>
              <div className="glass-card p-4 border-ams-gold/30 flex items-center">
                <ScrollText className="text-ams-gold w-8 h-8 mr-3" />
                <span>Atendimento Consultivo</span>
              </div>
            </div>
            
            <button 
              onClick={handleExploreClick}
              className="mt-16 flex flex-col items-center justify-center text-gray-300 hover:text-white transition-colors animate-bounce"
            >
              <span className="mb-2">Explorar Serviços</span>
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Floating scroll indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center glass-card px-4 py-2 border-ams-gold/20 animate-pulse">
            <span className="text-sm">Role para descobrir nossas soluções</span>
          </div>
        )}
      </section>
      
      {/* Services Content */}
      <section id="services-content" className="py-16 bg-gradient-to-b from-ams-black to-ams-darkGray md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-12 text-center">
              Entre em contato conosco para que possamos entender as necessidades da sua 
              empresa e, juntos, estruturar operações financeiras que garantam o equilíbrio 
              do seu fluxo de caixa e impulsionem o crescimento do seu negócio.
            </p>
            
            <ScrollArea className="h-auto">
              <ServiceTimeline activeService={activeService} setActiveService={setActiveService} />
            </ScrollArea>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Servicos;
