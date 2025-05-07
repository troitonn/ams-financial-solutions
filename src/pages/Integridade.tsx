
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Shield, ShieldCheck, CircleCheck } from 'lucide-react';

const Integridade = () => {
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622227922682-56c92e523e58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Integridade</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Nosso compromisso com os mais altos padrões éticos e de transparência
            </p>
          </div>
        </div>
      </section>
      
      {/* Valores de Integridade */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold glow-text">Nossos Princípios</h2>
              <p className="text-gray-300 text-lg">
                Na A.M.S Negócios e Intermediação, a integridade está no centro de tudo o que fazemos. 
                Construímos nossa reputação sobre uma base sólida de princípios éticos que guiam todas 
                as nossas interações e decisões de negócio.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center hover:border-ams-gold transition-all duration-300">
                <div className="w-20 h-20 bg-ams-darkGray rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold/40">
                  <Shield className="w-10 h-10 text-ams-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Confiança</h3>
                <p className="text-gray-300">
                  Construímos relacionamentos duradouros baseados na confiança mútua e no cumprimento 
                  de nossas promessas, sempre colocando os interesses de nossos clientes em primeiro lugar.
                </p>
              </div>
              
              <div className="glass-card p-8 text-center hover:border-ams-gold transition-all duration-300">
                <div className="w-20 h-20 bg-ams-darkGray rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold/40">
                  <ShieldCheck className="w-10 h-10 text-ams-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Transparência</h3>
                <p className="text-gray-300">
                  Praticamos a transparência em todas as nossas operações, garantindo que nossos clientes 
                  tenham acesso claro às informações e compreendam completamente todas as etapas do processo.
                </p>
              </div>
              
              <div className="glass-card p-8 text-center hover:border-ams-gold transition-all duration-300">
                <div className="w-20 h-20 bg-ams-darkGray rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold/40">
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
      
      {/* Nosso Compromisso */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-darkGray to-ams-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 border border-ams-gold/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-gold">Nosso Compromisso</h2>
              
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
              
              <div className="mt-10 text-center">
                <Link 
                  to="/contato" 
                  className="gold-button px-8 py-3 rounded-md font-medium text-lg inline-flex"
                >
                  Fale Conosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">O Que Dizem Sobre Nós</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A integridade com que conduzimos nossos negócios é refletida nas palavras daqueles que trabalham conosco.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-6 border border-ams-gold/20 hover:border-ams-gold/50 transition-all">
              <p className="text-gray-300 mb-6 italic">
                "Ao longo de nossa parceria com a A.M.S, sempre encontramos um compromisso inabalável com a ética e 
                a transparência. Isso nos dá a confiança necessária para realizar operações financeiras complexas."
              </p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-white font-medium">Roberto Menezes</p>
                  <p className="text-ams-gold text-sm">Diretor Financeiro, TechSolutions</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 border border-ams-gold/20 hover:border-ams-gold/50 transition-all">
              <p className="text-gray-300 mb-6 italic">
                "O que mais valorizo na A.M.S é a clareza com que conduzem seus negócios. Cada etapa do processo é 
                explicada detalhadamente, e nunca há surpresas desagradáveis."
              </p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-white font-medium">Carolina Almeida</p>
                  <p className="text-ams-gold text-sm">CEO, Grupo Almeida</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 border border-ams-gold/20 hover:border-ams-gold/50 transition-all">
              <p className="text-gray-300 mb-6 italic">
                "Em um mercado tão complexo como o financeiro, ter um parceiro que prioriza a integridade faz toda a diferença. 
                A A.M.S sempre nos orientou pelo caminho correto, mesmo quando não era o mais fácil."
              </p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-white font-medium">Marcelo Santos</p>
                  <p className="text-ams-gold text-sm">Proprietário, Santos Agronegócios</p>
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

export default Integridade;
