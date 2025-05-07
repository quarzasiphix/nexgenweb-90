import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Bot, LineChart, Laptop, Building2, Mail, Globe, 
  Server, Code, Database, ArrowLeft, Shield, Users,
  DollarSign, Scale
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';

const allServices = [
  {
    id: "custom-ai-integration",
    title: "Custom AI Integration",
    description: "Seamlessly integrate AI into your existing systems with custom workflows and automation pipelines.",
    icon: Bot,
    color: "from-blue-500 to-blue-600",
    category: "ai",
    features: [
      "Automated data processing",
      "Custom AI model integration",
      "Workflow automation",
      "Intelligent decision systems",
      "Legacy system AI enhancement"
    ],
    detailed: [
      "Assessment of your existing systems and workflows",
      "Custom AI solution design based on your business needs",
      "Seamless integration with your current technology stack",
      "Training and fine-tuning of AI models with your data",
      "Continuous monitoring and optimization of AI performance"
    ],
    packageInfo: {
      name: "Premium Services - Custom AI Integration",
      price: "$4,999",
      description: "This service is available as a Premium Service with our Custom AI Integration package. It includes a comprehensive custom implementation tailored to your business requirements.",
      includedIn: ["Custom AI Integration package", "Enterprise AI package"]
    }
  },
  {
    id: "ai-powered-web-development",
    title: "AI-Powered Web Development",
    description: "Create intelligent, responsive websites with AI-driven content and personalization capabilities.",
    icon: Laptop,
    color: "from-purple-500 to-purple-600",
    category: "ai",
    features: [
      "Custom business websites with AI-optimized UX",
      "E-commerce platforms with AI product recommendations",
      "Web applications with AI-driven dashboards",
      "Progressive Web Apps (PWAs) with offline capabilities",
      "Content personalization engines"
    ],
    detailed: [
      "User behavior analysis to inform design decisions",
      "AI-powered content generation and optimization",
      "Dynamic personalization based on user interactions",
      "Continuous A/B testing for conversion optimization",
      "Integration of AI chatbots and virtual assistants"
    ],
    packageInfo: {
      name: "Premium Services - AI-Powered Web",
      price: "$3,999",
      description: "This service is included in our AI-Powered Web premium package. It combines cutting-edge AI technologies with advanced web development practices.",
      includedIn: ["AI-Powered Web package", "Web Business plan (limited features)", "Enterprise AI package (full implementation)"]
    }
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    description: "Deploy AI-driven marketing campaigns that adapt in real-time to maximize engagement and conversions.",
    icon: Mail,
    color: "from-green-500 to-green-600",
    category: "ai",
    features: [
      "Dynamic email campaigns",
      "AI-powered content generation",
      "Customer segmentation and targeting",
      "Performance analytics",
      "Conversion optimization"
    ],
    detailed: [
      "Customer journey mapping and personalized campaigns",
      "AI-driven content creation for multiple channels",
      "Automated A/B testing and campaign optimization",
      "Real-time analytics and performance dashboards",
      "Predictive analytics for customer behavior forecasting"
    ],
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This service is included in our AI Professional monthly plan. It provides a complete AI-driven marketing automation solution for growing businesses.",
      includedIn: ["AI Professional plan", "AI Enterprise plan"]
    }
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Transform data into actionable insights with AI-powered analytics and custom reporting dashboards.",
    icon: LineChart,
    color: "from-orange-500 to-orange-600",
    category: "ai",
    features: [
      "Interactive data dashboards",
      "Predictive analytics",
      "Custom KPI tracking",
      "Data visualization tools",
      "Automated reporting"
    ],
    detailed: [
      "Comprehensive data collection and integration systems",
      "Custom dashboards designed around your KPIs",
      "Predictive models for business forecasting",
      "Anomaly detection for early problem identification",
      "Automated insight generation and recommendation systems"
    ],
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This service is available with our AI Professional monthly plan. It includes advanced analytics and reporting features to drive data-informed decisions.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with additional customization)"]
    }
  },
  {
    id: "enterprise-ai-solutions",
    title: "Enterprise AI Solutions",
    description: "Comprehensive AI integration strategies tailored for large organizations and complex requirements.",
    icon: Building2,
    color: "from-red-500 to-red-600",
    category: "ai",
    features: [
      "Enterprise-wide AI strategy",
      "Department-specific AI solutions",
      "AI governance frameworks",
      "AI training programs",
      "Change management support"
    ],
    detailed: [
      "Enterprise-wide AI readiness assessment",
      "Customized AI roadmap development",
      "Cross-departmental AI integration planning",
      "AI governance and ethics framework implementation",
      "Executive training and change management support"
    ],
    packageInfo: {
      name: "Enterprise AI",
      price: "Custom",
      description: "This service is offered as part of our Enterprise AI package with customized pricing based on your organization's size and requirements.",
      includedIn: ["Enterprise AI package only"]
    }
  },
  {
    id: "cloud-hosting-solutions",
    title: "Cloud Hosting Solutions",
    description: "Scalable, secure, and reliable hosting infrastructure optimized for AI-powered applications.",
    icon: Server,
    color: "from-indigo-500 to-indigo-600",
    category: "ai",
    features: [
      "High-performance dedicated servers for AI workloads",
      "Managed cloud hosting with automatic scaling",
      "99.9% uptime SLA with 24/7 monitoring",
      "Integrated CDN for global content delivery",
      "Automated backups and disaster recovery"
    ],
    detailed: [
      "Custom cloud infrastructure design for AI workloads",
      "Automated scaling based on demand and usage patterns",
      "Comprehensive security implementation and monitoring",
      "Geographic redundancy and disaster recovery planning",
      "Continuous optimization for performance and cost efficiency"
    ],
    packageInfo: {
      name: "Web Business",
      price: "$1,999",
      description: "This service is included in our Web Business plan and can be added to any AI package. It provides robust hosting optimized for AI applications.",
      includedIn: ["Web Business plan", "Web Enterprise plan", "AI Enterprise plan (as an add-on)"]
    }
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern frameworks and AI-assisted coding practices.",
    icon: Code,
    color: "from-teal-500 to-teal-600",
    category: "web",
    features: [
      "Frontend development with React, Vue, or Angular",
      "Backend API development with Node.js, Python, or PHP",
      "Database design and optimization",
      "DevOps and CI/CD implementation",
      "Performance optimization and monitoring"
    ],
    detailed: [
      "Collaborative requirements gathering and solution design",
      "Iterative development with regular client feedback",
      "Responsive design for all device types and screen sizes",
      "Comprehensive testing including unit, integration, and E2E tests",
      "Thorough documentation and knowledge transfer"
    ],
    packageInfo: {
      name: "Web Business",
      price: "$1,999",
      description: "This service is included in our Web Business plan. It provides comprehensive web application development with modern frameworks and practices.",
      includedIn: ["Web Business plan", "Web Enterprise plan (with additional customization)"]
    }
  },
  {
    id: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    description: "AI-powered online stores with smart product recommendations, dynamic pricing, and personalized shopping experiences.",
    icon: Globe,
    color: "from-pink-500 to-pink-600",
    category: "web",
    features: [
      "Custom e-commerce platform development",
      "Integration with payment gateways and shipping providers",
      "AI-powered product recommendations",
      "Inventory management systems",
      "Analytics and sales reporting dashboards"
    ],
    detailed: [
      "Customized shopping experience based on user behavior",
      "Advanced product search and filtering capabilities",
      "Seamless checkout process optimization",
      "Integration with CRM and marketing automation tools",
      "Mobile-first design approach for on-the-go shoppers"
    ],
    packageInfo: {
      name: "Web Business",
      price: "$1,999",
      description: "This service is available with our Web Business plan. It includes a complete e-commerce solution with AI-powered features to maximize sales.",
      includedIn: ["Web Business plan", "Web Enterprise plan (with additional customization)", "AI-Powered Web package (enhanced AI features)"]
    }
  },
  {
    id: "managed-cloud-hosting",
    title: "Managed Cloud Hosting",
    description: "Scalable, secure hosting infrastructure with automated backups, updates, and performance optimization.",
    icon: Server,
    color: "from-blue-600 to-blue-700",
    category: "web",
    features: [
      "High-performance cloud servers",
      "Auto-scaling based on traffic demands",
      "Regular security updates and patches",
      "Daily backups and point-in-time recovery",
      "24/7 monitoring and support"
    ],
    detailed: [
      "Infrastructure as code for reliable deployments",
      "Load balancing for optimal performance distribution",
      "Web application firewall and DDoS protection",
      "Content delivery network integration",
      "Regular performance optimization and tuning"
    ],
    packageInfo: {
      name: "Web Basic",
      price: "$899",
      description: "This service is included in all our Web plans, starting with the Web Basic package. Higher tier plans include additional features and capacity.",
      includedIn: ["Web Basic plan", "Web Business plan (enhanced features)", "Web Enterprise plan (custom configuration)"]
    }
  },
  {
    id: "database-management",
    title: "Database Management",
    description: "AI-optimized database design, migration, and maintenance services for optimal performance and reliability.",
    icon: Database,
    color: "from-violet-500 to-violet-600",
    category: "web",
    features: [
      "Database design and architecture",
      "Performance optimization and tuning",
      "Data migration and ETL processes",
      "High availability and disaster recovery setup",
      "Security hardening and access control"
    ],
    detailed: [
      "Comprehensive database health assessment",
      "Query optimization for faster performance",
      "Automated backup and recovery systems",
      "Scalable architecture design for growing data needs",
      "Database monitoring and proactive maintenance"
    ],
    packageInfo: {
      name: "Web Business",
      price: "$1,999",
      description: "This service is included in our Web Business plan. It provides comprehensive database management optimized for performance and reliability.",
      includedIn: ["Web Business plan", "Web Enterprise plan (with additional customization)"]
    }
  },
  {
    id: "finance-accounting",
    title: "Finance & Accounting",
    description: "Automate financial processes and gain actionable insights with AI-powered analysis.",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-400",
    category: "ai",
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
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, providing comprehensive financial automation and management tools.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with additional custom processes)"]
    }
  },
  {
    id: "customer-engagement",
    title: "Customer Engagement",
    description: "Automate customer interactions with AI-powered chatbots and personalized engagement tools.",
    icon: Users,
    color: "from-blue-500 to-cyan-400",
    category: "ai",
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
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, with enhanced features available in Enterprise.",
      includedIn: ["AI Professional plan (standard features)", "AI Enterprise plan (enhanced customization)"]
    }
  },
  {
    id: "sales-marketing",
    title: "Sales & Marketing",
    description: "Streamline lead generation and optimize marketing campaigns with AI-driven solutions.",
    icon: Bot,
    color: "from-purple-500 to-pink-400",
    category: "ai",
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
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan. It provides comprehensive sales and marketing automation tools.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with enhanced features)"]
    }
  },
  {
    id: "hr-recruitment",
    title: "HR & Recruitment",
    description: "Simplify hiring and employee management with intelligent automation tools.",
    icon: Users,
    color: "from-amber-500 to-yellow-400",
    category: "ai",
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
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan. It provides intelligent HR automation tools to streamline recruitment and employee management.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with custom dashboards)"]
    }
  },
  {
    id: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    description: "Optimize your supply chain operations with AI-powered logistics management.",
    icon: Shield,
    color: "from-red-500 to-orange-400",
    category: "ai",
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
    packageInfo: {
      name: "AI Enterprise",
      price: "$1,999/mo",
      description: "This solution is available in our AI Enterprise monthly plan, providing comprehensive logistics and supply chain optimization.",
      includedIn: ["AI Enterprise plan", "Custom Enterprise Solutions"]
    }
  },
  {
    id: "legal-compliance",
    title: "Legal & Compliance",
    description: "Streamline legal processes and ensure regulatory compliance with AI automation.",
    icon: Scale,
    color: "from-indigo-500 to-violet-400",
    category: "ai",
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
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan with enhanced features in the Enterprise tier.",
      includedIn: ["AI Professional plan (basic features)", "AI Enterprise plan (advanced compliance tools)"]
    }
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform raw data into actionable business intelligence with AI-driven analytics.",
    icon: Database,
    color: "from-pink-500 to-rose-400",
    category: "ai",
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
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, providing comprehensive data analytics and business intelligence tools.",
      includedIn: ["AI Professional plan", "AI Enterprise plan (with custom dashboards)"]
    }
  },
  {
    id: "it-security",
    title: "IT & Security",
    description: "Protect your business and optimize IT operations with AI-powered security solutions.",
    icon: Shield,
    color: "from-gray-500 to-zinc-400",
    category: "ai",
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
    packageInfo: {
      name: "AI Professional",
      price: "$999/mo",
      description: "This solution is included in our AI Professional monthly plan, with enhanced security features in the Enterprise tier.",
      includedIn: ["AI Professional plan (standard security)", "AI Enterprise plan (advanced security features)"]
    }
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description: "Mobile-friendly designs that work on all devices.",
    icon: Code,
    color: "from-red-500 to-orange-400",
    category: "web",
    features: [
      "Cross-platform compatibility",
      "Adaptive layouts",
      "Optimized user experience",
      "Performance tuning",
      "Accessibility standards"
    ],
    detailed: [
      "Websites adapt to any screen size or device",
      "Layouts adjust dynamically for optimal viewing",
      "User experience is consistent across all platforms",
      "Performance is optimized for fast loading times",
      "Accessibility standards are met for all users"
    ],
    packageInfo: {
      name: "Web Basic",
      price: "$899",
      description: "This service is included in all our Web plans, starting with the Web Basic package. It ensures your website works perfectly on all devices.",
      includedIn: ["Web Basic plan", "Web Business plan", "Web Enterprise plan"]
    }
  },
  {
    id: "cms-implementation",
    title: "CMS Implementation",
    description: "Custom content management systems for your digital content.",
    icon: Globe,
    color: "from-indigo-500 to-violet-400",
    category: "web",
    features: [
      "Content creation",
      "Content scheduling",
      "User management",
      "SEO optimization",
      "Analytics and reporting"
    ],
    detailed: [
      "Easy content creation and management",
      "Scheduled content publishing",
      "User roles and permissions",
      "SEO optimization tools",
      "Analytics and reporting dashboards"
    ],
    packageInfo: {
      name: "Web Business",
      price: "$1,999",
      description: "This service is included in our Web Business plan. It provides a comprehensive content management system tailored to your business needs.",
      includedIn: ["Web Business plan", "Web Enterprise plan (with additional customization)"]
    }
  }
];

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { openChat, isChatOpen, closeChat } = useChat();
  
  const service = allServices.find(s => s.id === serviceId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (service) {
      document.title = `${service.title} - ToverNet`;
    } else {
      navigate('/services');
    }
  }, [service, navigate, serviceId]);

  if (!service) {
    return null;
  }

  const IconComponent = service.icon;

  const handleBuyNow = () => {
    navigate('/services/pricing', { state: { selectedService: service.packageInfo.name } });
  };

  return (
    <div className="min-h-screen bg-neutral-900">
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
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.color}`}>
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
                    <h3 className="text-lg font-medium text-white">{service.packageInfo.name}</h3>
                    <p className="text-2xl font-bold text-[#D6BCFA] mt-1">{service.packageInfo.price}</p>
                  </div>
                  <Button 
                    className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white mt-4 md:mt-0"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                </div>
                <p className="text-neutral-300 mb-4">{service.packageInfo.description}</p>
                <div>
                  <h4 className="font-medium text-white mb-2">Included in:</h4>
                  <ul className="space-y-1">
                    {service.packageInfo.includedIn.map((pkg, idx) => (
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
                    Eliminate inefficiencies and reduce operational costs through 
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
                Buy Now: {service.packageInfo.price}
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
