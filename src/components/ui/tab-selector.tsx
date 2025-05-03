
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
      "flex rounded-xl overflow-hidden w-full",
      isLight 
        ? "bg-white/20 backdrop-blur-sm border border-white/30" 
        : "bg-[#1A1F2C] backdrop-blur-sm border border-[#2A2F3C]",
      className
    )}>
      {options.map((option) => (
        <button
          key={option.id}
          className={cn(
            "px-3 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap flex-1",
            option.id === active 
              ? isLight 
                ? "bg-white text-neutral-900" 
                : "bg-[#9b87f5] text-white" 
              : isLight 
                ? "text-white hover:bg-white/20" 
                : "text-gray-300 hover:text-white hover:bg-[#2A2F3C]"
          )}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
