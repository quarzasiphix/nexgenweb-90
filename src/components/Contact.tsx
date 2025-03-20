
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll be in touch soon.",
      duration: 5000,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 opacity-0 transform translate-y-4 transition-all duration-700",
            inView && "opacity-100 transform-none"
          )}>
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-neutral-600 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
            inView && "opacity-100 transform-none"
          )}>
            Ready to transform your business with AI-powered automation? 
            Contact us today for a personalized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={cn(
            "bg-neutral-50 p-8 rounded-xl shadow-sm opacity-0 transform translate-y-8 transition-all duration-500",
            inView && "opacity-100 translate-y-0"
          )}>
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                  Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="chatbots">AI Chatbots</option>
                  <option value="sales">Sales Automation</option>
                  <option value="marketing">Marketing Automation</option>
                  <option value="finance">Finance Automation</option>
                  <option value="hr">HR Solutions</option>
                  <option value="analytics">Data Analytics</option>
                  <option value="custom">Custom AI Integration</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full group"
              >
                <span>Send Message</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          <div className={cn(
            "lg:pl-8 opacity-0 transform translate-y-8 transition-all duration-500 delay-200",
            inView && "opacity-100 translate-y-0"
          )}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-brand-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-neutral-900">Phone</h4>
                  <p className="text-neutral-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-brand-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-neutral-900">Email</h4>
                  <p className="text-neutral-600">contact@smartbizai.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-brand-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-neutral-900">Office</h4>
                  <p className="text-neutral-600">
                    123 AI Innovation Tower<br />
                    San Francisco, CA 94103<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold mb-3">Business Hours</h4>
              <div className="space-y-2 text-neutral-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
