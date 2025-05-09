
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, Calendar } from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isChatOpen, closeChat } = useChat();
  
  // Extract data from location state
  const selectedService = location.state?.selectedService;
  const customerDetails = location.state?.customerDetails;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Confirmation - NexGenWeb";
    
    // If no data is available, redirect to home
    if (!selectedService || !customerDetails) {
      navigate('/');
    }
  }, [selectedService, customerDetails, navigate]);

  const handleGoHome = () => {
    navigate('/');
  };

  if (!selectedService || !customerDetails) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-28 pb-16 px-4 w-full max-w-full">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Thank You!</h1>
          <p className="text-xl text-neutral-300 mb-12 text-center">
            We've received your project requirements and will be in touch shortly.
          </p>
          
          <Card className="bg-neutral-800 border border-neutral-700 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Order Summary</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Selected Package</h3>
                  <div className="bg-neutral-700 p-4 rounded-lg">
                    <p className="text-white font-semibold">{selectedService.tier}</p>
                    <p className="text-neutral-400">{selectedService.service}</p>
                    <p className="text-lg font-bold text-[#9b87f5] mt-2">{selectedService.price}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Contact Information</h3>
                  <div className="bg-neutral-700 p-4 rounded-lg">
                    <p className="text-white">{customerDetails.name}</p>
                    <p className="text-neutral-400">{customerDetails.email}</p>
                    {customerDetails.phone && (
                      <p className="text-neutral-400">{customerDetails.phone}</p>
                    )}
                    {customerDetails.company && (
                      <p className="text-neutral-400">{customerDetails.company}</p>
                    )}
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-medium text-white mb-2">Project Details</h3>
              <div className="bg-neutral-700 p-4 rounded-lg mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-neutral-400 text-sm">Business Type</p>
                    <p className="text-white">{formatBusinessType(customerDetails.businessType)}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">Timeline</p>
                    <p className="text-white">{formatTimeline(customerDetails.timeline)}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">Budget</p>
                    <p className="text-white">{formatBudget(customerDetails.budget)}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-neutral-400 text-sm">Requirements</p>
                  <p className="text-white whitespace-pre-wrap">{customerDetails.requirements}</p>
                </div>
                
                {customerDetails.additionalInfo && (
                  <div className="mt-4">
                    <p className="text-neutral-400 text-sm">Additional Information</p>
                    <p className="text-white whitespace-pre-wrap">{customerDetails.additionalInfo}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-[#9b87f5]/10 border border-[#9b87f5]/30 rounded-lg p-6 mb-8">
            <div className="flex items-start mb-4">
              <Calendar className="h-6 w-6 text-[#9b87f5] mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-white text-lg">Next Steps</h3>
                <p className="text-neutral-300">
                  Our team will review your requirements and contact you within 1-2 business days to schedule an initial consultation.
                </p>
              </div>
            </div>
            
            <p className="text-neutral-400 mb-0">
              Reference ID: {generateReferenceId()}
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleGoHome}
              className="bg-white/10 hover:bg-white/20 text-white"
            >
              <Home className="mr-2 h-4 w-4" />
              Return to Homepage
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

// Helper functions to format form data for display
function formatBusinessType(type: string): string {
  const types: Record<string, string> = {
    retail: "Retail / E-commerce",
    tech: "Technology / SaaS",
    healthcare: "Healthcare",
    finance: "Finance / Banking",
    education: "Education",
    manufacturing: "Manufacturing",
    hospitality: "Hospitality / Travel",
    realestate: "Real Estate",
    nonprofit: "Non-profit",
    other: "Other"
  };
  return types[type] || type;
}

function formatTimeline(timeline: string): string {
  const timelines: Record<string, string> = {
    asap: "ASAP / Urgent",
    "1month": "Within 1 month",
    "3months": "1-3 months",
    "6months": "3-6 months",
    flexible: "Flexible"
  };
  return timelines[timeline] || timeline;
}

function formatBudget(budget: string): string {
  const budgets: Record<string, string> = {
    basic: "Standard Package",
    extra10: "Standard + 10% for additional features",
    extra25: "Standard + 25% for premium features",
    custom: "Custom budget (to be discussed)"
  };
  return budgets[budget] || budget;
}

function generateReferenceId(): string {
  return `ORDER-${Math.floor(100000 + Math.random() * 900000)}`;
}

export default ConfirmationPage;
