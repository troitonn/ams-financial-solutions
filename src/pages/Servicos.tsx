import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceTimeline from '../components/services/ServiceTimeline';
import { ShieldCheck, Building, Briefcase, ChevronRight } from 'lucide-react';
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
  return <div className="min-h-screen flex flex-col bg-ams-black">
      <NavBar />
      
      {/* Hero Section - Elegant and Professional */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-ams-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="bg-gradient-radial from-ams-gold/20 to-transparent absolute inset-0 opacity-40"></div>
          
          {/* Refined geometric elements */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-ams-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-ams-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            
            
          </div>
        </div>
        
        {/* Elegant border element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold to-transparent"></div>
      </section>
      
      {/* Introduction Section - More Professional */}
      <section className="py-16 bg-gradient-to-b from-ams-black to-ams-darkGray relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <div className="glass-card p-8 rounded-lg border border-ams-gold/30 h-full transform hover:shadow-[0_10px_40px_rgba(252,204,76,0.07)] transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-ams-gold/20 p-3 rounded-full mr-4">
                    <Briefcase className="w-6 h-6 text-ams-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Nossa Abordagem</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Entendemos que cada empresa possui desafios únicos. Nossa metodologia começa com uma
                  análise profunda do seu negócio, seguida pelo desenvolvimento de soluções
                  financeiras personalizadas que atendam às suas necessidades específicas.
                </p>
                <div className="mt-6 pt-6 border-t border-ams-gold/20">
                  <div className="flex items-center mb-4">
                    <div className="bg-ams-gold/10 p-2 rounded-full mr-3">
                      <Building className="w-4 h-4 text-ams-gold" />
                    </div>
                    <p className="text-sm text-gray-300">Mais de 10 anos de atuação no mercado financeiro</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-ams-gold/10 p-2 rounded-full mr-3">
                      <ShieldCheck className="w-4 h-4 text-ams-gold" />
                    </div>
                    <p className="text-sm text-gray-300">Operações estruturadas com total segurança e transparência</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-gold">Excelência em Consultoria Financeira</h2>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Entre em contato conosco para que possamos entender as necessidades da sua 
                empresa e, juntos, estruturar operações financeiras que garantam o equilíbrio 
                do seu fluxo de caixa e impulsionem o crescimento do seu negócio.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Nossa experiência no mercado financeiro e relacionamento com instituições de primeira
                linha nos permite desenvolver soluções sob medida, com as melhores condições e
                taxas disponíveis, proporcionando o suporte necessário para que sua empresa
                alcance novos patamares.
              </p>
              
              <div className="mt-8">
                <a href="https://wa.me/5511999285273?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20A.M.S" target="_blank" rel="noreferrer" className="gold-button px-6 py-3 rounded-md font-medium inline-flex items-center group">
                  Fale com um especialista
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Timeline - Professional Interleaved Format */}
      <section className="py-20 bg-gradient-to-b from-ams-darkGray to-ams-black md:py-[70px]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold glow-text">Conheça Nossas Soluções</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Desenvolvemos estratégias personalizadas para impulsionar o crescimento da sua empresa
              </p>
            </div>
            
            <ServiceTimeline activeService={activeService} setActiveService={setActiveService} />
          </div>
        </div>
      </section>
      
      {/* Additional Trust Elements Section */}
      <section className="py-16 bg-gradient-to-b from-ams-black to-ams-darkGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">Por Que Escolher a A.M.S</h2>
              <p className="text-gray-300">Nossa trajetória é construída sobre valores sólidos e resultados consistentes</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-6 text-center border border-ams-gold/20 rounded-lg hover:border-ams-gold/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-ams-darkGray to-ams-black mx-auto mb-4 rounded-full flex items-center justify-center border border-ams-gold/30">
                  <ShieldCheck className="w-8 h-8 text-ams-gold" />
                </div>
                <h3 className="font-semibold text-white mb-2">Solidez e Confiança</h3>
                <p className="text-gray-300 text-sm">Construímos relações duradouras baseadas em resultados consistentes</p>
              </div>
              
              <div className="glass-card p-6 text-center border border-ams-gold/20 rounded-lg hover:border-ams-gold/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-ams-darkGray to-ams-black mx-auto mb-4 rounded-full flex items-center justify-center border border-ams-gold/30">
                  <Building className="w-8 h-8 text-ams-gold" />
                </div>
                <h3 className="font-semibold text-white mb-2">Expertise Diferenciada</h3>
                <p className="text-gray-300 text-sm">Equipe com ampla experiência no mercado financeiro nacional</p>
              </div>
              
              <div className="glass-card p-6 text-center border border-ams-gold/20 rounded-lg hover:border-ams-gold/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-ams-darkGray to-ams-black mx-auto mb-4 rounded-full flex items-center justify-center border border-ams-gold/30">
                  <Briefcase className="w-8 h-8 text-ams-gold" />
                </div>
                <h3 className="font-semibold text-white mb-2">Soluções Personalizadas</h3>
                <p className="text-gray-300 text-sm">Estratégias desenvolvidas exclusivamente para seu negócio</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Servicos;