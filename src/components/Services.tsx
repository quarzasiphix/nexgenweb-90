import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Bot, LineChart, Laptop, Zap, Building2, Mail, Globe, Server, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate, Link } from 'react-router-dom';
import { useChat } from '@/context/ChatContext';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
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

  return (
    <section id="services" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 opacity-0 transform translate-y-4 transition-all duration-500",
            inView && "opacity-100 transform-none"
          )}>
            Our Premium <span className="text-gradient">Services</span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-neutral-600 opacity-0 transform translate-y-4 transition-all duration-500 delay-50",
            inView && "opacity-100 transform-none"
          )}>
            Comprehensive AI solutions tailored to your business needs, 
            delivered by experts in automation and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl border border-neutral-200 p-6 transition-all duration-300 opacity-0 transform translate-y-8 hover:shadow-lg flex flex-col h-full",
                inView && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-full mb-5 flex items-center justify-center ${service.color}`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">{service.title}</h3>
              <p className="text-neutral-600 mb-4">{service.description}</p>
              
              <ul className="text-neutral-600 mb-6 space-y-2 flex-grow">
                {service.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-sm mr-2 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Link to={`/services/${service.id}`} className="block">
                  <Button 
                    variant="link" 
                    className="text-[#9b87f5] p-0 hover:text-[#7E69AB] flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={cn(
          "mt-20 opacity-0 transform translate-y-4 transition-all duration-500 delay-150",
          inView && "opacity-100 transform-none"
        )}>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-neutral-900">
              Web Development & <span className="text-gradient">Hosting</span> Solutions
            </h3>
            <p className="max-w-2xl mx-auto text-lg text-neutral-600">
              {webDevSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webDevSection.services.map((service, index) => (
              <Card 
                key={index}
                className={cn(
                  "border border-neutral-200 shadow-sm hover:shadow-md transition-all opacity-0 transform translate-y-8",
                  inView && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: `${400 + (index * 100)}ms` }}
              >
                <CardContent className="p-6 flex flex-col sm:flex-row items-start gap-4 h-full">
                  <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center ${service.color}`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex flex-col w-full h-full">
                    <h4 className="text-lg font-semibold mb-2 text-neutral-800">{service.title}</h4>
                    <p className="text-neutral-600 mb-4">{service.description}</p>
                    
                    <div className="mt-auto pt-2">
                      <Link to={`/services/${service.id}`} className="block">
                        <Button 
                          variant="link" 
                          className="text-[#9b87f5] p-0 hover:text-[#7E69AB] flex items-center"
                        >
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 p-6 border border-neutral-200 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h4 className="text-xl font-semibold mb-2 text-neutral-900">
                  Ready for a cutting-edge web presence?
                </h4>
                <p className="text-neutral-700">
                  Our experts build and host AI-optimized websites that drive business growth.
                </p>
              </div>
              <Button 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white whitespace-nowrap"
                onClick={scrollToContact}
              >
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </div>

        <div className={cn(
          "text-center mt-12 opacity-0 transform translate-y-4 transition-all duration-500 delay-200",
          inView && "opacity-100 transform-none"
        )}>
          <Button 
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
            onClick={() => navigate('/services')}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
