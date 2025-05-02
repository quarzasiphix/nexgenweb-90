
import React, { useState } from 'react';
import { ArrowRight, DollarSign, Users, Bot, Shield, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const solutionCategories = [
  {
    title: "Finance & HR",
    icon: DollarSign,
    description: "Automate invoicing, payroll, expense tracking, recruitment, and employee management.",
    path: "/solutions/finance-hr"
  },
  {
    title: "Sales & Marketing",
    icon: Bot,
    description: "Boost lead generation, personalize campaigns, optimize ads, and enhance CRM systems.",
    path: "/solutions/sales-marketing"
  },
  {
    title: "IT & Security",
    icon: Shield,
    description: "Protect with threat detection, automated support, and system monitoring.",
    path: "/solutions/it-security"
  },
  {
    title: "Customer Support",
    icon: MessageSquare,
    description: "Deploy chatbots, automate emails, analyze customer sentiment, and transcribe calls.",
    path: "/solutions/customer-support"
  }
];

const BusinessSolutionsHeader = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const navigate = useNavigate();

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={cn(
          "text-center mb-12 transition-all duration-700 transform",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Streamline operations with intelligent automation and digital transformation.
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-neutral-800/50 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => setActiveTab('ai-solutions')}
              className={`px-6 py-3 rounded-full transition-all ${
                activeTab === 'ai-solutions' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              AI Solutions
            </button>
            <button
              onClick={() => setActiveTab('web-services')}
              className={`px-6 py-3 rounded-full transition-all ${
                activeTab === 'web-services' 
                  ? 'bg-neutral-700 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Web Services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {solutionCategories.map((solution, index) => (
            <div 
              key={index}
              className={cn(
                "bg-neutral-800/60 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:bg-neutral-800/90 transform hover:-translate-y-1 hover:shadow-xl",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-700/30 rounded-full mr-3">
                  <solution.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{solution.title}</h3>
              </div>
              
              <p className="text-neutral-300 mb-6">{solution.description}</p>
              
              <button 
                onClick={() => navigate(solution.path)}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/solutions')}
            className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
          >
            View All Solutions <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutionsHeader;
