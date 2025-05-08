
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceTimelineItemProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  content: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  isLast?: boolean;
}

const ServiceTimelineItem: React.FC<ServiceTimelineItemProps> = ({
  id,
  title,
  icon,
  description,
  content,
  isActive,
  onClick,
  isLast = false
}) => {
  return (
    <div id={id} className="relative pl-16 pb-16" onClick={onClick}>
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-10 h-full w-px bg-gradient-to-b from-yellow-400/80 via-yellow-400/50 to-yellow-400/20"></div>
      )}
      
      {/* Service icon */}
      <div className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-yellow-400 text-gray-800' : 'bg-gray-200 text-gray-600'}`}>
        {icon}
      </div>
      
      {/* Service content */}
      <div className={`transition-all duration-300 ${isActive ? 'scale-105' : 'scale-100'}`}>
        <h2 className="text-2xl md:text-3xl mb-2 font-bold text-yellow-400">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {isActive && (
          <div className="mt-6 animate-fade-in">
            <div className="prose prose-lg max-w-none text-gray-700">
              {content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceTimeline: React.FC<{
  activeService: string;
  setActiveService: (id: string) => void;
}> = ({ activeService, setActiveService }) => {
  const services = [
    {
      id: 'capital',
      title: "Capital de Giro",
      description: "Soluções financeiras para manter o fluxo de caixa saudável e as operações em pleno funcionamento.",
      content: (
        <>
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
          <p>
            Na A.M.S Negócios e Intermediação, nosso objetivo é proporcionar tranquilidade financeira 
            para que nossos clientes possam focar no crescimento e na expansão de seus negócios. 
            Seja para enfrentar desafios sazonais ou para alavancar novas oportunidades, estamos 
            aqui para garantir que o capital de giro da sua empresa esteja sempre em equilíbrio.
          </p>
        </>
      )
    },
    {
      id: 'agronegocio',
      title: "Agronegócio",
      description: "Financiamentos e soluções específicas para produtores rurais e empresas do setor agrícola.",
      content: (
        <>
          <p>
            A A.M.S Negócios e Intermediação se destaca na prestação de serviços de agroranegócio, 
            oferecendo soluções financeiras especializadas para o setor agropecuário. Sabemos que o 
            agronegócio é um dos pilares da economia brasileira, e por isso, desenvolvemos estratégias 
            sob medida para atender às demandas específicas de produtores rurais, cooperativas e 
            empresas do setor.
          </p>
          <p>
            Nosso serviço de agroranegócio abrange desde a captação de recursos para custeio e 
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
        </>
      )
    },
    {
      id: 'real-estate',
      title: "Real Estate",
      description: "Estratégias de investimento e financiamento para projetos imobiliários de todos os portes.",
      content: (
        <>
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
        </>
      )
    },
    {
      id: 'trade-finance',
      title: "Trade Finance",
      description: "Suporte financeiro para operações de comércio internacional e gestão de riscos cambiais.",
      content: (
        <>
          <p>
            A A.M.S Negócios e Intermediação oferece um serviço especializado em Trade Finance, 
            voltado para empresas que buscam otimizar suas operações financeiras em mercados complexos 
            e dinâmicos. Nosso objetivo é fornecer suporte estratégico e operacional para maximizar o 
            desempenho financeiro, garantindo que nossos clientes tomem decisões informadas e seguras 
            em suas transações comerciais e de investimento.
          </p>
          <p>
            Nosso serviço de Trade Finance abrange uma ampla gama de soluções, desde a gestão de 
            riscos cambiais e de commodities até a estruturação de operações financeiras sofisticadas. 
            Contamos com uma equipe de especialistas experientes, que trazem uma visão estratégica e 
            uma compreensão profunda dos mercados financeiros, oferecendo aos nossos clientes a 
            capacidade de operar com confiança e eficiência.
          </p>
          <p>
            Na AMS Negócios e Intermediação, entendemos que cada negócio é único, por isso, 
            desenvolvemos soluções personalizadas que atendem às necessidades específicas de cada 
            cliente. Nosso serviço de Trade Finance inclui desde a análise de mercado e gestão de 
            riscos até a execução de estratégias de hedge e otimização de fluxos financeiros.
          </p>
          <p>
            Com a A.M.S Negócios e Intermediação, sua empresa terá o suporte necessário para navegar 
            pelos mercados financeiros com segurança, minimizando riscos e maximizando oportunidades 
            de crescimento e rentabilidade. Estamos aqui para ajudar você a alcançar seus objetivos 
            financeiros com precisão e eficácia.
          </p>
        </>
      )
    },
    {
      id: 'antecipacao',
      title: "Antecipação de Créditos",
      description: "Transforme recebíveis futuros em capital imediato para impulsionar seu negócio.",
      content: (
        <>
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
        </>
      ),
      isLast: true
    }
  ];
  
  return (
    <div className="py-8">
      {services.map((service, index) => {
        // Get icon component from props that would match the service ID
        let IconComponent;
        switch (service.id) {
          case 'capital':
            IconComponent = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
            break;
          case 'agronegocio':
            IconComponent = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" x2="12.01" y1="17" y2="17" /></svg>;
            break;
          case 'real-estate':
            IconComponent = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
            break;
          case 'trade-finance':
            IconComponent = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
            break;
          case 'antecipacao':
            IconComponent = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
            break;
          default:
            IconComponent = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="16" /><line x1="8" x2="16" y1="12" y2="12" /></svg>;
        }
        
        return (
          <ServiceTimelineItem
            key={index}
            id={service.id}
            title={service.title}
            icon={IconComponent}
            description={service.description}
            content={service.content}
            isActive={activeService === service.id}
            onClick={() => setActiveService(service.id)}
            isLast={service.isLast}
          />
        );
      })}
    </div>
  );
};

export default ServiceTimeline;
