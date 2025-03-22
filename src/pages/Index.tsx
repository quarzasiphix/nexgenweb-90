
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Services from '@/components/Services';
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

const Index = () => {
  useAnimationObserver();
  const { isChatOpen, closeChat } = useChat();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Set page title
    document.title = "ToverNet.nl - Digital Business Solutions";
    
    // On mobile, add a class to body for optimized animations
    if (isMobile) {
      document.body.classList.add('mobile-animations');
    } else {
      document.body.classList.remove('mobile-animations');
    }
    
    return () => {
      document.body.classList.remove('mobile-animations');
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <Hero />
      <Solutions />
      <Services />
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
