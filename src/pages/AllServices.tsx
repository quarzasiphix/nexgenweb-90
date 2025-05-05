
import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Brain, Shield, Users, DollarSign, Database, Globe, Server, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Contact from '@/components/Contact';
import ChatBubble from '@/components/ChatBubble';
import { useChat } from '@/context/ChatContext';

const AllServices = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { openChat, isChatOpen, closeChat } = useChat();
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "web">("all");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Define services data
  const aiServices = [
    {
      title: "AI Integration",
      icon: Bot,
      description: "Integrate AI into your business for automation and insights.",
      path: "/services/ai-integration",
    },
    {
      title: "Data Analytics",
      icon: Brain,
      description: "Leverage AI to analyze data and gain actionable insights.",
      path: "/services/data-analytics",
    },
    {
      title: "AI Security",
      icon: Shield,
      description: "Protect your systems with AI-driven security solutions.",
      path: "/services/ai-security",
    },
    {
      title: "Finance Automation",
      icon: DollarSign,
      description: "Automate financial processes with AI.",
      path: "/services/finance-automation",
    },
    {
      title: "HR Automation",
      icon: Users,
      description: "Streamline HR tasks with AI-powered automation.",
      path: "/services/hr-automation",
    },
  ];

  const webServices = [
    {
      title: "Web Development",
      icon: Code,
      description: "Custom web development services tailored to your needs.",
      path: "/services/web-development",
    },
    {
      title: "Cloud Solutions",
      icon: Server,
      description: "Scalable cloud solutions for your business.",
      path: "/services/cloud-solutions",
    },
    {
      title: "Database Solutions",
      icon: Database,
      description: "Efficient database management and solutions.",
      path: "/services/database-solutions",
    },
    {
      title: "E-commerce Solutions",
      icon: Globe,
      description: "Create powerful online stores with e-commerce solutions.",
      path: "/services/e-commerce-solutions",
    },
  ];

  const allServices = [...aiServices, ...webServices];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-28 pb-16 px-4 w-full max-w-full">
        <div 
          ref={ref}
          className={cn(
            "max-w-7xl mx-auto opacity-0 transform translate-y-4 transition-all duration-700",
            inView && "opacity-100 transform-none"
          )}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-neutral-300 mb-12 max-w-3xl">
            Explore our comprehensive range of services designed to accelerate your business 
            growth through cutting-edge AI technology and web solutions.
          </p>

          <Tabs 
            defaultValue="all" 
            className="w-full" 
            value={activeTab} 
            onValueChange={(value) => {
              if (value === 'all' || value === 'ai' || value === 'web') {
                setActiveTab(value);
              }
            }}
          >
            <TabsList>
              <TabsTrigger value="all">
                All Services
              </TabsTrigger>
              <TabsTrigger value="ai">
                AI Solutions
              </TabsTrigger>
              <TabsTrigger value="web">
                Web Development
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allServices.map((service, index) => (
                  <Card key={index} className="bg-neutral-800 text-white border border-neutral-700">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {service.icon && <service.icon className="h-6 w-6 mr-2" />}
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                      </div>
                      <p className="text-neutral-300 mb-4">{service.description}</p>
                      <Button 
                        variant="secondary" 
                        className="w-full"
                        onClick={() => navigate(service.path)}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiServices.map((service, index) => (
                  <Card key={index} className="bg-neutral-800 text-white border border-neutral-700">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {service.icon && <service.icon className="h-6 w-6 mr-2" />}
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                      </div>
                      <p className="text-neutral-300 mb-4">{service.description}</p>
                      <Button 
                        variant="secondary" 
                        className="w-full"
                        onClick={() => navigate(service.path)}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webServices.map((service, index) => (
                  <Card key={index} className="bg-neutral-800 text-white border border-neutral-700">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {service.icon && <service.icon className="h-6 w-6 mr-2" />}
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                      </div>
                      <p className="text-neutral-300 mb-4">{service.description}</p>
                      <Button 
                        variant="secondary" 
                        className="w-full"
                        onClick={() => navigate(service.path)}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 text-center">
            {activeTab !== 'all' && (
              <Button 
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                size="lg"
                onClick={() => navigate(`/services/${activeTab}`)}
              >
                View All {activeTab === 'ai' ? 'AI Solutions' : 'Web Development'}
              </Button>
            )}
            {activeTab === 'all' && (
              <Button 
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                size="lg"
                onClick={() => navigate('/services')}
              >
                View All Services
              </Button>
            )}
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default AllServices;
