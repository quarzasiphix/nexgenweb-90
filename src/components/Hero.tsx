import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Brain, DollarSign, Users, Shield, Scale, Database, Globe, Server, Code, Star, Award, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useChat } from '@/context/ChatContext';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { TabSelector } from '@/components/ui/tab-selector';

// Featured solution categories
const featuredSolutions = [
  {
    title: "Finance & Accounting",
    icon: DollarSign,
    description: "Automate financial processes with AI-powered analysis.",
    color: "from-emerald-500 to-teal-400",
    path: "/solutions/finance-accounting"
  },
  {
    title: "Customer Engagement",
    icon: Users,
    description: "Enhance interactions with AI chatbots and engagement tools.",
    color: "from-blue-500 to-cyan-400",
    path: "/solutions/customer-engagement"
  },
  {
    title: "AI Integration",
    icon: Bot,
    description: "Streamline lead generation with AI-driven solutions.",
    color: "from-purple-500 to-pink-400",
    path: "/solutions/ai-integration"
  },
  {
    title: "IT & Security",
    icon: Shield,
    description: "Protect your business with AI-powered security solutions.",
    color: "from-red-500 to-orange-400",
    path: "/solutions/it-security"
  }
];

// Featured web services
const featuredWebServices = [
  {
    title: "Full-Stack Development",
    icon: Code,
    description: "End-to-end web application development with modern frameworks.",
    color: "from-blue-500 to-cyan-400",
    path: "/services/full-stack-development"
  },
  {
    title: "E-Commerce Solutions",
    icon: Globe,
    description: "AI-powered online stores with smart recommendations.",
    color: "from-purple-500 to-pink-400",
    path: "/services/e-commerce-solutions"
  },
  {
    title: "Cloud Hosting",
    icon: Server,
    description: "Scalable, secure hosting with automated management.",
    color: "from-emerald-500 to-teal-400",
    path: "/services/managed-cloud-hosting"
  },
  {
    title: "Database Management",
    icon: Database,
    description: "AI-optimized database design and maintenance.",
    color: "from-amber-500 to-yellow-400",
    path: "/services/database-management"
  }
];

// Premium Services
const premiumServices = [
  {
    title: "Custom AI Integration",
    icon: Brain,
    description: "Seamlessly integrate AI into your existing systems with custom workflows.",
    color: "from-purple-500 to-pink-400",
    path: "/services/custom-ai-integration"
  },
  {
    title: "AI-Powered Web",
    icon: Star,
    description: "Create intelligent, responsive websites with AI-driven personalization.",
    color: "from-blue-500 to-cyan-400",
    path: "/services/ai-powered-web"
  },
  {
    title: "Enterprise AI Strategy",
    icon: Award,
    description: "Comprehensive AI integration tailored for large organizations.",
    color: "from-emerald-500 to-teal-400",
    path: "/services/enterprise-ai"
  },
  {
    title: "Managed AI Services",
    icon: Trophy,
    description: "Let our experts handle all your AI needs with our premium managed service.",
    color: "from-amber-500 to-yellow-400",
    path: "/services/managed-ai-services"
  }
];

const SolutionCard = ({ solution }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 transform card-hover border border-white/20",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <Link to={solution.path} className="block p-6">
        <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${solution.color}`}>
          <solution.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{solution.title}</h3>
        <p className="text-white/80 mb-4">{solution.description}</p>
        <div className="flex items-center text-white">
          <span className="text-sm font-medium">View Pricing</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </Link>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('ai');
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { openChat } = useChat();
  
  const { ref: solutionsRef, inView: solutionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
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

  const tabOptions = [
    { id: 'ai', label: 'AI Solutions' },
    { id: 'web', label: 'Web Development' },
    { id: 'premium', label: 'Premium Solutions' }
  ];

  return (
    <div className="relative pt-16 md:pt-20 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 min-h-screen">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMTEtMTIgMCA2IDYgMCAwMTEyIDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container px-4 sm:px-6 relative z-10 mt-8 md:mt-16">
        <div className="max-w-5xl mx-auto text-center mb-16">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white group" 
                size="lg"
                onClick={() => navigate('/services')}
              >
                <span>View Services</span>
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
          </div>
        </div>

        {/* Solutions Section */}
        <div 
          ref={solutionsRef}
          className={cn(
            "opacity-0 transform translate-y-4 transition-all duration-700",
            solutionsInView && "opacity-100 transform-none"
          )}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Business Solutions</h2>
            <p className="text-white/80 max-w-3xl mx-auto mb-8">
              Choose the right solution for your business needs
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <TabSelector 
              options={tabOptions}
              active={activeTab}
              onChange={setActiveTab}
              variant="light"
              className="max-w-full w-full sm:max-w-md mx-2 sm:mx-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {activeTab === 'ai' 
              ? featuredSolutions.map((solution, index) => (
                  <SolutionCard key={index} solution={solution} />
                ))
              : activeTab === 'web' 
                ? featuredWebServices.map((service, index) => (
                    <SolutionCard key={index} solution={service} />
                  ))
                : premiumServices.map((service, index) => (
                    <SolutionCard key={index} solution={service} />
                  ))
            }
          </div>
          
          <div className="text-center mt-8">
            <Button 
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white"
              onClick={() => navigate(activeTab === 'ai' ? '/services/all' : '/services')}
            >
              View All {activeTab === 'ai' ? 'Solutions' : activeTab === 'web' ? 'Services' : 'Premium Solutions'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
