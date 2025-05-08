
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
        return <Capital className="w-7 h-7 text-ams-gold" />;
      case 'chemical':
        return <ChemicalIcon className="w-7 h-7 text-ams-gold" />;
      case 'real-estate-agency':
        return <RealEstateAgency className="w-7 h-7 text-ams-gold" />;
      case 'exchange-rate':
        return <ExchangeRate className="w-7 h-7 text-ams-gold" />;
      case 'judicial':
        return <JudicialIcon className="w-7 h-7 text-ams-gold" />;
      default:
        return null;
    }
  };

  return (
    <Link to={link} className="block">
      <div className={`service-card aspect-square rounded-full shadow-lg flex flex-col ${className} transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(252,204,76,0.2)]`}>
        <div className="flex flex-col items-center text-center h-full justify-center p-5">
          <div className="bg-ams-black bg-opacity-70 p-4 rounded-full mb-3 border border-ams-gold/30">
            {renderIcon()}
          </div>
          <h3 className="text-lg font-bold mb-1 text-white gradient-gold">{title}</h3>
          {description && <p className="text-gray-300 text-xs">{description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
