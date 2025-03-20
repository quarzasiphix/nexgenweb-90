
import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Message = {
  type: 'user' | 'agent';
  content: string;
};

type UserInfo = {
  name: string;
  email: string;
  businessType: string;
  needsAssessed: boolean;
};

export const useChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen(prev => !prev);

  return {
    isOpen,
    openChat,
    closeChat,
    toggleChat
  };
};

type ChatBubbleProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ChatBubble = ({ isOpen, onClose }: ChatBubbleProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'agent' as const, content: "Hi there! I'm your ToverNet AI assistant. I'd love to learn more about your business needs so we can schedule an appointment with our experts. What type of services are you interested in?" },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    businessType: '',
    needsAssessed: false
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { type: 'user' as const, content: inputMessage }];
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
      
      setMessages([...newMessages, { type: 'agent' as const, content: aiResponse }]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={onClose} 
        className="fixed bottom-6 right-6 bg-[#9b87f5] hover:bg-[#7E69AB] text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
        aria-label="Chat with ToverNet AI"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl z-50 w-80 sm:w-96 overflow-hidden animate-scale-in">
      <div className="flex items-center justify-between bg-[#9b87f5] p-4 text-white">
        <div className="flex items-center">
          <Bot className="h-5 w-5 mr-2" />
          <h3 className="font-medium">ToverNet AI Assistant</h3>
        </div>
        <button 
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-4 bg-neutral-900">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={cn(
              "flex",
              message.type === 'user' ? "justify-end" : "justify-start"
            )}
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
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 bg-neutral-800 border-t border-white/10">
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
          size="icon"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default ChatBubble;
