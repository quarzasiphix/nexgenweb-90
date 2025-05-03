
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
      "flex rounded-lg overflow-hidden w-full",
      isLight 
        ? "bg-[#141824]/80 backdrop-blur-sm border border-[#222940]" 
        : "bg-[#141824]/80 backdrop-blur-sm border border-[#222940]",
      className
    )}>
      {options.map((option) => (
        <button
          key={option.id}
          className={cn(
            "px-4 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap flex-1",
            option.id === active 
              ? "bg-[#9b87f5] text-white" 
              : "text-gray-300 hover:bg-[#222940]/80"
          )}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
