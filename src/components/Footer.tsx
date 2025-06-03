import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-ams-black text-white pt-12 pb-6 border-t border-ams-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/lovable-uploads/b247c5c7-36c8-4b05-a27a-07ea51c089bf.png" alt="A.M.S Logo" className="h-16 mb-4" />
            <p className="text-gray-300 mt-4 max-w-xs">
              Desenvolvemos soluções financeiras personalizadas para equilibrar o fluxo de caixa e impulsionar o crescimento da sua empresa.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-ams-gold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-ams-gold transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-ams-gold transition duration-300">
                  Sobre a A.M.S
                </Link>
              </li>
              <li>
                <Link to="/fundador" className="text-gray-300 hover:text-ams-gold transition duration-300">
                  Fundador
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-ams-gold transition duration-300">
                  Nossos Serviços
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-ams-gold">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos#capital" className="text-gray-300 hover:text-ams-gold transition duration-300">
                  Capital de Giro
                </Link>
              </li>
              <li>
                <Link to="/servicos#agronegocio" className="text-gray-300 hover:text-ams-gold transition duration-300">
                  Agronegócio
                </Link>
              </li>
              <li>
                <Link to="/servicos#real-estate" className="text-gray-300 hover:text-ams-gold transition duration-300">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="/servicos#trade-finance" className="text-gray-300 hover:text-ams-gold transition duration-300">
                  Trade Finance
                </Link>
              </li>
              <li>
                <Link to="/servicos#antecipacao" className="text-gray-300 hover:text-ams-gold transition duration-300">
                  Antecipação de Créditos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-ams-gold">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ams-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">antonio@amsintermediacao.com.br</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ams-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">(11) 99928-5273</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ams-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Rua Werner Von Siemens, 111 - Lapa de Baixo, São Paulo - SP, 05069-010</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-ams-gold/20 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Todos os direitos reservados – A.M.S Negócios e Intermediação ®️ {currentYear}
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacidade" className="text-sm text-gray-400 hover:text-ams-gold mr-4">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-sm text-gray-400 hover:text-ams-gold">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;