
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, DollarSign, Users, FileText, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const solutionCategories = [
  {
    title: "Customer Engagement",
    icon: Users,
    description: "Automate customer interactions with AI-powered chatbots and personalized engagement tools.",
    features: [
      "24/7 AI Chatbots",
      "Automated Email Responses",
      "Sentiment Analysis",
      "Call Transcription"
    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Sales & Marketing",
    icon: Bot,
    description: "Streamline lead generation and optimize marketing campaigns with AI-driven solutions.",
    features: [
      "Lead Generation",
      "Ad Optimization",
      "AI Content Generation",
      "Sales Forecasting"
    ],
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Finance & Accounting",
    icon: DollarSign,
    description: "Automate financial processes and gain actionable insights with AI-powered analysis.",
    features: [
      "Invoice Processing",
      "Tax Compliance",
      "Cash Flow Forecasting",
      "Expense Tracking"
    ],
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "HR & Recruitment",
    icon: Users,
    description: "Simplify hiring and employee management with intelligent automation tools.",
    features: [
      "Resume Screening",
      "Performance Tracking",
      "Automated Scheduling",
      "Training Programs"
    ],
    color: "from-amber-500 to-yellow-400"
  },
  {
    title: "IT & Security",
    icon: Brain,
    description: "Protect your business and optimize IT operations with AI-powered security solutions.",
    features: [
      "Threat Detection",
      "System Monitoring",
      "Predictive Maintenance",
      "Automated Backups"
    ],
    color: "from-red-500 to-orange-400"
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    description: "Transform raw data into actionable business intelligence with AI-driven analytics.",
    features: [
      "Market Analysis",
      "Business Intelligence",
      "Predictive Analytics",
      "Data Visualization"
    ],
    color: "from-indigo-500 to-blue-400"
  }
];

const SolutionCard = ({ solution, index }: { solution: typeof solutionCategories[0], index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 transform card-hover opacity-0 translate-y-8",
        inView && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`p-6 flex flex-col h-full`}>
        <div className={`w-12 h-12 rounded-lg mb-5 flex items-center justify-center bg-gradient-to-r ${solution.color}`}>
          <solution.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-neutral-800">{solution.title}</h3>
        <p className="text-neutral-600 mb-4 flex-grow">{solution.description}</p>
        <ul className="space-y-2 mb-6">
          {solution.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-neutral-700">
              <svg className="w-4 h-4 mr-2 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Button className="mt-auto w-full bg-gradient-to-r hover:bg-gradient-to-br border-none shadow-md hover:shadow-lg transition-all duration-300 text-white font-medium py-2 px-4 rounded-lg ${solution.color}">
          Learn More
        </Button>
      </div>
    </div>
  );
};

const Solutions = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="solutions" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 opacity-0 transform translate-y-4 transition-all duration-700",
            inView && "opacity-100 transform-none"
          )}>
            AI-Powered Business <span className="text-gradient">Solutions</span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-neutral-600 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
            inView && "opacity-100 transform-none"
          )}>
            Leverage intelligent automation across every department to drive efficiency, 
            reduce costs, and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionCategories.map((solution, index) => (
            <SolutionCard key={index} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
