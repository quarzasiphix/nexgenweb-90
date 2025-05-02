
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '@/context/ChatContext';

const CTASection = () => {
  const navigate = useNavigate();
  const { openChat } = useChat();

  return (
    <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Have Questions About Our Services?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is ready to answer any questions you might have about our services
            and help you find the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className="bg-white text-brand-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium"
              onClick={openChat}
            >
              Chat With Us
            </button>
            <button 
              className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
