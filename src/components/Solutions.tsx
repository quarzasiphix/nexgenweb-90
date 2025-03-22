
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, DollarSign, Users, FileText, BarChart3, Truck, Shield, Scale, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';

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

const SolutionCard = ({ solution, index }: { solution: typeof solutionCategories[0], index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05, // Reduced from 0.1 to trigger sooner
  });

  const solutionId = solution.title.toLowerCase().replace(/[^a-z0-9]/g, '-');

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform card-hover opacity-0 translate-y-8", // Duration reduced from 500 to 300
        inView && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 50}ms` }} // Reduced delay from 100ms to 50ms
    >
      <div className={`p-6 flex flex-col h-full`}>
        <div className={`w-12 h-12 rounded-lg mb-5 flex items-center justify-center bg-gradient-to-r ${solution.color}`}>
          <solution.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-neutral-800">{solution.title}</h3>
        <p className="text-neutral-600 mb-4 flex-grow">{solution.description}</p>
        
        <Tabs defaultValue="features" className="mb-6">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="details">How It Works</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="mt-0">
            <ul className="space-y-2">
              {solution.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-neutral-700">
                  <svg className="w-4 h-4 mr-2 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="details" className="mt-0">
            <ul className="space-y-2 text-sm">
              {solution.detailed.map((detail, idx) => (
                <li key={idx} className="flex items-start text-neutral-700">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
        
        <Link to={`/solutions/${solutionId}`} className="mt-auto w-full">
          <Button className={`w-full bg-gradient-to-r hover:bg-gradient-to-br border-none shadow-md hover:shadow-lg transition-all duration-300 text-white font-medium py-2 px-4 rounded-lg ${solution.color}`}>
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Solutions = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05, // Reduced from 0.1 to trigger sooner
  });

  return (
    <section id="solutions" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 opacity-0 transform translate-y-4 transition-all duration-500", // Reduced from 700 to 500
            inView && "opacity-100 transform-none"
          )}>
            AI-Powered Business <span className="text-gradient">Solutions</span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-neutral-600 opacity-0 transform translate-y-4 transition-all duration-500 delay-50", // Reduced from 700 to 500, delay from 100 to 50
            inView && "opacity-100 transform-none"
          )}>
            Leverage intelligent automation across every department to drive efficiency, 
            reduce costs, and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {solutionCategories.map((solution, index) => (
            <SolutionCard key={index} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
