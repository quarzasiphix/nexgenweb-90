import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Bot, Brain, Shield, Users, DollarSign, Database, Globe, Server, Code, Star, Award, Trophy, Check } from 'lucide-react';
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

const EnhancedAllServices = () => {
  const navigate = useNavigate();
  const { isChatOpen, closeChat, openChat } = useChat();
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "All Services - NexGenWeb";
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const aiServices = [
    {
      id: "custom-ai-integration",
      title: "Custom AI Integration",
      description: "Seamlessly integrate AI into your existing systems with custom workflows and automation pipelines.",
      icon: Bot,
      color: "from-purple-500 to-pink-400",
      key_features: [
        "Bespoke AI solutions",
        "Seamless system integration",
        "Custom API development"
      ]
    },
    {
      id: "ai-powered-web-development",
      title: "AI-Powered Web Development",
      description: "Create intelligent, responsive websites with AI-driven content and personalization capabilities.",
      icon: Globe,
      color: "from-blue-500 to-cyan-400",
      key_features: [
        "Real-time user adaptation",
        "Personalized experiences",
        "Intelligent search functionality"
      ]
    },
    {
      id: "marketing-automation",
      title: "Marketing Automation",
      description: "Deploy AI-driven marketing campaigns that adapt in real-time to maximize engagement and conversions.",
      icon: Zap,
      color: "from-green-500 to-lime-400",
      key_features: [
        "Behavior pattern analysis",
        "Targeted content delivery",
        "Optimized ad campaigns"
      ]
    },
    {
      id: "business-intelligence",
      title: "Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics and custom reporting dashboards.",
      icon: LineChart,
      color: "from-amber-500 to-yellow-400",
      key_features: [
        "Data consolidation",
        "Intuitive visualizations",
        "Predictive forecasting"
      ]
    },
    {
      id: "enterprise-ai-solutions",
      title: "Enterprise AI Solutions",
      description: "Comprehensive AI integration strategies tailored for large organizations and complex requirements.",
      icon: Brain,
      color: "from-emerald-500 to-teal-400",
      key_features: [
        "Organization-wide AI governance",
        "Security and compliance",
        "Multi-department workflows"
      ]
    }
  ];

  const webServices = [
    {
      id: "full-stack-development",
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern frameworks and AI-assisted coding practices.",
      icon: Code,
      color: "from-blue-500 to-cyan-400",
      key_features: [
        "Responsive application design",
        "Modern frameworks utilization",
        "Scalable architecture"
      ]
    },
    {
      id: "e-commerce-solutions",
      title: "E-Commerce Solutions",
      description: "AI-powered online stores with smart product recommendations, dynamic pricing, and personalized shopping experiences.",
      icon: Globe,
      color: "from-purple-500 to-pink-400",
      key_features: [
        "Smart recommendations",
        "Dynamic pricing",
        "Inventory management"
      ]
    },
    {
      id: "managed-cloud-hosting",
      title: "Managed Cloud Hosting",
      description: "Scalable, secure hosting infrastructure with automated backups, updates, and performance optimization.",
      icon: Server,
      color: "from-emerald-500 to-teal-400",
      key_features: [
        "Automated scaling",
        "24/7 monitoring",
        "Proactive issue resolution"
      ]
    },
    {
      id: "database-management",
      title: "Database Management",
      description: "AI-optimized database design, migration, and maintenance services for optimal performance and reliability.",
      icon: Database,
      color: "from-amber-500 to-yellow-400",
      key_features: [
        "Optimal data structures",
        "Query optimization",
        "Performance tuning"
      ]
    },
    {
      id: "web-security",
      title: "Web Security",
      description: "Comprehensive web application security services to protect your digital assets and user data.",
      icon: Shield,
      color: "from-red-500 to-orange-400",
      key_features: [
        "Security audits",
        "Penetration testing",
        "Compliance monitoring"
      ]
    }
  ];

  const premiumServices = [
    {
      id: "custom-ai-integration-premium",
      title: "Custom AI Integration",
      description: "Tailored AI solutions designed to solve your specific business challenges and integrate with your existing infrastructure.",
      icon: Bot,
      color: "from-purple-500 to-pink-400",
      key_features: [
        "Bespoke AI development",
        "Legacy system integration",
        "Ongoing optimization"
      ]
    },
    {
      id: "ai-powered-web",
      title: "AI-Powered Web Solutions",
      description: "Advanced web applications with integrated AI capabilities for superior user experiences and business intelligence.",
      icon: Globe,
      color: "from-blue-500 to-cyan-400",
      key_features: [
        "Intelligent UX/UI",
        "Behavior tracking",
        "Continuous learning systems"
      ]
    },
    {
      id: "enterprise-ai",
      title: "Enterprise AI",
      description: "Strategic AI implementation across your organization with custom governance frameworks and knowledge management.",
      icon: Brain,
      color: "from-emerald-500 to-teal-400",
      key_features: [
        "Executive dashboards",
        "Enterprise data integration",
        "AI team augmentation"
      ]
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Complete business transformation with cutting-edge AI technology and expert implementation services.",
      icon: Star,
      color: "from-amber-500 to-yellow-400",
      key_features: [
        "Business process redesign",
        "Technology migration",
        "Staff training"
      ]
    },
    {
      id: "ai-security-auditing",
      title: "AI Security Auditing",
      description: "Comprehensive security analysis for AI implementations to protect your data and systems.",
      icon: Shield,
      color: "from-red-500 to-orange-400",
      key_features: [
        "Vulnerability assessment",
        "Compliance verification",
        "Risk mitigation"
      ]
    }
  ];

  const ServiceCard = ({ service, index }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1
    });
  
    return (
      <Card 
        ref={ref}
        className={cn(
          "bg-neutral-800 border border-neutral-700 hover:border-[#9b87f5] transition-all duration-300 h-full transform opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <CardContent className="p-6 h-full flex flex-col">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} mb-5 flex items-center justify-center`}>
            <service.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
          <p className="text-neutral-400 mb-5">{service.description}</p>
          
          <h4 className="text-sm font-medium text-neutral-300 mb-3">Key Features:</h4>
          <ul className="space-y-2 mb-6 flex-grow">
            {service.key_features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-neutral-400">
                <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-4">
            <Button 
              className="w-full bg-gradient-to-r hover:bg-gradient-to-br border-none shadow-md hover:shadow-lg transition-all duration-300 text-white font-medium py-1 px-3 rounded-lg from-[#9b87f5] to-[#7E69AB]"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-28 pb-16 px-4 w-full max-w-full">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            className="text-white mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">All Services</h1>
          <p className="text-lg text-neutral-300 mb-12 max-w-3xl">
            Explore our complete range of services designed to transform your business
            with cutting-edge technology and AI integration.
          </p>

          <Tabs defaultValue="ai-solutions" className="w-full mb-16" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList className="max-w-md mx-auto mb-12">
                <TabsTrigger value="ai-solutions">
                  AI Solutions
                </TabsTrigger>
                <TabsTrigger value="web-services">
                  Web Development
                </TabsTrigger>
                <TabsTrigger value="premium-services">
                  Premium Solutions
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="ai-solutions" className="mt-0 w-full">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  AI <span className="text-[#9b87f5]">Solutions</span> for Business
                </h3>
                <p className="max-w-3xl mx-auto text-lg text-neutral-300 mb-8">
                  Our intelligent automation solutions streamline operations and drive growth across
                  every area of your business with cutting-edge AI technology.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web-services" className="mt-0 w-full">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Web Development & <span className="text-[#9b87f5]">Hosting</span> Solutions
                </h3>
                <p className="max-w-3xl mx-auto text-lg text-neutral-300 mb-8">
                  Our comprehensive web solutions combine cutting-edge development with reliable hosting services, 
                  all enhanced by AI technologies.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {webServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
              
              <div className="p-6 border border-neutral-800 rounded-xl bg-gradient-to-r from-[#9b87f5]/10 to-[#7E69AB]/10 shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0 md:mr-6">
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      Ready for a cutting-edge web presence?
                    </h4>
                    <p className="text-neutral-300">
                      Our experts build and host AI-optimized websites that drive business growth.
                    </p>
                  </div>
                  <Button 
                    className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white whitespace-nowrap"
                    onClick={openChat}
                  >
                    Get a Free Consultation
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="premium-services" className="mt-0 w-full">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Premium <span className="text-[#9b87f5]">Services</span>
                </h3>
                <p className="max-w-3xl mx-auto text-lg text-neutral-300 mb-8">
                  Comprehensive AI solutions tailored to your business needs, 
                  delivered by experts in automation and artificial intelligence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {premiumServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button 
                  className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                  onClick={() => navigate('/services/pricing')}
                >
                  View Pricing Options
                </Button>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button 
              className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-white h-8 w-8 rounded-full p-0"
              onClick={() => {
                if (activeTab === 'web-services') setActiveTab('ai-solutions');
                else if (activeTab === 'premium-services') setActiveTab('web-services');
              }}
              disabled={activeTab === 'ai-solutions'}
            >
              <span className="sr-only">Previous</span>
              <span className="text-lg">←</span>
            </Button>
            <Button 
              className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-white h-8 w-8 rounded-full p-0"
              onClick={() => {
                if (activeTab === 'ai-solutions') setActiveTab('web-services');
                else if (activeTab === 'web-services') setActiveTab('premium-services');
              }}
              disabled={activeTab === 'premium-services'}
            >
              <span className="sr-only">Next</span>
              <span className="text-lg">→</span>
            </Button>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default EnhancedAllServices;
