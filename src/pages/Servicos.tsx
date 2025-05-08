
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Capital, ChemicalIcon, RealEstateAgency, ExchangeRate, JudicialIcon } from '../components/ServiceIcons';

const ServiceSection = ({
  id,
  title,
  icon,
  description,
  isActive,
  onClick
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return <div id={id} onClick={onClick} className="mb-12 p-6 rounded-lg hover:bg-ams-darkGray/10 transition-all cursor-pointer">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-shrink-0">
          <div className={`p-4 rounded-full ${isActive ? 'bg-ams-gold text-ams-black' : 'bg-gray-200 text-gray-700'}`}>
            {icon}
          </div>
        </div>
        <div className="py-[11px]">
          <h2 className="text-2xl md:text-3xl mb-2 font-bold text-yellow-400 py-px">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>
      </div>
      
      {isActive && <div className="mt-8 animate-fade-in">
          <div className="prose prose-lg max-w-none text-gray-700">
            {id === 'capital' && <>
                <p>
                  A A.M.S Negócios e Intermediação oferece um serviço especializado em capital de giro, 
                  projetado para ajudar empresas a manterem sua operação saudável e eficiente. 
                  Entendemos que a gestão do fluxo de caixa é crucial para o sucesso de qualquer 
                  negócio, e é por isso que desenvolvemos soluções personalizadas para atender às 
                  necessidades financeiras imediatas e estratégicas dos nossos clientes.
                </p>
                <p>
                  Nosso serviço de capital de giro abrange desde a análise detalhada das necessidades 
                  financeiras da empresa até a estruturação de operações que garantam a liquidez necessária 
                  para sustentar as atividades operacionais. Com uma equipe de profissionais experientes 
                  e alianças estratégicas com bancos e fundos de investimentos, oferecemos as melhores 
                  condições de mercado, sempre buscando reduzir o custo do capital e otimizar o fluxo de caixa.
                </p>
                <p className="py-0">
                  Na A.M.S Negócios e Intermediação, nosso objetivo é proporcionar tranquilidade financeira 
                  para que nossos clientes possam focar no crescimento e na expansão de seus negócios. 
                  Seja para enfrentar desafios sazonais ou para alavancar novas oportunidades, estamos 
                  aqui para garantir que o capital de giro da sua empresa esteja sempre em equilíbrio.
                </p>
              </>}
            
            {id === 'agronegocio' && <>
                <p>
                  A A.M.S Negócios e Intermediação se destaca na prestação de serviços de agoranegócio, 
                  oferecendo soluções financeiras especializadas para o setor agropecuário. Sabemos que o 
                  agronegócio é um dos pilares da economia brasileira, e por isso, desenvolvemos estratégias 
                  sob medida para atender às demandas específicas de produtores rurais, cooperativas e 
                  empresas do setor.
                </p>
                <p>
                  Nosso serviço de agoranegócio abrange desde a captação de recursos para custeio e 
                  investimento até a intermediação de negociações complexas, sempre focados em garantir 
                  que nossos clientes tenham o suporte financeiro necessário para crescer e prosperar. 
                  Com uma equipe de especialistas e uma ampla rede de parceiros, conseguimos oferecer 
                  condições diferenciadas e soluções que se adequam às particularidades do mercado 
                  agropecuário.
                </p>
                <p>
                  Na A.M.S Negócios e Intermediação, entendemos as nuances do setor e trabalhamos lado a 
                  lado com nossos clientes para garantir que seus projetos sejam viáveis e rentáveis, 
                  desde a semeadura até a colheita. Nossa missão é impulsionar o crescimento do agronegócio 
                  brasileiro, fornecendo o capital e o apoio estratégico que você precisa para alcançar 
                  resultados excepcionais.
                </p>
              </>}
            
            {id === 'real-estate' && <>
                <p>
                  A AMS Negócios e Intermediação oferece serviços especializados em Real Estate, focados em 
                  maximizar o valor de investimentos imobiliários. Com uma abordagem estratégica e personalizada, 
                  auxiliamos nossos clientes em todas as etapas do processo, desde a aquisição, desenvolvimento 
                  e gestão de propriedades até a venda ou locação dos ativos.
                </p>
                <p>
                  Nosso serviço de Real Estate abrange uma análise profunda do mercado imobiliário, 
                  identificação de oportunidades, avaliação de riscos e a elaboração de planos de negócios 
                  sob medida. Trabalhamos em estreita colaboração com investidores, incorporadoras, fundos 
                  imobiliários e empresas do setor, garantindo que cada transação seja conduzida com 
                  eficiência e transparência.
                </p>
                <p>
                  Com anos de experiência e uma sólida rede de contatos no mercado financeiro e imobiliário, 
                  a AMS Negócios e Intermediação proporciona aos seus clientes o suporte necessário para 
                  tomar decisões informadas e estratégicas. Nosso objetivo é otimizar o retorno sobre o 
                  investimento e garantir a rentabilidade dos seus projetos imobiliários.
                </p>
                <p>
                  Na AMS Negócios e Intermediação, seu sucesso no setor de Real Estate é a nossa prioridade. 
                  Estamos comprometidos em oferecer soluções completas e integradas que atendam às suas 
                  necessidades específicas e que impulsionem o crescimento e a valorização dos seus ativos 
                  imobiliários.
                </p>
              </>}
            
            {id === 'trade-finance' && <>
                <p>
                  A A.M.S Negócios e Intermediação oferece um serviço especializado em Trader Finance, 
                  voltado para empresas que buscam otimizar suas operações financeiras em mercados complexos 
                  e dinâmicos. Nosso objetivo é fornecer suporte estratégico e operacional para maximizar o 
                  desempenho financeiro, garantindo que nossos clientes tomem decisões informadas e seguras 
                  em suas transações comerciais e de investimento.
                </p>
                <p>
                  Nosso serviço de Trader Finance abrange uma ampla gama de soluções, desde a gestão de 
                  riscos cambiais e de commodities até a estruturação de operações financeiras sofisticadas. 
                  Contamos com uma equipe de especialistas experientes, que trazem uma visão estratégica e 
                  uma compreensão profunda dos mercados financeiros, oferecendo aos nossos clientes a 
                  capacidade de operar com confiança e eficiência.
                </p>
                <p>
                  Na AMS Negócios e Intermediação, entendemos que cada negócio é único, por isso, 
                  desenvolvemos soluções personalizadas que atendem às necessidades específicas de cada 
                  cliente. Nosso serviço de Trader Finance inclui desde a análise de mercado e gestão de 
                  riscos até a execução de estratégias de hedge e otimização de fluxos financeiros.
                </p>
                <p>
                  Com a A.M.S Negócios e Intermediação, sua empresa terá o suporte necessário para navegar 
                  pelos mercados financeiros com segurança, minimizando riscos e maximizando oportunidades 
                  de crescimento e rentabilidade. Estamos aqui para ajudar você a alcançar seus objetivos 
                  financeiros com precisão e eficácia.
                </p>
              </>}
            
            {id === 'antecipacao' && <>
                <p>
                  A A.M.S Negócios e Intermediação oferece um serviço especializado em Antecipação de 
                  Créditos, uma solução financeira ideal para empresas que buscam otimizar seu fluxo de 
                  caixa e garantir capital de giro de forma ágil e segura. Entendemos que a liquidez é um 
                  fator crucial para o sucesso de qualquer negócio, e é por isso que nosso serviço de 
                  Antecipação de Créditos é projetado para proporcionar recursos financeiros antecipados, 
                  sem complicações e de maneira personalizada.
                </p>
                <p>
                  Nosso serviço de Antecipação de Créditos permite que sua empresa transforme vendas a 
                  prazo ou recebíveis futuros em capital disponível imediatamente, sem a necessidade de 
                  esperar pelos prazos de pagamento dos clientes. Dessa forma, você pode manter suas 
                  operações funcionando sem interrupções, aproveitar oportunidades de investimento e 
                  gerenciar suas obrigações financeiras com maior facilidade.
                </p>
                <p>
                  A A,M,S Negócios e Intermediação trabalha em parceria com diversas instituições financeiras 
                  e fundos de investimento para oferecer as melhores condições do mercado, assegurando que a 
                  antecipação de seus créditos seja realizada de forma rápida e com taxas competitivas. Além 
                  disso, nossa equipe de especialistas está à disposição para auxiliar na escolha da melhor 
                  estratégia de antecipação, garantindo que essa solução se alinhe perfeitamente às 
                  necessidades e objetivos financeiros de sua empresa.
                </p>
                <p>
                  Ao optar pelo serviço de Antecipação de Créditos da A.M.S Negócios e Intermediação, você 
                  conta com a confiança e a expertise de uma empresa que entende as demandas do mercado e 
                  está comprometida em oferecer soluções financeiras eficientes e adaptadas à realidade do 
                  seu negócio. Maximize sua liquidez, mantenha sua empresa sempre pronta para crescer e 
                  explore novas oportunidades com a segurança que só a A.M.S Negócios e Intermediação 
                  pode oferecer.
                </p>
              </>}
          </div>
        </div>}
    </div>;
};

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
  
  return <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ams-black via-ams-darkGray to-ams-black opacity-80"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-gold glow-text">Nossos Serviços</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Soluções financeiras personalizadas para o sucesso do seu negócio
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-12 text-center">
              Entre em contato conosco para que possamos entender as necessidades da sua 
              empresa e, juntos, estruturar operações financeiras que garantam o equilíbrio 
              do seu fluxo de caixa e impulsionem o crescimento do seu negócio.
            </p>
            
            <ServiceSection id="capital" title="Capital de Giro" icon={<Capital className="w-10 h-10" />} description="Soluções financeiras para manter o fluxo de caixa saudável e as operações em pleno funcionamento." isActive={activeService === 'capital'} onClick={() => setActiveService('capital')} />
            
            <ServiceSection id="agronegocio" title="Agronegócio" icon={<ChemicalIcon className="w-10 h-10" />} description="Financiamentos e soluções específicas para produtores rurais e empresas do setor agrícola." isActive={activeService === 'agronegocio'} onClick={() => setActiveService('agronegocio')} />
            
            <ServiceSection id="real-estate" title="Real Estate" icon={<RealEstateAgency className="w-10 h-10" />} description="Estratégias de investimento e financiamento para projetos imobiliários de todos os portes." isActive={activeService === 'real-estate'} onClick={() => setActiveService('real-estate')} />
            
            <ServiceSection id="trade-finance" title="Trade Finance" icon={<ExchangeRate className="w-10 h-10" />} description="Suporte financeiro para operações de comércio internacional e gestão de riscos cambiais." isActive={activeService === 'trade-finance'} onClick={() => setActiveService('trade-finance')} />
            
            <ServiceSection id="antecipacao" title="Antecipação de Créditos" icon={<JudicialIcon className="w-10 h-10" />} description="Transforme recebíveis futuros em capital imediato para impulsionar seu negócio." isActive={activeService === 'antecipacao'} onClick={() => setActiveService('antecipacao')} />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};

export default Servicos;
