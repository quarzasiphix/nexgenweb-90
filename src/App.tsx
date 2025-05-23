
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import Index from './pages/Index';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './components/ui/theme-provider';
import { Toaster } from './components/ui/toaster';
import { Toaster as Sonner } from './components/ui/sonner';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ServiceDetails from './components/ServiceDetails';
import SolutionDetails from './components/SolutionDetails';
import EnhancedAllServices from './pages/services/EnhancedAllServices';
import AIServiceDetail from './pages/services/AIServiceDetail';
import { ChatProvider } from './context/ChatContext';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import PricingPage from './pages/services/PricingPage';
import SolutionsPage from './pages/SolutionsPage';
import CheckoutPage from './pages/services/CheckoutPage';
import RequirementsFormPage from './pages/services/RequirementsFormPage';
import ConfirmationPage from './pages/services/ConfirmationPage';

// Initialize PostHog
if (typeof window !== 'undefined') {
  posthog.init('phc_67TgLEEMULzavgmCYEuHht0hXxc5TkVyyoVjrWIGPdo', {
    api_host: 'https://eu.posthog.com',
    capture_pageview: false, // We'll manually capture page views
    persistence: 'localStorage',
  });

  // Log when PostHog is loaded
  console.info('PostHog loaded!');
}

// Simple ScrollToTop component that only runs once when routes change
// but doesn't block normal scrolling behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  
  useEffect(() => {
    // Only scroll to top on actual navigation, not on popstate (back/forward)
    if (navigationType !== 'POP') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname, navigationType]);
  
  return null;
}

function App() {
  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <ChatProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<EnhancedAllServices />} />
              <Route path="/services/all" element={<EnhancedAllServices />} />
              <Route path="/services/pricing" element={<PricingPage />} />
              <Route path="/services/checkout" element={<CheckoutPage />} />
              <Route path="/services/requirements-form" element={<RequirementsFormPage />} />
              <Route path="/services/confirmation" element={<ConfirmationPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetails />} />
              <Route path="/solutions" element={<EnhancedAllServices />} />
              <Route path="/solutions/:solutionId" element={<SolutionDetails />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Toaster />
          <Sonner />
        </ChatProvider>
      </ThemeProvider>
    </PostHogProvider>
  );
}

export default App;
