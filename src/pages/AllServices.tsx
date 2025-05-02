import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

const AllServices = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "All Services - BizWiz";
  }, []);

  // Updated to navigate directly to the pricing section
  const handleBuyNow = (serviceTitle: string, serviceType: string) => {
    toast({
      title: "Service Selected",
      description: `You've selected the ${serviceTitle} service. Proceeding to checkout.`,
      duration: 3000,
    });
    
    // Navigate to homepage with the correct tab and pricing section
    navigate(`/?tab=${serviceType}#pricing`);
  };

  const aiServices = [
    {
      title: "Custom AI Integration",
      description: "Seamlessly integrate AI into your existing systems with custom workflows and automation pipelines.",
      features: [
        "Automated data processing",
        "Custom AI model integration",
        "Workflow automation",
        "Intelligent decision systems",
        "Legacy system AI enhancement"
      ]
    },
    {
      title: "AI-Powered Web Development",
      description: "Create intelligent, responsive websites with AI-driven content and personalization capabilities.",
      features: [
        "Custom business websites with AI-optimized UX",
        "E-commerce platforms with AI product recommendations",
        "Web applications with AI-driven dashboards",
        "Progressive Web Apps (PWAs) with offline capabilities",
        "Content personalization engines"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Deploy AI-driven marketing campaigns that adapt in real-time to maximize engagement and conversions.",
      features: [
        "Dynamic email campaigns",
        "AI-powered content generation",
        "Customer segmentation and targeting",
        "Performance analytics",
        "Conversion optimization"
      ]
    },
    {
      title: "Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics and custom reporting dashboards.",
      features: [
        "Interactive data dashboards",
        "Predictive analytics",
        "Custom KPI tracking",
        "Data visualization tools",
        "Automated reporting"
      ]
    },
    {
      title: "Enterprise AI Solutions",
      description: "Comprehensive AI integration strategies tailored for large organizations and complex requirements.",
      features: [
        "Enterprise-wide AI strategy",
        "Department-specific AI solutions",
        "AI governance frameworks",
        "AI training programs",
        "Change management support"
      ]
    },
    {
      title: "Cloud Hosting Solutions",
      description: "Scalable, secure, and reliable hosting infrastructure optimized for AI-powered applications.",
      features: [
        "High-performance dedicated servers for AI workloads",
        "Managed cloud hosting with automatic scaling",
        "99.9% uptime SLA with 24/7 monitoring",
        "Integrated CDN for global content delivery",
        "Automated backups and disaster recovery"
      ]
    }
  ];

  const webServices = [
    {
      title: "Web Development",
      description: "Custom web solutions tailored to your business needs.",
      features: [
        "Custom business websites",
        "E-commerce platforms",
        "Web applications",
        "Progressive Web Apps (PWAs)",
        "API development"
      ]
    },
    {
      title: "Cloud Hosting",
      description: "Reliable and scalable hosting solutions.",
      features: [
        "High-performance servers",
        "99.9% uptime guarantee",
        "Automated backups",
        "CDN integration",
        "24/7 monitoring"
      ]
    },
    {
      title: "Technical Services",
      description: "Comprehensive technical solutions for your web presence.",
      features: [
        "Database management",
        "System integration",
        "Performance optimization",
        "API development",
        "Technical consulting"
      ]
    },
    {
      title: "Web Security",
      description: "Protect your web assets with advanced security measures.",
      features: [
        "SSL implementation",
        "Security audits",
        "DDoS protection",
        "Regular updates",
        "Compliance monitoring"
      ]
    },
    {
      title: "UX/UI Design",
      description: "Intuitive and engaging user interface designs that drive conversions.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Accessibility compliance",
        "Conversion-focused layouts"
      ]
    },
    {
      title: "Content Management",
      description: "Flexible content management systems that put you in control.",
      features: [
        "Custom CMS development",
        "Content strategy",
        "Multi-user workflows",
        "Version control",
        "Content optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-lg bg-brand-500/20">
                <Grid className="h-6 w-6 text-brand-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">All Services</h1>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to accelerate your business growth
              through cutting-edge technology solutions.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="max-w-md mx-auto bg-neutral-800 border-neutral-700 mb-8">
              <TabsTrigger value="all" className="text-white data-[state=active]:bg-brand-500/20">
                All Services
              </TabsTrigger>
              <TabsTrigger value="ai" className="text-white data-[state=active]:bg-brand-500/20">
                AI Solutions
              </TabsTrigger>
              <TabsTrigger value="web" className="text-white data-[state=active]:bg-brand-500/20">
                Web Services
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-8 flex items-center">
                  <span className="px-3 py-1 bg-brand-500/20 rounded-md text-brand-400 mr-3 text-sm font-medium">AI</span>
                  AI Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aiServices.map((service, index) => (
                    <Card key={index} className="bg-neutral-800 border-neutral-700 hover:border-brand-500/50 transition-all duration-300 flex flex-col">
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                        <p className="text-neutral-300 mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-auto">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-neutral-400">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                          <Button 
                            className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                            onClick={() => handleBuyNow(service.title, 'ai')}
                          >
                            Buy Now
                          </Button>
                          <Button 
                            className="w-full bg-transparent text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5]/10"
                            onClick={() => navigate('/services/ai')}
                          >
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-8 flex items-center">
                  <span className="px-3 py-1 bg-brand-500/20 rounded-md text-brand-400 mr-3 text-sm font-medium">WEB</span>
                  Web Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {webServices.map((service, index) => (
                    <Card key={index} className="bg-neutral-800 border-neutral-700 hover:border-brand-500/50 transition-all duration-300 flex flex-col">
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                        <p className="text-neutral-300 mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-auto">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-neutral-400">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                          <Button 
                            className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                            onClick={() => handleBuyNow(service.title, 'web')}
                          >
                            Buy Now
                          </Button>
                          <Button 
                            className="w-full bg-transparent text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5]/10"
                            onClick={() => navigate('/services/web')}
                          >
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ai">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiServices.map((service, index) => (
                  <Card key={index} className="bg-neutral-800 border-neutral-700 hover:border-brand-500/50 transition-all duration-300 flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-neutral-300 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-auto">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-neutral-400">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button 
                          className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                          onClick={() => handleBuyNow(service.title, 'ai')}
                        >
                          Buy Now
                        </Button>
                        <Button 
                          className="w-full bg-transparent text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5]/10"
                          onClick={() => navigate('/services/ai')}
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webServices.map((service, index) => (
                  <Card key={index} className="bg-neutral-800 border-neutral-700 hover:border-brand-500/50 transition-all duration-300 flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-neutral-300 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-auto">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-neutral-400">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button 
                          className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                          onClick={() => handleBuyNow(service.title, 'web')}
                        >
                          Buy Now
                        </Button>
                        <Button 
                          className="w-full bg-transparent text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5]/10"
                          onClick={() => navigate('/services/web')}
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <Button
              className="bg-brand-500 hover:bg-brand-600 text-white"
              size="lg"
              onClick={() => window.location.href = 'mailto:bizwiz.work@gmail.com'}
            >
              Contact Us for Custom Solutions
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllServices;
