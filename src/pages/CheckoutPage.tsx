
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Header from '@/components/Header';

// Form schema for checkout
const checkoutFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  cardNumber: z.string().min(16, { message: "Please enter a valid card number" }).max(19),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Expiry date format: MM/YY" }),
  cvc: z.string().min(3, { message: "CVC must be 3-4 digits" }).max(4),
});

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  
  // Get plan details from location state
  const planName = location.state?.plan || "Selected Plan";
  const planPrice = location.state?.price || "$0";

  const form = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      name: "",
      email: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
    },
  });

  useEffect(() => {
    // Set page title
    document.title = "Checkout - BizWiz";
    
    // If no plan was selected, redirect back to homepage
    if (!location.state?.plan) {
      toast({
        title: "No plan selected",
        description: "Please select a plan first",
        variant: "destructive",
      });
      navigate('/');
    }
  }, [location.state, navigate, toast]);

  const handleCheckout = (data: z.infer<typeof checkoutFormSchema>) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutComplete(true);
      
      toast({
        title: "Payment successful!",
        description: "Thank you for your purchase.",
      });
    }, 2000);
  };

  if (checkoutComplete) {
    return (
      <div className="min-h-screen bg-neutral-900">
        <Header />
        <main className="pt-28 pb-16 px-4">
          <div className="max-w-md mx-auto bg-neutral-800 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Payment Successful!</h1>
            <p className="text-neutral-300 mb-6">
              Thank you for purchasing {planName}. You will receive a confirmation email shortly.
            </p>
            <Button 
              className="bg-brand-500 hover:bg-brand-600 text-white"
              onClick={() => navigate('/')}
            >
              Return to Home
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            className="text-white mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          
          <h1 className="text-3xl font-bold text-white mb-6">Checkout</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-2 bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle className="text-white">Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleCheckout)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-neutral-700 border-neutral-600 text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} className="bg-neutral-700 border-neutral-600 text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Card Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="4242 4242 4242 4242" 
                                {...field} 
                                className="bg-neutral-700 border-neutral-600 text-white pl-10" 
                              />
                              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="expiry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Expiry Date</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YY" {...field} className="bg-neutral-700 border-neutral-600 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="cvc"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">CVC</FormLabel>
                            <FormControl>
                              <Input placeholder="123" {...field} className="bg-neutral-700 border-neutral-600 text-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-500 hover:bg-brand-600 text-white mt-6"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : `Pay ${planPrice}`}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            <Card className="bg-neutral-800 border-neutral-700 h-fit">
              <CardHeader>
                <CardTitle className="text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                    <span className="text-neutral-300">Plan</span>
                    <span className="font-medium text-white">{planName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">Total</span>
                    <span className="font-bold text-lg text-white">{planPrice}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-neutral-400 pt-0">
                <p>All prices include applicable taxes</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
