
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { ChevronDown, CircleCheck, TrendingUp, ArrowRight, WhatsApp } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FloatingWhatsAppButton = () => (
  <a
    href="https://wa.me/5511999285273"
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#1da750] transition-all duration-300 pulse-gold"
    aria-label="Contato via WhatsApp"
  >
    <WhatsApp className="h-6 w-6 text-white" />
  </a>
);

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-ams-black text-white relative">
      <NavBar />
      <FloatingWhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="conteudo-principal">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ams-black via-ams-darkGray/70 to-ams-black opacity-90"></div>
          {/* Abstract financial background instead of a photo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(252,204,76,0.1)_0%,_rgba(0,0,0,0)_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(252,204,76,0.1)_0%,_rgba(0,0,0,0)_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Animated particles */}
          <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-ams-gold/60 animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-3/4 left-1/3 h-3 w-3 rounded-full bg-ams-gold/40 animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 right-1/4 h-4 w-4 rounded-full bg-ams-gold/30 animate-float" style={{animationDelay: '2.8s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 h-2 w-2 rounded-full bg-ams-gold/50 animate-float" style={{animationDelay: '1s'}}></div>
          
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
              <Link 
                to="/servicos" 
                className="gold-button px-8 py-3 rounded-md font-medium text-lg shimmer-gold"
              >
                Conheça nossos serviços
              </Link>
              <Link 
                to="/contato" 
                className="px-8 py-3 rounded-md text-lg font-medium bg-transparent border border-ams-gold text-ams-gold hover:bg-ams-gold hover:text-ams-black transition duration-300"
              >
                Fale com um consultor
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-ams-gold w-8 h-8" />
        </div>
      </section>
      
      {/* Services Highlights Section */}
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
      
      {/* Results Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-darkGray to-ams-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-ams-black via-ams-darkGray/90 to-ams-black opacity-90"></div>
          {/* Abstract financial background */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-5">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fccc4c" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#f8b64c" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              <path d="M0,500 Q250,300 500,500 T1000,500" stroke="url(#grad1)" strokeWidth="2" fill="none"/>
              <path d="M0,550 Q250,350 500,550 T1000,550" stroke="url(#grad1)" strokeWidth="1.5" fill="none"/>
              <path d="M0,450 Q250,250 500,450 T1000,450" stroke="url(#grad1)" strokeWidth="1" fill="none"/>
              <path d="M0,600 Q250,400 500,600 T1000,600" stroke="url(#grad1)" strokeWidth="0.5" fill="none"/>
              <path d="M0,400 Q250,200 500,400 T1000,400" stroke="url(#grad1)" strokeWidth="0.5" fill="none"/>
              
              {/* Grid lines */}
              {Array(20).fill().map((_, i) => (
                <line key={i} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="#fccc4c" strokeWidth="0.2" strokeDasharray="5,10"/>
              ))}
              {Array(20).fill().map((_, i) => (
                <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="1000" stroke="#fccc4c" strokeWidth="0.2" strokeDasharray="5,10"/>
              ))}
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Resultados em 2024</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Até o momento foram gerados pela A.M.S:
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-card p-10 text-center transform hover:scale-105 transition-all duration-500 border border-ams-gold/40 shadow-[0_0_30px_rgba(252,204,76,0.15)] animate-float">
              <div className="gradient-gold text-6xl md:text-7xl lg:text-8xl font-bold mb-2 glow-text animate-pulse">+ de 50</div>
              <div className="text-3xl md:text-4xl text-ams-gold font-bold">MM</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Nossas Soluções Detalhadas</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Desenvolvemos estratégias personalizadas para cada cliente.
            </p>
          </div>
          
          <div className="space-y-20 relative">
            {/* Animated background elements */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-ams-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-ams-gold/5 rounded-full blur-3xl"></div>
            
            {/* Consultoria Financeira */}
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">Consultoria Financeira Personalizada</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Soluções sob medida para empresas que buscam eficiência financeira e crescimento sustentável.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Diagnóstico financeiro completo com foco em otimização de capital de giro.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Estratégias voltadas para redução de custos, melhoria da saúde financeira e aumento da liquidez.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Acompanhamento consultivo para tomada de decisões assertivas e seguras.</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/servicos#capital" className="gold-button px-6 py-2 rounded-md font-medium inline-flex items-center group">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border shadow-[0_0_30px_rgba(252,204,76,0.07)] transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                    alt="Consultoria Financeira" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ams-black/60 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Real Estate */}
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border shadow-[0_0_30px_rgba(252,204,76,0.07)] transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                    alt="Real Estate" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ams-black/60 to-transparent"></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">Real Estate – Investimentos Imobiliários Estratégicos</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Assessoria completa em aquisição, desenvolvimento, gestão e alienação de ativos imobiliários.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Análise aprofundada de mercado, identificação de oportunidades e mitigação de riscos.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Apoio a investidores, incorporadoras e fundos na valorização de portfólios imobiliários.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Elaboração de planos de negócios personalizados para maximizar o retorno sobre os investimentos.</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/servicos#real-estate" className="gold-button px-6 py-2 rounded-md font-medium inline-flex items-center group">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Trade Finance */}
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">Trade Finance – Operações Estruturadas e Gestão de Risco</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Soluções para empresas que atuam em mercados voláteis ou com exposição cambial e de commodities.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Desenvolvimento de estratégias de hedge, estruturação de operações financeiras e suporte a transações complexas.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Análises de mercado com inteligência estratégica para decisões com maior precisão e segurança.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Atuação proativa na maximização de ganhos e na mitigação de perdas financeiras.</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/servicos#trade-finance" className="gold-button px-6 py-2 rounded-md font-medium inline-flex items-center group">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border shadow-[0_0_30px_rgba(252,204,76,0.07)] transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                    alt="Trade Finance" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ams-black/60 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Antecipação de Créditos */}
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border shadow-[0_0_30px_rgba(252,204,76,0.07)] transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                    alt="Antecipação de Créditos" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ams-black/60 to-transparent"></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">Antecipação de Créditos – Liquidez Imediata para Seu Negócio</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Transformação de vendas a prazo e recebíveis futuros em capital imediato.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Ideal para empresas que precisam reforçar o fluxo de caixa sem comprometer a operação.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Parceria com fundos de investimento e instituições financeiras, garantindo rapidez e taxas competitivas.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Suporte técnico para escolher a melhor estratégia de antecipação conforme o perfil do cliente.</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/servicos#antecipacao" className="gold-button px-6 py-2 rounded-md font-medium inline-flex items-center group">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Agrofinanças */}
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">Agrofinanças – Soluções para o Agronegócio</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Consultoria voltada ao setor agro, com foco em crédito rural, gestão financeira e expansão.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Apoio na renegociação de dívidas, estruturação de operações e busca por linhas de crédito específicas.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Estratégias financeiras que atendem às peculiaridades do setor, com foco em rentabilidade e sustentabilidade.</span>
                  </li>
                  <li className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Acompanhamento especializado para produtores, cooperativas e empresas do agronegócio.</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/servicos#agronegocio" className="gold-button px-6 py-2 rounded-md font-medium inline-flex items-center group">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border shadow-[0_0_30px_rgba(252,204,76,0.07)] transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                    alt="Agrofinanças" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ams-black/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-ams-darkGray to-ams-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Nossos Bancos Parceiros</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10">
              Instituições financeiras que confiam em nossa expertise
            </p>
          </div>
          
          <div className="pt-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                    <img src="/lovable-uploads/7f39c7d0-c637-4b1c-9f98-861435e4f32d.png" alt="Banco Parceiro" className="max-h-16" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                    <img src="/lovable-uploads/e6551330-38cd-4a6d-9658-349863f259fd.png" alt="Banco Parceiro" className="max-h-16" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                    <img src="/lovable-uploads/2a802623-4b77-477f-8f9b-94f5f3230c14.png" alt="Banco Parceiro" className="max-h-16" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                    <img src="/lovable-uploads/6951004f-af2f-41b4-82d3-3192c9f2b86e.png" alt="Banco Parceiro" className="max-h-16" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                    <img src="/lovable-uploads/a0cec4f0-c912-4b8e-a768-0b036c8d0416.png" alt="Banco Parceiro" className="max-h-16" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                    <img src="/lovable-uploads/68a674b3-42d7-4caa-97de-0d6d25468170.png" alt="Banco Parceiro" className="max-h-16" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                    <img src="/lovable-uploads/03a2799b-6984-4e84-8b4f-f6db7a39c3f8.png" alt="Banco Parceiro" className="max-h-16" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative static translate-y-0 mx-2" />
                <CarouselNext className="relative static translate-y-0 mx-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* About Section */}
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
      
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-darkGray to-ams-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold glow-text">Fale com um Especialista</h2>
              <p className="text-gray-300 mb-6">
                Entre em contato conosco para um atendimento personalizado e 
                conhecer mais informações sobre nosso trabalho.
              </p>
              
              <Link 
                to="/contato" 
                className="gold-button px-6 py-3 rounded-md font-medium inline-flex items-center group mb-8"
              >
                Entre em contato <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="https://wa.me/5511999285273" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center px-6 py-3 bg-[#25D366] hover:bg-[#1da750] text-white rounded-md transition-colors duration-300 w-fit"
              >
                <WhatsApp className="mr-2 h-5 w-5" />
                <span>Fale pelo WhatsApp</span>
              </a>
            </div>
            
            <div className="glass-card p-8 rounded-lg border border-ams-gold/20 hover:border-ams-gold/40 transition-all duration-300 shadow-[0_0_30px_rgba(252,204,76,0.07)]">
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium mb-1 text-white">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 bg-ams-darkGray bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ams-gold focus:border-transparent text-white"
                >
                  <option value="capital-de-giro">Capital de Giro</option>
                  <option value="agronegocio">Agronegócio</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="trade-finance">Trade Finance</option>
                  <option value="antecipacao">Antecipação de Créditos</option>
                </select>
              </div>
              <Link 
                to="/contato" 
                className="gold-button w-full py-3 px-6 rounded-md font-medium inline-flex items-center justify-center group"
              >
                Fazer uma consulta <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
