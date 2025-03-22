
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Bot, LineChart, Laptop, Zap, Building2, Mail, Globe, Server, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useChat } from '@/context/ChatContext';
import { CoreServiceCard } from './services/CoreServiceCard';
import { WebServiceCard } from './services/WebServiceCard';
import { ServicesHeader } from './services/ServicesHeader';
import { WebServicesSection } from './services/WebServicesSection';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '50px',
  });
  
  const navigate = useNavigate();
  const { openChat } = useChat();

  const scrollToContact = () => {
    openChat();
  };

  const services = [
    {
      id: "custom-ai-integration",
      title: "Custom AI Integration",
      description: "Seamlessly integrate AI into your existing systems with custom workflows and automation pipelines.",
      bulletPoints: [
        "Bespoke AI solutions that connect directly with your current infrastructure",
        "Minimize disruption while maximizing efficiency",
        "Complete handling from data preparation to deployment",
        "Ongoing maintenance and optimization"
      ],
      icon: Bot,
      color: "bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]"
    },
    {
      id: "ai-powered-web-development",
      title: "AI-Powered Web Development",
      description: "Create intelligent, responsive websites with AI-driven content and personalization capabilities.",
      bulletPoints: [
        "Real-time adaptation to user behavior",
        "Customized experiences that boost engagement",
        "Intelligent search functionality",
        "Personalized product recommendations"
      ],
      icon: Laptop,
      color: "bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]"
    },
    {
      id: "marketing-automation",
      title: "Marketing Automation",
      description: "Deploy AI-driven marketing campaigns that adapt in real-time to maximize engagement and conversions.",
      bulletPoints: [
        "Analysis of user behavior patterns",
        "Perfectly timed, highly relevant content delivery",
        "Predictive analytics for customer needs",
        "Optimized ad spend and dynamic campaigns"
      ],
      icon: Mail,
      color: "bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]"
    },
    {
      id: "business-intelligence",
      title: "Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics and custom reporting dashboards.",
      bulletPoints: [
        "Data consolidation from multiple sources",
        "Intuitive visualizations highlighting trends",
        "Predictive models for market forecasting",
        "Data-driven decision making support"
      ],
      icon: LineChart,
      color: "bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]"
    },
    {
      id: "enterprise-ai-solutions",
      title: "Enterprise AI Solutions",
      description: "Comprehensive AI integration strategies tailored for large organizations and complex requirements.",
      bulletPoints: [
        "Organization-wide AI governance frameworks",
        "Scale, security, and compliance solutions",
        "Custom knowledge management systems",
        "Multi-department automation workflows"
      ],
      icon: Building2,
      color: "bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]"
    },
    {
      id: "cloud-hosting-solutions",
      title: "Cloud Hosting Solutions",
      description: "Scalable, secure, and reliable hosting infrastructure optimized for AI-powered applications.",
      bulletPoints: [
        "Architecture for demanding computational requirements",
        "Automatic resource allocation",
        "Redundant systems with continuous monitoring",
        "Enterprise-grade security protection"
      ],
      icon: Server,
      color: "bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]"
    }
  ];

  // Now using fully typed webDevSection data
  const webDevSection = {
    title: "Web Development & Hosting",
    description: "Our comprehensive web solutions combine cutting-edge development with reliable hosting services, all enhanced by AI technologies.",
    services: [
      {
        id: "full-stack-development",
        title: "Full-Stack Development",
        description: "End-to-end web application development using modern frameworks and AI-assisted coding practices. We build scalable, performant applications that work flawlessly across devices and browsers, with clean code architecture that facilitates future expansion and maintenance.",
        icon: Code,
        color: "bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]",
      },
      {
        id: "e-commerce-solutions",
        title: "E-Commerce Solutions",
        description: "AI-powered online stores with smart product recommendations, dynamic pricing, and personalized shopping experiences. Our e-commerce platforms integrate seamlessly with inventory management systems and provide advanced analytics to optimize product offerings and maximize revenue.",
        icon: Globe,
        color: "bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]",
      },
      {
        id: "managed-cloud-hosting",
        title: "Managed Cloud Hosting",
        description: "Scalable, secure hosting infrastructure with automated backups, updates, and performance optimization. Our managed cloud services include 24/7 monitoring, proactive issue resolution, and regular security audits to ensure your applications remain available and protected.",
        icon: Server,
        color: "bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]",
      },
      {
        id: "database-management",
        title: "Database Management",
        description: "AI-optimized database design, migration, and maintenance services for optimal performance and reliability. We implement efficient data structures, query optimization, and automated scaling to handle growing data volumes while maintaining fast response times and data integrity.",
        icon: Database,
        color: "bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]",
      }
    ]
  };

  const handleServiceNavigation = (serviceId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (serviceId === "custom-ai-integration" || 
        serviceId === "ai-powered-web-development" || 
        serviceId === "marketing-automation" || 
        serviceId === "business-intelligence" || 
        serviceId === "enterprise-ai-solutions") {
      console.log("Navigating to AI services");
      navigate('/services/ai');
    } 
    else if (serviceId === "cloud-hosting-solutions" ||
             serviceId === "full-stack-development" ||
             serviceId === "e-commerce-solutions" ||
             serviceId === "managed-cloud-hosting" ||
             serviceId === "database-management") {
      console.log("Navigating to Web services");
      navigate('/services/web');
    }
    else {
      console.log("Navigating to service:", serviceId);
      navigate(`/services/${serviceId}`);
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader inView={inView} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <CoreServiceCard 
              key={index}
              service={service}
              inView={inView}
              index={index}
              onLearnMore={(e) => handleServiceNavigation(service.id, e)}
            />
          ))}
        </div>

        <WebServicesSection 
          webDevSection={webDevSection}
          inView={inView}
          onLearnMore={handleServiceNavigation}
          onGetConsultation={scrollToContact}
        />

        <div className={cn(
          "text-center mt-12 opacity-0 transform translate-y-4 transition-all duration-500 delay-200",
          inView && "opacity-100 transform-none"
        )}>
          <Button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#9b87f5] hover:bg-[#7E69AB] text-white h-10 px-4 py-2"
            onClick={() => {
              navigate('/services');
              window.scrollTo(0, 0);
            }}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
