
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Fundador = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ams-black via-ams-darkGray to-ams-black opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/2a802623-4b77-477f-8f9b-94f5f3230c14.png')] bg-cover bg-center opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-gold glow-text">Perfil do Fundador</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Conheça a liderança e competências por trás da A.M.S Negócios e Intermediação
            </p>
          </div>
        </div>
      </section>
      
      {/* Founder Profile */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl border-4 border-ams-gold/30">
                <img 
                  src="/lovable-uploads/68a674b3-42d7-4caa-97de-0d6d25468170.png" 
                  alt="Fundador da A.M.S" 
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ams-gold rounded-lg z-0 opacity-40"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-2 text-white gradient-gold">Alexandre M. Silva</h2>
              <p className="text-xl text-ams-gold font-medium mb-6">Fundador e CEO</p>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                Com mais de 20 anos de experiência no mercado financeiro, Alexandre M. Silva fundou a A.M.S Negócios e Intermediação com a visão de criar uma consultoria financeira que realmente entenda as necessidades específicas de cada cliente.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Formado em Economia pela Universidade de São Paulo (USP) e com MBA em Finanças pela Fundação Getúlio Vargas (FGV), Alexandre construiu uma carreira sólida, passando por importantes instituições financeiras antes de fundar a A.M.S.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Sua expertise em estruturação de operações financeiras complexas e captação de recursos para empresas de diferentes portes e setores é reconhecida no mercado, tendo já viabilizado mais de R$500 milhões em operações ao longo de sua carreira.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Competencies Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-ams-darkGray to-ams-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center gradient-gold glow-text">Competências e Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-ams-darkGray/50 p-6 rounded-lg shadow-sm hover:shadow-ams-gold/20 transition-shadow border-l-4 border-ams-gold glass-card">
                <h3 className="text-xl font-bold mb-3 text-white">Mercado Financeiro</h3>
                <p className="text-gray-300">
                  Profundo conhecimento do sistema financeiro nacional e internacional, 
                  incluindo regulamentações, instrumentos financeiros e tendências de mercado.
                </p>
              </div>
              
              <div className="bg-ams-darkGray/50 p-6 rounded-lg shadow-sm hover:shadow-ams-gold/20 transition-shadow border-l-4 border-ams-gold glass-card">
                <h3 className="text-xl font-bold mb-3 text-white">Estruturação de Operações</h3>
                <p className="text-gray-300">
                  Expertise em desenhar e implementar operações financeiras complexas, 
                  adaptadas às necessidades específicas de cada empresa.
                </p>
              </div>
              
              <div className="bg-ams-darkGray/50 p-6 rounded-lg shadow-sm hover:shadow-ams-gold/20 transition-shadow border-l-4 border-ams-gold glass-card">
                <h3 className="text-xl font-bold mb-3 text-white">Captação de Recursos</h3>
                <p className="text-gray-300">
                  Habilidade comprovada em identificar e acessar as melhores fontes de 
                  capital para diferentes perfis de empresas e projetos.
                </p>
              </div>
              
              <div className="bg-ams-darkGray/50 p-6 rounded-lg shadow-sm hover:shadow-ams-gold/20 transition-shadow border-l-4 border-ams-gold glass-card">
                <h3 className="text-xl font-bold mb-3 text-white">Gestão de Riscos</h3>
                <p className="text-gray-300">
                  Capacidade de analisar, identificar e mitigar riscos financeiros, 
                  garantindo operações mais seguras e sustentáveis.
                </p>
              </div>
              
              <div className="bg-ams-darkGray/50 p-6 rounded-lg shadow-sm hover:shadow-ams-gold/20 transition-shadow border-l-4 border-ams-gold glass-card">
                <h3 className="text-xl font-bold mb-3 text-white">Análise Setorial</h3>
                <p className="text-gray-300">
                  Conhecimento aprofundado de diversos setores da economia, permitindo 
                  uma abordagem personalizada para cada segmento.
                </p>
              </div>
              
              <div className="bg-ams-darkGray/50 p-6 rounded-lg shadow-sm hover:shadow-ams-gold/20 transition-shadow border-l-4 border-ams-gold glass-card">
                <h3 className="text-xl font-bold mb-3 text-white">Negociação Estratégica</h3>
                <p className="text-gray-300">
                  Habilidades excepcionais de negociação, fundamentais para obter as 
                  melhores condições para os clientes em todas as operações.
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                to="/servicos" 
                className="gold-button px-8 py-3 rounded-md font-medium text-lg inline-flex items-center"
              >
                Conheça nossos serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trajetória Profissional */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center gradient-gold glow-text">Trajetória Profissional</h2>
            
            <div className="relative">
              {/* Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-ams-gold/30"></div>
              
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-ams-gold"></div>
                    <div className="ml-6 md:ml-0 md:absolute md:left-[calc(50%+20px)] bg-ams-darkGray/70 px-4 py-1 rounded border border-ams-gold/30">
                      <span className="text-ams-gold font-bold">2014 - Presente</span>
                    </div>
                  </div>
                  <div className="ml-6 md:ml-0 md:w-[calc(50%-20px)] glass-card p-6 md:ml-auto">
                    <h3 className="text-xl font-bold mb-2 text-white">Fundador e CEO</h3>
                    <p className="text-ams-gold mb-2">A.M.S Negócios e Intermediação</p>
                    <p className="text-gray-300">
                      Fundação da A.M.S com foco em consultoria financeira de alto nível para empresas 
                      de médio e grande porte, desenvolvendo soluções financeiras personalizadas e estratégicas.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-ams-gold"></div>
                    <div className="ml-6 md:ml-0 md:absolute md:right-[calc(50%+20px)] bg-ams-darkGray/70 px-4 py-1 rounded border border-ams-gold/30">
                      <span className="text-ams-gold font-bold">2008 - 2014</span>
                    </div>
                  </div>
                  <div className="ml-6 md:ml-0 md:w-[calc(50%-20px)] glass-card p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Diretor de Investimentos</h3>
                    <p className="text-ams-gold mb-2">Banco de Investimentos Global</p>
                    <p className="text-gray-300">
                      Liderança da divisão de investimentos corporativos, com foco em operações estruturadas 
                      e captação de recursos para grandes empresas em diversos setores da economia.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-ams-gold"></div>
                    <div className="ml-6 md:ml-0 md:absolute md:left-[calc(50%+20px)] bg-ams-darkGray/70 px-4 py-1 rounded border border-ams-gold/30">
                      <span className="text-ams-gold font-bold">2001 - 2008</span>
                    </div>
                  </div>
                  <div className="ml-6 md:ml-0 md:w-[calc(50%-20px)] glass-card p-6 md:ml-auto">
                    <h3 className="text-xl font-bold mb-2 text-white">Gerente de Operações Financeiras</h3>
                    <p className="text-ams-gold mb-2">Consultoria Financeira Internacional</p>
                    <p className="text-gray-300">
                      Desenvolvimento e implementação de estratégias financeiras para clientes corporativos, 
                      com destaque para reestruturações de dívidas e captações em mercados internacionais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Fundador;
