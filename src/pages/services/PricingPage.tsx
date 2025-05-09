
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ServicesPage from '../ServicesPage';

const PricingPage = () => {
  const location = useLocation();
  const defaultTab = location.state?.defaultTab || 'ai';
  
  return (
    <ServicesPage defaultActiveTab={defaultTab} />
  );
};

export default PricingPage;
