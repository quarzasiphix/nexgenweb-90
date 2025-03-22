import React, { useEffect } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';

const CaseStudiesPage = () => {
  useEffect(() => {
    document.title = "Case Studies - BizWiz";
  }, []);

  const caseStudies = [
    {
      title: "AI-Powered Customer Service Automation",
      company: "European Retail Chain",
      industry: "Retail",
      description: "Implemented a custom AI chatbot solution that reduced customer service costs by 45% while improving customer satisfaction scores by 22%.",
      results: [
        "45% reduction in customer service costs",
        "22% improvement in customer satisfaction",
        "85% of routine inquiries automated",
        "Response time reduced from 24 hours to under 2 minutes"
      ],
      category: "ai"
    },
    {
      title: "E-commerce Personalization Engine",
      company: "Luxury Fashion Brand",
      industry: "Fashion",
      description: "Developed a sophisticated AI-driven product recommendation system that analyzes user behavior to deliver personalized shopping experiences.",
      results: [
        "34% increase in average order value",
        "28% improvement in conversion rates",
        "42% higher repeat purchase rate",
        "3.5x ROI within six months of implementation"
      ],
      category: "ai"
    },
    {
      title: "Financial Data Analysis Platform",
      company: "Investment Management Firm",
      industry: "Finance",
      description: "Created a custom AI solution that processes and analyzes vast financial datasets to identify market trends and investment opportunities.",
      results: [
        "Reduced analysis time from days to minutes",
        "Identified 17% more investment opportunities",
        "Improved investment performance by 12%",
        "Saved 1,200+ analyst hours per month"
      ],
      category: "ai"
    },
    {
      title: "High-Performance E-commerce Website",
      company: "Electronics Retailer",
      industry: "Retail",
      description: "Developed a scalable, high-performance e-commerce platform capable of handling 200,000+ concurrent users during peak sales events.",
      results: [
        "99.99% uptime during major sale events",
        "45% faster page load times",
        "32% increase in mobile conversions",
        "Seamless integration with existing inventory systems"
      ],
      category: "web"
    },
    {
      title: "Healthcare Provider Portal",
      company: "Regional Medical Center",
      industry: "Healthcare",
      description: "Built a secure, HIPAA-compliant web portal connecting patients, doctors, and administrative staff with integrated telehealth capabilities.",
      results: [
        "Reduced administrative workload by 35%",
        "Increased patient satisfaction by 40%",
        "Successful handling of 5,000+ daily telehealth appointments",
        "Streamlined billing process saving $1.2M annually"
      ],
      category: "web"
    },
    {
      title: "Global Content Delivery Solution",
      company: "International Media Company",
      industry: "Media",
      description: "Implemented an advanced hosting and CDN solution to deliver high-definition video content to global audiences with minimal latency.",
      results: [
        "97% reduction in buffering incidents",
        "Support for 4K video streaming worldwide",
        "71% improvement in average load time",
        "Scaled to handle 3M+ concurrent viewers"
      ],
      category: "web"
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
                <FileText className="h-6 w-6 text-brand-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Explore real-world examples of how our solutions have transformed businesses
              across different industries and solved complex challenges.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="max-w-md mx-auto bg-neutral-800 border-neutral-700 mb-8">
              <TabsTrigger value="all" className="text-white data-[state=active]:bg-brand-500/20">
                All Case Studies
              </TabsTrigger>
              <TabsTrigger value="ai" className="text-white data-[state=active]:bg-brand-500/20">
                AI Solutions
              </TabsTrigger>
              <TabsTrigger value="web" className="text-white data-[state=active]:bg-brand-500/20">
                Web Services
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudies.map((caseStudy, index) => (
                  <Card key={index} className="bg-neutral-800 border-neutral-700 hover:border-brand-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <span className={`px-3 py-1 rounded-full ${caseStudy.category === 'ai' ? 'bg-brand-500/20 text-brand-400' : 'bg-purple-500/20 text-purple-400'} text-xs font-medium mr-3`}>
                          {caseStudy.category === 'ai' ? 'AI SOLUTION' : 'WEB SERVICE'}
                        </span>
                        <span className="text-neutral-400 text-sm">{caseStudy.industry}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
                      <p className="text-neutral-500 mb-4 text-sm">{caseStudy.company}</p>
                      <p className="text-neutral-300 mb-6">{caseStudy.description}</p>
                      
                      <h4 className="text-sm font-semibold text-white mb-3">Key Results:</h4>
                      <ul className="space-y-2 mb-6">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-neutral-400">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-2 flex-shrink-0"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                      
                      <Button
                        className="w-full bg-neutral-700 hover:bg-neutral-600 text-white"
                        onClick={() => window.location.href = 'mailto:bizwiz.work@gmail.com?subject=Case Study: ' + caseStudy.title}
                      >
                        Request Full Case Study
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ai">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudies.filter(cs => cs.category === 'ai').map((caseStudy, index) => (
                  <Card key={index} className="bg-neutral-800 border-neutral-700 hover:border-brand-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-medium mr-3">
                          AI SOLUTION
                        </span>
                        <span className="text-neutral-400 text-sm">{caseStudy.industry}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
                      <p className="text-neutral-500 mb-4 text-sm">{caseStudy.company}</p>
                      <p className="text-neutral-300 mb-6">{caseStudy.description}</p>
                      
                      <h4 className="text-sm font-semibold text-white mb-3">Key Results:</h4>
                      <ul className="space-y-2 mb-6">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-neutral-400">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-2 flex-shrink-0"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                      
                      <Button
                        className="w-full bg-neutral-700 hover:bg-neutral-600 text-white"
                        onClick={() => window.location.href = 'mailto:bizwiz.work@gmail.com?subject=Case Study: ' + caseStudy.title}
                      >
                        Request Full Case Study
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudies.filter(cs => cs.category === 'web').map((caseStudy, index) => (
                  <Card key={index} className="bg-neutral-800 border-neutral-700 hover:border-brand-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium mr-3">
                          WEB SERVICE
                        </span>
                        <span className="text-neutral-400 text-sm">{caseStudy.industry}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
                      <p className="text-neutral-500 mb-4 text-sm">{caseStudy.company}</p>
                      <p className="text-neutral-300 mb-6">{caseStudy.description}</p>
                      
                      <h4 className="text-sm font-semibold text-white mb-3">Key Results:</h4>
                      <ul className="space-y-2 mb-6">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-neutral-400">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-2 flex-shrink-0"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                      
                      <Button
                        className="w-full bg-neutral-700 hover:bg-neutral-600 text-white"
                        onClick={() => window.location.href = 'mailto:bizwiz.work@gmail.com?subject=Case Study: ' + caseStudy.title}
                      >
                        Request Full Case Study
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="p-6 border border-neutral-700 rounded-xl bg-gradient-to-r from-neutral-800 to-neutral-900">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  Want to see similar results for your business?
                </h4>
                <p className="text-neutral-400">
                  Our team of experts is ready to analyze your unique challenges and develop tailored solutions.
                </p>
              </div>
              <Button 
                className="bg-brand-500 hover:bg-brand-600 text-white whitespace-nowrap"
                onClick={() => window.location.href = 'mailto:bizwiz.work@gmail.com?subject=Custom Solution Inquiry'}
              >
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudiesPage;
