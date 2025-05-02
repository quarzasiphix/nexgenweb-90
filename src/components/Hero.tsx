
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, LineChart, Shield, Server, Code, Database, 
  Brain, DollarSign, Users, FileText, BarChart3, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useChat } from '@/context/ChatContext';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// Solution categories from Solutions.tsx
const solutionCategories = [
  {
    title: "Finance & Accounting",
    icon: DollarSign,
    description: "Automate financial processes and gain actionable insights with AI-powered analysis.",
    color: "from-emerald-500 to-teal-400",
    href: "/solutions/finance-accounting"
  },
  {
    title: "Customer Engagement",
    icon: Users,
    description: "Automate customer interactions with AI-powered chatbots and personalized engagement tools.",
    color: "from-blue-500 to-cyan-400",
    href: "/solutions/customer-engagement"
  },
  {
    title: "Sales & Marketing",
    icon: Bot,
    description: "Streamline lead generation and optimize marketing campaigns with AI-driven solutions.",
    color: "from-purple-500 to-pink-400",
    href: "/solutions/sales-marketing"
  },
  {
    title: "HR & Recruitment",
    icon: Users,
    description: "Simplify hiring and employee management with intelligent automation tools.",
    color: "from-amber-500 to-yellow-400",
    href: "/solutions/hr-recruitment"
  },
  {
    title: "Logistics & Supply Chain",
    icon: Truck,
    description: "Optimize your supply chain operations with AI-powered logistics management.",
    color: "from-green-500 to-lime-400",
    href: "/solutions/logistics-supply-chain"
  },
  {
    title: "IT & Security",
    icon: Shield,
    description: "Protect your business and optimize IT operations with AI-powered security solutions.",
    color: "from-red-500 to-orange-400",
    href: "/solutions/it-security"
  },
  {
    title: "Legal & Compliance",
    icon: FileText,
    description: "Streamline legal processes and ensure regulatory compliance with AI automation.",
    color: "from-indigo-500 to-violet-400",
    href: "/solutions/legal-compliance"
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    description: "Transform raw data into actionable business intelligence with AI-driven analytics.",
    color: "from-indigo-500 to-blue-400",
    href: "/solutions/data-analytics"
  }
];

const webDevServices = [
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    href: "/services/full-stack-development"
  },
  {
    id: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    icon: Database,
    color: "from-purple-500 to-pink-400",
    href: "/services/e-commerce-solutions"
  },
  {
    id: "managed-cloud-hosting",
    title: "Managed Cloud Hosting",
    icon: Server,
    color: "from-emerald-500 to-teal-400",
    href: "/services/managed-cloud-hosting"
  },
  {
    id: "database-management",
    title: "Database Management",
    icon: Database,
    color: "from-amber-500 to-yellow-400",
    href: "/services/database-management"
  }
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { openChat } = useChat();
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const SolutionCard = ({ solution, index }: { solution: typeof solutionCategories[0], index: number }) => (
    <div 
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left hover:bg-white/10 transition-all"
    >
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-full bg-[#9b87f5]/20 mr-3`}>
          <solution.icon className="h-5 w-5 text-[#D6BCFA]" />
        </div>
        <h3 className="text-xl font-medium text-white">{solution.title}</h3>
      </div>
      <p className="text-white/80 text-sm mb-4">{solution.description}</p>
      <Button 
        variant="link" 
        className="text-[#D6BCFA] p-0 hover:text-[#9b87f5]"
        onClick={() => navigate(solution.href)}
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );

  const WebDevCard = ({ service, index }: { service: typeof webDevServices[0], index: number }) => (
    <div 
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left hover:bg-white/10 transition-all"
    >
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-full bg-[#9b87f5]/20 mr-3`}>
          <service.icon className="h-5 w-5 text-[#D6BCFA]" />
        </div>
        <h3 className="text-xl font-medium text-white">{service.title}</h3>
      </div>
      <p className="text-white/80 text-sm mb-4">Professional web development and hosting solutions.</p>
      <Button 
        variant="link" 
        className="text-[#D6BCFA] p-0 hover:text-[#9b87f5]"
        onClick={() => navigate(service.href)}
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );

  return (
    <div className="relative pt-16 md:pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 min-h-screen">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMTEtMTIgMCA2IDYgMCAwMTEyIDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container px-4 sm:px-6 relative z-10 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn(
            "opacity-0 transform translate-y-4 transition-all duration-1000",
            isVisible && "opacity-100 transform-none"
          )}>
            <div className="inline-block mb-6 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-white/90 text-sm font-medium">
                Digital Solutions for Modern Business
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Empower Your Business with <span className="text-gradient bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">NexGenWeb</span>
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Advanced solutions for business automation, web development, and digital transformation.
            </p>
            
            <div ref={ref} className="text-center mb-8">
              <h2 className={cn(
                "text-3xl sm:text-4xl font-bold mb-4 text-white",
                inView && "opacity-100 transform-none"
              )}>
                Our Business <span className="text-gradient bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">Solutions</span>
              </h2>
              <p className={cn(
                "max-w-2xl mx-auto text-lg text-white/80 mb-8",
                inView && "opacity-100 transform-none"
              )}>
                Comprehensive solutions tailored to your business needs, 
                from AI automation to web development and premium services.
              </p>
            </div>
            
            <div className="mb-12">
              <Tabs defaultValue="ai-solutions" className="w-full" onValueChange={setActiveTab} value={activeTab}>
                <TabsList className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg mb-8">
                  <TabsTrigger 
                    value="ai-solutions" 
                    className="text-white data-[state=active]:bg-[#8B5CF6]/60 data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:ring-2 data-[state=active]:ring-[#8B5CF6]/80"
                  >
                    AI Solutions
                  </TabsTrigger>
                  <TabsTrigger 
                    value="web-services" 
                    className="text-white data-[state=active]:bg-[#8B5CF6]/60 data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:ring-2 data-[state=active]:ring-[#8B5CF6]/80"
                  >
                    Web Services
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="ai-solutions" className="mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {solutionCategories.map((solution, index) => (
                      <SolutionCard key={index} solution={solution} index={index} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="web-services" className="mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {webDevServices.map((service, index) => (
                      <WebDevCard key={service.id} service={service} index={index} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white group" 
                size="lg"
                onClick={() => navigate('/services')}
              >
                <span>View All Services</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                size="lg"
                onClick={openChat}
              >
                Start a Project
              </Button>
            </div>
            
            <div className="flex items-center justify-center mt-8 gap-4">
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white h-8 w-8 rounded-full p-0"
                onClick={() => setActiveTab('ai-solutions')}
                disabled={activeTab === 'ai-solutions'}
              >
                <span className="sr-only">AI Solutions</span>
                <span className="text-lg">←</span>
              </Button>
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white h-8 w-8 rounded-full p-0"
                onClick={() => setActiveTab('web-services')}
                disabled={activeTab === 'web-services'}
              >
                <span className="sr-only">Web Services</span>
                <span className="text-lg">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#171717" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
