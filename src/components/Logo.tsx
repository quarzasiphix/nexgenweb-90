
import React from 'react';
import { Link } from 'react-router-dom';

type LogoProps = {
  className?: string;
  linkClassName?: string;
  textClassName?: string;
  showText?: boolean;
  asLink?: boolean;
};

const Logo = ({ 
  className = "", 
  linkClassName = "", 
  textClassName = "font-semibold text-xl",
  showText = true,
  asLink = true 
}: LogoProps) => {
  const logoContent = (
    <>
      <div className={`relative w-8 h-8 ${className}`}>
        <div className="absolute inset-0 bg-[#9b87f5] rounded-md animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[#7E69AB] rounded-md rotate-45 scale-75 animate-rotate-slow"></div>
      </div>
      {showText && (
        <span className={textClassName}>
          NexGenWeb
        </span>
      )}
    </>
  );

  if (asLink) {
    return (
      <Link to="/" className={`flex items-center space-x-2 ${linkClassName}`}>
        {logoContent}
      </Link>
    );
  }

  return (
    <div className={`flex items-center space-x-2 ${linkClassName}`}>
      {logoContent}
    </div>
  );
};

export default Logo;
