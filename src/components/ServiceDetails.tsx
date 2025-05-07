
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Bot, Brain, DollarSign, Users, FileText, 
  BarChart3, Truck, Shield, Scale, Database,
  ArrowLeft, Globe, Server, Code, Laptop, Mail, LineChart, Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';
import { solutionCategories } from './Solutions';
import { webDevServices, premiumServices, aiServices } from '@/data/services';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { openChat, isChatOpen, closeChat } = useChat();

  // Find service in all service categories
  const allServices = [...aiServices, ...webDevServices, ...premiumServices];
  const service = allServices.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (service) {
      document.title = `${service.title} - BizWiz`;
    } else {
      navigate('/services');
    }
  }, [serviceId, navigate, service]);

  if (!service) {
    return null;
  }

  const IconComponent = service.icon;
  
  // Package information for services
  const packageInfo = {
    // AI services
    "finance-accounting": {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, providing comprehensive financial automation tools.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with additional custom processes)"]
    },
    "customer-engagement": {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, with enhanced features available in Enterprise.",
      includedIn: ["AI Professional plan (standard features)", "AI Enterprise plan (enhanced customization)"]
    },
    "sales-marketing": {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, providing advanced marketing automation tools.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with custom marketing strategies)"]
    },
    "hr-recruitment": {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, providing comprehensive HR automation tools.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with advanced analytics)"]
    },
    "logistics-supply-chain": {
      name: "AI Enterprise",
      price: "Custom",
      description: "This advanced solution is available in our Enterprise AI package, with pricing tailored to your business scale and requirements.",
      includedIn: ["AI Enterprise plan only"]
    },
    "legal-compliance": {
      name: "AI Enterprise",
      price: "Custom",
      description: "This specialized solution is available in our Enterprise AI package, with industry-specific compliance frameworks.",
      includedIn: ["AI Enterprise plan only"]
    },
    "data-analytics": {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, providing advanced data analysis tools.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with custom dashboards)"]
    },
    "it-security": {
      name: "Web Business + AI Professional",
      price: "From $2,998",
      description: "This comprehensive solution combines our Web Business plan and AI Professional subscription for complete data security.",
      includedIn: ["Web Business + AI Professional", "Web Enterprise + AI Enterprise (enhanced features)"]
    },
    
    // Web services
    "full-stack-development": {
      name: "Web Business",
      price: "$1,999",
      description: "This service is included in our Web Business plan. It provides complete web development services with professional design and functionality.",
      includedIn: ["Web Basic plan (5-page site only)", "Web Business plan (full features)", "Web Enterprise plan (custom applications)"]
    },
    "e-commerce-solutions": {
      name: "Web Business",
      price: "$1,999",
      description: "Our e-commerce solutions are included in the Web Business plan with additional features in the Enterprise tier.",
      includedIn: ["Web Business plan (standard store)", "Web Enterprise plan (custom e-commerce features)"]
    },
    "managed-cloud-hosting": {
      name: "Web Basic",
      price: "$899",
      description: "Cloud hosting is included in all our web plans, with enhanced features and capacity in higher tier plans.",
      includedIn: ["Web Basic plan (standard hosting)", "Web Business plan (high-performance hosting)", "Web Enterprise plan (enterprise-grade hosting)"]
    },
    "database-management": {
      name: "Web Business",
      price: "$1,999",
      description: "Database management services are included in our Web Business plan with enhanced features in Enterprise.",
      includedIn: ["Web Business plan (standard databases)", "Web Enterprise plan (custom database solutions)"]
    },
    "responsive-design": {
      name: "Web Basic",
      price: "$899",
      description: "Responsive design is included in all our web plans, ensuring your site works beautifully on all devices.",
      includedIn: ["Web Basic plan", "Web Business plan", "Web Enterprise plan"]
    },
    "cms-implementation": {
      name: "Web Business",
      price: "$1,999",
      description: "CMS implementation is included in our Web Business plan with customization options available in Enterprise.",
      includedIn: ["Web Business plan (standard CMS)", "Web Enterprise plan (custom CMS solutions)"]
    },
    
    // Premium services
    "custom-ai-integration": {
      name: "AI Enterprise",
      price: "Custom",
      description: "This premium service is available in our AI Enterprise package with pricing based on your integration requirements.",
      includedIn: ["AI Enterprise plan only"]
    },
    "ai-powered-web": {
      name: "Web Business + AI Professional",
      price: "From $2,998",
      description: "This combined service includes our Web Business and AI Professional plans for complete AI-powered web solutions.",
      includedIn: ["Web Business + AI Professional", "Web Enterprise + AI Enterprise (enhanced features)"]
    },
    "marketing-automation": {
      name: "AI Professional",
      price: "$999/mo",
      description: "Marketing automation is included in our AI Professional plan with advanced features in the Enterprise tier.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with custom marketing strategies)"]
    },
    "business-intelligence": {
      name: "AI Professional",
      price: "$999/mo",
      description: "Business intelligence tools are included in our AI Professional plan with custom dashboards in Enterprise.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with custom dashboards)"]
    },
    "enterprise-ai": {
      name: "AI Enterprise",
      price: "Custom",
      description: "Our complete Enterprise AI solution is customized for large organizations with complex requirements.",
      includedIn: ["AI Enterprise plan only"]
    },
    "cloud-hosting-solutions": {
      name: "Web Business",
      price: "$1,999",
      description: "Advanced cloud hosting solutions are included in our Web Business plan with enhanced capacity in Enterprise.",
      includedIn: ["Web Business plan", "Web Enterprise plan (with advanced infrastructure)"]
    }
  };

  // Get the package info based on the service ID
  const servicePackageInfo = packageInfo[serviceId as keyof typeof packageInfo] || {
    name: "Professional",
    price: "$999/mo",
    description: "This service is typically included in our Professional plans. Contact us for specific details about your needs.",
    includedIn: ["Professional plan", "Enterprise plan (for custom requirements)"]
  };

  const handleBuyNow = () => {
    navigate('/services/pricing', { state: { selectedService: servicePackageInfo.name } });
  };

  return (
    <div className="min-h-screen bg-neutral-900 overflow-hidden">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-6 text-white hover:bg-white/10"
            onClick={() => navigate('/services')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.color || 'from-purple-500 to-pink-500'}`}>
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{service.title}</h1>
              <p className="text-lg text-neutral-300 max-w-3xl">
                {service.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
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
                <h2 className="text-xl font-semibold text-white mb-4">How It Works</h2>
                <ul className="space-y-3">
                  {service.detailed.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-neutral-300">
                      <span className="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3 flex-shrink-0"></span>
                      {detail}
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
                    <h3 className="text-lg font-medium text-white">{servicePackageInfo.name}</h3>
                    <p className="text-2xl font-bold text-[#D6BCFA] mt-1">{servicePackageInfo.price}</p>
                  </div>
                  <Button 
                    className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white mt-4 md:mt-0"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                </div>
                <p className="text-neutral-300 mb-4">{servicePackageInfo.description}</p>
                <div>
                  <h4 className="font-medium text-white mb-2">Included in:</h4>
                  <ul className="space-y-1">
                    {servicePackageInfo.includedIn.map((pkg, idx) => (
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

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Benefits for Your Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-white mb-2">Improved Efficiency</h3>
                  <p className="text-neutral-400">
                    Streamline processes and reduce manual workload through smart automation, 
                    allowing your team to focus on high-value tasks.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-white mb-2">Cost Reduction</h3>
                  <p className="text-neutral-400">
                    Eliminate inefficiencies and reduce operational costs through AI-powered 
                    optimization of resources and processes.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-white mb-2">Competitive Advantage</h3>
                  <p className="text-neutral-400">
                    Stay ahead of competitors by leveraging cutting-edge technology 
                    to enhance your business operations and customer experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Our team of experts will help you implement {service.title} solutions tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                onClick={handleBuyNow}
              >
                Buy Now: {servicePackageInfo.price}
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

export default ServiceDetails;
