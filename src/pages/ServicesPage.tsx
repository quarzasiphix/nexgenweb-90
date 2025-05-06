import React, { useEffect, useState } from 'react';
import { Bot, Brain, Shield, LineChart, Code, Server, Database, Globe, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Contact from '@/components/Contact';
import { useIsMobile } from '@/hooks/use-mobile';

const ServicesPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { openChat, isChatOpen, closeChat } = useChat();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services & Pricing - NexGenWeb";
  }, []);

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're not on a page with the contact section, navigate to it
      navigate('/contact');
    }
  };

  // Simulate checkout process - in a real app, this would connect to Stripe
  const handleBuyNow = (service: string, tier: string, price: string) => {
    setSelectedPlan(`${tier} (${price})`);
    toast({
      title: "Service Selected",
      description: `You've selected the ${tier} tier of ${service} for ${price}. Proceeding to checkout.`,
      duration: 5000,
    });
    
    // In a real implementation, this would redirect to Stripe checkout
    setTimeout(() => {
      scrollToContact();
    }, 1000);
  };

  const aiServices = [
    {
      id: "ai-starter",
      title: "AI Starter",
      price: "$499",
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
      description: "Seamlessly integrate AI into your existing systems with custom workflows and automation pipelines.",
      features: [
        "Bespoke AI Solutions",
        "Seamless Integration",
        "Custom API Development",
        "Data Preparation & Cleaning",
        "Expert Implementation",
        "Ongoing Support & Maintenance",
        "Performance Optimization"
      ]
    },
    {
      id: "ai-powered-web",
      title: "AI-Powered Web",
      price: "$3,999",
      description: "Create intelligent, responsive websites with AI-driven content and personalization capabilities.",
      features: [
        "Real-time User Adaptation",
        "Personalized User Experiences",
        "Intelligent Search Functionality",
        "Content Recommendations",
        "Behavior Analysis",
        "Multi-platform Deployment",
        "Continuous Optimization"
      ],
      popular: true
    },
    {
      id: "enterprise-ai",
      title: "Enterprise AI",
      price: "Custom",
      description: "Comprehensive AI integration strategies tailored for large organizations and complex requirements.",
      features: [
        "Organization-wide AI Governance",
        "Custom Knowledge Management",
        "Multi-department Workflows",
        "Security & Compliance",
        "Enterprise Data Integration",
        "Executive Dashboard",
        "Dedicated AI Team"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-28 pb-16 px-4 w-full max-w-full">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Services & Pricing</h1>
          <p className="text-lg text-neutral-300 mb-12 max-w-3xl">
            Choose the perfect package for your business needs. All plans include our 
            award-winning customer support and satisfaction guarantee.
          </p>

          <Tabs defaultValue="ai" className="w-full mb-16 pricing-tabs">
            <TabsList className="max-w-md mx-auto mb-8">
              <TabsTrigger value="ai">
                {isMobile ? 'AI' : 'AI Solutions'}
              </TabsTrigger>
              <TabsTrigger value="web">
                {isMobile ? 'Web' : 'Web Development'}
              </TabsTrigger>
              <TabsTrigger value="premium">
                {isMobile ? 'Pro' : 'Premium Solutions'}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ai" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiServices.map((service) => (
                  <Card key={service.id} className={`bg-neutral-800 border ${service.popular ? 'border-[#9b87f5]' : 'border-neutral-700'} flex flex-col h-full relative overflow-hidden`}>
                    {service.popular && (
                      <div className="absolute top-0 right-0 bg-[#9b87f5] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    )}
                    <CardContent className="p-6 flex flex-col h-full">
                      <h2 className="text-xl font-semibold text-white mb-2">{service.title}</h2>
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        {service.price !== "Custom" && <span className="text-neutral-400 ml-2">/mo</span>}
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
            </TabsContent>
            
            <TabsContent value="web" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {webServices.map((service) => (
                  <Card key={service.id} className={`bg-neutral-800 border ${service.popular ? 'border-[#9b87f5]' : 'border-neutral-700'} flex flex-col h-full relative overflow-hidden`}>
                    {service.popular && (
                      <div className="absolute top-0 right-0 bg-[#9b87f5] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    )}
                    <CardContent className="p-6 flex flex-col h-full">
                      <h2 className="text-xl font-semibold text-white mb-2">{service.title}</h2>
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        {service.price !== "Custom" && <span className="text-neutral-400 ml-2">/one-time</span>}
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
                          onClick={() => handleBuyNow('Web Development', service.title, service.price)}
                        >
                          {service.price === "Custom" ? "Contact Us" : "Buy Now"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 mt-10">
                <h3 className="text-xl font-semibold text-white mb-4">All Web Development Plans Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Mobile-Responsive Design", 
                    "SEO Best Practices", 
                    "Performance Optimization", 
                    "Content Management System"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="premium" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {premiumServices.map((service) => (
                  <Card key={service.id} className={`bg-neutral-800 border ${service.popular ? 'border-[#9b87f5]' : 'border-neutral-700'} flex flex-col h-full relative overflow-hidden`}>
                    {service.popular && (
                      <div className="absolute top-0 right-0 bg-[#9b87f5] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    )}
                    <CardContent className="p-6 flex flex-col h-full">
                      <h2 className="text-xl font-semibold text-white mb-2">{service.title}</h2>
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        {service.price !== "Custom" && <span className="text-neutral-400 ml-2">/project</span>}
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
              
              <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 mt-10">
                <h3 className="text-xl font-semibold text-white mb-4">All Premium Service Plans Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Strategic Consultation", 
                    "Custom Implementation", 
                    "Dedicated Project Manager", 
                    "VIP Support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              We offer tailored solutions designed specifically for your business needs.
              Contact our experts for a personalized consultation.
            </p>
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              size="lg"
              onClick={scrollToContact}
            >
              Chat with an Expert
            </Button>
          </div>
        </div>
      </main>

      {/* Add the Contact component so we can scroll to it */}
      <Contact />
      
      <Footer />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default ServicesPage;
