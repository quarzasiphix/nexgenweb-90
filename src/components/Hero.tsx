
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Database, LineChart, Shield, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMTEtMTIgMCA2IDYgMCAwMTEyIDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNMzAgMzBhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn(
            "opacity-0 transform translate-y-4 transition-all duration-1000",
            isVisible && "opacity-100 transform-none"
          )}>
            <div className="inline-block mb-6 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-white/90 text-sm font-medium">
                Transforming Businesses with AI-Powered Automation
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Scale Your Business with <span className="text-gradient bg-gradient-to-r from-brand-400 to-purple-400">Intelligent Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Harness the power of AI to streamline operations, boost productivity, and drive growth across every department of your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="btn-primary group" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                size="lg"
                onClick={() => scrollToSection('solutions')}
              >
                Explore Solutions
              </Button>
            </div>
          </div>

          <div className={cn(
            "grid grid-cols-2 md:grid-cols-5 gap-6 opacity-0 transition-all duration-1000 delay-300",
            isVisible && "opacity-100"
          )}>
            {[
              { icon: Bot, label: "AI Chatbots" },
              { icon: Users, label: "CRM Automation" },
              { icon: LineChart, label: "Analytics" },
              { icon: Shield, label: "Security" },
              { icon: Database, label: "Big Data" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-morphism rounded-xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/20"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 p-2 rounded-full bg-brand-500/10">
                  <item.icon className="h-6 w-6 text-brand-500" />
                </div>
                <p className="text-white text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
