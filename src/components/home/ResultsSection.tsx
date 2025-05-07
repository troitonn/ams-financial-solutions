import React from 'react';
const ResultsSection = () => {
  return <section className="py-16 md:py-24 bg-gradient-to-b from-ams-darkGray to-ams-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-ams-black via-ams-darkGray/90 to-ams-black opacity-90"></div>
        {/* Abstract financial background */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-5">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fccc4c" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f8b64c" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path d="M0,500 Q250,300 500,500 T1000,500" stroke="url(#grad1)" strokeWidth="2" fill="none" />
            <path d="M0,550 Q250,350 500,550 T1000,550" stroke="url(#grad1)" strokeWidth="1.5" fill="none" />
            <path d="M0,450 Q250,250 500,450 T1000,450" stroke="url(#grad1)" strokeWidth="1" fill="none" />
            <path d="M0,600 Q250,400 500,600 T1000,600" stroke="url(#grad1)" strokeWidth="0.5" fill="none" />
            <path d="M0,400 Q250,200 500,400 T1000,400" stroke="url(#grad1)" strokeWidth="0.5" fill="none" />
            
            {/* Grid lines */}
            {[...Array(20)].map((_, i) => <line key={i} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="#fccc4c" strokeWidth="0.2" strokeDasharray="5,10" />)}
            {[...Array(20)].map((_, i) => <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="1000" stroke="#fccc4c" strokeWidth="0.2" strokeDasharray="5,10" />)}
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Resultados em 2024</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Até o momento foram gerados pela A.M.S:
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="glass-card p-10 text-center transform hover:scale-105 transition-all duration-500 border border-ams-gold/40 shadow-[0_0_30px_rgba(252,204,76,0.15)] animate-float-soft">
            <div className="gradient-gold text-6xl md:text-7xl lg:text-8xl font-bold mb-2 glow-text-pulse">+R$50MM</div>
            <div className="text-3xl md:text-4xl text-ams-gold font-bold"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default ResultsSection;