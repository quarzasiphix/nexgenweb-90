
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIServices from "./pages/services/AIServices";
import WebServices from "./pages/services/WebServices";
import AllServices from "./pages/AllServices";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import AboutPage from "./pages/AboutPage";
import SolutionDetails from "./components/SolutionDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/ai" element={<AIServices />} />
          <Route path="/services/web" element={<WebServices />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/solutions/:solutionId" element={<SolutionDetails />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
