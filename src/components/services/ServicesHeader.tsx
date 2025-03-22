
import React from 'react';
import { cn } from '@/lib/utils';

interface ServicesHeaderProps {
  inView: boolean;
}

export const ServicesHeader: React.FC<ServicesHeaderProps> = ({ inView }) => {
  return (
    <div className="text-center mb-16">
      <h2 className={cn(
        "text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 opacity-0 transform translate-y-4 transition-all duration-250",
        inView && "opacity-100 transform-none"
      )}>
        Our Premium <span className="text-gradient">Services</span>
      </h2>
      <p className={cn(
        "max-w-2xl mx-auto text-lg text-neutral-600 opacity-0 transform translate-y-4 transition-all duration-250 delay-25",
        inView && "opacity-100 transform-none"
      )}>
        Comprehensive AI solutions tailored to your business needs, 
        delivered by experts in automation and artificial intelligence.
      </p>
    </div>
  );
};
