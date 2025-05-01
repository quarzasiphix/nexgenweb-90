import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import AboutPage from './pages/About';
import CaseStudiesPage from './pages/CaseStudies';
import AllServices from './pages/AllServices';
import AIServices from './pages/services/AIServices';
import WebServices from './pages/services/WebServices';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import { ChatProvider } from '@/context/ChatContext';
import { AnalyticsProvider } from '@/hooks/use-analytics';

// Add import for the new checkout page
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <AnalyticsProvider>
      <ChatProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/services/ai" element={<AIServices />} />
            <Route path="/services/web" element={<WebServices />} />
            <Route path="/checkout" element={<CheckoutPage />} /> {/* Add new checkout route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </Router>
      </ChatProvider>
    </AnalyticsProvider>
  );
}

export default App;
