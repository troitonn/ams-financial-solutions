
import React from 'react';
import { DollarSign } from 'lucide-react';

const FloatingWhatsAppButton = () => (
  <a 
    href="https://wa.me/5511999285273" 
    target="_blank" 
    rel="noreferrer" 
    aria-label="Contato via WhatsApp" 
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#1da750] transition-all duration-300 pulse-gold-soft"
  >
    <DollarSign className="h-6 w-6 text-white" />
  </a>
);

export default FloatingWhatsAppButton;
