import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Bot, Brain, Shield, Users, DollarSign, Database, Globe, Server, Code, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';
import Contact from '@/components/Contact';
import { useIsMobile } from '@/hooks/use-mobile';

const aiSolutions = [
  {
    id: "finance-accounting",
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
    id: "customer-engagement",
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
    id: "sales-marketing",
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
    id: "hr-recruitment",
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
    id: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    icon: Shield,
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
    color: "from-red-500 to-orange-400"
  }
];

const webServices = [
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    icon: Code,
    description: "End-to-end web application development using modern frameworks and AI-assisted coding practices. We build scalable, performant applications that work flawlessly across devices and browsers, with clean code architecture that facilitates future expansion and maintenance.",
    features: [
      "Responsive design implementation",
      "Modern UI/UX practices",
      "API integrations",
      "Performance optimization",
      "Cross-browser compatibility"
    ],
    detailed: [
      "Our experts create responsive websites that adapt to any device",
      "We implement clean, maintainable code architecture",
      "End-to-end development with frontend and backend solutions",
      "Integration with third-party APIs and services",
      "Performance optimization and SEO best practices"
    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    icon: Globe,
    description: "AI-powered online stores with smart product recommendations, dynamic pricing, and personalized shopping experiences. Our e-commerce platforms integrate seamlessly with inventory management systems and provide advanced analytics to optimize product offerings and maximize revenue.",
    features: [
      "Product catalog management",
      "Secure payment processing",
      "Customer account management",
      "Order management systems",
      "Analytics and reporting"
    ],
    detailed: [
      "AI-powered product recommendation engines boost sales",
      "Secure payment gateway integration with multiple options",
      "Streamlined checkout processes to reduce abandonment",
      "Inventory management with automated alerts",
      "Detailed sales analytics and customer behavior insights"
    ],
    color: "from-purple-500 to-pink-400"
  },
  {
    id: "managed-cloud-hosting",
    title: "Managed Cloud Hosting",
    icon: Server,
    description: "Scalable, secure hosting infrastructure with automated backups, updates, and performance optimization. Our managed cloud services include 24/7 monitoring, proactive issue resolution, and regular security audits to ensure your applications remain available and protected.",
    features: [
      "Automated scaling",
      "24/7 monitoring",
      "Regular backups",
      "Security management",
      "Performance optimization"
    ],
    detailed: [
      "Infrastructure automatically scales to handle traffic spikes",
      "Round-the-clock monitoring with instant alert systems",
      "Regular and automated backup systems with quick restore",
      "Security patches and updates applied promptly",
      "Continuous performance tuning for optimal page load times"
    ],
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: "database-management",
    title: "Database Management",
    icon: Database,
    description: "AI-optimized database design, migration, and maintenance services for optimal performance and reliability. We implement efficient data structures, query optimization, and automated scaling to handle growing data volumes while maintaining fast response times and data integrity.",
    features: [
      "Database design",
      "Data migration",
      "Query optimization",
      "Backup solutions",
      "Performance monitoring"
    ],
    detailed: [
      "Efficient database schema design for optimal performance",
      "Smooth data migration with minimal downtime",
      "Query optimization to reduce response times",
      "Comprehensive backup strategies with quick recovery",
      "Ongoing performance monitoring and proactive improvements"
    ],
    color: "from-amber-500 to-yellow-400"
  }
];

const AllServices = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const [activeTab, setActiveTab] = useState("all");
  const [filteredServices, setFilteredServices] = useState([...aiSolutions, ...webServices]);

  useEffect(() => {
    document.title = "All Services - NexGenWeb";
  }, []);

  const handleFilterChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "all") {
      setFilteredServices([...aiSolutions, ...webServices]);
    } else if (tab === "ai") {
      setFilteredServices(aiSolutions);
    } else if (tab === "web") {
      setFilteredServices(webServices);
    }
  };

  const ServicesList = ({ services }: { services: any[] }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    );
  };

  const ServiceCard = ({ service }: { service: any }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <Card ref={ref} className={`bg-neutral-800 border border-neutral-700 text-white ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500`}>
        <CardContent className="p-6">
          <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${service.color}`}>
            <service.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-neutral-300 mb-4">{service.description}</p>
          <ul className="mb-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-neutral-300 mb-1">
                <Check className="h-4 w-4 mr-2 text-[#9b87f5]" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-[#9b87f5] hover:bg-[#8e79e6] text-white">
            Learn More
            <ArrowRight className="ml-2" />
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Explore our complete range of AI-powered solutions designed to transform your business
            </p>
          </div>
          
          <Tabs 
            defaultValue="all" 
            className="w-full mb-16"
            value={activeTab}
            onValueChange={(value) => {
              if (typeof value === 'string') {
                handleFilterChange(value);
              }
            }}
          >
            <TabsList className="mb-8 max-w-3xl mx-auto">
              <TabsTrigger value="all">
                {isMobile ? 'All' : 'All Services'}
              </TabsTrigger>
              <TabsTrigger value="ai">
                {isMobile ? 'AI' : 'AI Solutions'}
              </TabsTrigger>
              <TabsTrigger value="web">
                {isMobile ? 'Web' : 'Web Development'}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <ServicesList services={filteredServices} />
            </TabsContent>
            
            <TabsContent value="ai" className="mt-0">
              <ServicesList services={filteredServices} />
            </TabsContent>
            
            <TabsContent value="web" className="mt-0">
              <ServicesList services={filteredServices} />
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

export default AllServices;
