
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Bot, LineChart, Laptop, Zap, Building2, Mail, Globe, Server, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate, Link } from 'react-router-dom';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: "custom-ai-integration",
      title: "Custom AI Integration",
      description: "Seamlessly integrate AI into your existing systems with custom workflows and automation pipelines. Our expert team designs bespoke AI solutions that connect directly with your current infrastructure, minimizing disruption while maximizing efficiency. We handle everything from data preparation and model training to deployment and ongoing maintenance, ensuring a smooth transition to AI-enhanced operations.",
      icon: Bot,
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      id: "ai-powered-web-development",
      title: "AI-Powered Web Development",
      description: "Create intelligent, responsive websites with AI-driven content and personalization capabilities. Our websites adapt to user behavior in real-time, delivering customized experiences that boost engagement and conversion rates. From intelligent search functionality to personalized product recommendations, we build websites that learn from interactions to continuously improve performance and user satisfaction.",
      icon: Laptop,
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      id: "marketing-automation",
      title: "Marketing Automation",
      description: "Deploy AI-driven marketing campaigns that adapt in real-time to maximize engagement and conversions. Our marketing automation solutions analyze user behavior patterns to deliver perfectly timed, highly relevant content across multiple channels. By leveraging predictive analytics and machine learning, we help you anticipate customer needs, optimize ad spend, and create dynamic campaigns that evolve based on performance data.",
      icon: Mail,
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      id: "business-intelligence",
      title: "Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics and custom reporting dashboards. Our business intelligence solutions consolidate data from multiple sources into intuitive visualizations that highlight trends, anomalies, and opportunities. We implement predictive models that forecast market changes, customer behavior, and operational challenges, empowering you to make proactive, data-driven decisions.",
      icon: LineChart,
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      id: "enterprise-ai-solutions",
      title: "Enterprise AI Solutions",
      description: "Comprehensive AI integration strategies tailored for large organizations and complex requirements. Our enterprise solutions address the unique challenges of scale, security, and compliance faced by large businesses. We implement organization-wide AI governance frameworks, custom knowledge management systems, and secure multi-department automation workflows that maintain data integrity while breaking down information silos.",
      icon: Building2,
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      id: "cloud-hosting-solutions",
      title: "Cloud Hosting Solutions",
      description: "Scalable, secure, and reliable hosting infrastructure optimized for AI-powered applications. Our cloud hosting platform is specifically architected to handle the demanding computational requirements of machine learning models. With automatic resource allocation, redundant systems, and continuous monitoring, we ensure your AI applications maintain peak performance even during usage spikes while keeping your data protected with enterprise-grade security.",
      icon: Server,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
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
        color: "bg-gradient-to-br from-teal-500 to-teal-600",
      },
      {
        id: "e-commerce-solutions",
        title: "E-Commerce Solutions",
        description: "AI-powered online stores with smart product recommendations, dynamic pricing, and personalized shopping experiences. Our e-commerce platforms integrate seamlessly with inventory management systems and provide advanced analytics to optimize product offerings and maximize revenue.",
        icon: Globe,
        color: "bg-gradient-to-br from-pink-500 to-pink-600",
      },
      {
        id: "managed-cloud-hosting",
        title: "Managed Cloud Hosting",
        description: "Scalable, secure hosting infrastructure with automated backups, updates, and performance optimization. Our managed cloud services include 24/7 monitoring, proactive issue resolution, and regular security audits to ensure your applications remain available and protected.",
        icon: Server,
        color: "bg-gradient-to-br from-blue-600 to-blue-700",
      },
      {
        id: "database-management",
        title: "Database Management",
        description: "AI-optimized database design, migration, and maintenance services for optimal performance and reliability. We implement efficient data structures, query optimization, and automated scaling to handle growing data volumes while maintaining fast response times and data integrity.",
        icon: Database,
        color: "bg-gradient-to-br from-violet-500 to-violet-600",
      }
    ]
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 opacity-0 transform translate-y-4 transition-all duration-700",
            inView && "opacity-100 transform-none"
          )}>
            Our Premium <span className="text-gradient">Services</span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-neutral-600 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
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
                "bg-white rounded-xl border border-neutral-200 p-6 transition-all duration-500 opacity-0 transform translate-y-8 hover:shadow-lg flex flex-col h-full",
                inView && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-full mb-5 flex items-center justify-center ${service.color}`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">{service.title}</h3>
              <p className="text-neutral-600 mb-4 flex-grow">{service.description}</p>
              
              <div className="mt-auto pt-4">
                <Link to={`/services/${service.id}`} className="block">
                  <Button 
                    className={`w-full bg-gradient-to-r hover:bg-gradient-to-br border-none shadow-md hover:shadow-lg transition-all duration-300 text-white font-medium py-2 px-4 rounded-lg ${service.color}`}
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Web Development & Hosting Spotlight Section */}
        <div className={cn(
          "mt-20 opacity-0 transform translate-y-4 transition-all duration-700 delay-300",
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
                          className={`w-full bg-gradient-to-r hover:bg-gradient-to-br border-none shadow-md hover:shadow-lg transition-all duration-300 text-white font-medium py-2 px-4 rounded-lg ${service.color}`}
                        >
                          Learn More
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
                className="btn-primary whitespace-nowrap"
                onClick={() => scrollToContact()}
              >
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </div>

        <div className={cn(
          "text-center mt-12 opacity-0 transform translate-y-4 transition-all duration-700 delay-500",
          inView && "opacity-100 transform-none"
        )}>
          <Button 
            className="btn-primary"
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
