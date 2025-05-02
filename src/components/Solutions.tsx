import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, DollarSign, Users, FileText, BarChart3, Truck, Shield, Scale, Database, 
  Globe, Server, Code, Laptop, Mail, LineChart, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useChat } from '@/context/ChatContext';
import { useNavigate } from 'react-router-dom';

export const solutionCategories = [
  {
    title: "Finance & Accounting",
    icon: DollarSign,
    description: "Automate financial processes and gain actionable insights with AI-powered analysis.",
    features: [
      "Invoice Processing",
      "Expense Management", 
      "Tax Compliance",
      "Cash Flow Forecasting",
      "Automated Payroll"
    ],
    detailed: [
      "AI reads, categorizes, and processes invoices, reducing human errors",
      "AI tracks and categorizes expenses, helping reduce unnecessary spending",
      "AI helps track VAT, corporate taxes, and generate tax reports",
      "AI predicts future financial trends based on past transactions",
      "AI calculates wages, generates payslips, and integrates with tax systems"
    ],
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Customer Engagement",
    icon: Users,
    description: "Automate customer interactions with AI-powered chatbots and personalized engagement tools.",
    features: [
      "24/7 AI Chatbots",
      "Automated Email Responses",
      "Sentiment Analysis",
      "Call Transcription",
      "Virtual Assistants"
    ],
    detailed: [
      "AI handles common customer queries, reducing the need for human agents",
      "AI replies to customer emails, follows up on invoices, and engages leads",
      "AI scans customer reviews and messages to detect satisfaction levels",
      "AI transcribes and analyzes customer calls for valuable insights",
      "Virtual assistants provide personalized customer experiences"
    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Sales & Marketing",
    icon: Bot,
    description: "Streamline lead generation and optimize marketing campaigns with AI-driven solutions.",
    features: [
      "Lead Generation",
      "Ad Optimization",
      "AI Content Generation",
      "Sales Forecasting",
      "CRM Automation"
    ],
    detailed: [
      "AI finds potential clients and contacts them automatically",
      "AI tests and adjusts digital ads in real-time for better performance",
      "AI generates personalized emails, proposals, and contracts",
      "AI predicts future sales and market trends for better planning",
      "AI keeps track of client interactions and suggests follow-ups"
    ],
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "HR & Recruitment",
    icon: Users,
    description: "Simplify hiring and employee management with intelligent automation tools.",
    features: [
      "Resume Screening",
      "Interview Scheduling",
      "Performance Tracking",
      "Training Programs",
      "Employee Analytics"
    ],
    detailed: [
      "AI scans CVs, ranks candidates, and shortlists the best ones",
      "AI handles back-and-forth scheduling with candidates",
      "AI analyzes work patterns and helps improve efficiency",
      "AI tailors employee training based on performance and skills",
      "AI identifies trends in employee satisfaction and productivity"
    ],
    color: "from-amber-500 to-yellow-400"
  },
  {
    title: "Logistics & Supply Chain",
    icon: Truck,
    description: "Optimize your supply chain operations with AI-powered logistics management.",
    features: [
      "Inventory Management",
      "Route Optimization",
      "Supplier Management",
      "Demand Forecasting",
      "Warehouse Automation"
    ],
    detailed: [
      "AI predicts demand and automates stock replenishment",
      "AI finds the fastest delivery routes, saving fuel and time",
      "AI suggests the best suppliers based on cost and reliability",
      "AI predicts future demand based on historical data",
      "AI optimizes warehouse operations and product placement"
    ],
    color: "from-green-500 to-lime-400"
  },
  {
    title: "IT & Security",
    icon: Shield,
    description: "Protect your business and optimize IT operations with AI-powered security solutions.",
    features: [
      "Threat Detection",
      "IT Support Automation",
      "System Monitoring",
      "Predictive Maintenance",
      "Automated Backups"
    ],
    detailed: [
      "AI identifies potential security risks before they cause damage",
      "AI detects and resolves common IT issues automatically",
      "AI monitors server performance and predicts failures",
      "AI predicts when equipment needs maintenance before breakdown",
      "AI ensures data is backed up and recoverable"
    ],
    color: "from-red-500 to-orange-400"
  },
  {
    title: "Legal & Compliance",
    icon: Scale,
    description: "Streamline legal processes and ensure regulatory compliance with AI automation.",
    features: [
      "Contract Analysis",
      "Document Generation",
      "Regulatory Compliance",
      "Legal Research",
      "Risk Assessment"
    ],
    detailed: [
      "AI scans contracts for risks, deadlines, and compliance issues",
      "AI drafts NDAs, contracts, and compliance reports",
      "AI ensures businesses follow industry regulations",
      "AI combs through legal documents to find relevant information",
      "AI identifies and assesses potential legal and compliance risks"
    ],
    color: "from-indigo-500 to-violet-400"
  },
  {
    title: "Data Analytics",
    icon: Database,
    description: "Transform raw data into actionable business intelligence with AI-driven analytics.",
    features: [
      "Predictive Analytics",
      "Business Intelligence",
      "Competitor Analysis",
      "Data Visualization",
      "Market Trends"
    ],
    detailed: [
      "AI predicts sales, demand, and market trends",
      "AI generates detailed reports with insights from raw data",
      "AI monitors competitors' pricing and marketing strategies",
      "AI creates visual dashboards for easy data interpretation",
      "AI identifies emerging market trends and opportunities"
    ],
    color: "from-indigo-500 to-blue-400"
  }
];

const webDevServices = [
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
];

const premiumServices = [
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

const SolutionCard = ({ solution, index }: { solution: typeof solutionCategories[0], index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01, 
    rootMargin: '50px',
  });

  const solutionId = solution.title.toLowerCase().replace(/[^a-z0-9]/g, '-');

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-white rounded-xl shadow-md overflow-hidden transition-all duration-150 transform card-hover opacity-0 translate-y-4",
        inView && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 25}ms` }}
    >
      <div className={`p-6 flex flex-col h-full`}>
        <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${solution.color}`}>
          <solution.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-neutral-800">{solution.title}</h3>
        <p className="text-neutral-600 mb-3 flex-grow">{solution.description}</p>
        
        <Tabs defaultValue="features" className="mb-4">
          <TabsList className="grid w-full grid-cols-2 mb-3">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="details">How It Works</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="mt-0">
            <ul className="space-y-1">
              {solution.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-neutral-700">
                  <svg className="w-3 h-3 mr-1 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="details" className="mt-0">
            <ul className="space-y-1 text-sm">
              {solution.detailed.map((detail, idx) => (
                <li key={idx} className="flex items-start text-neutral-700">
                  <span className="inline-block w-1 h-1 rounded-full bg-brand-500 mt-1.5 mr-1 flex-shrink-0"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
        
        <Link to={`/solutions/${solutionId}`} className="mt-auto w-full">
          <Button className={`w-full bg-gradient-to-r hover:bg-gradient-to-br border-none shadow-md hover:shadow-lg transition-all duration-300 text-white font-medium py-1 px-3 rounded-lg ${solution.color}`}>
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

const WebDevCard = ({ service, index }: { service: typeof webDevServices[0], index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '50px',
  });

  return (
    <Card 
      ref={ref}
      className={cn(
        "border border-neutral-200 shadow-sm hover:shadow-md transition-all h-full opacity-0 transform translate-y-8",
        inView && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${100 + (index * 50)}ms` }}
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
                Learn more <span className="ml-1">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PremiumServiceCard = ({ service, index }: { service: typeof premiumServices[0], index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '50px',
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-white rounded-xl border border-neutral-200 p-6 transition-all duration-150 opacity-0 transform translate-y-4 hover:shadow-lg flex flex-col h-full",
        inView && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 25}ms` }}
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
            Learn more <span className="ml-1">→</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Solutions = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '50px',
  });

  const [activeTab, setActiveTab] = useState('ai-solutions');
  const { openChat } = useChat();
  const navigate = useNavigate();

  return (
    <section id="solutions" className="py-20 bg-neutral-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 opacity-0 transform translate-y-4 transition-all duration-250",
            inView && "opacity-100 transform-none"
          )}>
            Our Business <span className="text-gradient">Solutions</span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-neutral-600 opacity-0 transform translate-y-4 transition-all duration-250 delay-25",
            inView && "opacity-100 transform-none"
          )}>
            Comprehensive solutions tailored to your business needs, 
            from AI automation to web development and premium services.
          </p>
        </div>

        <Tabs 
          defaultValue="ai-solutions" 
          className="w-full mb-10"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center">
            <TabsList className="mb-8 bg-white border border-neutral-200">
              <TabsTrigger value="ai-solutions">AI Solutions</TabsTrigger>
              <TabsTrigger value="web-development">Web Development</TabsTrigger>
              <TabsTrigger value="premium-services">Premium Services</TabsTrigger>
            </TabsList>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="pl-0">
                <TabsContent value="ai-solutions" className="mt-0 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {solutionCategories.map((solution, index) => (
                      <SolutionCard key={index} solution={solution} index={index} />
                    ))}
                  </div>
                </TabsContent>
              </CarouselItem>
              
              <CarouselItem className="pl-0">
                <TabsContent value="web-development" className="mt-0 w-full">
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                      Web Development & <span className="text-gradient">Hosting</span> Solutions
                    </h3>
                    <p className="max-w-3xl mx-auto text-lg text-neutral-600 mb-8">
                      Our comprehensive web solutions combine cutting-edge development with reliable hosting services, 
                      all enhanced by AI technologies.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {webDevServices.map((service, index) => (
                      <WebDevCard key={service.id} service={service} index={index} />
                    ))}
                  </div>
                  
                  <div className="p-6 border border-neutral-200 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm">
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
                        onClick={openChat}
                      >
                        Get a Free Consultation
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </CarouselItem>
              
              <CarouselItem className="pl-0">
                <TabsContent value="premium-services" className="mt-0 w-full">
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                      Premium <span className="text-gradient">Services</span>
                    </h3>
                    <p className="max-w-3xl mx-auto text-lg text-neutral-600 mb-8">
                      Comprehensive AI solutions tailored to your business needs, 
                      delivered by experts in automation and artificial intelligence.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {premiumServices.map((service, index) => (
                      <PremiumServiceCard key={service.id} service={service} index={index} />
                    ))}
                  </div>
                  
                  <div className="text-center mt-8">
                    <Button 
                      className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                      onClick={() => navigate('/services')}
                    >
                      View All Services
                    </Button>
                  </div>
                </TabsContent>
              </CarouselItem>
            </CarouselContent>
            
            <div className="flex items-center justify-center mt-8 gap-4">
              <CarouselPrevious 
                className="static relative transform-none translate-y-0 left-0 bg-white border-neutral-200 hover:bg-neutral-100 text-neutral-900"
                onClick={() => {
                  // Update the tab based on current active tab
                  if (activeTab === 'web-development') setActiveTab('ai-solutions');
                  else if (activeTab === 'premium-services') setActiveTab('web-development');
                }}
              />
              <CarouselNext 
                className="static relative transform-none translate-y-0 right-0 bg-white border-neutral-200 hover:bg-neutral-100 text-neutral-900"
                onClick={() => {
                  // Update the tab based on current active tab
                  if (activeTab === 'ai-solutions') setActiveTab('web-development');
                  else if (activeTab === 'web-development') setActiveTab('premium-services');
                }}
              />
            </div>
          </Carousel>
        </Tabs>
      </div>
    </section>
  );
};

export default Solutions;
