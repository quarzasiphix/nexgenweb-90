
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Bot, LineChart, Laptop, Zap, Building2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Custom AI Integration",
      description: "Seamlessly integrate AI into your existing systems with custom workflows and automation pipelines.",
      icon: Bot,
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: "AI-Powered Web Development",
      description: "Create intelligent, responsive websites with AI-driven content and personalization capabilities.",
      icon: Laptop,
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      title: "Marketing Automation",
      description: "Deploy AI-driven marketing campaigns that adapt in real-time to maximize engagement and conversions.",
      icon: Mail,
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      title: "Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics and custom reporting dashboards.",
      icon: LineChart,
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      title: "Enterprise AI Solutions",
      description: "Comprehensive AI integration strategies tailored for large organizations and complex requirements.",
      icon: Building2,
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      title: "Performance Optimization",
      description: "Enhance system performance and user experience through AI-driven optimization techniques.",
      icon: Zap,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 opacity-0 transform translate-y-4 transition-all duration-700",
            inView && "opacity-100 transform-none"
          )}>
            Our Premium <span className="text-gradient">Services</span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-neutral-600 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
            inView && "opacity-100 transform-none"
          )}>
            Comprehensive AI solutions tailored to your business needs, 
            delivered by experts in automation and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl border border-neutral-200 p-6 transition-all duration-500 opacity-0 transform translate-y-8 hover:shadow-lg",
                inView && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-full mb-5 flex items-center justify-center ${service.color}`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">{service.title}</h3>
              <p className="text-neutral-600 mb-4">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors group">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className={cn(
          "text-center mt-12 opacity-0 transform translate-y-4 transition-all duration-700 delay-500",
          inView && "opacity-100 transform-none"
        )}>
          <Button className="btn-primary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
