
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, Percent, Calendar } from 'lucide-react';

const CapitalGiroSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-ams-black to-ams-darkGray relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
      
      {/* Neon glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-ams-gold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-ams-gold/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-ams-gold/25 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Content Section */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold glow-text relative">
              CAPITAL DE GIRO
              <div className="absolute -inset-1 bg-gradient-to-r from-ams-gold/20 to-ams-gold/20 blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
            </h2>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">Ajudamos a fortalecer o fluxo de caixa para que você tenha segurança para crescer, investir e superar desafios financeiros do dia a dia. Com prazos flexíveis, carência e condições ajustadas à sua capacidade de pagamento, você começa a pagar somente quando estiver preparado!</p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="glass-card p-5 rounded-lg border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(252,204,76,0.3)] hover:bg-ams-gold/5 group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-ams-gold/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-ams-gold/20 group-hover:shadow-[0_0_20px_rgba(252,204,76,0.4)] transition-all duration-300">
                  <Clock className="text-ams-gold group-hover:drop-shadow-[0_0_8px_rgba(252,204,76,0.8)]" size={20} />
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-shadow-[0_0_10px_rgba(252,204,76,0.5)]">CARÊNCIA DE 4 MESES À 1 ANO</h3>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
                Linhas de crédito específicas para o setor agro.
              </p>
            </div>

            <div className="glass-card p-5 rounded-lg border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(252,204,76,0.3)] hover:bg-ams-gold/5 group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-ams-gold/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-ams-gold/20 group-hover:shadow-[0_0_20px_rgba(252,204,76,0.4)] transition-all duration-300">
                  <Percent className="text-ams-gold group-hover:drop-shadow-[0_0_8px_rgba(252,204,76,0.8)]" size={20} />
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-shadow-[0_0_10px_rgba(252,204,76,0.5)]">TAXAS ATRATIVAS</h3>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
                Condições especiais para seu negócio crescer com sustentabilidade financeira.
              </p>
            </div>

            <div className="glass-card p-5 rounded-lg border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(252,204,76,0.3)] hover:bg-ams-gold/5 group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-ams-gold/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-ams-gold/20 group-hover:shadow-[0_0_20px_rgba(252,204,76,0.4)] transition-all duration-300">
                  <Calendar className="text-ams-gold group-hover:drop-shadow-[0_0_8px_rgba(252,204,76,0.8)]" size={20} />
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-shadow-[0_0_10px_rgba(252,204,76,0.5)]">PRAZO DE 48 ATÉ 72 VEZES</h3>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
                Flexibilidade para pagar no seu tempo, respeitando seu fluxo de caixa.
              </p>
            </div>

            <div className="glass-card p-5 rounded-lg border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(252,204,76,0.3)] hover:bg-ams-gold/5 group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-ams-gold/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-ams-gold/20 group-hover:shadow-[0_0_20px_rgba(252,204,76,0.4)] transition-all duration-300">
                  <TrendingUp className="text-ams-gold group-hover:drop-shadow-[0_0_8px_rgba(252,204,76,0.8)]" size={20} />
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-shadow-[0_0_10px_rgba(252,204,76,0.5)]">TODOS OS SEGMENTOS</h3>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
                Atendemos todos os capitais de giro conforme seguimento
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
            <Link to="/servicos#capital" className="gold-button px-5 py-2.5 rounded-md font-medium inline-flex items-center justify-center group text-sm hover:shadow-[0_0_25px_rgba(252,204,76,0.5)] transition-all duration-300">
              Saiba mais sobre Capital de Giro
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/5511999285273" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-md font-medium bg-transparent border border-ams-gold text-ams-gold hover:bg-ams-gold hover:text-ams-black hover:shadow-[0_0_25px_rgba(252,204,76,0.4)] transition duration-300 inline-flex items-center justify-center text-sm">
              Fale com um consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapitalGiroSection;
