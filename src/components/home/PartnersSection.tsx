
import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMotionValue, useTransform, motion } from "framer-motion";

const PartnersSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0.3, 1, 0.3]);
  
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    // Auto scroll the carousel - much slower now (approximately 60 seconds to complete one cycle)
    const autoScroll = () => {
      intervalId = setInterval(() => {
        if (carouselRef.current) {
          const scrollElement = carouselRef.current.querySelector('.embla__container');
          if (scrollElement) {
            const currentScrollLeft = scrollElement.scrollLeft;
            const scrollWidth = scrollElement.scrollWidth;
            const clientWidth = scrollElement.clientWidth;
            
            if (currentScrollLeft + clientWidth >= scrollWidth) {
              // Reset to beginning when reached the end
              scrollElement.scrollLeft = 0;
            } else {
              // Scroll by a very small amount
              scrollElement.scrollLeft += 0.3; // Reduced scrolling speed
            }
          }
        }
      }, 30); // Keep the interval short but reduce the amount scrolled
    };
    
    autoScroll();
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-ams-darkGray to-ams-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent w-1/2 mx-auto"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ams-gold/50 to-transparent w-1/2 mx-auto"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-gold glow-text">Nossos Bancos Parceiros</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Instituições financeiras que confiam em nossa expertise
          </p>
        </div>
        
        <div className="pt-4" ref={carouselRef}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={() => {
              if (carouselRef.current) {
                const scrollElement = carouselRef.current.querySelector('.embla__container');
                if (scrollElement) {
                  clearInterval((carouselRef.current as any).intervalId);
                }
              }
            }}
            onMouseLeave={() => {
              if (carouselRef.current) {
                const scrollElement = carouselRef.current.querySelector('.embla__container');
                if (scrollElement) {
                  (carouselRef.current as any).intervalId = setInterval(() => {
                    if (scrollElement) {
                      scrollElement.scrollLeft += 0.3; // Reduced scrolling speed
                      if (scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth) {
                        scrollElement.scrollLeft = 0;
                      }
                    }
                  }, 30);
                }
              }
            }}
          >
            <CarouselContent>
              {[
                "/lovable-uploads/7f39c7d0-c637-4b1c-9f98-861435e4f32d.png",
                "/lovable-uploads/e6551330-38cd-4a6d-9658-349863f259fd.png",
                "/lovable-uploads/2a802623-4b77-477f-8f9b-94f5f3230c14.png",
                "/lovable-uploads/6951004f-af2f-41b4-82d3-3192c9f2b86e.png",
                "/lovable-uploads/a0cec4f0-c912-4b8e-a768-0b036c8d0416.png",
                "/lovable-uploads/68a674b3-42d7-4caa-97de-0d6d25468170.png",
                "/lovable-uploads/03a2799b-6984-4e84-8b4f-f6db7a39c3f8.png"
              ].map((src, idx) => (
                <CarouselItem key={idx} className="md:basis-1/3 lg:basis-1/4 px-6">
                  <motion.div 
                    style={{ opacity }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-full h-32 w-32 flex items-center justify-center shadow-lg hover:shadow-ams-gold/30 transition-all duration-300 mx-auto"
                  >
                    <img src={src} alt="Banco Parceiro" className="max-h-16 max-w-16 object-contain" />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
