import { Bot, Brain, DollarSign, Users, FileText, 
  BarChart3, Truck, Shield, Scale, Database,
  ArrowLeft, Globe, Server, Code, Laptop, Mail, LineChart, Building2 } from 'lucide-react';

export const aiServices = [
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
    id: "legal-compliance",
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
    id: "data-analytics",
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
  },
  {
    id: "it-security",
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
    color: "from-gray-500 to-zinc-400"
  }
];

export const webDevServices = [
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern frameworks and coding practices. We build scalable, performant applications that work flawlessly across devices and browsers, with clean code architecture that facilitates future expansion and maintenance.",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
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
    ]
  },
  {
    id: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    description: "Online stores with smart product recommendations, dynamic pricing, and personalized shopping experiences. Our e-commerce platforms integrate seamlessly with inventory management systems and provide advanced analytics to optimize product offerings and maximize revenue.",
    icon: Globe,
    color: "from-purple-500 to-pink-400",
    features: [
      "Product catalog management",
      "Secure payment processing",
      "Customer account management",
      "Order management systems",
      "Analytics and reporting"
    ],
    detailed: [
      "Product recommendation engines boost sales",
      "Secure payment gateway integration with multiple options",
      "Streamlined checkout processes to reduce abandonment",
      "Inventory management with automated alerts",
      "Detailed sales analytics and customer behavior insights"
    ]
  },
  {
    id: "managed-cloud-hosting",
    title: "Managed Cloud Hosting",
    description: "Scalable, secure hosting infrastructure with automated backups, updates, and performance optimization. Our managed cloud services include 24/7 monitoring, proactive issue resolution, and regular security audits to ensure your applications remain available and protected.",
    icon: Server,
    color: "from-emerald-500 to-teal-400",
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
    ]
  },
  {
    id: "database-management",
    title: "Database Management",
    description: "Optimized database design, migration, and maintenance services for optimal performance and reliability. We implement efficient data structures, query optimization, and automated scaling to handle growing data volumes while maintaining fast response times and data integrity.",
    icon: Database,
    color: "from-amber-500 to-yellow-400",
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
    ]
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description: "Mobile-friendly designs that work on all devices, creating a seamless user experience across desktops, tablets, and smartphones. Our responsive design approach ensures your website looks and functions perfectly regardless of screen size.",
    icon: Code,
    color: "from-red-500 to-orange-400",
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
    ]
  },
  {
    id: "cms-implementation",
    title: "CMS Implementation",
    description: "Custom content management systems that make website updates easy and efficient. Our CMS solutions provide intuitive interfaces for managing digital content without technical knowledge.",
    icon: Globe,
    color: "from-indigo-500 to-violet-400",
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
    ]
  }
];

export const premiumServices = [
  {
    id: "custom-ai-integration",
    title: "Custom AI Integration",
    description: "Seamlessly integrate AI into your existing systems with custom workflows and automation pipelines.",
    icon: Bot,
    color: "from-purple-500 to-pink-400",
    features: [
      "Bespoke AI solutions",
      "Seamless integration",
      "Data preparation",
      "Ongoing maintenance"
    ],
    detailed: [
      "Bespoke AI solutions that connect directly with your current infrastructure",
      "Minimize disruption while maximizing efficiency",
      "Complete handling from data preparation to deployment",
      "Ongoing maintenance and optimization"
    ]
  },
  {
    id: "ai-powered-web",
    title: "AI-Powered Web Development",
    description: "Create intelligent, responsive websites with AI-driven content and personalization capabilities.",
    icon: Laptop,
    color: "from-blue-500 to-cyan-400",
    features: [
      "Real-time adaptation",
      "Personalized experiences",
      "Intelligent search",
      "Content recommendations"
    ],
    detailed: [
      "Real-time adaptation to user behavior",
      "Customized experiences that boost engagement",
      "Intelligent search functionality",
      "Personalized product recommendations"
    ]
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    description: "Deploy AI-driven marketing campaigns that adapt in real-time to maximize engagement and conversions.",
    icon: Mail,
    color: "from-green-500 to-lime-400",
    features: [
      "Behavior analysis",
      "Targeted content",
      "Predictive analytics",
      "Campaign optimization"
    ],
    detailed: [
      "Analysis of user behavior patterns",
      "Perfectly timed, highly relevant content delivery",
      "Predictive analytics for customer needs",
      "Optimized ad spend and dynamic campaigns"
    ]
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Transform data into actionable insights with AI-powered analytics and custom reporting dashboards.",
    icon: LineChart,
    color: "from-amber-500 to-yellow-400",
    features: [
      "Data consolidation",
      "Visual dashboards",
      "Predictive models",
      "Decision support"
    ],
    detailed: [
      "Data consolidation from multiple sources",
      "Intuitive visualizations highlighting trends",
      "Predictive models for market forecasting",
      "Data-driven decision making support"
    ]
  },
  {
    id: "enterprise-ai",
    title: "Enterprise AI Solutions",
    description: "Comprehensive AI integration strategies tailored for large organizations and complex requirements.",
    icon: Building2,
    color: "from-emerald-500 to-teal-400",
    features: [
      "Governance frameworks",
      "Security compliance",
      "Knowledge management",
      "Multi-department workflows"
    ],
    detailed: [
      "Organization-wide AI governance frameworks",
      "Scale, security, and compliance solutions",
      "Custom knowledge management systems",
      "Multi-department automation workflows"
    ]
  },
  {
    id: "cloud-hosting-solutions",
    title: "Cloud Hosting Solutions",
    description: "Scalable, secure, and reliable hosting infrastructure optimized for AI-powered applications.",
    icon: Server,
    color: "from-indigo-500 to-violet-400",
    features: [
      "Computational architecture",
      "Resource allocation",
      "Continuous monitoring",
      "Security protection"
    ],
    detailed: [
      "Architecture for demanding computational requirements",
      "Automatic resource allocation",
      "Redundant systems with continuous monitoring",
      "Enterprise-grade security protection"
    ]
  }
];
