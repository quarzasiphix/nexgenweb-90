
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { WebServiceCard } from './WebServiceCard';
import { WebDevSection } from './types';

interface WebServicesSectionProps {
  webDevSection: WebDevSection;
  inView: boolean;
  onLearnMore: (serviceId: string, e: React.MouseEvent) => void;
  onGetConsultation: () => void;
}

export const WebServicesSection: React.FC<WebServicesSectionProps> = ({ 
  webDevSection, 
  inView,
  onLearnMore,
  onGetConsultation
}) => {
  const handleServiceClick = (serviceId: string, e: React.MouseEvent) => {
    e.preventDefault();
    onLearnMore(serviceId, e);
  };

  return (
    <div className={cn(
      "mt-20 opacity-0 transform translate-y-4 transition-all duration-500 delay-150",
      inView && "opacity-100 transform-none"
    )}>
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-neutral-900">
          Web Development & <span className="text-gradient">Hosting</span> Solutions
        </h3>
        <p className="max-w-2xl mx-auto text-lg text-neutral-600">
          {webDevSection.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {webDevSection.services.map((service, index) => (
          <WebServiceCard 
            key={index}
            service={service}
            inView={inView}
            index={index}
            onLearnMore={(e) => handleServiceClick(service.id, e)}
          />
        ))}
      </div>
      
      <div className="mt-10 p-6 border border-neutral-200 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h4 className="text-xl font-semibold mb-2 text-neutral-900">
              Ready for a cutting-edge web presence?
            </h4>
            <p className="text-neutral-700">
              Our experts build and host AI-optimized websites that drive business growth.
            </p>
          </div>
          <Button 
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              onGetConsultation();
            }}
            type="button"
          >
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};
