
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import ChatBubble from '@/components/ChatBubble';
import { useChat } from '@/context/ChatContext';
import Contact from '@/components/Contact';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SolutionsPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isChatOpen, closeChat } = useChat();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Business Solutions - NexGenWeb";
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-28 pb-16 px-4 w-full max-w-full">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            className="text-white mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Business Solutions</h1>
          <p className="text-lg text-neutral-300 mb-12 max-w-3xl">
            Explore our complete range of business solutions designed to transform your operations
            with cutting-edge technology and AI integration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Solution categories will be displayed here */}
            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon!</h2>
              <p className="text-neutral-400 mb-6">
                We're currently expanding our solutions catalog. Please check back soon or contact us for more information.
              </p>
              <Button 
                onClick={() => navigate('/services')}
                className="w-full bg-[#9b87f5]"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default SolutionsPage;
