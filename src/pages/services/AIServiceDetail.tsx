
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';
import { Bot, Brain, Shield, LineChart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Define the services data with added pricing information
const aiServiceDetails = {
  "finance-hr-ai": {
    title: "Finance & HR AI",
    icon: Brain,
    description: "Advanced AI solutions for financial management and HR automation.",
    fullDescription: "Transform your financial operations and HR processes with our cutting-edge AI solutions. Automate repetitive tasks, gain insights from data, and make informed decisions faster than ever before.",
    features: [
      "Automated invoice processing and expense tracking",
      "AI-driven payroll management",
      "Smart recruitment and candidate screening",
      "Employee performance analytics",
      "Automated compliance monitoring"
    ],
    benefits: [
      "Reduce manual data entry by up to 80%",
      "Cut payroll processing time by 60%",
      "Improve hiring accuracy by using AI-driven candidate matching",
      "Make data-driven HR decisions with comprehensive analytics",
      "Stay compliant with automated monitoring and alerts"
    ],
    package: "Premium",
    price: "$299/month",
    useCases: [
      {
        title: "Automated Invoice Processing",
        description: "Our AI extracts key information from invoices, categorizes expenses, and routes for approval, reducing manual entry and errors."
      },
      {
        title: "Intelligent Recruitment",
        description: "AI screens resumes, matches candidates to job requirements, and even conducts initial screenings to find the best talent."
      },
      {
        title: "Performance Analytics",
        description: "Analyze employee performance with AI-powered insights, identifying top performers and areas needing improvement."
      }
    ]
  },
  "sales-marketing-ai": {
    title: "Sales & Marketing AI",
    icon: LineChart,
    description: "AI-powered tools to boost your sales and marketing efforts.",
    fullDescription: "Revolutionize your sales and marketing strategies with our AI-powered solutions designed to identify opportunities, optimize campaigns, and drive conversions.",
    features: [
      "Predictive lead scoring",
      "Automated campaign optimization",
      "Customer behavior analysis",
      "Sales forecasting",
      "Content personalization"
    ],
    benefits: [
      "Increase conversion rates by focusing on high-potential leads",
      "Optimize marketing spend with AI-driven campaign adjustments",
      "Understand customer behavior patterns to tailor your approach",
      "Forecast sales with higher accuracy to improve resource allocation",
      "Deliver personalized content that resonates with each customer segment"
    ],
    package: "Business",
    price: "$199/month",
    useCases: [
      {
        title: "Lead Scoring & Prioritization",
        description: "Our AI analyzes historical data to rank leads by likelihood to convert, helping your team focus on the most promising opportunities."
      },
      {
        title: "Automated Campaign Optimization",
        description: "AI continuously monitors campaign performance and makes real-time adjustments to maximize ROI."
      },
      {
        title: "Personalized Customer Journeys",
        description: "Create individualized marketing experiences based on customer behavior, preferences, and history."
      }
    ]
  },
  "it-security-ai": {
    title: "IT & Security",
    icon: Shield,
    description: "Intelligent security solutions for your business.",
    fullDescription: "Protect your digital assets with our advanced AI-powered security solutions that detect threats, monitor systems, and provide proactive protection against evolving cyber risks.",
    features: [
      "AI-powered threat detection",
      "Automated system monitoring",
      "Smart backup management",
      "Predictive maintenance",
      "Security compliance automation"
    ],
    benefits: [
      "Detect threats before they cause damage",
      "Maintain system health with 24/7 automated monitoring",
      "Prevent data loss with intelligent backup management",
      "Reduce downtime through predictive maintenance",
      "Simplify compliance with automated security checks"
    ],
    package: "Enterprise",
    price: "$499/month",
    useCases: [
      {
        title: "Intelligent Threat Detection",
        description: "Our AI analyzes patterns and behaviors to identify potential security threats before they impact your business."
      },
      {
        title: "Automated System Health Monitoring",
        description: "Continuous monitoring of your IT infrastructure with alerts and automated responses to potential issues."
      },
      {
        title: "Predictive IT Maintenance",
        description: "AI predicts when hardware and software components are likely to fail, allowing for proactive maintenance."
      }
    ]
  },
  "customer-support-ai": {
    title: "Customer Support AI",
    icon: Bot,
    description: "Transform customer service with AI automation.",
    fullDescription: "Elevate your customer support with intelligent AI solutions that provide 24/7 assistance, analyze customer sentiment, and streamline service operations for improved satisfaction.",
    features: [
      "24/7 AI chatbots",
      "Automated email responses",
      "Sentiment analysis",
      "Call center automation",
      "Customer journey optimization"
    ],
    benefits: [
      "Provide instant support to customers around the clock",
      "Reduce response time for customer inquiries",
      "Understand customer emotions and adjust service accordingly",
      "Streamline call center operations and reduce wait times",
      "Create seamless customer experiences across touchpoints"
    ],
    package: "Business",
    price: "$199/month",
    useCases: [
      {
        title: "24/7 Customer Support Chatbots",
        description: "Intelligent chatbots handle common customer queries instantly, even outside business hours."
      },
      {
        title: "Sentiment Analysis & Response",
        description: "AI analyzes customer communications to detect sentiment and prioritize responses accordingly."
      },
      {
        title: "Automated Ticket Routing",
        description: "Customer issues are automatically categorized and routed to the most appropriate department or specialist."
      }
    ]
  }
};

const AIServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { openChat, isChatOpen, closeChat } = useChat();
  const { toast } = useToast();
  
  const serviceDetails = serviceId ? aiServiceDetails[serviceId as keyof typeof aiServiceDetails] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (serviceDetails) {
      document.title = `${serviceDetails.title} - BizWiz`;
    } else {
      navigate('/services/ai');
    }
  }, [serviceId, navigate, serviceDetails]);

  if (!serviceDetails) {
    return null;
  }

  const handleBuyNow = () => {
    toast({
      title: "Package Selected",
      description: `You've selected the ${serviceDetails.package} package (${serviceDetails.price}) which includes ${serviceDetails.title}.`,
      duration: 3000,
    });
    
    navigate('/services?tab=ai');
  };

  const IconComponent = serviceDetails.icon;

  return (
    <div className="min-h-screen bg-neutral-900 overflow-hidden">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-6 text-white hover:bg-white/10"
            onClick={() => navigate('/services/ai')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to AI Services
          </Button>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-[#9b87f5]/20">
              <IconComponent className="h-8 w-8 text-[#D6BCFA]" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-4xl font-bold text-white mb-2">{serviceDetails.title}</h1>
                <div className="flex flex-col items-start md:items-end">
                  <div className="bg-[#9b87f5]/20 text-[#D6BCFA] px-3 py-1 rounded-full text-sm font-medium mb-1">
                    {serviceDetails.package} Package
                  </div>
                  <div className="text-2xl font-bold text-white">{serviceDetails.price}</div>
                </div>
              </div>
              <p className="text-lg text-neutral-300 max-w-3xl mt-2">
                {serviceDetails.fullDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {serviceDetails.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-neutral-300">
                      <svg className="w-5 h-5 mr-2 text-brand-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Benefits</h2>
                <ul className="space-y-3">
                  {serviceDetails.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-neutral-300">
                      <span className="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {serviceDetails.useCases.map((useCase, index) => (
              <Card key={index} className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-white mb-2">{useCase.title}</h3>
                  <p className="text-neutral-400">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h2>
                <p className="text-neutral-300 max-w-2xl">
                  Get started with the {serviceDetails.package} package ({serviceDetails.price}) which includes {serviceDetails.title} and much more!
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button 
                  size="lg"
                  className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8"
                  onClick={handleBuyNow}
                >
                  Buy {serviceDetails.package} Package
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={openChat}
                >
                  Get a Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default AIServiceDetail;
