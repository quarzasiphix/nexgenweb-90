
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, ArrowRight } from 'lucide-react';
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
    <section id="contact" className="py-20 bg-neutral-900 text-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-bold mb-4 text-white opacity-0 transform translate-y-4 transition-all duration-700",
            inView && "opacity-100 transform-none"
          )}>
            Get in <span className="text-gradient bg-gradient-to-r from-brand-400 to-purple-400">Touch</span>
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto text-lg text-neutral-300 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
            inView && "opacity-100 transform-none"
          )}>
            Ready to transform your business with our solutions? 
            Contact us today for more information.
          </p>
        </div>

        <div className="flex justify-center items-center mb-12">
          <div className={cn(
            "flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 opacity-0 transform translate-y-8 transition-all duration-500",
            inView && "opacity-100 translate-y-0"
          )}>
            <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center mr-4">
              <Mail className="h-6 w-6 text-brand-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-1">Email Us</h3>
              <p className="text-brand-400">tovernet.nl@services.com</p>
            </div>
          </div>
        </div>

        <div className={cn(
          "max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-sm opacity-0 transform translate-y-8 transition-all duration-500 delay-100",
          inView && "opacity-100 translate-y-0"
        )}>
          <h3 className="text-2xl font-semibold mb-6 text-white">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
              
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-white"
                placeholder="How can we help you?"
              />
            </div>
              
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-white"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>
              
            <Button 
              type="submit" 
              className="bg-brand-500 hover:bg-brand-600 text-white group w-full"
            >
              <span>Send Message</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
