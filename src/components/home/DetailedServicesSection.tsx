
import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DetailedServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  benefits: string[];
}

const DetailedServiceCard: React.FC<DetailedServiceCardProps> = ({
  title,
  description,
  imageUrl,
  linkTo,
  benefits
}) => {
  return (
    <div className="min-w-[300px] md:min-w-[400px] h-[550px] glass-card p-6 m-2 flex flex-col">
      <div className="h-48 overflow-hidden rounded-lg mb-4">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-3 gradient-gold">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      <ul className="mb-auto space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex text-sm">
            <span className="text-ams-gold mr-2">✓</span>
            <span className="text-gray-300">{benefit}</span>
          </li>
        ))}
      </ul>
      <Link to={linkTo} className="gold-button px-4 py-2 rounded-md font-medium inline-flex items-center justify-center mt-4">
        Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

const DetailedServicesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrolling, setAutoScrolling] = useState(true);
  
  // Check if can scroll in either direction
  const checkScrollability = () => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
    }
  };

  // Scroll left button handler
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Scroll right button handler
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  // Auto scroll functionality - much slower now (120 seconds complete cycle)
  useEffect(() => {
    const container = scrollContainerRef.current;
    let animationFrameId: number;
    let lastTime = 0;
    const speed = 0.04; // Reduced speed for much slower scrolling (pixels per millisecond)
    
    const autoScroll = (timestamp: number) => {
      if (container && autoScrolling) {
        if (lastTime === 0) {
          lastTime = timestamp;
        }
        
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        
        container.scrollLeft += speed * deltaTime;
        
        // Loop back to the start when reaching the end
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
        
        checkScrollability();
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };
    
    if (autoScrolling) {
      animationFrameId = requestAnimationFrame(autoScroll);
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [autoScrolling]);

  // Mouse down handler for manual scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setAutoScrolling(false);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  // Mouse leave and mouse up handlers
  const handleMouseLeaveOrUp = () => {
    setIsMouseDown(false);
    setTimeout(() => setAutoScrolling(true), 2000); // Resume auto-scrolling after 2 seconds
  };

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      checkScrollability();
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
      }
    };
  }, []);

  const services = [
    {
      title: "Consultoria Financeira Personalizada",
      description: "Soluções sob medida para empresas que buscam eficiência financeira e crescimento sustentável.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      linkTo: "/servicos#capital",
      benefits: [
        "Diagnóstico financeiro completo com foco em otimização de capital",
        "Estratégias voltadas para redução de custos e melhoria da liquidez",
        "Acompanhamento consultivo para tomadas de decisão assertivas"
      ]
    },
    {
      title: "Real Estate – Investimentos Imobiliários",
      description: "Assessoria completa em aquisição, desenvolvimento, gestão e alienação de ativos imobiliários.",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      linkTo: "/servicos#real-estate",
      benefits: [
        "Análise de mercado e identificação de oportunidades",
        "Apoio a investidores na valorização de portfólios imobiliários",
        "Elaboração de planos de negócios personalizados"
      ]
    },
    {
      title: "Trade Finance – Operações Estruturadas",
      description: "Soluções para empresas que atuam em mercados voláteis ou com exposição cambial e de commodities.",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      linkTo: "/servicos#trade-finance",
      benefits: [
        "Desenvolvimento de estratégias de hedge e operações financeiras",
        "Análises de mercado com inteligência estratégica",
        "Maximização de ganhos e mitigação de perdas financeiras"
      ]
    },
    {
      title: "Antecipação de Créditos – Liquidez Imediata",
      description: "Transformação de vendas a prazo e recebíveis futuros em capital imediato para sua empresa.",
      imageUrl: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      linkTo: "/servicos#antecipacao",
      benefits: [
        "Reforço imediato do fluxo de caixa sem comprometer operações",
        "Parceria com fundos de investimento e instituições financeiras",
        "Taxas competitivas e agilidade na operação"
      ]
    },
    {
      title: "Agrofinanças – Soluções para o Agronegócio",
      description: "Consultoria voltada ao setor agro, com foco em crédito rural, gestão financeira e expansão.",
      imageUrl: "/images/8f890ee1-65bc-4a4f-99c7-bded21996f23.png",
      linkTo: "/servicos#agronegocio",
      benefits: [
        "Apoio na renegociação de dívidas e busca por linhas de crédito",
        "Estratégias financeiras específicas para o setor agro",
        "Acompanhamento especializado para produtores e cooperativas"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent w-1/3 mx-auto"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Nossas Soluções Detalhadas</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Desenvolvemos estratégias personalizadas para cada cliente.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={handleScrollLeft} 
            disabled={!canScrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-ams-black/80 border border-ams-gold/30 rounded-full p-2 text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            onClick={handleScrollRight} 
            disabled={!canScrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-ams-black/80 border border-ams-gold/30 rounded-full p-2 text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight size={20} />
          </button>
          
          {/* Scrolling container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar py-8 px-4"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex space-x-6">
              {services.map((service, index) => (
                <DetailedServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  linkTo={service.linkTo}
                  benefits={service.benefits}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        `}
      </style>
    </section>
  );
};

export default DetailedServicesSection;
