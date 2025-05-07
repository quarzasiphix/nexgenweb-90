
import React, { useEffect, useState } from 'react';
import { Bot, Brain, DollarSign, Users, Shield, Database, Scale, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const AIServices = () => {
  const [inquiryService, setInquiryService] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    document.title = "AI Services - BizWiz";
  }, []);

  const { openChat, isChatOpen, closeChat } = useChat();

  const handleGetStarted = (serviceTitle: string) => {
    setInquiryService(serviceTitle);
    openChat();
    
    // Log the service inquiry
    console.log(`User inquired about ${serviceTitle} service`);
    
    toast({
      title: "Service Selected",
      description: `We'll discuss ${serviceTitle} options in the chat.`,
      duration: 3000,
    });
  };
  
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
      id: "finance-accounting",
      title: "Finance & Accounting",
      icon: DollarSign,
      description: "Automate financial processes and gain actionable insights with AI-powered analysis.",
      features: [
        "Invoice Processing",
        "Expense Management",
        "Tax Compliance",
        "Cash Flow Forecasting",
        "Automated Payroll"
      ]
    },
    {
      id: "customer-engagement",
      title: "Customer Engagement",
      icon: Users,
      description: "Automate customer interactions with AI-powered chatbots and personalized engagement tools.",
      features: [
        "24/7 AI Chatbots",
        "Automated Email Responses",
        "Sentiment Analysis",
        "Call Transcription",
        "Virtual Assistants"
      ]
    },
    {
      id: "sales-marketing",
      title: "Sales & Marketing",
      icon: Bot,
      description: "Streamline lead generation and optimize marketing campaigns with AI-driven solutions.",
      features: [
        "Lead Generation",
        "Ad Optimization",
        "AI Content Generation",
        "Sales Forecasting",
        "CRM Automation"
      ]
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      icon: Database,
      description: "Transform raw data into actionable business intelligence with AI-driven analytics.",
      features: [
        "Predictive Analytics",
        "Business Intelligence",
        "Competitor Analysis",
        "Data Visualization",
        "Market Trends"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 overflow-hidden">
      <Header />
      <main className="pt-28 pb-16 px-4 w-full max-w-full">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">AI-Powered Business Solutions</h1>
          <p className="text-lg text-neutral-300 mb-12 max-w-3xl">
            Our intelligent automation solutions streamline operations and drive growth across
            every area of your business with cutting-edge AI technology.
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
