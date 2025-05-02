
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '@/context/ChatContext';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const navigate = useNavigate();
  const { openChat } = useChat();

  return (
    <section className="py-20 text-white relative overflow-hidden">
      {/* Background elements - using the same pattern as other sections */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMTEtMTIgMCA2IDYgMCAwMTEyIDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>
      
      {/* Luminous orbs for the gradient effect - match with other sections */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Have Questions About Our <span className="text-gradient bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">Services</span>?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is ready to answer any questions you might have about our services
            and help you find the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="white"
              size="lg"
              onClick={openChat}
              className="font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Chat With Us
            </Button>
            <Button 
              variant="outline-white" 
              size="lg"
              onClick={() => navigate('/contact')}
              className="font-medium bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
