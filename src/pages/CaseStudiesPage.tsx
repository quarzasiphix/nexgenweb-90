import React, { useEffect } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const CaseStudiesPage = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    document.title = "Case Studies - NexGenWeb";
  }, []);

  const caseStudies = [
    {
      title: "AI-Powered Marketing Automation",
      category: "AI Solutions",
      industry: "Marketing",
      description: "Automated marketing campaigns with AI-driven personalization, resulting in a 300% increase in lead generation.",
      results: [
        "300% increase in lead generation",
        "50% reduction in marketing costs",
        "20% increase in conversion rates"
      ],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Web Development for E-commerce",
      category: "Web Development",
      industry: "Retail",
      description: "Developed a responsive e-commerce platform with AI-enhanced product recommendations, leading to a 150% increase in sales.",
      results: [
        "150% increase in sales",
        "40% increase in customer retention",
        "25% reduction in cart abandonment"
      ],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI-Driven Customer Support",
      category: "AI Solutions",
      industry: "Customer Service",
      description: "Implemented an AI chatbot for 24/7 customer support, resulting in a 60% reduction in support tickets and improved customer satisfaction.",
      results: [
        "60% reduction in support tickets",
        "40% improvement in customer satisfaction",
        "30% reduction in support costs"
      ],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Responsive Web Design for Local Business",
      category: "Web Development",
      industry: "Local Services",
      description: "Created a mobile-friendly website for a local business, resulting in a 200% increase in mobile traffic and improved local search rankings.",
      results: [
        "200% increase in mobile traffic",
        "50% improvement in local search rankings",
        "30% increase in online bookings"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI-Enhanced Data Analytics",
      category: "AI Solutions",
      industry: "Finance",
      description: "Utilized AI to analyze financial data, providing insights that led to a 40% reduction in operational costs and improved investment strategies.",
      results: [
        "40% reduction in operational costs",
        "25% improvement in investment strategies",
        "15% increase in ROI"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Custom Web Application for Enterprise",
      category: "Web Development",
      industry: "Enterprise",
      description: "Developed a custom web application for a large enterprise, streamlining internal processes and improving overall efficiency by 35%.",
      results: [
        "35% improvement in overall efficiency",
        "20% reduction in manual tasks",
        "10% increase in employee satisfaction"
      ],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800">
      <Header />
      
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Discover how our AI solutions and web services have transformed businesses across industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
            >
              Request a Custom Case Study
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8 max-w-3xl mx-auto">
            <TabsTrigger value="all">
              {isMobile ? 'All' : 'All Case Studies'}
            </TabsTrigger>
            <TabsTrigger value="ai">
              {isMobile ? 'AI' : 'AI Solutions'}
            </TabsTrigger>
            <TabsTrigger value="web">
              {isMobile ? 'Web' : 'Web Services'}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="h-48 bg-neutral-700 relative">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/30 to-[#1b1b27]/50 flex items-center justify-center">
                      <FileText className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        study.category === "AI Solutions" 
                          ? "bg-purple-900/50 text-purple-200" 
                          : "bg-blue-900/50 text-blue-200"
                      }`}>
                        {study.category}
                      </span>
                      <span className="ml-2 inline-block px-3 py-1 rounded-full text-xs font-medium bg-neutral-700 text-neutral-300">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-neutral-400 mb-4">{study.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neutral-300 mb-2">Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="bg-neutral-700/50 p-2 rounded">
                            <p className="text-sm text-neutral-300">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-[#9b87f5] hover:bg-[#8e79e6] text-white"
                    >
                      Read Full Case Study
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies
                .filter(study => study.category === "AI Solutions")
                .map((study, index) => (
                  <div key={index} className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="h-48 bg-neutral-700 relative">
                      <img 
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/30 to-[#1b1b27]/50 flex items-center justify-center">
                        <FileText className="h-16 w-16 text-white/80" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          study.category === "AI Solutions" 
                            ? "bg-purple-900/50 text-purple-200" 
                            : "bg-blue-900/50 text-blue-200"
                        }`}>
                          {study.category}
                        </span>
                        <span className="ml-2 inline-block px-3 py-1 rounded-full text-xs font-medium bg-neutral-700 text-neutral-300">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-neutral-400 mb-4">{study.description}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-neutral-300 mb-2">Results:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="bg-neutral-700/50 p-2 rounded">
                              <p className="text-sm text-neutral-300">{result}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-[#9b87f5] hover:bg-[#8e79e6] text-white"
                      >
                        Read Full Case Study
                      </Button>
                    </div>
                  </div>
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies
                .filter(study => study.category === "Web Development")
                .map((study, index) => (
                  <div key={index} className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="h-48 bg-neutral-700 relative">
                      <img 
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/30 to-[#1b1b27]/50 flex items-center justify-center">
                        <FileText className="h-16 w-16 text-white/80" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          study.category === "AI Solutions" 
                            ? "bg-purple-900/50 text-purple-200" 
                            : "bg-blue-900/50 text-blue-200"
                        }`}>
                          {study.category}
                        </span>
                        <span className="ml-2 inline-block px-3 py-1 rounded-full text-xs font-medium bg-neutral-700 text-neutral-300">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-neutral-400 mb-4">{study.description}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-neutral-300 mb-2">Results:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="bg-neutral-700/50 p-2 rounded">
                              <p className="text-sm text-neutral-300">{result}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-[#9b87f5] hover:bg-[#8e79e6] text-white"
                      >
                        Read Full Case Study
                      </Button>
                    </div>
                  </div>
                ))
              }
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
