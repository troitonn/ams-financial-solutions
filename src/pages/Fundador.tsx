
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Perfil do Fundador</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Conheça a liderança e competências por trás da A.M.S Negócios e Intermediação
            </p>
          </div>
        </div>
      </section>
      
      {/* Founder Profile */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Fundador da A.M.S" 
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ams-gold rounded-lg z-0 opacity-40"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-2 text-ams-black">Alexandre M. Silva</h2>
              <p className="text-xl text-ams-gold font-medium mb-6">Fundador e CEO</p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Com mais de 20 anos de experiência no mercado financeiro, Alexandre M. Silva fundou a A.M.S Negócios e Intermediação com a visão de criar uma consultoria financeira que realmente entenda as necessidades específicas de cada cliente.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Formado em Economia pela Universidade de São Paulo (USP) e com MBA em Finanças pela Fundação Getúlio Vargas (FGV), Alexandre construiu uma carreira sólida, passando por importantes instituições financeiras antes de fundar a A.M.S.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sua expertise em estruturação de operações financeiras complexas e captação de recursos para empresas de diferentes portes e setores é reconhecida no mercado, tendo já viabilizado mais de R$500 milhões em operações ao longo de sua carreira.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Competencies Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-ams-black">Competências e Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-ams-gold">
                <h3 className="text-xl font-bold mb-3 text-ams-black">Mercado Financeiro</h3>
                <p className="text-gray-700">
                  Profundo conhecimento do sistema financeiro nacional e internacional, 
                  incluindo regulamentações, instrumentos financeiros e tendências de mercado.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-ams-gold">
                <h3 className="text-xl font-bold mb-3 text-ams-black">Estruturação de Operações</h3>
                <p className="text-gray-700">
                  Expertise em desenhar e implementar operações financeiras complexas, 
                  adaptadas às necessidades específicas de cada empresa.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-ams-gold">
                <h3 className="text-xl font-bold mb-3 text-ams-black">Captação de Recursos</h3>
                <p className="text-gray-700">
                  Habilidade comprovada em identificar e acessar as melhores fontes de 
                  capital para diferentes perfis de empresas e projetos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-ams-gold">
                <h3 className="text-xl font-bold mb-3 text-ams-black">Gestão de Riscos</h3>
                <p className="text-gray-700">
                  Capacidade de analisar, identificar e mitigar riscos financeiros, 
                  garantindo operações mais seguras e sustentáveis.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-ams-gold">
                <h3 className="text-xl font-bold mb-3 text-ams-black">Análise Setorial</h3>
                <p className="text-gray-700">
                  Conhecimento aprofundado de diversos setores da economia, permitindo 
                  uma abordagem personalizada para cada segmento.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-ams-gold">
                <h3 className="text-xl font-bold mb-3 text-ams-black">Negociação Estratégica</h3>
                <p className="text-gray-700">
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
      
      <Footer />
    </div>
  );
};

export default Fundador;
