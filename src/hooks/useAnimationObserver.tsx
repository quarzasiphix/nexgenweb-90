
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
      rootMargin: '100px', // Increased from 50px to 100px to trigger animations even earlier
      threshold: 0.001  // Reduced from 0.01 to 0.001 to trigger animations at the slightest visibility
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
