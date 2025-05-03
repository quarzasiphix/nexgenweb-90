
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
        : "bg-neutral-800/90 backdrop-blur-sm",
      className
    )}>
      {options.map((option) => (
        <button
          key={option.id}
          className={cn(
            "px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap flex-1",
            option.id === active 
              ? isLight 
                ? "bg-white text-neutral-900" 
                : "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md"
              : isLight 
                ? "text-white hover:bg-white/20" 
                : "text-neutral-300 hover:bg-white/10"
          )}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
