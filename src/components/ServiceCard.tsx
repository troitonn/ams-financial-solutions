
import React from 'react';
import { Link } from 'react-router-dom';
import { Capital, ChemicalIcon, RealEstateAgency, ExchangeRate, JudicialIcon } from './ServiceIcons';

type ServiceIconType = 'capital' | 'chemical' | 'real-estate-agency' | 'exchange-rate' | 'judicial';

interface ServiceCardProps {
  title: string;
  icon: ServiceIconType;
  description?: string;
  link: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  description,
  link,
  className
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'capital':
        return <Capital className="w-8 h-8 text-ams-gold" />;
      case 'chemical':
        return <ChemicalIcon className="w-8 h-8 text-ams-gold" />;
      case 'real-estate-agency':
        return <RealEstateAgency className="w-8 h-8 text-ams-gold" />;
      case 'exchange-rate':
        return <ExchangeRate className="w-8 h-8 text-ams-gold" />;
      case 'judicial':
        return <JudicialIcon className="w-8 h-8 text-ams-gold" />;
      default:
        return null;
    }
  };

  return (
    <div className={`service-card aspect-square rounded-full shadow-lg flex flex-col ${className} transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_25px_rgba(252,204,76,0.25)]`}>
      <div className="flex flex-col items-center text-center h-full justify-center p-6">
        <div className="bg-ams-black bg-opacity-70 p-5 rounded-full mb-4 border border-ams-gold/40 shadow-[0_0_15px_rgba(252,204,76,0.15)] animate-pulse-slow">
          {renderIcon()}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white gradient-gold">{title}</h3>
        {description && <p className="text-gray-300 mb-3 text-sm">{description}</p>}
        <Link to={link} className="inline-flex items-center gold-button font-medium px-4 py-1.5 rounded-full transition-all duration-300 group text-sm">
          Saiba Mais
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
