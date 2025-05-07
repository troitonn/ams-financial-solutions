
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { ChevronDown, CircleCheck } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-ams-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center" id="conteudo-principal">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ams-black via-ams-darkGray/70 to-ams-black opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/e6551330-38cd-4a6d-9658-349863f259fd.png')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white text-center md:text-left md:max-w-3xl">
          <div className="md:ml-12 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Consultoria Financeira de <span className="gradient-gold glow-text">Alto Desempenho</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Desenvolvemos soluções financeiras personalizadas para equilibrar o fluxo de caixa, 
              impulsionar o crescimento da sua empresa e diminuir os custos com capital.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link 
                to="/servicos" 
                className="gold-button px-8 py-3 rounded-md font-medium text-lg"
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
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray" id="servicos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Nossos Serviços</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Atendimento especializado para as necessidades financeiras da sua empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <ServiceCard 
              title="Capital de Giro" 
              icon="capital" 
              link="/servicos#capital" 
            />
            <ServiceCard 
              title="Agronegócio" 
              icon="chemical" 
              link="/servicos#agronegocio" 
            />
            <ServiceCard 
              title="Real Estate" 
              icon="real-estate-agency" 
              link="/servicos#real-estate" 
            />
            <ServiceCard 
              title="Trade Finance" 
              icon="exchange-rate" 
              link="/servicos#trade-finance" 
            />
            <ServiceCard 
              title="Antecipação de Créditos" 
              icon="judicial" 
              link="/servicos#antecipacao" 
            />
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-darkGray to-ams-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-ams-black via-ams-darkGray/90 to-ams-black opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/68a674b3-42d7-4caa-97de-0d6d25468170.png')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Resultados em 2024</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Até o momento foram gerados pela A.M.S:
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-card p-10 text-center transform hover:scale-105 transition-all duration-300 border border-ams-gold/40">
              <div className="gradient-gold text-6xl md:text-7xl lg:text-8xl font-bold mb-2 glow-text">+ de 50</div>
              <div className="text-3xl md:text-4xl text-ams-gold font-bold">MM</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Nossas Soluções Detalhadas</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Desenvolvemos estratégias personalizadas para cada cliente.
            </p>
          </div>
          
          <div className="space-y-20">
            {/* Consultoria Financeira */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">Consultoria Financeira Personalizada</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Soluções sob medida para empresas que buscam eficiência financeira e crescimento sustentável.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Diagnóstico financeiro completo com foco em otimização de capital de giro.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Estratégias voltadas para redução de custos, melhoria da saúde financeira e aumento da liquidez.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Acompanhamento consultivo para tomada de decisões assertivas e seguras.</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/servicos#capital" className="gold-button px-6 py-2 rounded-md font-medium inline-flex">
                    Saiba mais
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border">
                  <img 
                    src="/lovable-uploads/2a802623-4b77-477f-8f9b-94f5f3230c14.png" 
                    alt="Consultoria Financeira" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Real Estate */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border">
                  <img 
                    src="/lovable-uploads/7f39c7d0-c637-4b1c-9f98-861435e4f32d.png" 
                    alt="Real Estate" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">Real Estate – Investimentos Imobiliários Estratégicos</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Assessoria completa em aquisição, desenvolvimento, gestão e alienação de ativos imobiliários.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Análise aprofundada de mercado, identificação de oportunidades e mitigação de riscos.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Apoio a investidores, incorporadoras e fundos na valorização de portfólios imobiliários.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Elaboração de planos de negócios personalizados para maximizar o retorno sobre os investimentos.</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/servicos#real-estate" className="gold-button px-6 py-2 rounded-md font-medium inline-flex">
                    Saiba mais
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Trade Finance */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">Trade Finance – Operações Estruturadas e Gestão de Risco</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Soluções para empresas que atuam em mercados voláteis ou com exposição cambial e de commodities.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Desenvolvimento de estratégias de hedge, estruturação de operações financeiras e suporte a transações complexas.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Análises de mercado com inteligência estratégica para decisões com maior precisão e segurança.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Atuação proativa na maximização de ganhos e na mitigação de perdas financeiras.</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/servicos#trade-finance" className="gold-button px-6 py-2 rounded-md font-medium inline-flex">
                    Saiba mais
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border">
                  <img 
                    src="/lovable-uploads/6951004f-af2f-41b4-82d3-3192c9f2b86e.png" 
                    alt="Trade Finance" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Antecipação de Créditos */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border">
                  <img 
                    src="/lovable-uploads/03a2799b-6984-4e84-8b4f-f6db7a39c3f8.png" 
                    alt="Antecipação de Créditos" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">Antecipação de Créditos – Liquidez Imediata para Seu Negócio</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Transformação de vendas a prazo e recebíveis futuros em capital imediato.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Ideal para empresas que precisam reforçar o fluxo de caixa sem comprometer a operação.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Parceria com fundos de investimento e instituições financeiras, garantindo rapidez e taxas competitivas.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Suporte técnico para escolher a melhor estratégia de antecipação conforme o perfil do cliente.</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/servicos#antecipacao" className="gold-button px-6 py-2 rounded-md font-medium inline-flex">
                    Saiba mais
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Agrofinanças */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">Agrofinanças – Soluções para o Agronegócio</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Consultoria voltada ao setor agro, com foco em crédito rural, gestão financeira e expansão.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Apoio na renegociação de dívidas, estruturação de operações e busca por linhas de crédito específicas.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Estratégias financeiras que atendem às peculiaridades do setor, com foco em rentabilidade e sustentabilidade.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Acompanhamento especializado para produtores, cooperativas e empresas do agronegócio.</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/servicos#agronegocio" className="gold-button px-6 py-2 rounded-md font-medium inline-flex">
                    Saiba mais
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border">
                  <img 
                    src="/lovable-uploads/a0cec4f0-c912-4b8e-a768-0b036c8d0416.png" 
                    alt="Agrofinanças" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-ams-darkGray to-ams-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Nossos Bancos Parceiros</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg w-48 h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300">
              <img src="/lovable-uploads/7f39c7d0-c637-4b1c-9f98-861435e4f32d.png" alt="Banco do Nordeste" className="max-h-16" />
            </div>
            <div className="bg-white p-6 rounded-lg w-48 h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300">
              <img src="/lovable-uploads/e6551330-38cd-4a6d-9658-349863f259fd.png" alt="Banco do Brasil" className="max-h-16" />
            </div>
            <div className="bg-white p-6 rounded-lg w-48 h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300">
              <img src="/lovable-uploads/2a802623-4b77-477f-8f9b-94f5f3230c14.png" alt="Banco Pine" className="max-h-16" />
            </div>
            <div className="bg-white p-6 rounded-lg w-48 h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300">
              <img src="/lovable-uploads/6951004f-af2f-41b4-82d3-3192c9f2b86e.png" alt="Banco Caixa Geral" className="max-h-16" />
            </div>
            <div className="bg-white p-6 rounded-lg w-48 h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300">
              <img src="/lovable-uploads/a0cec4f0-c912-4b8e-a768-0b036c8d0416.png" alt="Banco de Brasília" className="max-h-16" />
            </div>
            <div className="bg-white p-6 rounded-lg w-48 h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300">
              <img src="/lovable-uploads/68a674b3-42d7-4caa-97de-0d6d25468170.png" alt="Banco Master" className="max-h-16" />
            </div>
            <div className="bg-white p-6 rounded-lg w-48 h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300">
              <img src="/lovable-uploads/03a2799b-6984-4e84-8b4f-f6db7a39c3f8.png" alt="Banco da Amazônia" className="max-h-16" />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray" id="sobre">
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
                className="gold-button px-6 py-3 rounded-md font-medium"
              >
                Saiba mais
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Edifício corporativo moderno" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-darkGray to-ams-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold glow-text">Fale com um Especialista</h2>
              <p className="text-gray-300 mb-6">
                Entre em contato conosco para um atendimento personalizado e 
                conhecer mais informações sobre nosso trabalho.
              </p>
            </div>
            <div className="glass-card p-8 rounded-lg border border-ams-gold/20">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
