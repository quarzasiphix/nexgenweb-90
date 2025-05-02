
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '@/context/ChatContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Globe, Server, Database } from 'lucide-react';

const CTASection = () => {
  const navigate = useNavigate();
  const { openChat } = useChat();
  const [activeTab, setActiveTab] = React.useState('web-development');

  const webDevServices = [
    {
      id: "full-stack-development",
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern frameworks and AI-assisted coding practices. We build scalable, performant applications that work flawlessly across devices and browsers, with clean code architecture that facilitates future expansion and maintenance.",
      icon: Code,
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: "e-commerce-solutions",
      title: "E-Commerce Solutions",
      description: "AI-powered online stores with smart product recommendations, dynamic pricing, and personalized shopping experiences. Our e-commerce platforms integrate seamlessly with inventory management systems and provide advanced analytics to optimize product offerings and maximize revenue.",
      icon: Globe,
      color: "from-purple-500 to-pink-400",
    },
    {
      id: "managed-cloud-hosting",
      title: "Managed Cloud Hosting",
      description: "Scalable, secure hosting infrastructure with automated backups, updates, and performance optimization. Our managed cloud services include 24/7 monitoring, proactive issue resolution, and regular security audits to ensure your applications remain available and protected.",
      icon: Server,
      color: "from-emerald-500 to-teal-400",
    },
    {
      id: "database-management",
      title: "Database Management",
      description: "AI-optimized database design, migration, and maintenance services for optimal performance and reliability. We implement efficient data structures, query optimization, and automated scaling to handle growing data volumes while maintaining fast response times and data integrity.",
      icon: Database,
      color: "from-amber-500 to-yellow-400",
    }
  ];

  return (
    <section className="fixed-bg-gradient py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Business <span className="text-[#1eaedb]">Solutions</span>
          </h2>
        </div>

        <Tabs 
          defaultValue="web-development" 
          className="w-full mb-10"
          onValueChange={setActiveTab}
          value={activeTab}
        >
          <div className="flex justify-center">
            <TabsList className="mb-8 bg-white/10 backdrop-blur-sm border border-white/20">
              <TabsTrigger value="ai-solutions">AI Solutions</TabsTrigger>
              <TabsTrigger value="web-development">Web Development</TabsTrigger>
              <TabsTrigger value="premium-services">Premium Services</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="web-development" className="mt-0 w-full">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Web Development & <span className="text-[#1eaedb]">Hosting</span> Solutions
              </h3>
              <p className="max-w-3xl mx-auto text-lg text-white/80 mb-8">
                Our comprehensive web solutions combine cutting-edge development with reliable 
                hosting services, all enhanced by AI technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {webDevServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${service.color}`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{service.title}</h4>
                  <p className="text-white/80 text-sm">{service.description}</p>
                  <div className="mt-4 flex gap-2">
                    <button className="text-xs px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full">Features</button>
                    <button className="text-xs px-3 py-1 bg-transparent border border-white/30 hover:bg-white/10 rounded-full">How It Works</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <Button 
                variant="white"
                size="lg"
                onClick={openChat}
                className="font-medium shadow-lg hover:shadow-xl transition-all duration-300 mr-4"
              >
                Chat With Us
              </Button>
              <Button 
                variant="outline-white" 
                size="lg"
                onClick={() => navigate('/contact')}
                className="font-medium bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="ai-solutions" className="mt-0 w-full">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">AI Solutions</h3>
              <p className="text-white/80">Our intelligent automation solutions streamline operations across every area of your business</p>
              <div className="mt-10 flex justify-center">
                <Button onClick={() => navigate('/services/ai')} variant="white">
                  View AI Solutions
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="premium-services" className="mt-0 w-full">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Premium Services</h3>
              <p className="text-white/80">Comprehensive AI solutions tailored to your business needs</p>
              <div className="mt-10 flex justify-center">
                <Button onClick={() => navigate('/services')} variant="white">
                  View Premium Services
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CTASection;
