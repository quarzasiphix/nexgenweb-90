import React, { useState } from 'react';
import { ArrowRight, Bot, Brain, DollarSign, Users, Shield, Database, Globe, Server, Code, Star, Award, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// Featured solution categories
const featuredSolutions = [
  {
    title: "Finance & Accounting",
    icon: DollarSign,
    description: "Automate financial processes with AI-powered analysis.",
    color: "from-emerald-500 to-teal-400",
    path: "/services/finance-accounting"
  },
  {
    title: "Customer Engagement",
    icon: Users,
    description: "Enhance interactions with AI chatbots and engagement tools.",
    color: "from-blue-500 to-cyan-400",
    path: "/services/customer-engagement"
  },
  {
    title: "AI Integration",
    icon: Bot,
    description: "Streamline lead generation with AI-driven solutions.",
    color: "from-purple-500 to-pink-400",
    path: "/services/ai-integration"
  },
  {
    title: "IT & Security",
    icon: Shield,
    description: "Protect your business with AI-powered security solutions.",
    color: "from-red-500 to-orange-400",
    path: "/services/it-security"
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
      <div className="block p-6">
        <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${solution.color}`}>
          <solution.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{solution.title}</h3>
        <p className="text-white/80 mb-4">{solution.description}</p>
        <Link 
          to={solution.path} 
          className="inline-flex items-center gap-2 text-white hover:text-white/90 transition-colors text-sm font-medium group"
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const BusinessSolutions = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const navigate = useNavigate();
  
  const { ref: solutionsRef, inView: solutionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-neutral-900 py-20">
      <div className="container px-4 sm:px-6 mx-auto">
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
            <div className="inline-flex p-1 rounded-lg bg-white/10 backdrop-blur-sm">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'ai' ? 'bg-white text-neutral-900' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setActiveTab('ai')}
              >
                AI Solutions
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'web' ? 'bg-white text-neutral-900' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setActiveTab('web')}
              >
                Web Development
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'premium' ? 'bg-white text-neutral-900' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setActiveTab('premium')}
              >
                Premium Solutions
              </button>
            </div>
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
              onClick={() => navigate(activeTab === 'ai' ? '/services/ai' : activeTab === 'web' ? '/services/web' : '/services/premium')}
            >
              View All {activeTab === 'ai' ? 'Solutions' : activeTab === 'web' ? 'Services' : 'Premium Services'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
