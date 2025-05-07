
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bot, Brain, DollarSign, Users, Shield, Database, Scale, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';

// Define the services data
const aiServiceDetails = {
  "finance-accounting": {
    title: "Finance & Accounting",
    icon: DollarSign,
    description: "Automate financial processes and gain actionable insights with AI-powered analysis.",
    fullDescription: "Our AI-powered finance solutions automate routine accounting tasks, provide real-time financial insights, and help optimize your financial operations with intelligent automation.",
    features: [
      "Invoice Processing",
      "Expense Management",
      "Tax Compliance",
      "Cash Flow Forecasting",
      "Automated Payroll"
    ],
    benefits: [
      "Reduce manual data entry by up to 80%",
      "Minimize human errors in financial processing",
      "Get real-time visibility into your financial status",
      "Improve compliance and reduce audit risks",
      "Make data-driven financial decisions"
    ],
    useCases: [
      {
        title: "Automated Bookkeeping",
        description: "AI-driven systems that automatically categorize transactions, reconcile accounts, and prepare financial statements."
      },
      {
        title: "Intelligent Invoice Processing",
        description: "Systems that automatically extract data from invoices, match them to purchase orders, and route for approval."
      },
      {
        title: "Financial Forecasting",
        description: "Advanced algorithms that analyze historical data to predict future financial trends and cash flow needs."
      }
    ],
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, providing comprehensive finance and accounting automation tools.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with additional custom processes)"]
    }
  },
  "customer-engagement": {
    title: "Customer Engagement",
    icon: Users,
    description: "Automate customer interactions with AI-powered chatbots and personalized engagement tools.",
    fullDescription: "Our AI-powered customer engagement solutions help businesses provide exceptional customer experiences through intelligent automation, personalization, and 24/7 support capabilities.",
    features: [
      "24/7 AI Chatbots",
      "Automated Email Responses",
      "Sentiment Analysis",
      "Call Transcription",
      "Virtual Assistants"
    ],
    benefits: [
      "Provide instant responses to customer inquiries",
      "Understand customer sentiment and address issues proactively",
      "Personalize customer interactions at scale",
      "Reduce support costs while improving satisfaction",
      "Gather actionable insights from customer interactions"
    ],
    useCases: [
      {
        title: "Intelligent Customer Support",
        description: "AI chatbots that handle common inquiries and escalate complex issues to human agents when necessary."
      },
      {
        title: "Automated Follow-ups",
        description: "Systems that automatically send personalized follow-up communications based on customer interactions."
      },
      {
        title: "Customer Sentiment Monitoring",
        description: "Tools that analyze customer communications to detect satisfaction levels and emotional responses."
      }
    ],
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, with enhanced features available in Enterprise.",
      includedIn: ["AI Professional plan (standard features)", "AI Enterprise plan (enhanced customization)"]
    }
  },
  "sales-marketing": {
    title: "Sales & Marketing",
    icon: Bot,
    description: "Streamline lead generation and optimize marketing campaigns with AI-driven solutions.",
    fullDescription: "Our AI-powered sales and marketing tools help businesses identify qualified leads, personalize marketing efforts, and optimize campaigns for maximum ROI.",
    features: [
      "Lead Generation",
      "Ad Optimization",
      "AI Content Generation",
      "Sales Forecasting",
      "CRM Automation"
    ],
    benefits: [
      "Identify and prioritize high-quality leads",
      "Create personalized marketing content at scale",
      "Optimize ad spend for better conversion rates",
      "Predict sales trends and adjust strategies accordingly",
      "Automate routine sales tasks for better efficiency"
    ],
    useCases: [
      {
        title: "Intelligent Lead Scoring",
        description: "AI systems that analyze prospect behavior and characteristics to identify the most promising leads."
      },
      {
        title: "Automated Content Creation",
        description: "AI tools that generate marketing copy, email templates, and social media content."
      },
      {
        title: "Campaign Optimization",
        description: "Systems that automatically adjust marketing campaigns based on performance data."
      }
    ],
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, providing advanced marketing and sales automation tools.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with custom marketing strategies)"]
    }
  },
  "hr-recruitment": {
    title: "HR & Recruitment",
    icon: Users,
    description: "Simplify hiring and employee management with intelligent automation tools.",
    fullDescription: "Our AI-powered HR solutions streamline recruitment processes, automate routine HR tasks, and provide valuable insights into workforce management and employee performance.",
    features: [
      "Resume Screening",
      "Interview Scheduling",
      "Performance Tracking",
      "Training Programs",
      "Employee Analytics"
    ],
    benefits: [
      "Reduce time-to-hire by up to 60%",
      "Eliminate bias in candidate selection",
      "Automate routine HR administration tasks",
      "Personalize employee training and development",
      "Gain insights into workforce performance and satisfaction"
    ],
    useCases: [
      {
        title: "AI Recruitment Assistant",
        description: "Systems that automatically screen resumes, rank candidates, and schedule interviews."
      },
      {
        title: "Performance Management",
        description: "Tools that track employee performance metrics and provide actionable improvement suggestions."
      },
      {
        title: "Employee Engagement Analysis",
        description: "AI systems that analyze communication patterns and feedback to gauge employee satisfaction."
      }
    ],
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, providing comprehensive HR and recruitment automation tools.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with advanced analytics)"]
    }
  },
  "logistics-supply-chain": {
    title: "Logistics & Supply Chain",
    icon: Shield,
    description: "Optimize your supply chain operations with AI-powered logistics management.",
    fullDescription: "Our AI-powered logistics and supply chain solutions help businesses optimize inventory levels, streamline distribution, and predict demand patterns for improved operational efficiency.",
    features: [
      "Inventory Management",
      "Route Optimization",
      "Supplier Management",
      "Demand Forecasting",
      "Warehouse Automation"
    ],
    benefits: [
      "Reduce inventory costs by optimizing stock levels",
      "Minimize delivery times and transportation costs",
      "Anticipate supply chain disruptions before they occur",
      "Automate supplier evaluation and selection",
      "Improve warehouse efficiency and throughput"
    ],
    useCases: [
      {
        title: "Intelligent Inventory Management",
        description: "AI systems that predict optimal inventory levels based on historical data and market trends."
      },
      {
        title: "Route Optimization",
        description: "Tools that calculate the most efficient delivery routes considering multiple variables."
      },
      {
        title: "Demand Forecasting",
        description: "Advanced algorithms that predict product demand allowing for proactive inventory management."
      }
    ],
    packageInfo: {
      name: "AI Enterprise",
      price: "Custom",
      description: "This advanced solution is available in our Enterprise AI package, with pricing tailored to your business scale and requirements.",
      includedIn: ["AI Enterprise plan only"]
    }
  },
  "legal-compliance": {
    title: "Legal & Compliance",
    icon: Scale,
    description: "Streamline legal processes and ensure regulatory compliance with AI automation.",
    fullDescription: "Our AI-powered legal and compliance solutions help businesses navigate complex regulations, automate contract analysis, and reduce legal risks through intelligent document processing.",
    features: [
      "Contract Analysis",
      "Document Generation",
      "Regulatory Compliance",
      "Legal Research",
      "Risk Assessment"
    ],
    benefits: [
      "Reduce contract review time by up to 90%",
      "Ensure compliance with evolving regulations",
      "Minimize legal risks and potential liabilities",
      "Automate creation of standard legal documents",
      "Gain insights from legal precedents and regulations"
    ],
    useCases: [
      {
        title: "Automated Contract Review",
        description: "AI systems that analyze contracts for risks, obligations, and non-standard clauses."
      },
      {
        title: "Compliance Monitoring",
        description: "Tools that track regulatory changes and assess their impact on business operations."
      },
      {
        title: "Legal Document Generation",
        description: "Systems that automatically generate customized legal documents based on specific requirements."
      }
    ],
    packageInfo: {
      name: "AI Enterprise",
      price: "Custom",
      description: "This specialized solution is available in our Enterprise AI package, with industry-specific compliance frameworks.",
      includedIn: ["AI Enterprise plan only"]
    }
  },
  "data-analytics": {
    title: "Data Analytics",
    icon: Database,
    description: "Transform raw data into actionable business intelligence with AI-driven analytics.",
    fullDescription: "Our AI-powered data analytics solutions help businesses extract meaningful insights from their data, identify trends, and make data-driven decisions with advanced visualization and predictive capabilities.",
    features: [
      "Predictive Analytics",
      "Business Intelligence",
      "Competitor Analysis",
      "Data Visualization",
      "Market Trends"
    ],
    benefits: [
      "Discover hidden patterns and relationships in your data",
      "Make proactive decisions based on predictive insights",
      "Visualize complex data in intuitive dashboards",
      "Monitor competitor strategies and market changes",
      "Identify new business opportunities through data analysis"
    ],
    useCases: [
      {
        title: "Business Intelligence Dashboard",
        description: "Interactive visual representations of key business metrics and performance indicators."
      },
      {
        title: "Predictive Sales Analysis",
        description: "AI models that forecast sales trends and identify factors influencing customer purchasing behavior."
      },
      {
        title: "Market Opportunity Identification",
        description: "Tools that analyze market data to uncover untapped business potential and strategic advantages."
      }
    ],
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, providing advanced data analysis and business intelligence tools.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with custom dashboards)"]
    }
  },
  "it-security": {
    title: "IT & Security",
    icon: Shield,
    description: "Protect your business and optimize IT operations with AI-powered security solutions.",
    fullDescription: "Our AI-powered IT and security solutions help businesses detect and respond to threats, automate routine IT tasks, and ensure system reliability through predictive maintenance and monitoring.",
    features: [
      "Threat Detection",
      "IT Support Automation",
      "System Monitoring",
      "Predictive Maintenance",
      "Automated Backups"
    ],
    benefits: [
      "Identify security threats before they cause damage",
      "Reduce IT support costs through automation",
      "Minimize system downtime with predictive maintenance",
      "Ensure data protection with automated backup systems",
      "Optimize IT resource allocation based on usage patterns"
    ],
    useCases: [
      {
        title: "AI Security Monitoring",
        description: "Systems that continuously analyze network traffic and user behavior to detect anomalies and potential threats."
      },
      {
        title: "Automated IT Support",
        description: "AI chatbots and tools that resolve common IT issues without human intervention."
      },
      {
        title: "Predictive System Maintenance",
        description: "Tools that predict hardware and software failures before they occur, allowing for proactive maintenance."
      }
    ],
    packageInfo: {
      name: "Web Business + AI Professional",
      price: "From $2,998",
      description: "This comprehensive solution combines our Web Business plan and AI Professional subscription for complete IT security.",
      includedIn: ["Web Business + AI Professional", "Web Enterprise + AI Enterprise (enhanced features)"]
    }
  }
};

const AIServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { openChat, isChatOpen, closeChat } = useChat();
  
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

  const IconComponent = serviceDetails.icon;

  const handleBuyNow = () => {
    navigate('/services/pricing', { state: { selectedService: serviceDetails.packageInfo.name } });
  };

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
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{serviceDetails.title}</h1>
              <p className="text-lg text-neutral-300 max-w-3xl">
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
          
          {/* Package Information Card */}
          <div className="mb-12">
            <Card className="bg-[#9b87f5]/10 border-[#9b87f5]/30">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Package Information</h2>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-white">{serviceDetails.packageInfo.name}</h3>
                    <p className="text-2xl font-bold text-[#D6BCFA] mt-1">{serviceDetails.packageInfo.price}</p>
                  </div>
                  <Button 
                    className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white mt-4 md:mt-0"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                </div>
                <p className="text-neutral-300 mb-4">{serviceDetails.packageInfo.description}</p>
                <div>
                  <h4 className="font-medium text-white mb-2">Included in:</h4>
                  <ul className="space-y-1">
                    {serviceDetails.packageInfo.includedIn.map((pkg, idx) => (
                      <li key={idx} className="flex items-start text-neutral-300">
                        <svg className="w-5 h-5 mr-2 text-[#D6BCFA] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {pkg}
                      </li>
                    ))}
                  </ul>
                </div>
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

          <div className="bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Our team of experts will help you implement {serviceDetails.title} solutions tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                onClick={handleBuyNow}
              >
                Buy Now: {serviceDetails.packageInfo.price}
              </Button>
              <Button 
                size="lg"
                variant="outline-white"
                onClick={openChat}
              >
                Chat with an Expert
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default AIServiceDetail;
