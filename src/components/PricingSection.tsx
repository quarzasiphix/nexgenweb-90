import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { useChat } from '@/context/ChatContext';

const PricingSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { openChat } = useChat();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleBuyNow = (service: string, tier: string, price: string) => {
    setSelectedPlan(`${tier} (${price})`);
    toast({
      title: "Service Selected",
      description: `You've selected the ${tier} tier of ${service} for ${price}. Proceeding to checkout.`,
      duration: 5000,
    });
    
    // Navigate to services page with the selected plan
    navigate('/services');
  };

  const aiServices = [
    {
      id: "ai-starter",
      title: "AI Starter",
      price: "$499",
      period: "/mo",
      description: "Essential AI automation for small businesses",
      features: [
        "AI Chatbot",
        "Basic Analytics",
        "Email Automation",
        "5 Workflow Automations",
        "Standard Support"
      ]
    },
    {
      id: "ai-professional",
      title: "AI Professional",
      price: "$999",
      period: "/mo",
      description: "Complete AI solution for growing businesses",
      features: [
        "Advanced AI Chatbot",
        "Full Analytics Suite",
        "Marketing Automation",
        "Unlimited Workflows",
        "CRM Integration",
        "Priority Support"
      ],
      popular: true
    },
    {
      id: "ai-enterprise",
      title: "AI Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored AI solutions for large organizations",
      features: [
        "Custom AI Solutions",
        "Dedicated Account Manager",
        "API Access & Integration",
        "Custom Reporting",
        "On-premise Option",
        "24/7 Premium Support",
        "Training & Workshops"
      ]
    }
  ];

  const webServices = [
    {
      id: "web-basic",
      title: "Web Basic",
      price: "$899",
      period: "/one-time",
      description: "Professional website for small businesses",
      features: [
        "5-page Responsive Website",
        "Basic AI Chatbot",
        "Standard Hosting",
        "Basic SEO",
        "1 Year Maintenance",
        "Email Support"
      ]
    },
    {
      id: "web-business",
      title: "Web Business",
      price: "$1,999",
      period: "/one-time",
      description: "Complete web presence for growing businesses",
      features: [
        "10-page Custom Website",
        "Advanced AI Features",
        "High-performance Hosting",
        "Advanced SEO & Analytics",
        "E-commerce Integration",
        "2 Years Maintenance",
        "Priority Support"
      ],
      popular: true
    },
    {
      id: "web-enterprise",
      title: "Web Enterprise",
      price: "Custom",
      period: "",
      description: "Enterprise-grade web solutions",
      features: [
        "Unlimited Pages",
        "Custom Web Application",
        "Advanced AI Integration",
        "Enterprise Hosting",
        "Full-stack Development",
        "Ongoing Maintenance",
        "24/7 Dedicated Support",
        "Security Audits"
      ]
    }
  ];

  const premiumServices = [
    {
      id: "custom-ai-integration",
      title: "Custom AI Integration",
      price: "$4,999",
      period: "/project",
      description: "Seamlessly integrate AI into your existing systems with custom workflows and automation pipelines.",
      features: [
        "Bespoke AI Solutions",
        "Seamless Integration",
        "Custom API Development",
        "Data Preparation & Cleaning",
        "Expert Implementation",
        "Ongoing Support"
      ]
    },
    {
      id: "ai-powered-web",
      title: "AI-Powered Web",
      price: "$3,999",
      period: "/project",
      description: "Create intelligent, responsive websites with AI-driven content and personalization capabilities.",
      features: [
        "Real-time User Adaptation",
        "Personalized User Experiences",
        "Intelligent Search",
        "Content Recommendations",
        "Behavior Analysis",
        "Multi-platform Deployment"
      ],
      popular: true
    },
    {
      id: "enterprise-ai",
      title: "Enterprise AI",
      price: "Custom",
      period: "",
      description: "Comprehensive AI integration strategies tailored for large organizations and complex requirements.",
      features: [
        "Organization-wide AI Governance",
        "Custom Knowledge Management",
        "Multi-department Workflows",
        "Security & Compliance",
        "Enterprise Data Integration",
        "Executive Dashboard"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Services & Pricing
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect package for your business needs. All plans include our 
            award-winning customer support and satisfaction guarantee.
          </p>
        </div>

        <Tabs defaultValue="ai" className="w-full mb-12">
          <TabsList className="max-w-md mx-auto bg-neutral-800 mb-8">
            <TabsTrigger value="ai" className="text-white data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white">
              AI Solutions
            </TabsTrigger>
            <TabsTrigger value="web" className="text-white data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white">
              Web Development
            </TabsTrigger>
            <TabsTrigger value="premium" className="text-white data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white">
              Premium Services
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ai" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aiServices.map((service) => (
                <Card key={service.id} className={`bg-neutral-800 border ${service.popular ? 'border-[#9b87f5]' : 'border-neutral-700'} flex flex-col h-full relative overflow-hidden`}>
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-[#9b87f5] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      {service.period && <span className="text-neutral-400 ml-2">{service.period}</span>}
                    </div>
                    <p className="text-neutral-300 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-auto">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-neutral-400">
                          <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button 
                        className={`w-full ${service.popular ? 'bg-[#9b87f5]' : ''}`}
                        variant={service.popular ? "default" : "white"}
                        onClick={() => handleBuyNow('AI Solutions', service.title, service.price)}
                      >
                        {service.price === "Custom" ? "Contact Us" : "Buy Now"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className={`bg-neutral-800 border border-neutral-700 flex flex-col h-full`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-white mb-2">Web Basic</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-white">$899</span>
                    <span className="text-neutral-400 ml-2">/one-time</span>
                  </div>
                  <p className="text-neutral-300 mb-6">Professional website for small businesses</p>
                  <ul className="space-y-3 mb-auto">
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      5-page Responsive Website
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      Basic AI Chatbot
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      Standard Hosting
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      Basic SEO
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      1 Year Maintenance
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button 
                      variant="white"
                      className="w-full"
                      onClick={() => handleBuyNow('Web Development', 'Web Basic', '$899')}
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`bg-neutral-800 border border-[#9b87f5] flex flex-col h-full relative overflow-hidden`}>
                <div className="absolute top-0 right-0 bg-[#9b87f5] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-white mb-2">Web Business</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-white">$1,999</span>
                    <span className="text-neutral-400 ml-2">/one-time</span>
                  </div>
                  <p className="text-neutral-300 mb-6">Complete web presence for growing businesses</p>
                  <ul className="space-y-3 mb-auto">
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      10-page Custom Website
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      Advanced AI Features
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      High-performance Hosting
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      Advanced SEO & Analytics
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      E-commerce Integration
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      2 Years Maintenance
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button 
                      className="w-full bg-[#9b87f5]"
                      onClick={() => handleBuyNow('Web Development', 'Web Business', '$1,999')}
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`bg-neutral-800 border border-neutral-700 flex flex-col h-full`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-white mb-2">Web Enterprise</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-white">Custom</span>
                  </div>
                  <p className="text-neutral-300 mb-6">Enterprise-grade web solutions</p>
                  <ul className="space-y-3 mb-auto">
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      Unlimited Pages
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      Custom Web Application
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      Advanced AI Integration
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      Enterprise Hosting
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      Full-stack Development
                    </li>
                    <li className="flex items-start text-neutral-400">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      Ongoing Maintenance
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button 
                      variant="white"
                      className="w-full"
                      onClick={() => handleBuyNow('Web Development', 'Web Enterprise', 'Custom')}
                    >
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="premium" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {premiumServices.map((service) => (
                <Card key={service.id} className={`bg-neutral-800 border ${service.popular ? 'border-[#9b87f5]' : 'border-neutral-700'} flex flex-col h-full relative overflow-hidden`}>
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-[#9b87f5] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      {service.period && <span className="text-neutral-400 ml-2">{service.period}</span>}
                    </div>
                    <p className="text-neutral-300 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-auto">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-neutral-400">
                          <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button 
                        className={`w-full ${service.popular ? 'bg-[#9b87f5]' : ''}`}
                        variant={service.popular ? "default" : "white"}
                        onClick={() => handleBuyNow('Premium Services', service.title, service.price)}
                      >
                        {service.price === "Custom" ? "Contact Us" : "Buy Now"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 mt-10">
          <h3 className="text-xl font-semibold text-white mb-4">All AI Solution Plans Include:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Free Installation & Setup", 
              "30-Day Money-Back Guarantee", 
              "Dedicated Account Manager", 
              "Regular Updates & Improvements"
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                <span className="text-neutral-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            We offer tailored solutions designed specifically for your business needs.
            Contact our experts for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              size="lg"
              onClick={openChat}
            >
              Chat with an Expert
            </Button>
            <Button 
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
