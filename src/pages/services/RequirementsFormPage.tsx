import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import emailjs from 'emailjs-com';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  businessType: z.string().min(1, "Please select a business type"),
  timeline: z.string().min(1, "Please select a timeline"),
  budget: z.string().min(1, "Please select a budget range"),
  requirements: z.string().min(10, "Please provide more details about your requirements"),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RequirementsFormPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isChatOpen, closeChat } = useChat();
  
  const [selectedService, setSelectedService] = useState<{
    service: string;
    tier: string;
    price: string;
  } | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      businessType: "",
      timeline: "",
      budget: "",
      requirements: "",
      additionalInfo: "",
    }
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Project Requirements - NexGenWeb";
    
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
    navigate('/services/checkout', { 
      state: { selectedService } 
    });
  };

  const onSubmit = async (data: FormValues) => {
    console.log("Form submitted:", data);
    setIsSubmitting(true);
    
    try {
      // Send an email with the customer's requirements
      const templateParams = {
        customer_name: data.name,
        customer_email: data.email,
        customer_company: data.company || "Not provided",
        customer_phone: data.phone || "Not provided",
        business_type: data.businessType,
        timeline: data.timeline,
        budget: data.budget,
        requirements: data.requirements,
        additional_info: data.additionalInfo || "Not provided",
        service_type: selectedService?.service || "Unknown service",
        service_tier: selectedService?.tier || "Unknown tier",
        service_price: selectedService?.price || "Unknown price",
        current_date: new Date().toLocaleDateString()
      };

      await emailjs.send(
        'service_gmail',
        'template_requirements',
        templateParams,
        'ArDqM6v2Ny3InyvoQ'
      );
      
      toast({
        title: "Requirements submitted!",
        description: "Thank you for your submission. Our team will contact you shortly.",
        duration: 5000,
      });
      
      // Navigate to a thank you page
      navigate('/services/confirmation', { 
        state: { 
          selectedService,
          customerDetails: data
        } 
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Submission error",
        description: "There was an error submitting your requirements. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
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
            Back to Checkout
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Requirements</h1>
          <p className="text-lg text-neutral-300 mb-8">
            Help us understand your needs so we can deliver the perfect solution for {selectedService?.tier}.
          </p>
          
          <Card className="bg-neutral-800 border border-neutral-700">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Full Name*</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400" />
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
                          <FormLabel className="text-white">Email Address*</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Ltd" {...field} className="bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400" />
                          </FormControl>
                          <FormDescription className="text-neutral-400">Optional</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 234 567 8900" {...field} className="bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400" />
                          </FormControl>
                          <FormDescription className="text-neutral-400">Optional</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Business Type*</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-neutral-700 border-neutral-600 text-white">
                                <SelectValue placeholder="Select business type" className="text-white" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                              <SelectItem value="retail" className="text-white">Retail / E-commerce</SelectItem>
                              <SelectItem value="tech" className="text-white">Technology / SaaS</SelectItem>
                              <SelectItem value="healthcare" className="text-white">Healthcare</SelectItem>
                              <SelectItem value="finance" className="text-white">Finance / Banking</SelectItem>
                              <SelectItem value="education" className="text-white">Education</SelectItem>
                              <SelectItem value="manufacturing" className="text-white">Manufacturing</SelectItem>
                              <SelectItem value="hospitality" className="text-white">Hospitality / Travel</SelectItem>
                              <SelectItem value="realestate" className="text-white">Real Estate</SelectItem>
                              <SelectItem value="nonprofit" className="text-white">Non-profit</SelectItem>
                              <SelectItem value="other" className="text-white">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Project Timeline*</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-neutral-700 border-neutral-600 text-white">
                                <SelectValue placeholder="Select timeline" className="text-white" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                              <SelectItem value="asap" className="text-white">ASAP / Urgent</SelectItem>
                              <SelectItem value="1month" className="text-white">Within 1 month</SelectItem>
                              <SelectItem value="3months" className="text-white">1-3 months</SelectItem>
                              <SelectItem value="6months" className="text-white">3-6 months</SelectItem>
                              <SelectItem value="flexible" className="text-white">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Budget Range*</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-neutral-700 border-neutral-600 text-white">
                                <SelectValue placeholder="Select budget" className="text-white" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                              <SelectItem value="basic" className="text-white">Basic ({selectedService?.price})</SelectItem>
                              <SelectItem value="extra10" className="text-white">+10% for additional features</SelectItem>
                              <SelectItem value="extra25" className="text-white">+25% for premium features</SelectItem>
                              <SelectItem value="custom" className="text-white">Custom budget (will discuss)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Project Requirements*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe what you're looking to achieve with this project, key features you need, and any specific requirements." 
                            className="bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400 min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any other details you'd like to share about your business or project?" 
                            className="bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-neutral-400">Optional</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end pt-4">
                    <Button 
                      type="submit"
                      className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Requirements"}
                      {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default RequirementsFormPage;
