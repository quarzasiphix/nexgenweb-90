
import React, { useEffect } from 'react';
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

  // Navigate directly to the services pricing page
  const handleBuyNow = (serviceTitle: string, packageType: string) => {
    toast({
      title: "Service Selected",
      description: `You've selected the ${packageType} package which includes ${serviceTitle}. Proceeding to checkout.`,
      duration: 3000,
    });
    
    // Navigate to the dedicated services page with AI tab selected
    navigate('/services?tab=ai');
  };

  const services = [
    {
      id: "finance-hr-ai",
      title: "Finance & HR AI",
      icon: Brain,
      description: "Advanced AI solutions for financial management and HR automation.",
      package: "Premium",
      price: "$299/month",
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
      package: "Business",
      price: "$199/month",
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
      package: "Enterprise",
      price: "$499/month",
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
      package: "Business",
      price: "$199/month",
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-[#9b87f5]/20 mr-3">
                        <service.icon className="h-6 w-6 text-[#D6BCFA]" />
                      </div>
                      <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                    </div>
                    <div className="bg-[#9b87f5]/10 text-[#D6BCFA] px-3 py-1 rounded-full text-sm font-medium">
                      {service.package}
                    </div>
                  </div>
                  <p className="text-neutral-300 mb-2">{service.description}</p>
                  <p className="text-xl font-bold text-white mb-4">{service.price}</p>
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
                      onClick={() => handleBuyNow(service.title, service.package)}
                    >
                      Buy {service.package} Package
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

          <div className="mt-16 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need a Custom AI Solution?</h2>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Our team can build tailored AI solutions specific to your business requirements. 
              Contact us to discuss how we can help you leverage AI for your unique challenges.
            </p>
            <Button 
              size="lg"
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              onClick={() => openChat()}
            >
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </main>
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default AIServices;
