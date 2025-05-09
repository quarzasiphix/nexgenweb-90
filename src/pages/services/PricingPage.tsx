
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ServicesPage from '../ServicesPage';
import CheckoutForm from '@/components/CheckoutForm';

const PricingPage = () => {
  const location = useLocation();
  const defaultTab = location.state?.defaultTab || 'ai';
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{name: string, price: string} | undefined>(
    location.state?.selectedService ? 
    { 
      name: location.state.selectedService,
      price: location.state?.selectedPrice || "Custom" 
    } : undefined
  );
  
  // Open checkout dialog if a service was pre-selected
  useEffect(() => {
    if (location.state?.selectedService) {
      setCheckoutOpen(true);
    }
  }, [location.state?.selectedService]);
  
  return (
    <>
      <ServicesPage 
        defaultActiveTab={defaultTab}
        onServiceSelect={(name, price) => {
          setSelectedService({ name, price });
          setCheckoutOpen(true);
        }}
      />
      <CheckoutForm 
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        selectedService={selectedService}
      />
    </>
  );
};

export default PricingPage;
