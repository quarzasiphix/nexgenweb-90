
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import HowItWorks from '@/components/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import ChatBubble from '@/components/ChatBubble';
import { useChat } from '@/context/ChatContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAnalytics } from '@/hooks/use-analytics';
import Services from '@/components/Services';
import PricingSection from '@/components/PricingSection';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const Index = () => {
  useAnimationObserver();
  const { isChatOpen, closeChat } = useChat();
  const isMobile = useIsMobile();
  const { captureEvent } = useAnalytics();
  const [fastScrolling, setFastScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["AI Solutions", "Web Development", "Premium Services"];

  useEffect(() => {
    // Set page title
    document.title = "NexGenWeb - Digital Business Solutions";
    
    // On mobile, add a class to body for optimized animations
    if (isMobile) {
      document.body.classList.add('mobile-animations');
    } else {
      document.body.classList.remove('mobile-animations');
    }
    
    // Log page view to PostHog
    captureEvent('page_view', { page: 'home' });
    
    // Setup scroll speed detection
    let lastScrollTop = 0;
    let lastScrollTime = Date.now();
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const now = Date.now();
      const timeDiff = now - lastScrollTime;
      
      if (timeDiff > 0) {
        const scrollDistance = Math.abs(scrollTop - lastScrollTop);
        const scrollSpeed = scrollDistance / timeDiff;
        
        // If scrolling faster than threshold, add fast-scrolling class
        if (scrollSpeed > 0.5) { // Threshold in pixels per millisecond
          if (!fastScrolling) {
            document.body.classList.add('fast-scrolling');
            setFastScrolling(true);
          }
        } else if (fastScrolling) {
          document.body.classList.remove('fast-scrolling');
          setFastScrolling(false);
        }
        
        lastScrollTop = scrollTop;
        lastScrollTime = now;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.body.classList.remove('mobile-animations');
      document.body.classList.remove('fast-scrolling');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, captureEvent, fastScrolling]);

  const handleSectionChange = (index: number) => {
    setActiveSection(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900">
      <Header />
      <Hero />
      
      <section id="business-solutions" className="py-20 bg-neutral-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-neutral-900">
              Our <span className="text-gradient">Solutions</span>
            </h2>
            <div className="flex justify-center space-x-4 mb-8">
              {sections.map((section, index) => (
                <Button 
                  key={index}
                  variant={activeSection === index ? "brand" : "outline"}
                  onClick={() => handleSectionChange(index)}
                  className="transition-all duration-300"
                >
                  {section}
                </Button>
              ))}
            </div>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="w-full">
                {activeSection === 0 && <Solutions />}
                {activeSection === 1 && <Services />}
                {activeSection === 2 && <PricingSection />}
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-1 lg:-left-12" />
            <CarouselNext className="right-1 lg:-right-12" />
          </Carousel>
        </div>
      </section>
      
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default Index;
