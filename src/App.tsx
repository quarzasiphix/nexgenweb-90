
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import AboutPage from './pages/AboutPage';
import AllServices from './pages/AllServices';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './components/ui/theme-provider';
import { Toaster } from './components/ui/toaster';
import { Toaster as Sonner } from './components/ui/sonner';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ServiceDetails from './components/ServiceDetails';
import SolutionDetails from './components/SolutionDetails';
import WebServices from './pages/services/WebServices';
import AIServices from './pages/services/AIServices';
import { ChatProvider } from './context/ChatContext';
import CheckoutPage from './pages/CheckoutPage';
import { usePostHog } from 'posthog-js/react';
import { useAnalytics } from '@/hooks/use-analytics';

// AnalyticsProvider component that initializes analytics
const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const posthog = usePostHog();

  useEffect(() => {
    if (posthog) {
      console.info('PostHog loaded!');
    }
  }, [posthog]);

  return <>{children}</>;
};

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
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <AnalyticsProvider>
        <ChatProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<AllServices />} />
              <Route path="/services/:serviceId" element={<ServiceDetails />} />
              <Route path="/solutions/:solutionId" element={<SolutionDetails />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/services/web" element={<WebServices />} />
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Toaster />
          <Sonner />
        </ChatProvider>
      </AnalyticsProvider>
    </ThemeProvider>
  );
}

export default App;
