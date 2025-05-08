import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BusinessSolutions from '@/components/BusinessSolutions';
import HowItWorks from '@/components/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import PricingSection from '@/components/PricingSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import useAnimationObserver from '@/hooks/useAnimationObserver';
import ChatBubble from '@/components/ChatBubble';
import { useChat } from '@/context/ChatContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAnalytics } from '@/hooks/use-analytics';

const Index = () => {
  useAnimationObserver();
  const { isChatOpen, closeChat } = useChat();
  const isMobile = useIsMobile();
  const { captureEvent } = useAnalytics();

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "NexGenWeb - Digital Business Solutions";
    
    // On mobile, add a class to body for optimized animations
    if (isMobile) {
      document.body.classList.add('mobile-animations');
      document.body.classList.add('mobile-view'); // Add new class for mobile-specific styling
    } else {
      document.body.classList.remove('mobile-animations');
      document.body.classList.remove('mobile-view');
    }
    
    // Log page view to PostHog
    captureEvent('page_view', { page: 'home' });
    
    return () => {
      document.body.classList.remove('mobile-animations');
      document.body.classList.remove('mobile-view');
      document.body.classList.remove('fast-scrolling');
    };
  }, [isMobile, captureEvent]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900">
      <Header />
      <Hero />
      <BusinessSolutions />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <PricingSection />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default Index;
