
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, ArrowRight, Bot, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [showAIAgent, setShowAIAgent] = useState(false);
  const [messages, setMessages] = useState<{type: 'user' | 'agent', content: string}[]>([
    { type: 'agent', content: 'Hi there! I\'m your BizWiz AI assistant. I\'d love to learn more about your business needs so we can schedule an appointment with our experts. What type of services are you interested in?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    businessType: '',
    needsAssessed: false
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll be in touch soon.",
      duration: 5000,
    });
  };

  const handleAIConversation = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { type: 'user', content: inputMessage }];
    setMessages(newMessages);
    setInputMessage('');
    
    // Simulate AI response based on conversation state
    setTimeout(() => {
      let aiResponse = '';
      const lastUserMessage = inputMessage.toLowerCase();
      
      if (!userInfo.businessType) {
        // First we ask about their business type
        setUserInfo({...userInfo, businessType: inputMessage});
        aiResponse = `Thanks for sharing that about your ${inputMessage} business! What specific challenges are you facing that you hope we can help with?`;
      } 
      else if (!userInfo.needsAssessed) {
        // Then assess their needs
        setUserInfo({...userInfo, needsAssessed: true});
        aiResponse = "Thank you for sharing those details. It sounds like we might be able to help you. Could you please provide your name and email so we can schedule a consultation with one of our business solutions experts?";
      }
      else if (!userInfo.name || !userInfo.email) {
        // Get contact information
        const containsEmail = lastUserMessage.includes('@');
        if (containsEmail) {
          const emailMatch = inputMessage.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
          const nameMatch = inputMessage.replace(emailMatch?.[0] || '', '').trim();
          
          setUserInfo({
            ...userInfo, 
            email: emailMatch?.[0] || '',
            name: nameMatch || userInfo.name
          });
          
          aiResponse = `Perfect! ${nameMatch ? `Nice to meet you, ${nameMatch}` : 'Thanks'}. I've scheduled a consultation for you. One of our business experts will contact you at ${emailMatch?.[0]} within 24 hours to discuss how we can help your business. Is there anything else you'd like to know about our services in the meantime?`;
        } else {
          setUserInfo({...userInfo, name: inputMessage});
          aiResponse = "Great! Now, could you please provide your email address so we can get in touch?";
        }
      } else {
        // General responses for follow-up questions
        if (lastUserMessage.includes('price') || lastUserMessage.includes('cost') || lastUserMessage.includes('expensive')) {
          aiResponse = "Our pricing is customized based on your specific needs and project scope. Our expert will discuss pricing options during your consultation.";
        } else if (lastUserMessage.includes('time') || lastUserMessage.includes('long') || lastUserMessage.includes('when')) {
          aiResponse = "Timelines vary based on project complexity. Our expert will provide a detailed timeline during your consultation based on your specific requirements.";
        } else if (lastUserMessage.includes('thank') || lastUserMessage.includes('bye') || lastUserMessage.includes('see you')) {
          aiResponse = "You're welcome! We look forward to speaking with you soon. Have a great day!";
        } else {
          aiResponse = "That's a great question. Our business solutions expert will be able to provide more specific information during your consultation. Is there anything else you'd like to know?";
        }
      }
      
      setMessages([...newMessages, { type: 'agent', content: aiResponse }]);
    }, 1000);
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
              <p className="text-brand-400">bizwiz.work@services.com</p>
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
              <Bot className="h-6 w-6 text-[#9b87f5] mr-2" />
              <h3 className="text-xl font-semibold text-white">BizWiz AI Assistant</h3>
            </div>
            
            <div className="h-80 overflow-y-auto mb-4 pr-2 space-y-4 custom-scrollbar">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-lg",
                    message.type === 'user' 
                      ? "bg-[#9b87f5]/20 text-white" 
                      : "bg-white/10 text-neutral-100"
                  )}>
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleAIConversation} className="flex items-center gap-2">
              <Input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:ring-[#9b87f5] focus:border-[#9b87f5]"
              />
              <Button 
                type="submit" 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
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
        )}
      </div>
    </section>
  );
};

export default Contact;
