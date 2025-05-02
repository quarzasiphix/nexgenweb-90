
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '@/context/ChatContext';

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
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is ready to answer any questions you might have about our services
            and help you find the perfect solution for your business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
