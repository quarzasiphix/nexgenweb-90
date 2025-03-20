
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: "Financial Services Transformation",
    description: "How a leading bank automated 85% of customer inquiries with AI chatbots, reducing response time by 90%.",
    category: "Banking",
    metrics: [
      { label: "Cost Reduction", value: "42%" },
      { label: "Customer Satisfaction", value: "96%" },
      { label: "Response Time", value: "< 10s" }
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "E-commerce Growth Acceleration",
    description: "How our AI-driven personalization increased conversion rates by 37% for a global retail brand.",
    category: "Retail",
    metrics: [
      { label: "Sales Growth", value: "57%" },
      { label: "Conversion Rate", value: "4.2x" },
      { label: "Customer Retention", value: "85%" }
    ],
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Healthcare Operations Optimization",
    description: "How AI-powered scheduling and resource allocation saved a hospital network $4.2M annually.",
    category: "Healthcare",
    metrics: [
      { label: "Efficiency Gain", value: "68%" },
      { label: "Patient Satisfaction", value: "92%" },
      { label: "Wait Time Reduction", value: "74%" }
    ],
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const CaseStudies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-neutral-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 opacity-0 transform translate-y-4 transition-all duration-700",
            inView && "opacity-100 transform-none"
          )}>
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-neutral-600 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
            inView && "opacity-100 transform-none"
          )}>
            Discover how businesses across industries have achieved remarkable results 
            with our AI-powered automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 transform opacity-0 translate-y-8 hover:shadow-xl",
                inView && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900/30 z-10"></div>
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-brand-500 text-white text-xs font-semibold rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-neutral-800">{study.title}</h3>
                <p className="text-neutral-600 mb-5">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-2xl font-bold text-brand-600">{metric.value}</p>
                      <p className="text-xs text-neutral-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={() => scrollToContact()}
                >
                  <span>View Case Study</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "text-center mt-12 opacity-0 transform translate-y-4 transition-all duration-700 delay-500",
          inView && "opacity-100 transform-none"
        )}>
          <Button 
            className="btn-primary"
            onClick={() => scrollToContact()}
          >
            Browse All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
