
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Bot, Brain, DollarSign, Users, FileText, 
  BarChart3, Truck, Shield, Scale, Database,
  ArrowLeft, ShoppingCart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { solutionCategories } from './Solutions';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';
import { useAnalytics } from '@/hooks/use-analytics';
import { useToast } from '@/hooks/use-toast';

// Add pricing to solution categories
const enhancedSolutionCategories = solutionCategories.map(solution => ({
  ...solution,
  price: solution.title.includes('Enterprise') ? 2499 :
         solution.title.includes('Advanced') ? 1499 :
         solution.title.includes('Healthcare') ? 1899 :
         solution.title.includes('Retail') ? 1699 :
         solution.title.includes('Financial') ? 1999 : 1299
}));

const SolutionDetails = () => {
  const { solutionId } = useParams();
  const navigate = useNavigate();
  const { openChat, isChatOpen, closeChat } = useChat();
  const { captureEvent } = useAnalytics();
  const { toast } = useToast();
  
  const solution = enhancedSolutionCategories.find(s => s.title.toLowerCase().replace(/[^a-z0-9]/g, '-') === solutionId);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (solution) {
      document.title = `${solution.title} - BizWiz`;
      // Track page view with analytics
      captureEvent('solution_details_view', {
        solution_id: solutionId,
        solution_title: solution.title
      });
    } else {
      navigate('/solutions');
    }
  }, [solutionId, navigate, solution, captureEvent]);

  if (!solution) {
    return null;
  }

  const handlePurchase = () => {
    // Track purchase intent
    captureEvent('solution_purchase_initiated', { 
      solution_id: solutionId,
      solution_title: solution.title,
      solution_price: solution.price
    });
    
    // Store selected solution in session storage to use on checkout page
    sessionStorage.setItem('checkoutService', JSON.stringify({
      id: solutionId,
      title: solution.title,
      price: solution.price,
      category: 'solution'
    }));
    
    // Show toast notification
    toast({
      title: "Solution added to cart",
      description: `${solution.title} has been added to your cart.`,
      duration: 3000,
    });
    
    // Navigate to checkout
    navigate('/checkout');
  };

  const IconComponent = solution.icon;

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
            <div className="flex-grow">
              <h1 className="text-4xl font-bold text-white mb-2">{solution.title}</h1>
              <p className="text-lg text-neutral-300 max-w-3xl">
                {solution.description}
              </p>
            </div>
            <div className="flex flex-col items-center bg-neutral-800 p-4 rounded-lg border border-neutral-700">
              <p className="text-lg font-medium text-neutral-300 mb-1">Starting at</p>
              <p className="text-3xl font-bold text-white mb-3">${solution.price}</p>
              <Button 
                className="bg-brand-500 hover:bg-brand-600 text-white flex items-center gap-2"
                onClick={handlePurchase}
              >
                <ShoppingCart size={18} />
                Purchase Now
              </Button>
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
                    Eliminate inefficiencies and reduce operational costs through AI-powered 
                    optimization of resources and processes.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-white mb-2">Competitive Advantage</h3>
                  <p className="text-neutral-400">
                    Stay ahead of competitors by leveraging cutting-edge AI technology 
                    to enhance your business operations and customer experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
                <p className="text-neutral-300 max-w-2xl">
                  Our team of experts will help you implement {solution.title} solutions tailored to your specific business needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-brand-500 hover:bg-brand-600 text-white"
                  onClick={openChat}
                >
                  Get a Consultation
                </Button>
                <Button 
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-brand-500 flex items-center gap-2"
                  onClick={handlePurchase}
                >
                  <ShoppingCart size={18} />
                  Purchase Now
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
