
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Bot, Brain, DollarSign, Users, FileText, 
  BarChart3, Truck, Shield, Scale, Database,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { solutionCategories } from './Solutions';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';
import { useToast } from '@/hooks/use-toast';

// Add a mapping for solutions to pricing packages
const solutionPackages = {
  "finance-and-accounting": { package: "Premium", price: "$299/month" },
  "hr-and-recruitment": { package: "Premium", price: "$299/month" },
  "ai-powered-sales-automation": { package: "Business", price: "$199/month" },
  "intelligent-customer-service": { package: "Business", price: "$199/month" },
  "it-and-security": { package: "Enterprise", price: "$499/month" },
  "data-analytics-and-bi": { package: "Premium", price: "$299/month" },
  "customer-engagement": { package: "Business", price: "$199/month" },
  // Add more mappings as needed
};

const SolutionDetails = () => {
  const { solutionId } = useParams();
  const navigate = useNavigate();
  const { openChat, isChatOpen, closeChat } = useChat();
  const { toast } = useToast();
  const solution = solutionCategories.find(s => s.title.toLowerCase().replace(/[^a-z0-9]/g, '-') === solutionId);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (solution) {
      document.title = `${solution.title} - BizWiz`;
    } else {
      navigate('/solutions');
    }
  }, [solutionId, navigate, solution]);

  if (!solution) {
    return null;
  }

  const IconComponent = solution.icon;
  
  // Get package information for this solution
  const packageInfo = solutionId ? solutionPackages[solutionId as keyof typeof solutionPackages] : null;

  const handleBuyNow = () => {
    if (packageInfo) {
      toast({
        title: "Package Selected",
        description: `You've selected the ${packageInfo.package} package (${packageInfo.price}) which includes ${solution.title}.`,
        duration: 3000,
      });
      
      // Navigate to the services page with the AI tab selected
      navigate('/services?tab=ai');
    } else {
      // If no package info, just navigate to services
      navigate('/services');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 overflow-hidden">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-6 text-white hover:bg-white/10"
            onClick={() => navigate('/#solutions')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Button>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${solution.color}`}>
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-4xl font-bold text-white mb-2">{solution.title}</h1>
                {packageInfo && (
                  <div className="flex flex-col items-start md:items-end">
                    <div className="bg-[#9b87f5]/20 text-[#D6BCFA] px-3 py-1 rounded-full text-sm font-medium mb-1">
                      {packageInfo.package} Package
                    </div>
                    <div className="text-2xl font-bold text-white">{packageInfo.price}</div>
                  </div>
                )}
              </div>
              <p className="text-lg text-neutral-300 max-w-3xl mt-2">
                {solution.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-neutral-300">
                      <svg className="w-5 h-5 mr-2 text-brand-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4">How It Works</h2>
                <ul className="space-y-3">
                  {solution.detailed.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-neutral-300">
                      <span className="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Benefits for Your Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-white mb-2">Improved Efficiency</h3>
                  <p className="text-neutral-400">
                    Streamline processes and reduce manual workload through smart automation, 
                    allowing your team to focus on high-value tasks.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-white mb-2">Cost Reduction</h3>
                  <p className="text-neutral-400">
                    Eliminate inefficiencies and reduce operational costs through 
                    optimization of resources and processes.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-white mb-2">Competitive Advantage</h3>
                  <p className="text-neutral-400">
                    Stay ahead of competitors by leveraging cutting-edge technology 
                    to enhance your business operations and customer experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h2>
                <p className="text-neutral-300 max-w-2xl">
                  {packageInfo 
                    ? `Get started with the ${packageInfo.package} package (${packageInfo.price}) which includes ${solution.title} and much more!`
                    : `Our team of experts will help you implement ${solution.title} solutions tailored to your specific business needs.`
                  }
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button 
                  size="lg"
                  className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8"
                  onClick={handleBuyNow}
                >
                  {packageInfo ? `Buy ${packageInfo.package} Package` : "Get Started Today"}
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => navigate('/services?tab=ai')}
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default SolutionDetails;
