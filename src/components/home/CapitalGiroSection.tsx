
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, Percent, Calendar } from 'lucide-react';

const CapitalGiroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ams-darkGray to-ams-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Content Section */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">
                CAPITAL DE GIRO
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Garantimos à sua empresa recursos rápidos e sob medida para manter as operações funcionando com tranquilidade.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ajudamos a fortalecer o fluxo de caixa para que você tenha segurança para crescer, investir e superar desafios financeiros do dia a dia. Com prazos flexíveis, carência e condições ajustadas à sua capacidade de pagamento, você começa a pagar somente quando estiver preparado.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <Clock className="text-ams-gold mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-white">CARÊNCIA DE 4 MESES À 1 ANO</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Linhas de crédito específicas para o setor agro.
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Atendemos todos os capitais de giro conforme seguimento
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <Percent className="text-ams-gold mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-white">TAXAS ATRATIVAS</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Condições especiais para seu negócio crescer.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="text-ams-gold mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-white">PRAZO DE 48 ATÉ 72 VEZES</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Flexibilidade para pagar no seu tempo.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-ams-gold mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-white">TODOS OS SEGMENTOS</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Atendemos todos os capitais de giro conforme seguimento
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/servicos#capital" 
                className="gold-button px-6 py-3 rounded-md font-medium inline-flex items-center justify-center group"
              >
                Saiba mais sobre Capital de Giro
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/5511999285273" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 rounded-md font-medium bg-transparent border border-ams-gold text-ams-gold hover:bg-ams-gold hover:text-ams-black transition duration-300 inline-flex items-center justify-center"
              >
                Fale com um consultor
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-ams-gold/20 shadow-[0_5px_20px_rgba(252,204,76,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                alt="Capital de Giro - Soluções financeiras para empresas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapitalGiroSection;
