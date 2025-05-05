
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, Database, Code, Shield, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';

// Define the services data
const webServiceDetails = {
  "web-development": {
    title: "Web Development",
    icon: Code,
    description: "Custom web solutions tailored to your business needs.",
    fullDescription: "Our professional web development team creates customized websites and applications that perfectly align with your business goals and provide exceptional user experiences.",
    features: [
      "Custom business websites",
      "E-commerce platforms",
      "Web applications",
      "Progressive Web Apps (PWAs)",
      "API development"
    ],
    benefits: [
      "Establish a professional online presence",
      "Drive more conversions with optimized user experiences",
      "Create custom functionality specific to your business needs",
      "Improve site performance and load times",
      "Ensure your website works across all devices"
    ],
    useCases: [
      {
        title: "Business Website",
        description: "Professional websites designed to showcase your business, generate leads, and convert visitors into customers."
      },
      {
        title: "E-commerce Platform",
        description: "Feature-rich online stores with secure payment processing, inventory management, and customer accounts."
      },
      {
        title: "Custom Web Application",
        description: "Tailor-made web applications that automate your business processes and improve operational efficiency."
      }
    ],
    packageInfo: {
      name: "Web Business",
      price: "$1,999",
      description: "This service is included in our Web Business plan. It provides complete web development services with professional design and functionality.",
      includedIn: ["Web Basic plan (5-page site only)", "Web Business plan (full features)", "Web Enterprise plan (custom applications)"]
    }
  },
  "cloud-hosting": {
    title: "Cloud Hosting",
    icon: Server,
    description: "Reliable and scalable hosting solutions.",
    fullDescription: "Our cloud hosting services provide scalable, secure, and reliable infrastructure for your websites and applications with 99.9% uptime guarantees.",
    features: [
      "High-performance servers",
      "99.9% uptime guarantee",
      "Automated backups",
      "CDN integration",
      "24/7 monitoring"
    ],
    benefits: [
      "Experience faster website loading times",
      "Scale resources up or down as your needs change",
      "Protect your data with regular automated backups",
      "Improve global reach with content delivery networks",
      "Rest easy with 24/7 monitoring and support"
    ],
    useCases: [
      {
        title: "High-Traffic Websites",
        description: "Scalable hosting solutions that maintain performance even during traffic spikes."
      },
      {
        title: "E-commerce Stores",
        description: "Secure, reliable hosting that ensures your store remains available during peak shopping periods."
      },
      {
        title: "Business Applications",
        description: "Dedicated hosting environments for your mission-critical business applications."
      }
    ],
    packageInfo: {
      name: "Web Basic",
      price: "$899",
      description: "Cloud hosting is included in all our web plans, with enhanced features and capacity in higher tier plans.",
      includedIn: ["Web Basic plan (standard hosting)", "Web Business plan (high-performance hosting)", "Web Enterprise plan (enterprise-grade hosting)"]
    }
  },
  "technical-services": {
    title: "Technical Services",
    icon: Database,
    description: "Comprehensive technical solutions for your web presence.",
    fullDescription: "Our expert team provides specialized technical services to optimize your web infrastructure, from database management to system integration and performance tuning.",
    features: [
      "Database management",
      "System integration",
      "Performance optimization",
      "API development",
      "Technical consulting"
    ],
    benefits: [
      "Optimize database performance and reliability",
      "Connect disparate systems for streamlined operations",
      "Improve website speed and user experience",
      "Enable secure data exchange between applications",
      "Get expert guidance on technical decisions"
    ],
    useCases: [
      {
        title: "Database Optimization",
        description: "Improve the performance, security, and reliability of your databases with expert management."
      },
      {
        title: "System Integration",
        description: "Connect your website with CRM, ERP, inventory, and other business systems for seamless operation."
      },
      {
        title: "API Development",
        description: "Custom API development to enable secure communication between your web platforms and third-party services."
      }
    ],
    packageInfo: {
      name: "Web Business",
      price: "$1,999",
      description: "This service is included in our Web Business plan and includes comprehensive technical services for optimized web performance.",
      includedIn: ["Web Business plan", "Web Enterprise plan (enhanced features)"]
    }
  },
  "web-security": {
    title: "Web Security",
    icon: Shield,
    description: "Protect your web assets with advanced security measures.",
    fullDescription: "Our comprehensive web security services help protect your online assets from threats, ensure compliance with regulations, and build trust with your customers.",
    features: [
      "SSL implementation",
      "Security audits",
      "DDoS protection",
      "Regular updates",
      "Compliance monitoring"
    ],
    benefits: [
      "Build customer trust with secure connections",
      "Identify and address vulnerabilities before they're exploited",
      "Keep your website online even during attack attempts",
      "Stay protected against the latest security threats",
      "Meet industry security standards and regulations"
    ],
    useCases: [
      {
        title: "E-commerce Security",
        description: "Comprehensive protection for online stores handling sensitive customer data and payment information."
      },
      {
        title: "Enterprise Website Security",
        description: "Advanced security measures for high-profile corporate websites that are frequent targets for attacks."
      },
      {
        title: "Compliance Requirements",
        description: "Security implementations tailored to meet specific industry regulations like GDPR, HIPAA, or PCI DSS."
      }
    ],
    packageInfo: {
      name: "Web Business",
      price: "$1,999",
      description: "Basic security features are included in all plans, with advanced security measures in the Business and Enterprise tiers.",
      includedIn: ["Web Basic plan (basic security)", "Web Business plan (advanced security)", "Web Enterprise plan (enterprise-grade security)"]
    }
  }
};

const WebServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { openChat, isChatOpen, closeChat } = useChat();
  
  const serviceDetails = serviceId ? webServiceDetails[serviceId as keyof typeof webServiceDetails] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (serviceDetails) {
      document.title = `${serviceDetails.title} - BizWiz`;
    } else {
      navigate('/services/web');
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
            onClick={() => navigate('/services/web')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Web Services
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
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Web Project?</h2>
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

export default WebServiceDetail;
