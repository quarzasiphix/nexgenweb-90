
import React, { useEffect } from 'react';
import { Blocks, Award, Globe, LightbulbIcon, Rocket, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "About Us - BizWiz";
  }, []);

  const coreServices = [
    {
      title: "AI Solutions",
      description: "Custom AI integrations that transform data into actionable insights and automate complex processes.",
      icon: <LightbulbIcon className="h-6 w-6 text-brand-400" />,
    },
    {
      title: "Web Development",
      description: "High-performance, responsive websites and applications built with cutting-edge technologies.",
      icon: <Blocks className="h-6 w-6 text-brand-400" />,
    },
    {
      title: "Business Intelligence",
      description: "Data analytics and visualization tools that help you make informed strategic decisions.",
      icon: <Rocket className="h-6 w-6 text-brand-400" />,
    }
  ];

  const keyDifferentiators = [
    "Tailored solutions designed for your specific business needs",
    "Technology-agnostic approach ensuring the best tools for each project",
    "Seamless integration with your existing systems and processes",
    "Dedicated support and maintenance to ensure long-term success",
    "Data-driven strategies based on measurable metrics and KPIs",
    "Industry-leading expertise in both AI and web technologies"
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">About BizWiz</h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                We transform businesses through cutting-edge AI solutions and web services.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <div className="space-y-4 text-neutral-300">
                  <p>
                    At BizWiz, our mission is to empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital landscape.
                  </p>
                  <p>
                    We believe in the transformative power of technology when it's properly aligned with business objectives. That's why we focus on creating custom solutions that address your specific challenges and opportunities.
                  </p>
                  <p>
                    With expertise spanning artificial intelligence, web development, and business intelligence, we serve as your comprehensive technology partner to navigate the complexities of digital transformation.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Business strategy meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-brand-500 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Core Services</h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                Comprehensive solutions designed to address your most pressing business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <div key={index} className="bg-neutral-700 p-6 rounded-lg hover:bg-neutral-600 transition-colors duration-300">
                  <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-neutral-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                className="bg-brand-500 hover:bg-brand-600 text-white"
                onClick={() => navigate('/services')}
              >
                Explore All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose BizWiz</h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                What sets us apart from other technology service providers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyDifferentiators.map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-neutral-800 border border-neutral-700 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-brand-400" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">95%</p>
                <p className="text-neutral-400">Client Satisfaction</p>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Blocks className="h-6 w-6 text-brand-400" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-neutral-400">Projects Completed</p>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-brand-400" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">20+</p>
                <p className="text-neutral-400">Countries Served</p>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-brand-400" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">30+</p>
                <p className="text-neutral-400">Technology Specialists</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button
                className="bg-brand-500 hover:bg-brand-600 text-white" 
                size="lg"
                onClick={() => window.location.href = 'mailto:bizwiz.work@gmail.com'}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
