
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Brain, Globe, Code, Server, Database, LineChart, Zap, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBubble from '@/components/ChatBubble';
import { useChat } from '@/context/ChatContext';
import { cn } from '@/lib/utils';

const EnhancedAllServices = () => {
  const navigate = useNavigate();
  const { isChatOpen, closeChat } = useChat();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "All Services - NexGenWeb";
  }, []);

  const serviceCategories = [
    {
      id: "ai-solutions",
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence services to transform your business operations and customer experiences.",
      services: [
        {
          id: "custom-ai-integration",
          title: "Custom AI Integration",
          description: "Seamlessly integrate AI into your existing systems with custom workflows and automation pipelines.",
          icon: Bot,
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
          key_features: [
            "Organization-wide AI governance",
            "Security and compliance",
            "Multi-department workflows"
          ]
        }
      ]
    },
    {
      id: "web-services",
      title: "Web Services",
      description: "Professional web development and hosting solutions to establish and enhance your online presence.",
      services: [
        {
          id: "full-stack-development",
          title: "Full-Stack Development",
          description: "End-to-end web application development using modern frameworks and AI-assisted coding practices.",
          icon: Code,
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
          key_features: [
            "Security audits",
            "Penetration testing",
            "Compliance monitoring"
          ]
        }
      ]
    },
    {
      id: "premium-services",
      title: "Premium Services",
      description: "High-end, customized solutions for businesses with complex needs and enterprise-level requirements.",
      services: [
        {
          id: "custom-ai-integration",
          title: "Custom AI Integration",
          description: "Tailored AI solutions designed to solve your specific business challenges and integrate with your existing infrastructure.",
          icon: Bot,
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
          key_features: [
            "Executive dashboards",
            "Enterprise data integration",
            "AI team augmentation"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to accelerate your business growth
              through cutting-edge AI technology and web solutions.
            </p>
          </div>

          {serviceCategories.map((category, catIndex) => (
            <div key={category.id} className={`mb-20 ${catIndex > 0 ? 'mt-24' : ''}`}>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">{category.title}</h2>
                <p className="text-lg text-neutral-300 max-w-3xl">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <Card 
                    key={service.id} 
                    className="bg-neutral-800 border border-neutral-700 hover:border-[#9b87f5] transition-all duration-300 h-full"
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] mb-5 flex items-center justify-center">
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
                          className="w-full bg-transparent border border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-all"
                          onClick={() => navigate(`/services/${service.id}`)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {catIndex < serviceCategories.length - 1 && (
                <div className={cn(
                  "w-full max-w-4xl mx-auto my-12 border-b border-neutral-800"
                )} />
              )}
            </div>
          ))}
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to transform your business?</h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Browse our pricing options to find the perfect plan for your business needs.
            </p>
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              size="lg"
              onClick={() => navigate('/services/pricing')}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default EnhancedAllServices;
