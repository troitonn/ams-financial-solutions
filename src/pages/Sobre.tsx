
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Sobre = () => {
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Sobre a A.M.S</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Conheça nossa história, missão, visão e valores.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-ams-black border-l-4 border-ams-gold pl-4">Nossa História</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A A.M.S Negócios e Intermediação foi fundada com o objetivo de preencher uma lacuna no mercado 
                financeiro brasileiro, oferecendo soluções personalizadas que realmente atendem às necessidades 
                específicas de cada empresa. Ao longo dos anos, construímos uma sólida reputação baseada em 
                resultados consistentes e relacionamentos de confiança com nossos clientes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nossa trajetória é marcada pelo compromisso com a excelência, transparência e pela busca 
                constante de inovação nas soluções financeiras que oferecemos. Hoje, somos reconhecidos 
                como uma referência no setor de consultoria financeira de alto desempenho.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-ams-gold transition-colors duration-300">
                <h3 className="text-xl font-bold mb-4 text-ams-black">Missão</h3>
                <p className="text-gray-700">
                  Desenvolver soluções financeiras inovadoras e personalizadas que maximizem o potencial 
                  de crescimento dos nossos clientes, gerando valor e resultados consistentes.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-ams-gold transition-colors duration-300">
                <h3 className="text-xl font-bold mb-4 text-ams-black">Visão</h3>
                <p className="text-gray-700">
                  Ser reconhecida como a consultoria financeira de referência no Brasil, 
                  conhecida pela excelência, inovação e pelo impacto positivo gerado nos 
                  resultados dos nossos clientes.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-ams-gold transition-colors duration-300">
                <h3 className="text-xl font-bold mb-4 text-ams-black">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Ética e transparência em todas as nossas operações</li>
                  <li>• Excelência no atendimento e na entrega de resultados</li>
                  <li>• Inovação constante em nossas soluções</li>
                  <li>• Compromisso com o sucesso dos nossos clientes</li>
                  <li>• Responsabilidade e confiança</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-ams-black border-l-4 border-ams-gold pl-4">Nossa Abordagem</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Na A.M.S, acreditamos que cada empresa possui necessidades e desafios únicos. Por isso, 
                nossa abordagem é totalmente personalizada, começando por uma análise detalhada da situação 
                financeira atual da empresa, suas metas e desafios específicos.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Trabalhamos em estreita colaboração com nossos clientes para desenvolver estratégias sob 
                medida que otimizem o uso de recursos financeiros, minimizem riscos e impulsionem o crescimento 
                sustentável do negócio. Nosso objetivo é estabelecer parcerias de longo prazo, baseadas em 
                confiança mútua e resultados concretos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Com uma equipe de especialistas altamente qualificados e uma ampla rede de parcerias 
                estratégicas com instituições financeiras, estamos preparados para oferecer as melhores 
                soluções do mercado, sempre alinhadas aos objetivos específicos de cada cliente.
              </p>
            </div>
            
            <div className="text-center">
              <Link 
                to="/contato" 
                className="gold-button px-8 py-3 rounded-md font-medium text-lg inline-flex items-center"
              >
                Entre em contato conosco
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Sobre;
