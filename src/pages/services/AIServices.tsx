
import React, { useEffect } from 'react';
import { Bot, Brain, Shield, LineChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';

const AIServices = () => {
  useEffect(() => {
    document.title = "AI Services - BizWiz";
  }, []);

  const services = [
    {
      title: "Finance & HR AI",
      icon: Brain,
      description: "Advanced AI solutions for financial management and HR automation.",
      features: [
        "Automated invoice processing and expense tracking",
        "AI-driven payroll management",
        "Smart recruitment and candidate screening",
        "Employee performance analytics",
        "Automated compliance monitoring"
      ]
    },
    {
      title: "Sales & Marketing AI",
      icon: LineChart,
      description: "AI-powered tools to boost your sales and marketing efforts.",
      features: [
        "Predictive lead scoring",
        "Automated campaign optimization",
        "Customer behavior analysis",
        "Sales forecasting",
        "Content personalization"
      ]
    },
    {
      title: "IT & Security",
      icon: Shield,
      description: "Intelligent security solutions for your business.",
      features: [
        "AI-powered threat detection",
        "Automated system monitoring",
        "Smart backup management",
        "Predictive maintenance",
        "Security compliance automation"
      ]
    },
    {
      title: "Customer Support AI",
      icon: Bot,
      description: "Transform customer service with AI automation.",
      features: [
        "24/7 AI chatbots",
        "Automated email responses",
        "Sentiment analysis",
        "Call center automation",
        "Customer journey optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">AI Solutions</h1>
          <p className="text-lg text-neutral-300 mb-12 max-w-3xl">
            Our comprehensive suite of AI services helps businesses automate processes, 
            gain insights, and drive growth through intelligent technology solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-blue-900/40 flex items-center justify-center mr-4">
                      <service.icon className="h-7 w-7 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                  </div>
                  <p className="text-neutral-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-neutral-400">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center mb-6">
                    <a href="#" className="text-blue-400 flex items-center hover:text-blue-300 transition-colors">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                  
                  <Button 
                    className="w-full mt-2 bg-brand-500 hover:bg-brand-600 text-white"
                    onClick={() => window.location.href = 'mailto:BizWiz@services.com'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIServices;
