
import React from 'react';
import { Link } from 'react-router-dom';
import { ChartBar, Sprout, Home, BarChart3, FileSpreadsheet, ArrowRight } from 'lucide-react';

interface ServiceTimelineItemProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  content: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  isLast?: boolean;
  alignment: 'left' | 'right';
}

const ServiceTimelineItem: React.FC<ServiceTimelineItemProps> = ({
  id,
  title,
  icon,
  description,
  content,
  isActive,
  onClick,
  isLast = false,
  alignment
}) => {
  return (
    <div id={id} className="relative mb-16">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-12 h-full w-px bg-gradient-to-b from-ams-gold/80 via-ams-gold/40 to-ams-gold/20"></div>
      )}
      
      <div className={`flex items-start ${alignment === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Service icon - centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${isActive ? 'bg-ams-gold text-ams-black border-ams-gold shadow-[0_0_15px_rgba(252,204,76,0.5)]' : 'bg-ams-darkGray text-ams-gold border-ams-gold/50'}`}>
            {icon}
          </div>
        </div>
        
        {/* Content block */}
        <div 
          className={`w-5/12 pt-20 ${alignment === 'left' ? 'pr-6' : 'pl-6'}`}
          onClick={onClick}
        >
          <div 
            className={`glass-card p-6 border rounded-lg transition-all duration-500 cursor-pointer ${
              isActive 
                ? 'border-ams-gold shadow-[0_10px_30px_rgba(252,204,76,0.15)] transform scale-105' 
                : 'border-gray-700 hover:border-ams-gold/50'
            }`}
          >
            <h2 className="text-2xl md:text-3xl mb-2 font-bold gradient-gold">{title}</h2>
            <p className="text-gray-400 mb-4">{description}</p>
            
            {!isActive && (
              <button 
                className="text-ams-gold flex items-center text-sm group"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
              >
                Ver mais <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
        
        {/* Empty space for timeline balance */}
        <div className="w-5/12"></div>
      </div>
      
      {/* Expanded content */}
      {isActive && (
        <div className="mt-6 animate-fade-in max-w-3xl mx-auto bg-gradient-to-r from-transparent via-ams-darkGray to-transparent p-8 rounded-lg border border-ams-gold/20">
          <div className="prose prose-lg max-w-none text-gray-300">
            {content}
          </div>
        </div>
      )}
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
      icon: <ChartBar className="w-7 h-7" />,
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
      icon: <Sprout className="w-7 h-7" />,
      content: (
        <>
          <p>
            A A.M.S Negócios e Intermediação se destaca na prestação de serviços de agrofinanças, 
            oferecendo soluções financeiras especializadas para o setor agropecuário. Sabemos que o 
            agronegócio é um dos pilares da economia brasileira, e por isso, desenvolvemos estratégias 
            sob medida para atender às demandas específicas de produtores rurais, cooperativas e 
            empresas do setor.
          </p>
          <p>
            Nosso serviço de agrofinanças abrange desde a captação de recursos para custeio e 
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
      icon: <Home className="w-7 h-7" />,
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
        </>
      )
    },
    {
      id: 'trade-finance',
      title: "Trade Finance",
      description: "Suporte financeiro para operações de comércio internacional e gestão de riscos cambiais.",
      icon: <BarChart3 className="w-7 h-7" />,
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
        </>
      )
    },
    {
      id: 'antecipacao',
      title: "Antecipação de Créditos",
      description: "Transforme recebíveis futuros em capital imediato para impulsionar seu negócio.",
      icon: <FileSpreadsheet className="w-7 h-7" />,
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
            A A.M.S Negócios e Intermediação trabalha em parceria com diversas instituições financeiras 
            e fundos de investimento para oferecer as melhores condições do mercado, assegurando que a 
            antecipação de seus créditos seja realizada de forma rápida e com taxas competitivas. Além 
            disso, nossa equipe de especialistas está à disposição para auxiliar na escolha da melhor 
            estratégia de antecipação, garantindo que essa solução se alinhe perfeitamente às 
            necessidades e objetivos financeiros de sua empresa.
          </p>
        </>
      ),
      isLast: true
    }
  ];
  
  return (
    <div className="py-10">
      {services.map((service, index) => (
        <ServiceTimelineItem
          key={index}
          id={service.id}
          title={service.title}
          icon={service.icon}
          description={service.description}
          content={service.content}
          isActive={activeService === service.id}
          onClick={() => setActiveService(service.id)}
          isLast={service.isLast}
          alignment={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
      
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        `}
      </style>
    </div>
  );
};

export default ServiceTimeline;
