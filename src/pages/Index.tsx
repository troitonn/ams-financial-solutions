
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/home/FloatingWhatsAppButton';
import HeroSection from '../components/home/HeroSection';
import ServicesHighlightSection from '../components/home/ServicesHighlightSection';
import ResultsSection from '../components/home/ResultsSection';
import DetailedServicesSection from '../components/home/DetailedServicesSection';
import PartnersSection from '../components/home/PartnersSection';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-ams-black text-white relative">
      <NavBar />
      <FloatingWhatsAppButton />
      
      <HeroSection />
      <ServicesHighlightSection />
      <ResultsSection />
      <DetailedServicesSection />
      <PartnersSection />
      <AboutSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
