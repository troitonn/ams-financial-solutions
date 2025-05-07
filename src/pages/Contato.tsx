import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { CircleCheck, Send } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { toast } from 'sonner';

const Contato = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'capital-de-giro'
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'capital-de-giro'
      });
      setLoading(false);
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    // Create WhatsApp message with form data
    const message = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nInteresse: ${getServiceName(formData.service)}\n\nMensagem: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511999285273?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const getServiceName = (serviceKey) => {
    const services = {
      'capital-de-giro': 'Capital de Giro',
      'agronegocio': 'Agronegócio',
      'real-estate': 'Real Estate',
      'trade-finance': 'Trade Finance',
      'antecipacao': 'Antecipação de Créditos'
    };
    return services[serviceKey] || serviceKey;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ams-black via-ams-darkGray to-ams-black opacity-80"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Estamos prontos para ajudar a impulsionar os resultados financeiros da sua empresa
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-ams-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass-card p-8 rounded-lg border border-ams-gold/30 hover:border-ams-gold/70 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 gradient-gold">Fale Conosco</h2>
              <p className="text-gray-300 mb-8">
                Preencha o formulário e um dos nossos consultores entrará em contato 
                com você em breve. Ou, se preferir, utilize um dos nossos canais de atendimento direto.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ams-gold rounded-full p-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ams-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">Telefone</h3>
                    <p className="text-gray-300">+55 (11) 99928-5273</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-ams-gold rounded-full p-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ams-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">Email</h3>
                    <p className="text-gray-300">contato@amsnegcios.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-ams-gold rounded-full p-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ams-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">Endereço</h3>
                    <p className="text-gray-300">Av. Paulista, 1000</p>
                    <p className="text-gray-300">Bela Vista, São Paulo - SP</p>
                    <p className="text-gray-300">CEP: 01310-100</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-ams-gold rounded-full p-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ams-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">Horário de Atendimento</h3>
                    <p className="text-gray-300">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>

                <button 
                  onClick={handleWhatsAppClick} 
                  className="flex items-center justify-center w-full gap-2 bg-[#25D366] hover:bg-[#1da750] text-white py-3 px-4 rounded-lg transition-colors duration-300 mt-6"
                >
                  <WhatsAppIcon size={20} />
                  <span>Fale pelo WhatsApp</span>
                </button>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-lg border border-ams-gold/30 hover:border-ams-gold/70 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 gradient-gold">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    className="w-full px-4 py-3 bg-ams-darkGray bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ams-gold focus:border-transparent text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite o seu email"
                    className="w-full px-4 py-3 bg-ams-darkGray bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ams-gold focus:border-transparent text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1 text-white">
                    Telefone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Digite seu telefone"
                    className="w-full px-4 py-3 bg-ams-darkGray bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ams-gold focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1 text-white">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ams-darkGray bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ams-gold focus:border-transparent text-white"
                  >
                    <option value="capital-de-giro">Capital de Giro</option>
                    <option value="agronegocio">Agronegócio</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="trade-finance">Trade Finance</option>
                    <option value="antecipacao">Antecipação de Créditos</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem"
                    className="w-full px-4 py-3 bg-ams-darkGray bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ams-gold focus:border-transparent text-white"
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 gold-button py-3 rounded-md font-medium flex items-center justify-center"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-ams-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </span>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="px-4 py-2 bg-[#25D366] hover:bg-[#1da750] text-white rounded-md flex items-center justify-center"
                  >
                    <WhatsAppIcon size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-ams-darkGray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center gradient-gold">Nossa Localização</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg glass-card">
              {/* This is a placeholder for a map - in a real implementation, you'd use Google Maps or another map service */}
              <div className="bg-ams-black w-full h-64 flex items-center justify-center border border-ams-gold/10">
                <p className="text-gray-400 text-lg">Mapa indisponível</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contato;
