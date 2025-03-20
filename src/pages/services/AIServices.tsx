
import React, { useEffect } from 'react';
import { Bot, Brain, Shield, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';

const AIServices = () => {
  useEffect(() => {
    document.title = "AI Services - tovernet.nl";
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
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-[#9b87f5]/20 mr-3">
                      <service.icon className="h-6 w-6 text-[#D6BCFA]" />
                    </div>
                    <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                  </div>
                  <p className="text-neutral-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-neutral-400">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9b87f5] mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                    onClick={() => window.location.href = 'mailto:tovernet.nl@services.com'}
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
