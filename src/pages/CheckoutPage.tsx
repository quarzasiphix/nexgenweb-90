
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { captureEvent } = useAnalytics();
  const [loading, setLoading] = useState(false);
  
  const searchParams = new URLSearchParams(location.search);
  const selectedPlan = searchParams.get('plan');
  const planType = searchParams.get('type');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  useEffect(() => {
    // Set page title
    document.title = "Checkout - NexGenWeb";
    
    // Track page view
    captureEvent('page_view', { page: 'checkout', plan: selectedPlan, type: planType });
    
    // If no plan is selected, redirect to home
    if (!selectedPlan) {
      navigate('/');
      toast({
        title: "No plan selected",
        description: "Please select a plan before proceeding to checkout.",
        variant: "destructive"
      });
    }
  }, [selectedPlan, navigate, toast, captureEvent, planType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const { firstName, lastName, email, cardNumber } = formData;
    if (!firstName || !lastName || !email || !cardNumber) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    // Track checkout attempt
    captureEvent('checkout_submitted', { 
      plan: selectedPlan, 
      type: planType,
      hasCompanyInfo: !!formData.company 
    });
    
    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Order received!",
        description: "Thank you for your purchase. We'll be in touch shortly.",
      });
      
      // Track successful checkout
      captureEvent('checkout_completed', { 
        plan: selectedPlan, 
        type: planType 
      });
      
      // Redirect to home page after successful checkout
      setTimeout(() => navigate('/'), 2000);
    }, 2000);
  };

  const getPlanDetails = () => {
    if (planType === 'ai') {
      if (selectedPlan === 'Starter') {
        return { price: '$499', description: 'Perfect for small businesses' };
      } else if (selectedPlan === 'Professional') {
        return { price: '$999', description: 'Most popular for growing teams' };
      } else if (selectedPlan === 'Enterprise') {
        return { price: 'Custom', description: 'For large organizations' };
      }
    } else if (planType === 'web') {
      if (selectedPlan === 'Business Starter') {
        return { price: '$899', description: '5-page responsive website with AI chatbot' };
      } else if (selectedPlan === 'Business Pro') {
        return { price: '$1,999', description: '10-page website with advanced features' };
      }
    }
    
    return { price: 'N/A', description: 'Plan details not available' };
  };

  const planDetails = getPlanDetails();

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col">
      <Header />
      
      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Complete Your Purchase</h1>
          <p className="text-lg text-gray-300">You're just a few steps away from transforming your business</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card className="border border-gray-800 bg-neutral-800/50 text-white">
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription className="text-gray-300">
                  All transactions are secure and encrypted
                </CardDescription>
              </CardHeader>
              
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-200">
                        First Name*
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="w-full rounded-md border border-gray-600 bg-neutral-700 px-4 py-2 text-white focus:border-brand-500 focus:outline-none"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-200">
                        Last Name*
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="w-full rounded-md border border-gray-600 bg-neutral-700 px-4 py-2 text-white focus:border-brand-500 focus:outline-none"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-200">
                      Email Address*
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full rounded-md border border-gray-600 bg-neutral-700 px-4 py-2 text-white focus:border-brand-500 focus:outline-none"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-200">
                      Company (Optional)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full rounded-md border border-gray-600 bg-neutral-700 px-4 py-2 text-white focus:border-brand-500 focus:outline-none"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Payment Details</h3>
                    
                    <div className="space-y-2">
                      <label htmlFor="cardNumber" className="text-sm font-medium text-gray-200">
                        Card Number*
                      </label>
                      <input
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full rounded-md border border-gray-600 bg-neutral-700 px-4 py-2 text-white focus:border-brand-500 focus:outline-none"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="expiry" className="text-sm font-medium text-gray-200">
                          Expiry Date*
                        </label>
                        <input
                          id="expiry"
                          name="expiry"
                          type="text"
                          placeholder="MM/YY"
                          className="w-full rounded-md border border-gray-600 bg-neutral-700 px-4 py-2 text-white focus:border-brand-500 focus:outline-none"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="cvc" className="text-sm font-medium text-gray-200">
                          CVC*
                        </label>
                        <input
                          id="cvc"
                          name="cvc"
                          type="text"
                          placeholder="000"
                          className="w-full rounded-md border border-gray-600 bg-neutral-700 px-4 py-2 text-white focus:border-brand-500 focus:outline-none"
                          value={formData.cvc}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col space-y-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-2"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : `Complete Purchase ${planDetails.price !== 'Custom' ? `- ${planDetails.price}` : ''}`}
                  </Button>
                  
                  <p className="text-xs text-gray-400 text-center">
                    By completing this purchase, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </CardFooter>
              </form>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="border border-gray-800 bg-neutral-800/50 text-white h-full">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription className="text-gray-300">
                  {planType === 'ai' ? 'AI Solutions Package' : 'Web & Hosting Package'}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="bg-neutral-700/30 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">{selectedPlan}</h3>
                    <span className="font-bold text-brand-300">{planDetails.price}</span>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-4">{planDetails.description}</p>
                  
                  {planType === 'ai' ? (
                    <div className="space-y-2 mt-4">
                      <p className="text-sm font-medium text-gray-200">Package includes:</p>
                      {selectedPlan === 'Starter' && (
                        <ul className="text-xs space-y-1">
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>AI Chatbot</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Basic Analytics</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Email Automation</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>5 Workflow Automations</span>
                          </li>
                        </ul>
                      )}
                      {selectedPlan === 'Professional' && (
                        <ul className="text-xs space-y-1">
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Advanced AI Chatbot</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Full Analytics Suite</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Marketing Automation</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Unlimited Workflows</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Priority Support</span>
                          </li>
                        </ul>
                      )}
                      {selectedPlan === 'Enterprise' && (
                        <ul className="text-xs space-y-1">
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Custom AI Solutions</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Dedicated Account Manager</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Integration Services</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Custom Reporting</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>24/7 Premium Support</span>
                          </li>
                        </ul>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2 mt-4">
                      <p className="text-sm font-medium text-gray-200">Package includes:</p>
                      {selectedPlan === 'Business Starter' && (
                        <ul className="text-xs space-y-1">
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>5-page responsive website</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>AI-powered chatbot</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Standard hosting package</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Basic SEO optimization</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>1 year of maintenance</span>
                          </li>
                        </ul>
                      )}
                      {selectedPlan === 'Business Pro' && (
                        <ul className="text-xs space-y-1">
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>10-page responsive website</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Custom AI features</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>High-performance hosting</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Advanced SEO & analytics</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>2 years of maintenance</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-300 flex-shrink-0 mr-2" />
                            <span>Monthly performance reports</span>
                          </li>
                        </ul>
                      )}
                    </div>
                  )}
                </div>
                
                {planDetails.price !== 'Custom' ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>{planDetails.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>Calculated at next step</span>
                    </div>
                    <div className="border-t border-gray-700 my-2 pt-2 flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-brand-300">{planDetails.price} + tax</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-brand-900/30 border border-brand-800 rounded-lg">
                    <p className="text-sm">
                      For Enterprise plans, our team will contact you to discuss your specific requirements
                      and provide a customized quote.
                    </p>
                  </div>
                )}
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-600 text-white hover:bg-white/5"
                  onClick={() => navigate(-1)}
                >
                  <span>Return to Selection</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
