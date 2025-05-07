
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheck } from 'lucide-react';

interface ServiceFeatureItemProps {
  title: string;
  linkTo: string;
  imageUrl: string;
  benefits: string[];
  imagePosition?: 'left' | 'right';
}

const ServiceFeatureItem: React.FC<ServiceFeatureItemProps> = ({ 
  title, 
  linkTo, 
  imageUrl, 
  benefits, 
  imagePosition = 'right' 
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center relative">
      <div className={`${imagePosition === 'right' ? 'order-2 md:order-1' : ''}`}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-gold">{title}</h3>
        <ul className="space-y-4 text-gray-200">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start hover:translate-x-1 transition-transform duration-300">
              <CircleCheck className="text-ams-gold mr-2 h-6 w-6 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link to={linkTo} className="gold-button px-6 py-2 rounded-md font-medium inline-flex items-center group">
            Saiba mais <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      <div className={`${imagePosition === 'right' ? 'order-1 md:order-2' : ''} relative`}>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden gradient-border shadow-[0_0_30px_rgba(252,204,76,0.07)] transform hover:scale-105 transition-all duration-500">
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ams-black/60 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatureItem;
