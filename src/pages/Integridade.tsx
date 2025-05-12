
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ShieldCheck, CircleCheck, Shield, FileCheck, Briefcase } from 'lucide-react';

const Integridade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-ams-black">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-ams-black">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="bg-gradient-radial from-ams-gold/30 to-transparent absolute inset-0"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-gold glow-text">Integridade</h1>
            <p className="text-xl md:text-2xl font-semibold text-zinc-50">
              Construindo relações duradouras baseadas em confiança e transparência
            </p>
          </div>
        </div>
      </section>
      
      {/* Valores de Integridade com design aprimorado */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-ams-black to-ams-darkGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold glow-text">Nossos Princípios</h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                Na A.M.S Negócios e Intermediação, a integridade está no centro de tudo o que fazemos. 
                Construímos nossa reputação sobre uma base sólida de princípios éticos que guiam todas 
                as nossas interações e decisões de negócio.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="glass-card p-8 text-center hover:border-ams-gold transition-all duration-300 border border-ams-gold/30 rounded-lg transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(252,204,76,0.15)]">
                <div className="w-20 h-20 bg-gradient-to-br from-ams-black to-ams-darkGray rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold">
                  <Shield className="w-10 h-10 text-ams-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Confiança</h3>
                <p className="text-gray-300">
                  Construímos relacionamentos duradouros baseados na confiança mútua e no cumprimento 
                  de nossas promessas, sempre colocando os interesses de nossos clientes em primeiro lugar.
                </p>
              </div>
              
              <div className="glass-card p-8 text-center hover:border-ams-gold transition-all duration-300 border border-ams-gold/30 rounded-lg transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(252,204,76,0.15)]">
                <div className="w-20 h-20 bg-gradient-to-br from-ams-black to-ams-darkGray rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold">
                  <ShieldCheck className="w-10 h-10 text-ams-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Transparência</h3>
                <p className="text-gray-300">
                  Praticamos a transparência em todas as nossas operações, garantindo que nossos clientes 
                  tenham acesso claro às informações e compreendam completamente todas as etapas do processo.
                </p>
              </div>
              
              <div className="glass-card p-8 text-center hover:border-ams-gold transition-all duration-300 border border-ams-gold/30 rounded-lg transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(252,204,76,0.15)]">
                <div className="w-20 h-20 bg-gradient-to-br from-ams-black to-ams-darkGray rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold">
                  <CircleCheck className="w-10 h-10 text-ams-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Excelência</h3>
                <p className="text-gray-300">
                  Buscamos a excelência em tudo o que fazemos, comprometendo-nos com os mais altos padrões 
                  de qualidade e profissionalismo em cada serviço que oferecemos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nosso Compromisso - Design aprimorado */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-ams-darkGray to-ams-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ams-gold/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ams-gold/40 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-10 md:p-14 border border-ams-gold/30 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-ams-gold/10 to-transparent opacity-40 z-0"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-gold relative z-10">Nosso Compromisso</h2>
              
              <div className="space-y-6 text-gray-200 relative z-10">
                <p className="leading-relaxed">
                  Na A.M.S, nosso compromisso com a integridade vai além de palavras – é demonstrado em nossas ações diárias. 
                  Acreditamos que o sucesso sustentável só é possível quando construído sobre uma base ética sólida.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <div className="flex items-start">
                    <div className="bg-ams-gold/20 p-3 rounded-full mr-4">
                      <FileCheck className="w-6 h-6 text-ams-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Compliance Rigoroso</h3>
                      <p className="text-gray-300 text-sm">Nossa equipe é treinada para aderir aos mais rigorosos padrões éticos e regulatórios.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-ams-gold/20 p-3 rounded-full mr-4">
                      <Briefcase className="w-6 h-6 text-ams-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Soluções Responsáveis</h3>
                      <p className="text-gray-300 text-sm">Desenvolvemos apenas soluções financeiras que realmente beneficiam nossos clientes.</p>
                    </div>
                  </div>
                </div>
                
                <p className="leading-relaxed">
                  Trabalhamos continuamente para manter e fortalecer nossa cultura de integridade, reconhecendo que 
                  isso é fundamental para a confiança que nossos clientes depositam em nós e para o impacto positivo 
                  que buscamos gerar no mercado financeiro.
                </p>
              </div>
              
              <div className="mt-10 text-center relative z-10">
                <a href="https://wa.me/5511999285273?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20A.M.S" target="_blank" rel="noreferrer" 
                   className="gold-button px-8 py-3 rounded-md font-medium text-lg inline-flex items-center group">
                  Fale Conosco
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Depoimentos Redesenhados */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-ams-black to-ams-darkGray relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ams-gold/40 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">O Que Dizem Sobre Nós</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A integridade com que conduzimos nossos negócios é refletida nas palavras daqueles que trabalham conosco.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-lg border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6 text-ams-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "Antonio Marcos é um profissional gabaritado, de grande valia numa equipe, colaborador nato.
                Experiente na área comercial em fundos e bancos e de uma gentileza ímpar.
                Recomendo com credibilidade e eficiência de executivo exemplar."
              </p>
              <div className="pt-4 border-t border-ams-gold/20">
                <p className="font-semibold text-white">Douglas Kuroviski</p>
                <p className="text-ams-gold text-sm">Head Grandes Contas | Especialista | Hunter | Sales Trader l Tecnologia</p>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-lg border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6 text-ams-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "Recomendo este excelente profissional para área comercial.
                Dinâmico, arrojado, vontade de vencer.
                Parabéns você é merecedor de grandes conquistas."
              </p>
              <div className="pt-4 border-t border-ams-gold/20">
                <p className="font-semibold text-white">Edilene Pontes</p>
                <p className="text-ams-gold text-sm">Gerente Comercial. Fidcs.</p>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-lg border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6 text-ams-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "Em um mercado tão complexo como o financeiro, ter um parceiro que prioriza a integridade faz toda a diferença. 
                A A.M.S sempre nos orientou pelo caminho correto, mesmo quando não era o mais fácil."
              </p>
              <div className="pt-4 border-t border-ams-gold/20">
                <p className="font-semibold text-white">Thiago Garcia</p>
                <p className="text-ams-gold text-sm">Especialista em Estratégias e Soluções Financeiras, FP&A, Controller.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Integridade;
