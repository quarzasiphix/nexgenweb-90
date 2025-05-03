
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
      "flex rounded-xl overflow-hidden w-full max-w-md mx-auto",
      isLight 
        ? "bg-white/10 backdrop-blur-sm" 
        : "bg-[#111827]/80 backdrop-blur-sm",
      className
    )}>
      {options.map((option) => (
        <button
          key={option.id}
          className={cn(
            "px-4 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap flex-1",
            option.id === active 
              ? isLight 
                ? "bg-white text-neutral-900" 
                : "bg-[#8A63F6] text-white" 
              : isLight 
                ? "text-white hover:bg-white/10" 
                : "text-gray-300 hover:text-white hover:bg-[#1E293B]/40"
          )}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
