import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-[#9b87f5] rounded-md animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-[#7E69AB] rounded-md rotate-45 scale-75 animate-rotate-slow"></div>
              </div>
              <span className="font-semibold text-xl">
                NexGenWeb
              </span>
            </div>
            <p className="text-neutral-400 mb-6">
              Leading provider of digital business solutions. Helping companies streamline operations and boost productivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#solutions" className="text-neutral-400 hover:text-white transition-colors">Customer Support AI</a></li>
              <li><a href="#solutions" className="text-neutral-400 hover:text-white transition-colors">Sales Automation</a></li>
              <li><a href="#solutions" className="text-neutral-400 hover:text-white transition-colors">Finance & Accounting</a></li>
              <li><a href="#solutions" className="text-neutral-400 hover:text-white transition-colors">HR & Recruitment</a></li>
              <li><a href="#solutions" className="text-neutral-400 hover:text-white transition-colors">IT & Security</a></li>
              <li><a href="#solutions" className="text-neutral-400 hover:text-white transition-colors">Data Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="text-neutral-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">API References</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Tutorials & Guides</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800 text-sm text-neutral-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} NexGenWeb. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-300 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
