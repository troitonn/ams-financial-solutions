
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CareerTimeline from '../components/founder/CareerTimeline';

const Fundador = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Profile Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            <div className="md:col-span-4">
              <div className="sticky top-24">
                <div className="rounded-full overflow-hidden shadow-xl border-4 border-ams-gold/30 w-48 h-48 mx-auto mb-6">
                  <img src="/lovable-uploads/215aaddb-d2ee-43bb-b180-161dcf0b7d73.png" alt="Antonio Marcos" className="object-cover w-full h-full" />
                </div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2 text-white gradient-gold">Antonio Marcos</h2>
                  <p className="text-ams-gold">Sócio proprietário</p>
                  <p className="text-gray-300">A.M.S Negocios e Intermediacao Ltda</p>
                  <p className="text-gray-300 mt-2">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-8">
              <div className="glass-card p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-white border-b border-ams-gold/30 pb-3">Sobre</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  A A.M.S Negócios e intermediação Ltda é uma boutique financeira que oferece as mais variadas soluções para todo perfil de cliente. 
                  Partindo dessa premissa e aliada a um profundo conhecimento do mercado financeiro, desenvolvemos soluções individuais e específicas 
                  para cada cliente com o objetivo de captar recursos e potencializar projetos e negócios que venham trazer benefícios dentro da 
                  estrutura operacional da empresa. 
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Nosso foco é estruturar toda a operação financeira visando a adequação do fluxo de caixa, crescimento operacional além de 
                  redução do custo de capital da sua empresa.
                </p>
                
                <h4 className="text-xl font-bold mt-8 mb-4 text-white">Nossos serviços:</h4>
                <ul className="space-y-2 text-gray-300 list-disc pl-6">
                  <li>Capital de giro (curto e longo prazo)</li>
                  <li>Agronegócio</li>
                  <li>Trade Finance</li>
                  <li>Antecipação Recebíveis com ou sem regresso</li>
                  <li>Antecipação de Contratos</li>
                  <li>Operação Estruturada com imóvel Rural, Urbano, longo prazo 48x mais carência 6 meses</li>
                  <li>CCB, Nota Comercial</li>
                </ul>
              </div>
              
              {/* Education Section */}
              <div className="glass-card p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-white border-b border-ams-gold/30 pb-3">Educação</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white">FAPPES LBS & BUSINESS SCHOOL</h4>
                  <p className="text-gray-300">MBA, Banking / Concluido</p>
                  <p className="text-gray-300">2012 - 2013</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white">E-ATT</h4>
                  <p className="text-gray-300">Gestão Bancaria</p>
                  <p className="text-gray-300">2006 - 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Timeline Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-darkGray to-ams-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CareerTimeline />
          </div>
        </div>
      </section>
      
      {/* Recommendations Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center gradient-gold glow-text">Recomendações</h2>
            
            <div className="space-y-8">
              <div className="bg-ams-darkGray/50 p-6 rounded-lg shadow-sm hover:shadow-ams-gold/20 transition-shadow border-l-4 border-ams-gold glass-card">
                <p className="text-gray-300 italic mb-4">
                  "Antonio Marcos é um profissional gabaritado, de grande valia numa equipe, colaborador nato.
                  Experiente na área comercial em fundos e bancos e de uma gentileza ímpar.
                  Recomendo com credibilidade e eficiência de executivo exemplar."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-white">Douglas Kuroviski</p>
                    <p className="text-ams-gold text-sm">Head Grandes Contas | Especialista | Hunter | Sales Trader l Tecnologia</p>
                    <p className="text-gray-400 text-xs">June 16, 2020, Douglas worked with Antonio on the same team</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-ams-darkGray/50 p-6 rounded-lg shadow-sm hover:shadow-ams-gold/20 transition-shadow border-l-4 border-ams-gold glass-card">
                <p className="text-gray-300 italic mb-4">
                  "Recomendo este excelente profissional para área comercial.
                  Dinâmico, arrojado, vontade de vencer.
                  Parabéns você é merecedor de grandes conquistas."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-white">Edilene Pontes</p>
                    <p className="text-ams-gold text-sm">Gerente Comercial. Fidcs.</p>
                    <p className="text-gray-400 text-xs">June 16, 2020, Edilene Pontes worked with Antonio but on different teams</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-ams-darkGray/50 p-6 rounded-lg shadow-sm hover:shadow-ams-gold/20 transition-shadow border-l-4 border-ams-gold glass-card">
                <p className="text-gray-300 italic mb-4">
                  "Antonio Marcos é sinônimo de credibilidade, ética e transparência no mercado financeiro, altamente capacitado e solícito."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-white">Thiago Garcia</p>
                    <p className="text-ams-gold text-sm">Especialista em Estratégias e Soluções Financeiras, FP&A, Controller.</p>
                    <p className="text-gray-400 text-xs">June 12, 2020, Thiago was Antonio's client</p>
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
