
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ServicesPage from '../ServicesPage';

const PricingPage = () => {
  const location = useLocation();
  const defaultTab = location.state?.defaultTab || 'ai';
  const navigate = useNavigate();
  
  // Pass a callback to ServicesPage for handling service selection
  const handleServiceSelection = (service: string, tier: string, price: string) => {
    navigate('/services/checkout', {
      state: { 
        selectedService: { service, tier, price }
      }
    });
  };
  
  return (
    <ServicesPage defaultActiveTab={defaultTab} onServiceSelect={handleServiceSelection} />
  );
};

export default PricingPage;
