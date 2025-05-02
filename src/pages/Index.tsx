
import React, { useEffect, useState } from 'react';
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
import { useAnalytics } from '@/hooks/use-analytics';

// Custom CSS classes for different section themes
const sectionThemes = {
  solutions: "solutions-theme", // Purple theme
  services: "services-theme",   // Blue theme
  webDev: "webdev-theme"        // Orange theme
}

const Index = () => {
  useAnimationObserver();
  const { isChatOpen, closeChat } = useChat();
  const isMobile = useIsMobile();
  const { captureEvent } = useAnalytics();
  const [fastScrolling, setFastScrolling] = useState(false);

  useEffect(() => {
    // Set page title
    document.title = "BizWiz - Digital Business Solutions";
    
    // On mobile, add a class to body for optimized animations
    if (isMobile) {
      document.body.classList.add('mobile-animations');
    } else {
      document.body.classList.remove('mobile-animations');
    }
    
    // Add theme-specific CSS variables
    document.documentElement.style.setProperty('--solutions-primary', '#6E59A5');  // Purple
    document.documentElement.style.setProperty('--solutions-secondary', '#9b87f5');
    document.documentElement.style.setProperty('--services-primary', '#33C3F0');   // Blue
    document.documentElement.style.setProperty('--services-secondary', '#0EA5E9');
    document.documentElement.style.setProperty('--webdev-primary', '#F97316');     // Orange
    document.documentElement.style.setProperty('--webdev-secondary', '#FB923C');
    
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
      
      // Clean up theme CSS variables
      document.documentElement.style.removeProperty('--solutions-primary');
      document.documentElement.style.removeProperty('--solutions-secondary');
      document.documentElement.style.removeProperty('--services-primary');
      document.documentElement.style.removeProperty('--services-secondary');
      document.documentElement.style.removeProperty('--webdev-primary');
      document.documentElement.style.removeProperty('--webdev-secondary');
    };
  }, [isMobile, captureEvent, fastScrolling]);

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <Hero />
      <div className={sectionThemes.solutions}>
        <Solutions />
      </div>
      <div className={sectionThemes.services}>
        <Services />
      </div>
      <div className={sectionThemes.webDev}>
        <HowItWorks />
      </div>
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
