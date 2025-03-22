
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <ChatProvider>
        <Router>
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
        </Router>
        <Toaster />
        <Sonner />
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;
