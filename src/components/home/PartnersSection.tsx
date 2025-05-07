
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PartnersSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-ams-darkGray to-ams-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Nossos Bancos Parceiros</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Instituições financeiras que confiam em nossa expertise
          </p>
        </div>
        
        <div className="pt-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                  <img src="/lovable-uploads/7f39c7d0-c637-4b1c-9f98-861435e4f32d.png" alt="Banco Parceiro" className="max-h-16" />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                  <img src="/lovable-uploads/e6551330-38cd-4a6d-9658-349863f259fd.png" alt="Banco Parceiro" className="max-h-16" />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                  <img src="/lovable-uploads/2a802623-4b77-477f-8f9b-94f5f3230c14.png" alt="Banco Parceiro" className="max-h-16" />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                  <img src="/lovable-uploads/6951004f-af2f-41b4-82d3-3192c9f2b86e.png" alt="Banco Parceiro" className="max-h-16" />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                  <img src="/lovable-uploads/a0cec4f0-c912-4b8e-a768-0b036c8d0416.png" alt="Banco Parceiro" className="max-h-16" />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                  <img src="/lovable-uploads/68a674b3-42d7-4caa-97de-0d6d25468170.png" alt="Banco Parceiro" className="max-h-16" />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <div className="bg-white p-6 rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 transform hover:scale-105">
                  <img src="/lovable-uploads/03a2799b-6984-4e84-8b4f-f6db7a39c3f8.png" alt="Banco Parceiro" className="max-h-16" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static translate-y-0 mx-2" />
              <CarouselNext className="relative static translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
