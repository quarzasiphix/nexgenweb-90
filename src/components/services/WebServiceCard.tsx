
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { WebService } from './types';

interface WebServiceCardProps {
  service: WebService;
  inView: boolean;
  index: number;
  onLearnMore: (e: React.MouseEvent) => void;
}

export const WebServiceCard: React.FC<WebServiceCardProps> = ({ 
  service, 
  inView, 
  index, 
  onLearnMore 
}) => {
  return (
    <Card 
      className={`border border-neutral-200 shadow-sm hover:shadow-md transition-all opacity-0 transform translate-y-8 ${
        inView ? "opacity-100 translate-y-0" : ""
      }`}
      style={{ transitionDelay: `${400 + (index * 100)}ms` }}
    >
      <CardContent className="p-6 flex flex-col sm:flex-row items-start gap-4 h-full">
        <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center ${service.color}`}>
          <service.icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col w-full h-full">
          <h4 className="text-lg font-semibold mb-2 text-neutral-800">{service.title}</h4>
          <p className="text-neutral-600 mb-4">{service.description}</p>
          
          <div className="mt-auto pt-2">
            <Button
              variant="link"
              className="text-[#9b87f5] p-0 hover:text-[#7E69AB] flex items-center"
              onClick={onLearnMore}
              data-service-id={service.id}
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
