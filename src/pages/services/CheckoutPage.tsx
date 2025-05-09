
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isChatOpen, closeChat } = useChat();
  
  // Extract the selected service details from location state
  const [selectedService, setSelectedService] = useState<{
    service: string;
    tier: string;
    price: string;
  } | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Checkout - NexGenWeb";
    
    if (location.state?.selectedService) {
      setSelectedService(location.state.selectedService);
    } else {
      // If no service is selected, redirect to pricing page
      navigate('/services/pricing');
      toast({
        title: "No service selected",
        description: "Please select a service package first.",
        variant: "destructive"
      });
    }
  }, [location.state, navigate, toast]);

  const handleBack = () => {
    navigate('/services/pricing');
  };

  const handleContinue = () => {
    if (selectedService) {
      navigate('/services/requirements-form', { 
        state: { selectedService } 
      });
    }
  };

  if (!selectedService) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-28 pb-16 px-4 w-full max-w-full">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-6 text-white hover:bg-white/10"
            onClick={handleBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Pricing
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Review Your Selection</h1>
          
          <div className="mb-12">
            <Card className="bg-neutral-800 border border-neutral-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Order Summary</h2>
                
                <div className="border-b border-neutral-700 pb-4 mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-white text-lg font-medium">{selectedService.tier}</h3>
                      <p className="text-neutral-400">{selectedService.service}</p>
                    </div>
                    <p className="text-xl font-bold text-white">{selectedService.price}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h3 className="text-lg font-medium text-white">Package Includes:</h3>
                  {getPackageFeatures(selectedService.service, selectedService.tier).map((feature, index) => (
                    <div key={index} className="flex items-start text-neutral-300">
                      <Check className="h-4 w-4 text-[#9b87f5] mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-neutral-700 pt-4 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-300">Total</span>
                    <span className="text-xl font-bold text-white">{selectedService.price}</span>
                  </div>
                  <p className="text-neutral-500 text-sm italic mb-6">
                    {selectedService.price.includes('/mo') 
                      ? 'Monthly subscription. Cancel anytime.'
                      : 'One-time payment for complete package.'}
                  </p>
                  
                  <Button 
                    className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                    onClick={handleContinue}
                  >
                    Continue to Requirements
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">What's Next?</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#9b87f5] text-white text-sm font-medium mr-3">1</span>
                <div>
                  <p className="text-white">Specify your project requirements</p>
                  <p className="text-neutral-400">Tell us your business needs so we can tailor our services</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#9b87f5] text-white text-sm font-medium mr-3">2</span>
                <div>
                  <p className="text-white">Complete your purchase</p>
                  <p className="text-neutral-400">Secure payment via our trusted payment provider</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#9b87f5] text-white text-sm font-medium mr-3">3</span>
                <div>
                  <p className="text-white">Initial consultation</p>
                  <p className="text-neutral-400">Our team will schedule a meeting to discuss your project in detail</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

// Helper function to return features based on the service and tier
function getPackageFeatures(service: string, tier: string): string[] {
  if (service === 'AI Solutions') {
    if (tier === 'AI Starter') {
      return [
        'AI Chatbot',
        'Basic Analytics',
        'Email Automation',
        '5 Workflow Automations',
        'Standard Support'
      ];
    } else if (tier === 'AI Professional') {
      return [
        'Advanced AI Chatbot',
        'Full Analytics Suite',
        'Marketing Automation',
        'Unlimited Workflows',
        'CRM Integration',
        'Priority Support'
      ];
    } else {
      return [
        'Custom AI Solutions',
        'Dedicated Account Manager',
        'API Access & Integration',
        'Custom Reporting',
        'On-premise Option',
        '24/7 Premium Support',
        'Training & Workshops'
      ];
    }
  } else if (service === 'Web Development') {
    if (tier === 'Web Basic') {
      return [
        '5-page Responsive Website',
        'Basic AI Chatbot',
        'Standard Hosting',
        'Basic SEO',
        '1 Year Maintenance',
        'Email Support'
      ];
    } else if (tier === 'Web Business') {
      return [
        '10-page Custom Website',
        'Advanced AI Features',
        'High-performance Hosting',
        'Advanced SEO & Analytics',
        'E-commerce Integration',
        '2 Years Maintenance',
        'Priority Support'
      ];
    } else {
      return [
        'Unlimited Pages',
        'Custom Web Application',
        'Advanced AI Integration',
        'Enterprise Hosting',
        'Full-stack Development',
        'Ongoing Maintenance',
        '24/7 Dedicated Support',
        'Security Audits'
      ];
    }
  } else {
    if (tier === 'Custom AI Integration') {
      return [
        'Bespoke AI Solutions',
        'Seamless Integration',
        'Custom API Development',
        'Data Preparation & Cleaning',
        'Expert Implementation',
        'Ongoing Support & Maintenance',
        'Performance Optimization'
      ];
    } else if (tier === 'AI-Powered Web') {
      return [
        'Real-time User Adaptation',
        'Personalized User Experiences',
        'Intelligent Search Functionality',
        'Content Recommendations',
        'Behavior Analysis',
        'Multi-platform Deployment',
        'Continuous Optimization'
      ];
    } else {
      return [
        'Organization-wide AI Governance',
        'Custom Knowledge Management',
        'Multi-department Workflows',
        'Security & Compliance',
        'Enterprise Data Integration',
        'Executive Dashboard',
        'Dedicated AI Team'
      ];
    }
  }
}

export default CheckoutPage;
