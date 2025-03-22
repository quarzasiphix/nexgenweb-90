import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, LineChart, Shield, Server, Code, Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useChat } from '@/context/ChatContext';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { openChat } = useChat();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-16 md:pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 min-h-screen">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMTEtMTIgMCA2IDYgMCAwMTEyIDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNMzAgMzBhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-40"></div>
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
              Empower Your Business with <span className="text-gradient bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">ToverNet</span>
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Advanced solutions for business automation, web development, and digital transformation.
            </p>
            
            <div className="mb-12">
              <Tabs defaultValue="automation" className="w-full">
                <TabsList className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg mb-8">
                  <TabsTrigger value="automation" className="text-white data-[state=active]:bg-[#9b87f5]/20">
                    AI Solutions
                  </TabsTrigger>
                  <TabsTrigger value="web" className="text-white data-[state=active]:bg-[#9b87f5]/20">
                    Web Services
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="automation" className="mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left hover:bg-white/10 transition-all">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-[#9b87f5]/20 mr-3">
                          <Bot className="h-5 w-5 text-[#D6BCFA]" />
                        </div>
                        <h3 className="text-xl font-medium text-white">Finance & HR</h3>
                      </div>
                      <p className="text-white/80 text-sm mb-4">Automate invoicing, payroll, expense tracking, recruitment, and employee management.</p>
                      <Button 
                        variant="link" 
                        className="text-[#D6BCFA] p-0 hover:text-[#9b87f5]"
                        onClick={() => navigate('/services/ai')}
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left hover:bg-white/10 transition-all">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-[#9b87f5]/20 mr-3">
                          <LineChart className="h-5 w-5 text-[#D6BCFA]" />
                        </div>
                        <h3 className="text-xl font-medium text-white">Sales & Marketing</h3>
                      </div>
                      <p className="text-white/80 text-sm mb-4">Boost lead generation, personalize campaigns, optimize ads, and enhance CRM systems.</p>
                      <Button 
                        variant="link" 
                        className="text-[#D6BCFA] p-0 hover:text-[#9b87f5]"
                        onClick={() => navigate('/services/ai')}
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left hover:bg-white/10 transition-all">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-[#9b87f5]/20 mr-3">
                          <Shield className="h-5 w-5 text-[#D6BCFA]" />
                        </div>
                        <h3 className="text-xl font-medium text-white">IT & Security</h3>
                      </div>
                      <p className="text-white/80 text-sm mb-4">Protect with threat detection, automated support, and system monitoring.</p>
                      <Button 
                        variant="link" 
                        className="text-[#D6BCFA] p-0 hover:text-[#9b87f5]"
                        onClick={() => navigate('/services/ai')}
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left hover:bg-white/10 transition-all">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-[#9b87f5]/20 mr-3">
                          <Server className="h-5 w-5 text-[#D6BCFA]" />
                        </div>
                        <h3 className="text-xl font-medium text-white">Customer Support</h3>
                      </div>
                      <p className="text-white/80 text-sm mb-4">Deploy chatbots, automate emails, analyze customer sentiment, and transcribe calls.</p>
                      <Button 
                        variant="link" 
                        className="text-[#D6BCFA] p-0 hover:text-[#9b87f5]"
                        onClick={() => navigate('/services/ai')}
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="web" className="mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left hover:bg-white/10 transition-all">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-[#9b87f5]/20 mr-3">
                          <Code className="h-5 w-5 text-[#D6BCFA]" />
                        </div>
                        <h3 className="text-xl font-medium text-white">Web Development</h3>
                      </div>
                      <p className="text-white/80 text-sm mb-4">Custom business websites, e-commerce solutions, web applications, and progressive web apps.</p>
                      <Button 
                        variant="link" 
                        className="text-[#D6BCFA] p-0 hover:text-[#9b87f5]"
                        onClick={() => navigate('/services/web')}
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left hover:bg-white/10 transition-all">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-[#9b87f5]/20 mr-3">
                          <Server className="h-5 w-5 text-[#D6BCFA]" />
                        </div>
                        <h3 className="text-xl font-medium text-white">Cloud Hosting</h3>
                      </div>
                      <p className="text-white/80 text-sm mb-4">High-performance servers, managed cloud infrastructure, 99.9% uptime guarantee, and CDN integration.</p>
                      <Button 
                        variant="link" 
                        className="text-[#D6BCFA] p-0 hover:text-[#9b87f5]"
                        onClick={() => navigate('/services/web')}
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left hover:bg-white/10 transition-all">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-[#9b87f5]/20 mr-3">
                          <Database className="h-5 w-5 text-[#D6BCFA]" />
                        </div>
                        <h3 className="text-xl font-medium text-white">Technical Services</h3>
                      </div>
                      <p className="text-white/80 text-sm mb-4">Database management, API development, system integrations, and performance optimization.</p>
                      <Button 
                        variant="link" 
                        className="text-[#D6BCFA] p-0 hover:text-[#9b87f5]"
                        onClick={() => navigate('/services/web')}
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left hover:bg-white/10 transition-all">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-[#9b87f5]/20 mr-3">
                          <Shield className="h-5 w-5 text-[#D6BCFA]" />
                        </div>
                        <h3 className="text-xl font-medium text-white">Web Security</h3>
                      </div>
                      <p className="text-white/80 text-sm mb-4">SSL implementation, security audits, DDoS protection, and regular security updates.</p>
                      <Button 
                        variant="link" 
                        className="text-[#D6BCFA] p-0 hover:text-[#9b87f5]"
                        onClick={() => navigate('/services/web')}
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white group" 
                size="lg"
                onClick={openChat}
              >
                <span>Contact Us</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                size="lg"
                onClick={() => navigate('/services')}
              >
                Explore Solutions
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
