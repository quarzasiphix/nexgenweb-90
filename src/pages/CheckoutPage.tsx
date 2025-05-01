
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';

interface CheckoutServiceProps {
  id: string;
  title: string;
  price: number;
  description: string;
}

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { captureEvent } = useAnalytics();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const service = location.state?.service as CheckoutServiceProps;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Checkout - BizWiz';
    
    if (!service) {
      toast({
        title: "No service selected",
        description: "Please select a service before proceeding to checkout",
        variant: "destructive"
      });
      navigate('/services');
    } else {
      // Track checkout page view
      captureEvent('checkout_page_view', {
        service_id: service.id,
        service_name: service.title,
        price: service.price
      });
    }
  }, [service, navigate, toast, captureEvent]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Basic input formatting
    if (name === 'cardNumber') {
      // Format card number with spaces after every 4 digits
      const formatted = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      setFormData({
        ...formData,
        [name]: formatted.substring(0, 19) // limit to 16 digits + 3 spaces
      });
      return;
    }
    
    if (name === 'cardExpiry') {
      // Format as MM/YY
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      if (cleaned.length > 2) {
        formatted = `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
      }
      setFormData({
        ...formData,
        [name]: formatted
      });
      return;
    }
    
    if (name === 'cardCvc') {
      // Limit to 3-4 digits
      const cleaned = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [name]: cleaned.substring(0, 4)
      });
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.cardNumber || !formData.cardExpiry || !formData.cardCvc) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    // Card validation (very basic)
    if (formData.cardNumber.replace(/\s/g, '').length < 16) {
      toast({
        title: "Invalid card number",
        description: "Please enter a valid card number",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Track purchase event
    captureEvent('purchase', {
      service_id: service.id,
      service_name: service.title,
      price: service.price,
      currency: 'USD'
    });
    
    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Purchase successful!",
        description: `Thank you for purchasing ${service.title}. We'll be in touch soon.`,
      });
      
      // Navigate to a success page or home
      navigate('/', { 
        state: { 
          purchaseComplete: true, 
          service: service
        } 
      });
    }, 2000);
  };

  if (!service) {
    return null;
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(service.price);

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-6 text-white hover:bg-white/10"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Payment Information</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-neutral-200">Full Name</Label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-neutral-700 border-neutral-600 text-white focus:border-brand-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-neutral-200">Email</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-neutral-700 border-neutral-600 text-white focus:border-brand-500"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-neutral-200">Company (Optional)</Label>
                      <Input 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-neutral-700 border-neutral-600 text-white focus:border-brand-500"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-neutral-200">Card Number</Label>
                      <Input 
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="bg-neutral-700 border-neutral-600 text-white focus:border-brand-500"
                        placeholder="4242 4242 4242 4242"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardExpiry" className="text-neutral-200">Expiry Date</Label>
                        <Input 
                          id="cardExpiry"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          className="bg-neutral-700 border-neutral-600 text-white focus:border-brand-500"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardCvc" className="text-neutral-200">CVC</Label>
                        <Input 
                          id="cardCvc"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleInputChange}
                          className="bg-neutral-700 border-neutral-600 text-white focus:border-brand-500"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-500 hover:bg-brand-600 text-white mt-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : `Complete Purchase - ${formattedPrice}`}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
                  
                  <div className="border-b border-neutral-700 pb-4 mb-4">
                    <h3 className="font-medium text-white mb-1">{service.title}</h3>
                    <p className="text-sm text-neutral-400">{service.description.substring(0, 100)}...</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-neutral-300">
                      <span>Subtotal</span>
                      <span>{formattedPrice}</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Tax</span>
                      <span>$0</span>
                    </div>
                    <div className="flex justify-between font-semibold text-white pt-3 border-t border-neutral-700">
                      <span>Total</span>
                      <span>{formattedPrice}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-4 text-sm text-neutral-400">
                <p>By completing your purchase, you agree to our Terms of Service and Privacy Policy.</p>
                <p className="mt-2">For assistance, please contact our support team.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
