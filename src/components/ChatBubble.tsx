
import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useChat } from '@/context/ChatContext';

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

type ChatBubbleProps = {
  isOpen: boolean;
  onClose: () => void;
};

// Helper function to format text with markdown-style bold syntax
const formatText = (text: string) => {
  // Replace **text** with <strong>text</strong> for bold
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

// Generate a random session ID
const generateSessionId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const ChatBubble = ({ isOpen, onClose }: ChatBubbleProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      type: 'agent' as const, 
      content: "Hi there! 👋\n\n**BizWiz AI** here.\n\nWhat kind of services are you looking for?\n\nIf you're not sure, just tell me a bit about your business — I'll help you discover how we can support you."
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { openChat } = useChat();

  useEffect(() => {
    // Initialize session ID when component mounts
    const storedSessionId = localStorage.getItem('chatSessionId');
    if (storedSessionId) {
      setSessionId(storedSessionId);
    } else {
      const newSessionId = generateSessionId();
      setSessionId(newSessionId);
      localStorage.setItem('chatSessionId', newSessionId);
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || isLoading) return;
    
    // Add user message
    const newMessages = [...messages, { type: 'user' as const, content: inputMessage }];
    setMessages(newMessages);
    
    // Clear input and set loading state
    setInputMessage('');
    setIsLoading(true);
    
    try {
      // Send request to the webhook with session ID
      const response = await fetch('https://n8n.quarza.online/webhook/tover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          input: inputMessage,
          session: sessionId 
        }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      // Check if the response has the expected format
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
        { type: 'agent' as const, content: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us directly at bizwiz@services.com." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={openChat} 
        className="fixed bottom-6 right-6 bg-[#9b87f5] hover:bg-[#7E69AB] text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
        aria-label="Chat with BizWiz AI"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl z-50 w-80 sm:w-96 overflow-hidden animate-scale-in">
      <div className="flex items-center justify-between bg-[#9b87f5] p-4 text-white">
        <div className="flex items-center">
          <div className="relative w-6 h-6 mr-2">
            <div className="absolute inset-0 bg-white rounded-md"></div>
            <div className="absolute inset-0 bg-[#7E69AB] rounded-md rotate-45 scale-75"></div>
          </div>
          <h3 className="font-medium">BizWiz AI Assistant</h3>
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
            {message.type === 'agent' && (
              <div className="flex-shrink-0 mr-2 mt-1">
                <div className="relative w-6 h-6">
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
              <div className="relative w-6 h-6">
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

      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 bg-neutral-800 border-t border-white/10">
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
          size="icon"
          disabled={isLoading}
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default ChatBubble;
