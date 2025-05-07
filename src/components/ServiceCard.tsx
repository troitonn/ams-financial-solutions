
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Capital, 
  ChemicalIcon, 
  RealEstateAgency, 
  ExchangeRate, 
  JudicialIcon 
} from './ServiceIcons';

type ServiceIconType = 'capital' | 'chemical' | 'real-estate-agency' | 'exchange-rate' | 'judicial';

interface ServiceCardProps {
  title: string;
  icon: ServiceIconType;
  description?: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, link }) => {
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
    <div className="service-card bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full flex flex-col">
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-100 p-4 rounded-full mb-4">
          {renderIcon()}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <Link 
          to={link} 
          className="mt-auto inline-flex items-center text-ams-black bg-ams-gold hover:bg-opacity-90 font-medium px-4 py-2 rounded-md transition-colors"
        >
          Saiba Mais
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
