import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useChat } from '@/context/ChatContext';
import Logo from './Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { openChat } = useChat();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services', hasDropdown: true, dropdownItems: [
      { name: 'All Services', href: '/services/all' },
      { name: 'Pricing', href: '/services/pricing' },
    ]},
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname === '/') {
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          if (mobileMenuOpen) setMobileMenuOpen(false);
          return;
        }
      }
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(href.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(href);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 w-full',
        isScrolled 
          ? 'bg-neutral-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo 
          textClassName={cn(
            "font-semibold text-xl transition-colors duration-300",
            isScrolled ? "text-white" : "text-white"
          )}
        />

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className={cn(
                  "flex items-center text-sm font-medium transition-colors duration-300 hover:text-[#D6BCFA] focus:outline-none",
                  isScrolled ? "text-neutral-300" : "text-white"
                )}>
                  {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-neutral-800 border-neutral-700 z-50">
                  {link.dropdownItems?.map((item) => (
                    <DropdownMenuItem 
                      key={item.name}
                      className="text-sm text-neutral-300 hover:text-[#D6BCFA] cursor-pointer"
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-[#D6BCFA]",
                  isScrolled ? "text-neutral-300" : "text-white"
                )}
              >
                {link.name}
              </button>
            )
          ))}
          <Button 
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
            onClick={openChat}
          >
            Contact Us
          </Button>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-900 border-b border-neutral-800 shadow-lg animate-fade-in z-40">
          <div className="py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} className="space-y-2">
                  <div className="text-neutral-300 font-medium">{link.name}</div>
                  <div className="pl-4 space-y-2">
                    {link.dropdownItems?.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className="block py-2 text-neutral-400 hover:text-[#D6BCFA] w-full text-left"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className="block py-2 text-neutral-300 hover:text-[#D6BCFA] w-full text-left"
                >
                  {link.name}
                </button>
              )
            ))}
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white w-full"
              onClick={openChat}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
