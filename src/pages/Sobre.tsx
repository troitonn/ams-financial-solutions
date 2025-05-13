import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Shield, Building, Award, Users, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Sobre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section - More professional and elegant */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ams-black via-ams-darkGray to-ams-black opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            
            
          </div>
        </div>
        
        {/* Elegant separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/60 to-transparent w-2/3 mx-auto"></div>
      </section>
      
      {/* About Content - More professional */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-1.5 h-12 bg-gradient-to-b from-ams-gold to-ams-gold/40 mr-4"></div>
                <h2 className="text-3xl font-bold text-ams-black">Nossa História</h2>
              </div>
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
            
            {/* Valores Corporativos - Design mais elegante */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 border border-gray-200 rounded-lg hover:border-ams-gold hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-14 h-14 bg-gradient-to-br from-ams-gold/10 to-white rounded-full flex items-center justify-center mb-4 border border-ams-gold/30">
                  <Shield className="w-7 h-7 text-ams-gold" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-ams-black">Missão</h3>
                <p className="text-gray-700">
                  Desenvolver soluções financeiras inovadoras e personalizadas que maximizem o potencial 
                  de crescimento dos nossos clientes, gerando valor e resultados consistentes.
                </p>
              </div>
              
              <div className="p-8 border border-gray-200 rounded-lg hover:border-ams-gold hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-14 h-14 bg-gradient-to-br from-ams-gold/10 to-white rounded-full flex items-center justify-center mb-4 border border-ams-gold/30">
                  <Building className="w-7 h-7 text-ams-gold" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-ams-black">Visão</h3>
                <p className="text-gray-700">
                  Ser reconhecida como a consultoria financeira de referência no Brasil, 
                  conhecida pela excelência, inovação e pelo impacto positivo gerado nos 
                  resultados dos nossos clientes.
                </p>
              </div>
              
              <div className="p-8 border border-gray-200 rounded-lg hover:border-ams-gold hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-14 h-14 bg-gradient-to-br from-ams-gold/10 to-white rounded-full flex items-center justify-center mb-4 border border-ams-gold/30">
                  <Award className="w-7 h-7 text-ams-gold" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-ams-black">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center"><span className="text-ams-gold mr-2">•</span> Ética e transparência em todas as nossas operações</li>
                  <li className="flex items-center"><span className="text-ams-gold mr-2">•</span> Excelência no atendimento e na entrega de resultados</li>
                  <li className="flex items-center"><span className="text-ams-gold mr-2">•</span> Inovação constante em nossas soluções</li>
                  <li className="flex items-center"><span className="text-ams-gold mr-2">•</span> Compromisso com o sucesso dos nossos clientes</li>
                  <li className="flex items-center"><span className="text-ams-gold mr-2">•</span> Responsabilidade e confiança</li>
                </ul>
              </div>
            </div>
            
            {/* Diferenciais - Nova seção */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-1.5 h-12 bg-gradient-to-b from-ams-gold to-ams-gold/40 mr-4"></div>
                <h2 className="text-3xl font-bold text-ams-black">Nossos Diferenciais</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-ams-gold/10 to-white rounded-full flex items-center justify-center border border-ams-gold/30">
                      <Users className="w-6 h-6 text-ams-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-ams-black">Atendimento Personalizado</h3>
                    <p className="text-gray-700">
                      Entendemos que cada empresa é única, com desafios e oportunidades específicos. 
                      Por isso, desenvolvemos soluções totalmente personalizadas para cada cliente.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-ams-gold/10 to-white rounded-full flex items-center justify-center border border-ams-gold/30">
                      <Clock className="w-6 h-6 text-ams-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-ams-black">Agilidade e Eficiência</h3>
                    <p className="text-gray-700">
                      Nossos processos são otimizados para garantir rapidez e eficiência na 
                      implementação das soluções, sem comprometer a qualidade e a segurança.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-ams-gold/10 to-white rounded-full flex items-center justify-center border border-ams-gold/30">
                      <Building className="w-6 h-6 text-ams-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-ams-black">Rede de Relacionamentos</h3>
                    <p className="text-gray-700">
                      Mantemos parcerias estratégicas com as principais instituições financeiras do país, 
                      garantindo acesso às melhores condições e taxas do mercado.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-ams-gold/10 to-white rounded-full flex items-center justify-center border border-ams-gold/30">
                      <Shield className="w-6 h-6 text-ams-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-ams-black">Segurança e Confidencialidade</h3>
                    <p className="text-gray-700">
                      Todas as informações compartilhadas conosco são tratadas com o mais alto nível 
                      de segurança e confidencialidade, protegendo os interesses de nossos clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-1.5 h-12 bg-gradient-to-b from-ams-gold to-ams-gold/40 mr-4"></div>
                <h2 className="text-3xl font-bold text-ams-black">Nossa Abordagem</h2>
              </div>
              
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
            
            {/* Testimonials Section - Design mais profissional */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-1.5 h-12 bg-gradient-to-b from-ams-gold to-ams-gold/40 mr-4"></div>
                <h2 className="text-3xl font-bold text-ams-black">O Que Dizem Sobre Nós</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white">
                  <div className="mb-4 text-ams-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    "Antonio Marcos é um profissional gabaritado, de grande valia numa equipe, colaborador nato.
                    Experiente na área comercial em fundos e bancos e de uma gentileza ímpar.
                    Recomendo com credibilidade e eficiência de executivo exemplar."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-ams-black">Douglas Kuroviski</p>
                      <p className="text-ams-gold">Head Grandes Contas | Especialista | Hunter | Sales Trader l Tecnologia</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white">
                  <div className="mb-4 text-ams-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    "Recomendo este excelente profissional para área comercial.
                    Dinâmico, arrojado, vontade de vencer.
                    Parabéns você é merecedor de grandes conquistas."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-ams-black">Edilene Pontes Pontes</p>
                      <p className="text-ams-gold">Gerente Comercial. Fidcs.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white md:col-span-2">
                  <div className="mb-4 text-ams-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    "Antonio Marcos é sinônimo de credibilidade, ética e transparência no mercado financeiro, altamente capacitado e solícito."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-ams-black">Thiago Garcia</p>
                      <p className="text-ams-gold">Especialista em Estratégias e Soluções Financeiras, FP&A, Controller.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call To Action - Design mais profissional */}
            <div className="text-center bg-gradient-to-r from-ams-gold/10 to-ams-gold/5 p-10 rounded-lg border border-ams-gold/20">
              <h3 className="text-2xl font-bold mb-4 text-ams-black">Pronto para impulsionar o seu negócio?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a alcançar novos patamares de sucesso.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="https://wa.me/5511999285273" target="_blank" rel="noreferrer" className="gold-button px-8 py-3 rounded-md font-medium text-lg inline-flex items-center">
                  Entre em contato
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
                <Link to="/servicos" className="bg-white text-ams-darkGray border border-gray-300 px-8 py-3 rounded-md font-medium text-lg inline-flex items-center hover:bg-gray-50 transition-colors">
                  Conheça nossos serviços
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Sobre;