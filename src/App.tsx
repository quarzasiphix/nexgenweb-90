
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
import { ChatProvider, useChat } from './context/ChatContext';
import ChatBubble from './components/ChatBubble';

// Enhanced ScrollToTop component with more aggressive scrolling behavior
const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  
  useEffect(() => {
    // If not a hash link, scroll to top
    if (hash === '') {
      // Try multiple approaches for more reliable scrolling
      window.scrollTo(0, 0);
      
      // Additional approach that sometimes works better in certain browsers
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto', // Use 'auto' instead of 'smooth' for immediate response
      });
      
      // Another approach focusing on the body
      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }
  }, [pathname, hash, key]); // Respond to all location changes
  
  return null;
}

// AppContent component to hold chat-related functionality
const AppContent = () => {
  const { isChatOpen, closeChat } = useChat();
  
  return (
    <>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <ChatProvider>
        <Router>
          <AppContent />
        </Router>
        <Toaster />
        <Sonner />
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;
