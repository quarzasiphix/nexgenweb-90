
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { useIsMobile } from '@/hooks/use-mobile';
import { aiServices, webDevServices, premiumServices } from '@/data/services';

const EnhancedAllServices = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const [activeTab, setActiveTab] = useState("ai-solutions");
  const [selectedService, setSelectedService] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services - BizWiz";
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    toast({
      title: "Service Selected",
      description: `You've selected ${service.title}. Redirecting to service details.`,
    });
    
    // Route to the appropriate detail page based on service category
    navigate(`/services/${service.id}`);
  };

  const handleBuyNow = (service, tabType) => {
    toast({
      title: "Service Selected",
      description: `You've selected the ${service.title} service. Proceeding to checkout.`,
      duration: 3000,
    });
    
    // Navigate to the appropriate pricing tab based on the service category
    navigate('/services/pricing', { state: { defaultTab: getPricingTabFromService(tabType) } });
  };

  // Helper function to determine which pricing tab to navigate to
  const getPricingTabFromService = (tabType) => {
    switch(tabType) {
      case 'ai-solutions':
        return 'ai';
      case 'web-services':
        return 'web';
      case 'premium-services':
        return 'premium';
      default:
        return 'ai';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      
      <main className="pt-28 pb-16 px-4 w-full max-w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Explore our complete range of business solutions designed to transform your operations
              with cutting-edge technology and AI integration.
            </p>
          </div>

          <Tabs defaultValue="ai-solutions" className="w-full mb-16" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8 max-w-3xl mx-auto">
              <TabsTrigger value="ai-solutions">
                {isMobile ? 'AI' : 'AI Solutions'}
              </TabsTrigger>
              <TabsTrigger value="web-services">
                {isMobile ? 'Web' : 'Web Development'}
              </TabsTrigger>
              <TabsTrigger value="premium-services">
                {isMobile ? 'Pro' : 'Premium Solutions'}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ai-solutions" className="mt-0 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    onClick={() => handleServiceClick(service)} 
                    onBuyNow={() => handleBuyNow(service, 'ai-solutions')} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web-services" className="mt-0 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webDevServices.map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    onClick={() => handleServiceClick(service)} 
                    onBuyNow={() => handleBuyNow(service, 'web-services')} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="premium-services" className="mt-0 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {premiumServices.map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    onClick={() => handleServiceClick(service)} 
                    onBuyNow={() => handleBuyNow(service, 'premium-services')} 
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 mt-10">
            <h3 className="text-xl font-semibold text-white mb-4">Not finding what you need?</h3>
            <p className="text-neutral-300 mb-6">
              We offer custom solutions tailored to your specific business requirements.
              Our team of experts will work with you to understand your needs and develop a solution that works for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-[#9b87f5] hover:bg-[#8e79e6] text-white"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-neutral-700 text-white hover:bg-neutral-800"
                onClick={() => navigate('/services/pricing')}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Contact />
      <Footer />
    </div>
  );
};

const ServiceCard = ({ service, onClick, onBuyNow }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  });

  return (
    <Card 
      ref={ref}
      className={`bg-neutral-800 border border-neutral-700 text-white cursor-pointer transition-all duration-300 hover:bg-neutral-700`}
    >
      <CardContent className="p-6 flex flex-col h-full">
        <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${service.color}`}>
          <service.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-neutral-300 mb-4 flex-grow">{service.description}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <Button 
            variant="brand"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onBuyNow();
            }}
          >
            Buy Now
          </Button>
          <Button 
            variant="white" 
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedAllServices;
