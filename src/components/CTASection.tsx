
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '@/context/ChatContext';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const navigate = useNavigate();
  const { openChat } = useChat();

  return (
    <section className="py-20 bg-gradient-to-r from-brand-700/90 to-brand-600/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Have Questions About Our <span className="text-gradient-light">Services</span>?
          </h2>
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
