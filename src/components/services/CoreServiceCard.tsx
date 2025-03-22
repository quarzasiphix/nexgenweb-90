
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Service } from './types';

interface CoreServiceCardProps {
  service: Service;
  inView: boolean;
  index: number;
  onLearnMore: (e: React.MouseEvent) => void;
}

export const CoreServiceCard: React.FC<CoreServiceCardProps> = ({ 
  service, 
  inView, 
  index, 
  onLearnMore 
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl border border-neutral-200 p-6 transition-all duration-150 opacity-0 transform translate-y-4 hover:shadow-lg flex flex-col h-full",
        inView && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 25}ms` }}
    >
      <div className={`w-12 h-12 rounded-full mb-5 flex items-center justify-center ${service.color}`}>
        <service.icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-neutral-800">{service.title}</h3>
      <p className="text-neutral-600 mb-4">{service.description}</p>
      
      <ul className="text-neutral-600 mb-6 space-y-2 flex-grow">
        {service.bulletPoints.map((point, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-sm mr-2 mt-1">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Button
          variant="link"
          className="text-[#9b87f5] p-0 hover:text-[#7E69AB] flex items-center"
          onClick={onLearnMore}
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
