
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [selectedService, setSelectedService] = React.useState('capital-de-giro');
  
  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, tenho interesse no serviço de ${selectedService}. Gostaria de mais informações.`;
    window.open(`https://wa.me/5511999285273?text=${encodeURIComponent(message)}`, '_blank');
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ams-darkGray to-ams-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-gold glow-text">Entre em Contato</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-white mb-6">
              Estamos prontos para ajudar a impulsionar os resultados financeiros da sua empresa
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco para um atendimento personalizado e 
              conhecer mais informações sobre nosso trabalho.
            </p>
            
            <a 
              href="https://wa.me/5511999285273" 
              target="_blank" 
              rel="noreferrer"
              className="gold-button px-6 py-3 rounded-md font-medium inline-flex items-center group mb-8"
            >
              Fale com um consultor <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="glass-card p-8 rounded-lg border border-ams-gold/20 hover:border-ams-gold/40 transition-all duration-300 shadow-[0_0_30px_rgba(252,204,76,0.07)]">
            <form onSubmit={handleWhatsAppRedirect}>
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium mb-1 text-white">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-ams-darkGray bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ams-gold focus:border-transparent text-white"
                >
                  <option value="capital-de-giro">Capital de Giro</option>
                  <option value="agronegocio">Agronegócio</option>
                  <option value="antecipacao">Antecipação de Créditos</option>
                </select>
              </div>
              <button 
                type="submit"
                className="gold-button w-full py-3 px-6 rounded-md font-medium inline-flex items-center justify-center group"
              >
                Falar pelo WhatsApp <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
