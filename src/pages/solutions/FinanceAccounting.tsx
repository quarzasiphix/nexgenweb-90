
import React, { useEffect } from 'react';
import { DollarSign, LineChart, BarChart4 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const FinanceAccounting = () => {
  const { isChatOpen, openChat, closeChat } = useChat();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Finance & Accounting Solutions - NexGenWeb";
  }, []);

  const handlePricingClick = () => {
    toast({
      title: "Pricing Information",
      description: "Viewing pricing for Finance & Accounting Solutions.",
      duration: 3000,
    });
    navigate('/services?tab=ai');
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-brand-500/20 rounded-full">
                  <span className="text-brand-400 text-sm font-medium">Financial Intelligence</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  AI-Powered Finance & Accounting Solutions
                </h1>
                <p className="text-lg text-neutral-300 mb-8">
                  Transform your financial operations with intelligent automation that increases accuracy, 
                  reduces costs, and provides real-time insights for better decision-making.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={openChat}
                    size="lg"
                    className="bg-brand-500 hover:bg-brand-600 text-white"
                  >
                    Schedule a Demo
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={handlePricingClick}
                  >
                    View Pricing
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-neutral-800 border border-white/10 p-8 rounded-lg">
                  <DollarSign className="h-16 w-16 text-brand-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Financial Process Automation</h3>
                  <p className="text-neutral-300 mb-6">
                    Our clients typically reduce accounting costs by 40% while increasing accuracy to 99.9% with our AI-driven automation tools.
                  </p>
                  <ul className="space-y-3">
                    {["Automated invoice processing", "Smart expense management", "Financial reporting", "Audit preparation"].map((item, idx) => (
                      <li key={idx} className="flex items-center text-neutral-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <p className="text-white font-semibold mb-1">Included in Premium Package</p>
                    <p className="text-brand-400 text-xl font-bold">$299/month</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Our comprehensive finance and accounting solutions leverage AI to streamline operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-800 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Accounts Payable Automation</h3>
                <p className="text-neutral-300 mb-4">
                  Streamline invoice processing with AI that extracts, validates, and codes invoice data with minimal human intervention.
                </p>
                <ul className="space-y-2">
                  {["OCR data extraction", "Automatic matching", "Approval workflows", "Payment scheduling"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-800 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Financial Forecasting</h3>
                <p className="text-neutral-300 mb-4">
                  AI-powered predictive analytics for accurate cash flow forecasting and financial planning.
                </p>
                <ul className="space-y-2">
                  {["Cash flow prediction", "Scenario modeling", "Budget optimization", "Trend analysis"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-800 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart4 className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Financial Reporting</h3>
                <p className="text-neutral-300 mb-4">
                  Automated generation of financial reports with real-time data and customizable dashboards.
                </p>
                <ul className="space-y-2">
                  {["Real-time reporting", "Compliance automation", "Custom dashboards", "Data visualization"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 md:py-20">
            <div className="bg-gradient-to-r from-neutral-800 to-neutral-800/50 border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <h2 className="text-3xl font-bold text-white mb-6">Ready to modernize your finance department?</h2>
                  <p className="text-lg text-neutral-300 max-w-2xl">
                    Join industry leaders who have transformed their financial operations with our AI solutions
                  </p>
                  <p className="text-neutral-300 mt-2"><span className="font-semibold">Premium Package:</span> $299/month</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={handlePricingClick}
                    size="lg"
                    className="bg-brand-500 hover:bg-brand-600 text-white"
                  >
                    View Pricing
                  </Button>
                  <Button 
                    onClick={openChat}
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default FinanceAccounting;
