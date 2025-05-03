
import React from 'react';
import { cn } from "@/lib/utils";

interface TabOption {
  id: string;
  label: string;
}

interface TabSelectorProps {
  options: TabOption[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: 'dark' | 'light';
}

export const TabSelector = ({
  options,
  active,
  onChange,
  className,
  variant = 'dark'
}: TabSelectorProps) => {
  const isLight = variant === 'light';
  
  return (
    <div className={cn(
      "flex p-1 rounded-lg overflow-hidden w-full max-w-md mx-auto",
      isLight 
        ? "bg-white/10 backdrop-blur-sm" 
        : "bg-[#1A1F2C]",
      className
    )}>
      {options.map((option) => (
        <button
          key={option.id}
          className={cn(
            "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap flex-1",
            option.id === active 
              ? isLight 
                ? "bg-white text-neutral-900" 
                : "bg-[#9b87f5] text-white"
              : isLight 
                ? "text-white hover:bg-white/10" 
                : "text-neutral-300 hover:bg-[#282d3a]"
          )}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
