
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Testimonial component
const Testimonial = ({
  name,
  position,
  imageUrl,
  text,
  subText
}: {
  name: string;
  position: string;
  imageUrl?: string;
  text: string;
  subText?: string;
}) => (
  <div className="bg-ams-darkGray/40 p-6 rounded-lg border border-ams-gold/20 hover:shadow-xl hover:shadow-ams-gold/5 transition-all duration-300">
    <p className="text-gray-300 italic mb-4">"{text}"</p>
    <div className="flex items-center">
      {imageUrl && (
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-ams-gold/30">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-ams-gold text-sm">{position}</p>
        {subText && <p className="text-gray-400 text-xs mt-1">{subText}</p>}
      </div>
    </div>
  </div>
);

const AboutSection = () => {
  const testimonials = [
    {
      name: "Douglas Kuroviski",
      position: "Head Grandes Contas | Especialista | Hunter | Sales Trader l Tecnologia",
      text: "Antonio Marcos é um profissional gabaritado, de grande valia numa equipe, colaborador nato. Experiente na área comercial em fundos e bancos e de uma gentileza ímpar. Recomendo com credibilidade e eficiência de executivo exemplar.",
      subText: "June 16, 2020, Douglas worked with Antonio on the same team"
    },
    {
      name: "Edilene Pontes",
      position: "Gerente Comercial. Fidcs.",
      text: "Recomendo este excelente profissional para área comercial. Dinâmico, arrojado, vontade de vencer. Parabéns você é merecedor de grandes conquistas.",
      subText: "June 16, 2020, Edilene Pontes worked with Antonio but on different teams"
    },
    {
      name: "Thiago Garcia",
      position: "Especialista em Estratégias e Soluções Financeiras, FP&A, Controller.",
      text: "Antonio Marcos é sinônimo de credibilidade, ética e transparência no mercado financeiro, altamente capacitado e solícito.",
      subText: "June 12, 2020, Thiago was Antonio's client"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ams-black to-ams-darkGray relative overflow-hidden" id="sobre">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent w-1/3 mx-auto"></div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 my-[50px]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold glow-text">Sobre a A.M.S</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A A.M.S Negócios e Intermediação é uma empresa focada em oferecer 
              soluções personalizadas que atendem a diversos perfis de clientes. 
              Nossa abordagem consiste em desenvolver estratégias exclusivas e 
              sob medida para cada cliente, visando a captação de recursos e o 
              impulsionamento de projetos e negócios que agreguem valor à sua 
              estrutura operacional.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nosso principal foco é atender empresas de médio e grande porte em 
              todo o território nacional.
            </p>
            <Link to="/sobre" className="gold-button px-6 py-3 rounded-md font-medium inline-flex items-center group">
              Saiba mais <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border shadow-[0_0_30px_rgba(252,204,76,0.07)] transform hover:scale-105 transition-all duration-500">
              <img src="/lovable-uploads/120b0df1-552f-42b0-aaed-cf22d098575e.png" alt="Edifício empresarial moderno com palmeiras" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ams-black/60 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="mb-12 my-[111px]">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-gold glow-text">O Que Dizem Sobre Nós</h3>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            A integridade com que conduzimos nossos negócios é refletida nas palavras daqueles que trabalham conosco.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index} 
                name={testimonial.name} 
                position={testimonial.position} 
                text={testimonial.text} 
                subText={testimonial.subText}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
