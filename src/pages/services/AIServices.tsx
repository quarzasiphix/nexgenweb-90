
import React, { useEffect, useState } from 'react';
import { Bot, Brain, Shield, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AIServices = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    document.title = "AI Services - BizWiz";
  }, []);

  const { openChat, isChatOpen, closeChat } = useChat();

  // Handle Buy Now button click
  const handleBuyNow = (serviceTitle: string) => {
    toast({
      title: "Service Selected",
      description: `You've selected the ${serviceTitle} service. Proceeding to checkout.`,
      duration: 3000,
    });
    
    // Navigate to services page with AI tab selected
    navigate('/services');
  };

  const services = [
    {
      id: "finance-hr-ai",
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
      id: "sales-marketing-ai",
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
      id: "it-security-ai",
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
      id: "customer-support-ai",
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
    <div className="min-h-screen bg-neutral-900 overflow-hidden">
      <Header />
      <main className="pt-28 pb-16 px-4 w-full max-w-full">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">AI Solutions</h1>
          <p className="text-lg text-neutral-300 mb-12 max-w-3xl">
            Our comprehensive suite of AI services helps businesses automate processes, 
            gain insights, and drive growth through intelligent technology solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-neutral-800 border-neutral-700 flex flex-col h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-[#9b87f5]/20 mr-3">
                      <service.icon className="h-6 w-6 text-[#D6BCFA]" />
                    </div>
                    <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                  </div>
                  <p className="text-neutral-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-auto">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-neutral-400">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9b87f5] mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                      onClick={() => handleBuyNow(service.title)}
                    >
                      Buy Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full bg-transparent text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5]/10"
                      onClick={() => navigate(`/services/ai/${service.id}`)}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default AIServices;
