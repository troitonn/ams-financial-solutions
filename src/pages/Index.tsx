
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ams-black via-ams-darkGray to-ams-black opacity-80"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white text-center md:text-left md:max-w-3xl">
          <div className="md:ml-12 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Consultoria Financeira de <span className="gradient-text">Alto Desempenho</span>
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
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50" id="servicos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
      <section className="py-16 md:py-24 bg-ams-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados em 2024</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Até o momento foram gerados pela A.M.S:
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="text-center">
              <div className="gradient-text text-6xl md:text-7xl lg:text-8xl font-bold mb-2">+ de 50</div>
              <div className="text-3xl md:text-4xl text-ams-gold font-bold">MM</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Alguns dos nossos Bancos Parceiros</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-75">
            <div className="bg-white p-6 rounded-lg w-40 h-20 flex items-center justify-center shadow-sm">
              <span className="text-xl font-bold text-gray-800">Banco do Nordeste</span>
            </div>
            <div className="bg-white p-6 rounded-lg w-40 h-20 flex items-center justify-center shadow-sm">
              <span className="text-xl font-bold text-gray-800">Banco da Amazônia</span>
            </div>
            <div className="bg-white p-6 rounded-lg w-40 h-20 flex items-center justify-center shadow-sm">
              <span className="text-xl font-bold text-gray-800">Banco Pine</span>
            </div>
            <div className="bg-white p-6 rounded-lg w-40 h-20 flex items-center justify-center shadow-sm">
              <span className="text-xl font-bold text-gray-800">Banco Caixa Geral</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-white" id="sobre">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a A.M.S</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A A.M.S Negócios e Intermediação é uma empresa focada em oferecer 
                soluções personalizadas que atendem a diversos perfis de clientes. 
                Nossa abordagem consiste em desenvolver estratégias exclusivas e 
                sob medida para cada cliente, visando a captação de recursos e o 
                impulsionamento de projetos e negócios que agreguem valor à sua 
                estrutura operacional.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nosso principal foco é atender empresas de médio e grande porte em 
                todo o território nacional.
              </p>
              <Link 
                to="/sobre" 
                className="inline-flex items-center px-6 py-3 text-ams-black bg-ams-gold hover:bg-opacity-90 font-medium rounded-md transition-colors"
              >
                Saiba mais
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Edifício corporativo moderno" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-ams-gold rounded-lg z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 border-4 border-ams-gold rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Fale com um Especialista</h2>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco para um atendimento personalizado e 
                conhecer mais informações sobre nosso trabalho.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
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
