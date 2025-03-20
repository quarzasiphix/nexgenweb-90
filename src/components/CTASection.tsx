
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight, Globe, Server } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const CTASection = () => {
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

  const benefits = [
    "AI-powered business process automation",
    "24/7 customer support with intelligent chatbots",
    "Data-driven insights and analytics",
    "Customized solutions for your specific needs",
    "Seamless integration with existing systems"
  ];

  const hostingBenefits = [
    "Custom-built websites with AI-driven features",
    "High-performance cloud hosting with 99.9% uptime",
    "Managed security and automatic updates",
    "Scalable infrastructure that grows with your business",
    "24/7 technical support and monitoring"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-800 text-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={cn(
              "text-3xl sm:text-4xl font-bold mb-6 opacity-0 transform translate-y-4 transition-all duration-700",
              inView && "opacity-100 transform-none"
            )}>
              Ready to Transform Your Business with AI?
            </h2>
            <p className={cn(
              "text-lg text-white/90 mb-8 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
              inView && "opacity-100 transform-none"
            )}>
              Join hundreds of forward-thinking companies that have already streamlined their operations, 
              increased productivity, and boosted growth with our AI-powered automation solutions.
            </p>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className={cn(
                    "flex items-start opacity-0 transform translate-y-4 transition-all",
                    inView && "opacity-100 transform-none"
                  )}
                  style={{ transitionDuration: '700ms', transitionDelay: `${150 + (index * 50)}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-brand-300 flex-shrink-0 mt-0.5 mr-3" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 opacity-0 transform translate-y-4 transition-all duration-700 delay-500",
              inView && "opacity-100 transform-none"
            )}>
              <Button 
                className="bg-white text-brand-700 hover:bg-gray-100 font-medium btn-primary"
                size="lg"
                onClick={() => scrollToContact()}
              >
                <span>Start Free Trial</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border border-white text-white hover:bg-white/10"
                size="lg"
                onClick={() => scrollToContact()}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className={cn(
            "relative opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
            inView && "opacity-100 transform-none"
          )}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Choose Your Plan</h3>
                <p className="text-white/80">Select the package that works best for your business</p>
              </div>
              
              <div className="space-y-5">
                {[
                  { 
                    title: "Starter", 
                    price: "$499", 
                    description: "Perfect for small businesses",
                    features: ["AI Chatbot", "Basic Analytics", "Email Automation", "5 Workflow Automations"] 
                  },
                  { 
                    title: "Professional", 
                    price: "$999", 
                    description: "Most popular for growing teams",
                    features: ["Advanced AI Chatbot", "Full Analytics Suite", "Marketing Automation", "Unlimited Workflows", "Priority Support"] 
                  },
                  { 
                    title: "Enterprise", 
                    price: "Custom", 
                    description: "For large organizations",
                    features: ["Custom AI Solutions", "Dedicated Account Manager", "Integration Services", "Custom Reporting", "24/7 Premium Support"] 
                  }
                ].map((plan, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{plan.title}</h4>
                      <span className="font-bold">{plan.price}</span>
                    </div>
                    <p className="text-sm text-white/70 mb-3">{plan.description}</p>
                    <ul className="text-sm space-y-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full mt-6 bg-white text-brand-700 hover:bg-gray-100"
                onClick={() => scrollToContact()}
              >
                Compare All Plans
              </Button>
            </div>
          </div>
        </div>
        
        {/* Web Development & Hosting CTA Section */}
        <div className={cn(
          "mt-20 pt-16 border-t border-white/20 opacity-0 transform translate-y-4 transition-all duration-700 delay-600",
          inView && "opacity-100 transform-none"
        )}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Server className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold">Web & Hosting Packages</h4>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      name: "Business Starter",
                      price: "$899",
                      features: [
                        "5-page responsive website",
                        "AI-powered chatbot",
                        "Standard hosting package",
                        "Basic SEO optimization",
                        "1 year of maintenance"
                      ]
                    },
                    {
                      name: "Business Pro",
                      price: "$1,999",
                      features: [
                        "10-page responsive website",
                        "Custom AI features",
                        "High-performance hosting",
                        "Advanced SEO & analytics",
                        "2 years of maintenance",
                        "Monthly performance reports"
                      ]
                    }
                  ].map((pkg, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-semibold">{pkg.name}</h5>
                        <span className="font-bold">{pkg.price}</span>
                      </div>
                      <ul className="text-sm space-y-1 mt-3">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full mt-4 bg-white text-brand-700 hover:bg-gray-100"
                  onClick={() => scrollToContact()}
                >
                  Get a Custom Quote
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                All-in-One Web Development & Hosting Solutions
              </h3>
              <p className="text-lg text-white/90 mb-8">
                Get a professional, AI-enhanced website built by experts and hosted on our 
                secure, high-performance infrastructure — all in one package.
              </p>
              
              <ul className="space-y-3 mb-8">
                {hostingBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-300 flex-shrink-0 mt-0.5 mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="bg-transparent border border-white text-white hover:bg-white/10"
                size="lg"
                onClick={() => scrollToContact()}
              >
                <span>Learn About Our Web Services</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
