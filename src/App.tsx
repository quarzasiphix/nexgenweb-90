
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import AboutPage from './pages/AboutPage';
import AllServices from './pages/AllServices';
import ServicesPage from './pages/ServicesPage';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './components/ui/theme-provider';
import { Toaster } from './components/ui/toaster';
import { Toaster as Sonner } from './components/ui/sonner';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ServiceDetails from './components/ServiceDetails';
import SolutionDetails from './components/SolutionDetails';
import WebServices from './pages/services/WebServices';
import WebServiceDetail from './pages/services/WebServiceDetail';
import AIServices from './pages/services/AIServices';
import AIServiceDetail from './pages/services/AIServiceDetail';
import { ChatProvider } from './context/ChatContext';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';

// Import solution pages
import CustomerSupportAI from './pages/solutions/CustomerSupportAI';
import SalesAutomation from './pages/solutions/SalesAutomation';
import FinanceAccounting from './pages/solutions/FinanceAccounting';
import HRRecruitment from './pages/solutions/HRRecruitment';
import ITSecurity from './pages/solutions/ITSecurity';
import DataAnalytics from './pages/solutions/DataAnalytics';

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

// ScrollToTop component that will be used inside Router
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
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
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/all" element={<AllServices />} />
              <Route path="/services/:serviceId" element={<ServiceDetails />} />
              <Route path="/solutions/:solutionId" element={<SolutionDetails />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/services/web" element={<WebServices />} />
              <Route path="/services/web/:serviceId" element={<WebServiceDetail />} />
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/ai/:serviceId" element={<AIServiceDetail />} />
              
              {/* Solution pages */}
              <Route path="/solutions/customer-support-ai" element={<CustomerSupportAI />} />
              <Route path="/solutions/sales-automation" element={<SalesAutomation />} />
              <Route path="/solutions/finance-accounting" element={<FinanceAccounting />} />
              <Route path="/solutions/hr-recruitment" element={<HRRecruitment />} />
              <Route path="/solutions/it-security" element={<ITSecurity />} />
              <Route path="/solutions/data-analytics" element={<DataAnalytics />} />
              
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
