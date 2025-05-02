
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "BizWiz AI's transformed our customer service operations with their AI chatbot solution. We've seen a 75% reduction in response time and significant cost savings.",
    author: "Sarah Johnson",
    title: "CTO, Global Finance Group",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The AI-powered analytics platform provided unprecedented insights into our business operations. It was like having a crystal ball for market trends.",
    author: "Michael Chen",
    title: "VP of Operations, TechInnovate",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Implementing BizWiz AI's sales automation toolkit increased our conversion rates by 42% in just three months. The ROI has been incredible.",
    author: "Emily Rodriguez",
    title: "Sales Director, RetailPlus",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Our HR department was overwhelmed until we deployed BizWiz AI's recruitment automation. Now we identify top talent faster with less manual screening.",
    author: "David Thompson",
    title: "HR Director, Enterprise Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-20 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMTEtMTIgMCA2IDYgMCAwMTEyIDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div ref={ref} className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative z-10">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-4 text-white opacity-0 transform translate-y-4 transition-all duration-500",
            inView && "opacity-100 transform-none"
          )}>
            What Our Clients <span className="text-gradient bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">Say</span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-white/80 opacity-0 transform translate-y-4 transition-all duration-500 delay-50",
            inView && "opacity-100 transform-none"
          )}>
            Hear from businesses that have transformed their operations 
            with our AI-powered automation solutions.
          </p>
        </div>

        <div className={cn(
          "relative opacity-0 transition-all duration-700 delay-100",
          inView && "opacity-100"
        )}>
          <div className="relative z-10 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-1 border border-white/10">
            <div className="py-12 px-4 sm:px-8 md:px-12">
              <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className={`text-xl sm:text-2xl font-medium mb-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div>
                    <p className="text-lg font-semibold">{testimonials[activeIndex].author}</p>
                    <p className="text-white/70">{testimonials[activeIndex].title}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button 
                onClick={goToPrev}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-brand-400' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
