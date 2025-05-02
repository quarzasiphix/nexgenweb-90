
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Workflow, Bot, Layers, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: Bot,
      title: "AI Analysis",
      description: "Our AI analyzes your business processes to identify automation opportunities and efficiency gaps.",
      step: 1,
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Workflow,
      title: "Custom Solution",
      description: "We develop tailored AI solutions designed specifically for your business needs and goals.",
      step: 2,
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Layers,
      title: "Seamless Integration",
      description: "Our team implements and integrates the AI solutions with your existing systems and workflows.",
      step: 3,
      color: "from-emerald-500 to-teal-400"
    },
    {
      icon: BarChart3,
      title: "Optimization",
      description: "Continuous monitoring and optimization ensure maximum performance and ROI for your business.",
      step: 4,
      color: "from-amber-500 to-yellow-400"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wNSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMTEtMTIgMCA2IDYgMCAwMTEyIDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Remove top border/margin to create seamless transition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-4 text-white",
            inView ? "animate-on-scroll animated" : "animate-on-scroll"
          )}>
            How We <span className="text-gradient bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">Transform</span> Your Business
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-white/80",
            inView ? "animate-on-scroll animated" : "animate-on-scroll"
          )}>
            Our proven process for implementing AI-powered automation solutions that
            drive real business results.
          </p>
        </div>

        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          inView ? "stagger-children animated" : "stagger-children"
        )}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 rounded-xl shadow-md overflow-hidden transition-all duration-150 transform card-hover border border-white/10 backdrop-blur-sm p-6 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r ${step.color} relative`}>
                <step.icon className="h-8 w-8 text-white" />
                <div className="absolute -right-1 -top-1 w-7 h-7 rounded-full bg-neutral-800 border border-white/20 flex items-center justify-center text-sm font-semibold text-white">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
