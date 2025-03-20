
import React, { useEffect } from 'react';
import { Globe, Server, Code, Database, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';

const WebServices = () => {
  useEffect(() => {
    document.title = "Web Services - tovernet.nl";
  }, []);

  const services = [
    {
      title: "Web Development",
      icon: Code,
      description: "Custom web solutions tailored to your business needs.",
      features: [
        "Custom business websites",
        "E-commerce platforms",
        "Web applications",
        "Progressive Web Apps (PWAs)",
        "API development"
      ]
    },
    {
      title: "Cloud Hosting",
      icon: Server,
      description: "Reliable and scalable hosting solutions.",
      features: [
        "High-performance servers",
        "99.9% uptime guarantee",
        "Automated backups",
        "CDN integration",
        "24/7 monitoring"
      ]
    },
    {
      title: "Technical Services",
      icon: Database,
      description: "Comprehensive technical solutions for your web presence.",
      features: [
        "Database management",
        "System integration",
        "Performance optimization",
        "API development",
        "Technical consulting"
      ]
    },
    {
      title: "Web Security",
      icon: Shield,
      description: "Protect your web assets with advanced security measures.",
      features: [
        "SSL implementation",
        "Security audits",
        "DDoS protection",
        "Regular updates",
        "Compliance monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">Web Services</h1>
          <p className="text-lg text-neutral-300 mb-12 max-w-3xl">
            Professional web development and hosting solutions designed to give your business 
            a powerful online presence with top-tier performance and security.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-brand-500/20 mr-3">
                      <service.icon className="h-6 w-6 text-brand-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                  </div>
                  <p className="text-neutral-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-neutral-400">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-brand-500 hover:bg-brand-600 text-white"
                    onClick={() => window.location.href = 'mailto:tovernet.nl@services.com'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WebServices;
