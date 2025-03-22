
import { useEffect } from 'react';

const useAnimationObserver = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '50px', // Increased from 0px to trigger animations before elements are in viewport
      threshold: 0.01  // Reduced from 0.05 to trigger animations much sooner
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const elements = document.querySelectorAll('.animate-on-scroll, .stagger-children');
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
};

export default useAnimationObserver;
