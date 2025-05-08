
import React from 'react';
import { Dollar, Sprout, Home, BarChart3, FileSpreadsheet } from 'lucide-react';

interface IconProps {
  className?: string;
}

export const Capital: React.FC<IconProps> = ({ className = "" }) => (
  <Dollar className={className} />
);

export const ChemicalIcon: React.FC<IconProps> = ({ className = "" }) => (
  <Sprout className={className} />
);

export const RealEstateAgency: React.FC<IconProps> = ({ className = "" }) => (
  <Home className={className} />
);

export const ExchangeRate: React.FC<IconProps> = ({ className = "" }) => (
  <BarChart3 className={className} />
);

export const JudicialIcon: React.FC<IconProps> = ({ className = "" }) => (
  <FileSpreadsheet className={className} />
);
