import React from 'react';
import { Building, Briefcase, ShieldCheck } from 'lucide-react';
const BankPartnershipsSection = () => {
  return <section className="py-16 md:py-24 bg-gradient-to-b from-ams-darkGray to-ams-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent w-1/2 mx-auto"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Parcerias com Grandes Bancos</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Contamos com uma rede de parceiros estratégicos que nos permitem oferecer as melhores soluções financeiras do mercado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="glass-card p-8 text-center rounded-lg border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-ams-black rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold">
              <Building className="w-8 h-8 text-ams-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Instituições Financeiras</h3>
            <p className="text-gray-300">
              Parcerias com os principais bancos e instituições do país, garantindo acesso a condições diferenciadas para nossos clientes.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center rounded-lg border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-ams-black rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold">
              <Briefcase className="w-8 h-8 text-ams-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fundos de Investimento</h3>
            <p className="text-gray-300">
              Relacionamento próximo com fundos de investimento especializados em diferentes segmentos, possibilitando operações estruturadas.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center rounded-lg border border-ams-gold/20 hover:border-ams-gold/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-ams-black rounded-full flex items-center justify-center mx-auto mb-6 border border-ams-gold">
              <ShieldCheck className="w-8 h-8 text-ams-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Confiabilidade</h3>
            <p className="text-gray-300">
              Nossos parceiros são instituições reguladas e fiscalizadas, proporcionando segurança e transparência em todas as operações.
            </p>
          </div>
        </div>
        
        
      </div>
    </section>;
};
export default BankPartnershipsSection;