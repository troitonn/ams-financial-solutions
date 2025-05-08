
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Shield, ShieldCheck, CircleCheck, Users, Handshake, FileCheck } from 'lucide-react';

const Integridade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-ams-black">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 bg-fixed bg-cover bg-center" 
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80')`}}>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-gold glow-text tracking-tight">
              Integridade & Confiança
            </h1>
            <p className="text-lg md:text-xl font-medium text-zinc-50 mx-auto max-w-2xl">
              Na A.M.S Negócios e Intermediação, a integridade é o alicerce do nosso negócio. 
              Construímos relacionamentos baseados em transparência, ética e compromisso.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-ams-black">
            <path fill="currentColor" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,170.7C672,160,768,192,864,202.7C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Valores de Integridade */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray relative">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold glow-text">Nossos Princípios</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Na A.M.S Negócios e Intermediação, a integridade está no centro de tudo o que fazemos. 
                Construímos nossa reputação sobre uma base sólida de princípios éticos que guiam todas 
                as nossas interações e decisões de negócio.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center hover:border-ams-gold transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(252,204,76,0.2)]">
                <div className="w-20 h-20 bg-ams-darkGray rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold/40">
                  <Shield className="w-10 h-10 text-ams-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Confiança</h3>
                <p className="text-gray-300 leading-relaxed">
                  Construímos relacionamentos duradouros baseados na confiança mútua e no cumprimento 
                  de nossas promessas, sempre colocando os interesses de nossos clientes em primeiro lugar.
                </p>
              </div>
              
              <div className="glass-card p-8 text-center hover:border-ams-gold transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(252,204,76,0.2)]">
                <div className="w-20 h-20 bg-ams-darkGray rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold/40">
                  <ShieldCheck className="w-10 h-10 text-ams-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Transparência</h3>
                <p className="text-gray-300 leading-relaxed">
                  Praticamos a transparência em todas as nossas operações, garantindo que nossos clientes 
                  tenham acesso claro às informações e compreendam completamente todas as etapas do processo.
                </p>
              </div>
              
              <div className="glass-card p-8 text-center hover:border-ams-gold transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(252,204,76,0.2)]">
                <div className="w-20 h-20 bg-ams-darkGray rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold/40">
                  <CircleCheck className="w-10 h-10 text-ams-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Excelência</h3>
                <p className="text-gray-300 leading-relaxed">
                  Buscamos a excelência em tudo o que fazemos, comprometendo-nos com os mais altos padrões 
                  de qualidade e profissionalismo em cada serviço que oferecemos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nosso Compromisso */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-darkGray to-ams-black relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 md:p-12 border border-ams-gold/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 -translate-y-1/2 translate-x-1/2 bg-ams-gold/10 rounded-full blur-2xl"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-gold">Nosso Compromisso</h2>
              
              <div className="space-y-6 text-gray-200">
                <p>
                  Na A.M.S, nosso compromisso com a integridade vai além de palavras – é demonstrado em nossas ações diárias. 
                  Acreditamos que o sucesso sustentável só é possível quando construído sobre uma base ética sólida.
                </p>
                
                <p>
                  Nossa equipe é treinada para aderir aos mais rigorosos padrões éticos, garantindo que cada solução 
                  financeira que desenvolvemos seja não apenas eficaz, mas também alinhada com os valores que defendemos.
                </p>
                
                <p>
                  Trabalhamos continuamente para manter e fortalecer nossa cultura de integridade, reconhecendo que 
                  isso é fundamental para a confiança que nossos clientes depositam em nós e para o impacto positivo 
                  que buscamos gerar no mercado financeiro.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 border border-ams-gold/20 hover:border-ams-gold/50 transition-all flex flex-col items-center text-center">
                <Handshake className="w-10 h-10 text-ams-gold mb-3" />
                <h4 className="font-bold text-lg mb-2">Parceria</h4>
                <p className="text-sm text-gray-300">Construímos relacionamentos colaborativos para potencializar resultados</p>
              </div>
              
              <div className="glass-card p-6 border border-ams-gold/20 hover:border-ams-gold/50 transition-all flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-ams-gold mb-3" />
                <h4 className="font-bold text-lg mb-2">Colaboração</h4>
                <p className="text-sm text-gray-300">Trabalhamos lado a lado com nossos clientes em todas as etapas</p>
              </div>
              
              <div className="glass-card p-6 border border-ams-gold/20 hover:border-ams-gold/50 transition-all flex flex-col items-center text-center">
                <Shield className="w-10 h-10 text-ams-gold mb-3" />
                <h4 className="font-bold text-lg mb-2">Proteção</h4>
                <p className="text-sm text-gray-300">Priorizamos a segurança dos negócios e interesses dos clientes</p>
              </div>
              
              <div className="glass-card p-6 border border-ams-gold/20 hover:border-ams-gold/50 transition-all flex flex-col items-center text-center">
                <FileCheck className="w-10 h-10 text-ams-gold mb-3" />
                <h4 className="font-bold text-lg mb-2">Compliance</h4>
                <p className="text-sm text-gray-300">Seguimos rigorosamente as normas e regulamentações do setor</p>
              </div>
              
              <div className="col-span-2">
                <a href="https://wa.me/5511999285273?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20A.M.S" target="_blank" rel="noreferrer" className="gold-button px-8 py-3 rounded-md font-medium text-lg flex items-center justify-center w-full">
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-fixed opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">O Que Dizem Sobre Nós</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A integridade com que conduzimos nossos negócios é refletida nas palavras daqueles que trabalham conosco.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-6 border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(252,204,76,0.15)]">
              <p className="text-gray-300 mb-6 italic">
                "Antonio Marcos é um profissional gabaritado, de grande valia numa equipe, colaborador nato.
                Experiente na área comercial em fundos e bancos e de uma gentileza ímpar.
                Recomendo com credibilidade e eficiência de executivo exemplar."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ams-gold/70 to-ams-gold/30 flex items-center justify-center text-xl font-bold">
                  DK
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">Douglas Kuroviski</p>
                  <p className="text-ams-gold text-sm">Head Grandes Contas | Especialista | Hunter | Sales Trader l Tecnologia</p>
                  <p className="text-gray-400 text-xs">June 16, 2020, Douglas worked with Antonio on the same team</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(252,204,76,0.15)]">
              <p className="text-gray-300 mb-6 italic">
                "Recomendo este excelente profissional para área comercial.
                Dinâmico, arrojado, vontade de vencer.
                Parabéns você é merecedor de grandes conquistas."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ams-gold/70 to-ams-gold/30 flex items-center justify-center text-xl font-bold">
                  EP
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">Edilene Pontes</p>
                  <p className="text-ams-gold text-sm">Gerente Comercial. Fidcs.</p>
                  <p className="text-gray-400 text-xs">June 16, 2020, Edilene Pontes worked with Antonio but on different teams</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(252,204,76,0.15)]">
              <p className="text-gray-300 mb-6 italic">
                "Em um mercado tão complexo como o financeiro, ter um parceiro que prioriza a integridade faz toda a diferença. 
                A A.M.S sempre nos orientou pelo caminho correto, mesmo quando não era o mais fácil."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ams-gold/70 to-ams-gold/30 flex items-center justify-center text-xl font-bold">
                  TG
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">Thiago Garcia</p>
                  <p className="text-ams-gold text-sm">Especialista em Estratégias e Soluções Financeiras, FP&A, Controller.</p>
                  <p className="text-gray-400 text-xs">June 12, 2020, Thiago was Antonio's client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      <style>
        {`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(252, 204, 76, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(252, 204, 76, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        `}
      </style>
    </div>
  );
};

export default Integridade;
