
import React from 'react';
import ServiceFeatureItem from './ServiceFeatureItem';

const DetailedServicesSection = () => {
  return (
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
          <ServiceFeatureItem 
            title="Consultoria Financeira Personalizada"
            linkTo="/servicos#capital"
            imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            benefits={[
              "Soluções sob medida para empresas que buscam eficiência financeira e crescimento sustentável.",
              "Diagnóstico financeiro completo com foco em otimização de capital de giro.",
              "Estratégias voltadas para redução de custos, melhoria da saúde financeira e aumento da liquidez.",
              "Acompanhamento consultivo para tomada de decisões assertivas e seguras."
            ]}
            imagePosition="right"
          />
          
          {/* Real Estate */}
          <ServiceFeatureItem 
            title="Real Estate – Investimentos Imobiliários Estratégicos"
            linkTo="/servicos#real-estate"
            imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            benefits={[
              "Assessoria completa em aquisição, desenvolvimento, gestão e alienação de ativos imobiliários.",
              "Análise aprofundada de mercado, identificação de oportunidades e mitigação de riscos.",
              "Apoio a investidores, incorporadoras e fundos na valorização de portfólios imobiliários.",
              "Elaboração de planos de negócios personalizados para maximizar o retorno sobre os investimentos."
            ]}
            imagePosition="left"
          />
          
          {/* Trade Finance */}
          <ServiceFeatureItem 
            title="Trade Finance – Operações Estruturadas e Gestão de Risco"
            linkTo="/servicos#trade-finance"
            imageUrl="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            benefits={[
              "Soluções para empresas que atuam em mercados voláteis ou com exposição cambial e de commodities.",
              "Desenvolvimento de estratégias de hedge, estruturação de operações financeiras e suporte a transações complexas.",
              "Análises de mercado com inteligência estratégica para decisões com maior precisão e segurança.",
              "Atuação proativa na maximização de ganhos e na mitigação de perdas financeiras."
            ]}
            imagePosition="right"
          />
          
          {/* Antecipação de Créditos */}
          <ServiceFeatureItem 
            title="Antecipação de Créditos – Liquidez Imediata para Seu Negócio"
            linkTo="/servicos#antecipacao"
            imageUrl="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            benefits={[
              "Transformação de vendas a prazo e recebíveis futuros em capital imediato.",
              "Ideal para empresas que precisam reforçar o fluxo de caixa sem comprometer a operação.",
              "Parceria com fundos de investimento e instituições financeiras, garantindo rapidez e taxas competitivas.",
              "Suporte técnico para escolher a melhor estratégia de antecipação conforme o perfil do cliente."
            ]}
            imagePosition="left"
          />
          
          {/* Agrofinanças */}
          <ServiceFeatureItem 
            title="Agrofinanças – Soluções para o Agronegócio"
            linkTo="/servicos#agronegocio"
            imageUrl="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            benefits={[
              "Consultoria voltada ao setor agro, com foco em crédito rural, gestão financeira e expansão.",
              "Apoio na renegociação de dívidas, estruturação de operações e busca por linhas de crédito específicas.",
              "Estratégias financeiras que atendem às peculiaridades do setor, com foco em rentabilidade e sustentabilidade.",
              "Acompanhamento especializado para produtores, cooperativas e empresas do agronegócio."
            ]}
            imagePosition="right"
          />
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
