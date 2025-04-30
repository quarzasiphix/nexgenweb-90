import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, ArrowRight, Bot, Send } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';

const formatText = (text: string) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [showAIAgent, setShowAIAgent] = useState(false);
  const [messages, setMessages] = useState<{type: 'user' | 'agent', content: string}[]>([
    { 
      type: 'agent' as const, 
      content: "Hi there! 👋\n\nI'm the BizWiz AI Assistant.\n\nWhat kind of services are you looking for?\n\nIf you're not sure, just tell me a bit about your business — I'll help you discover how we can support you."
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  
  // Define a consistent contact email to use throughout the component
  const contactEmail = "nexgenweb@example.com";

  useEffect(() => {
    emailjs.init("ArDqM6v2Ny3InyvoQ");
  }, []);

  useEffect(() => {
    const storedSessionId = localStorage.getItem('contactChatSessionId');
    if (storedSessionId) {
      setSessionId(storedSessionId);
    } else {
      const newSessionId = uuidv4();
      setSessionId(newSessionId);
      localStorage.setItem('contactChatSessionId', newSessionId);
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Form Incomplete",
        description: "Please fill in all form fields.",
        variant: "destructive",
      });
      return;
    }
    
    setFormSubmitting(true);
    
    try {
      const templateParams = {
        customer_name: formData.name,
        customer_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        current_date: new Date().toLocaleDateString(),
      };

      await emailjs.send(
        'service_gmail',
        'template_pd1oxvn',
        templateParams,
        'ArDqM6v2Ny3InyvoQ'
      );
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll be in touch soon.",
        duration: 5000,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  const handleAIConversation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || isLoading) return;
    
    const newMessages = [...messages, { type: 'user' as const, content: inputMessage }];
    setMessages(newMessages);
    
    setInputMessage('');
    setIsLoading(true);
    
    try {
      const response = await fetch('https://n8n.quarza.online/webhook/tover', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          input: inputMessage,
          ai: "BizWiz",
          sessionId: sessionId
        }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      if (Array.isArray(data) && data.length > 0 && data[0].output) {
        setMessages([
          ...newMessages, 
          { type: 'agent' as const, content: data[0].output }
        ]);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([
        ...newMessages,
        { type: 'agent' as const, content: `I'm sorry, I'm having trouble connecting right now. Please try again later or contact us directly at ${contactEmail}.` }
      ]);
    } finally {
      setIsLoading(false);
    }
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
              <p className="text-brand-400">{contactEmail}</p>
            </div>
          </div>
        </div>

        {!showAIAgent ? (
          <div className={cn(
            "max-w-2xl mx-auto text-center opacity-0 transform translate-y-8 transition-all duration-500 delay-100",
            inView && "opacity-100 translate-y-0"
          )}>
            <Button 
              onClick={() => setShowAIAgent(true)}
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 rounded-xl font-medium text-lg flex items-center mx-auto"
            >
              <Bot className="mr-2 h-5 w-5" />
              Talk to Our AI Assistant
            </Button>
            <p className="mt-4 text-neutral-400 text-sm">
              Our AI assistant will help identify your needs and schedule an appointment with our experts
            </p>
          </div>
        ) : (
          <div className={cn(
            "max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-sm opacity-0 transform translate-y-8 transition-all duration-500 delay-100",
            inView && "opacity-100 translate-y-0"
          )}>
            <div className="flex items-center mb-4">
              <div className="relative w-6 h-6 mr-2">
                <div className="absolute inset-0 bg-[#9b87f5] rounded-md"></div>
                <div className="absolute inset-0 bg-[#7E69AB] rounded-md rotate-45 scale-75"></div>
              </div>
              <h3 className="text-xl font-semibold text-white">BizWiz AI Assistant</h3>
            </div>
            
            <div className="h-80 overflow-y-auto mb-4 pr-2 space-y-4 custom-scrollbar">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'agent' && (
                    <div className="flex-shrink-0 mr-2 mt-1">
                      <div className="relative w-6 h-6 animate-rotate-slow">
                        <div className="absolute inset-0 bg-[#9b87f5] rounded-md"></div>
                        <div className="absolute inset-0 bg-[#7E69AB] rounded-md rotate-45 scale-75"></div>
                      </div>
                    </div>
                  )}
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-lg whitespace-pre-wrap",
                    message.type === 'user' 
                      ? "bg-[#9b87f5]/20 text-white" 
                      : "bg-white/10 text-neutral-100"
                  )}>
                    {message.type === 'agent' && (
                      <div className="font-semibold text-[#9b87f5] mb-1">BizWiz AI</div>
                    )}
                    <div dangerouslySetInnerHTML={{ __html: formatText(message.content) }} />
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex-shrink-0 mr-2 mt-1">
                    <div className="relative w-6 h-6 animate-rotate-slow">
                      <div className="absolute inset-0 bg-[#9b87f5] rounded-md"></div>
                      <div className="absolute inset-0 bg-[#7E69AB] rounded-md rotate-45 scale-75"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 text-neutral-100 p-3 rounded-lg flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#9b87f5] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-[#9b87f5] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-[#9b87f5] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={handleAIConversation} className="flex items-center gap-2">
              <Input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:ring-[#9b87f5] focus:border-[#9b87f5]"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                disabled={isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        )}

        <div className={cn(
          "max-w-2xl mx-auto mt-12 text-center opacity-0 transform translate-y-8 transition-all duration-500 delay-200",
          inView && "opacity-100 translate-y-0"
        )}>
          <p className="text-neutral-400">
            Or fill out our traditional contact form
          </p>
          <Button 
            onClick={() => setShowAIAgent(false)}
            variant="link" 
            className="text-[#9b87f5] hover:text-[#7E69AB]"
          >
            Show contact form
          </Button>
        </div>

        {!showAIAgent && (
          <div className={cn(
            "max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-sm opacity-0 transform translate-y-8 transition-all duration-500 delay-100 mt-6",
            inView && "opacity-100 translate-y-0"
          )}>
            <h3 className="text-2xl font-semibold mb-6 text-white">Send us a message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
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
                    value={formData.email}
                    onChange={handleFormChange}
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
                  value={formData.subject}
                  onChange={handleFormChange}
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
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-white"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
                
              <Button 
                type="submit" 
                className="bg-brand-500 hover:bg-brand-600 text-white group w-full"
                disabled={formSubmitting}
              >
                <span>{formSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!formSubmitting && (
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
