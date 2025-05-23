
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Bot, LineChart, Settings, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: Bot,
    title: "AI Analysis",
    description: "Our AI analyzes your business processes to identify automation opportunities and efficiency gaps.",
    color: "bg-blue-500"
  },
  {
    icon: Settings,
    title: "Custom Solution",
    description: "We develop tailored AI solutions designed specifically for your business needs and goals.",
    color: "bg-purple-500"
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "Our team implements and integrates the AI solutions with your existing systems and workflows.",
    color: "bg-emerald-500"
  },
  {
    icon: LineChart,
    title: "Optimization",
    description: "Continuous monitoring and optimization ensure maximum performance and ROI for your business.",
    color: "bg-amber-500"
  }
];

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '100px',
  });

  return (
    <section id="how-it-works" className="py-20 bg-neutral-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-3 md:mb-4 text-neutral-900 opacity-0 transform translate-y-4 transition-all duration-150",
            inView && "opacity-100 transform-none"
          )}>
            How We <span className="text-gradient">Transform</span> Your Business
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-neutral-600 opacity-0 transform translate-y-4 transition-all duration-150 delay-25",
            inView && "opacity-100 transform-none"
          )}>
            Our proven process for implementing AI-powered automation solutions 
            that drive real business results.
          </p>
        </div>

        <div className="relative">
          {/* Connect line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "bg-white rounded-xl p-4 md:p-6 shadow-md opacity-0 transform translate-y-4 transition-all duration-150",
                  inView && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: `${index * 15}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-3 items-center mb-3 md:mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 ${step.color} rounded-full flex items-center justify-center`}>
                      <step.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-neutral-900 rounded-full flex items-center justify-center text-xs md:text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-neutral-800">{step.title}</h3>
                  <p className="text-sm md:text-base text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
