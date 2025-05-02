
import React, { useEffect } from 'react';
import { Users, Search, FileCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';

const HRRecruitment = () => {
  const { isChatOpen, openChat, closeChat } = useChat();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "HR & Recruitment Solutions - NexGenWeb";
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-brand-500/20 rounded-full">
                  <span className="text-brand-400 text-sm font-medium">Talent Optimization</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Transform HR & Recruitment with AI
                </h1>
                <p className="text-lg text-neutral-300 mb-8">
                  Our AI-powered HR solutions help you find, hire, and retain the best talent while automating routine tasks to free up your team for strategic initiatives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={openChat}
                    size="lg"
                    className="bg-brand-500 hover:bg-brand-600 text-white"
                  >
                    Schedule a Demo
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explore Features
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-neutral-800 border border-white/10 p-8 rounded-lg">
                  <Users className="h-16 w-16 text-brand-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Talent Acquisition & Management</h3>
                  <p className="text-neutral-300 mb-6">
                    Our clients reduce time-to-hire by 45% and improve employee retention by 35% with our AI-powered talent solutions.
                  </p>
                  <ul className="space-y-3">
                    {["AI resume screening", "Candidate matching", "Automated onboarding", "Performance analytics"].map((item, idx) => (
                      <li key={idx} className="flex items-center text-neutral-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Our comprehensive HR and recruitment solutions leverage AI to streamline your people operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-800 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Intelligent Recruiting</h3>
                <p className="text-neutral-300 mb-4">
                  AI-powered candidate sourcing and screening that identifies the best matches for your open positions.
                </p>
                <ul className="space-y-2">
                  {["Smart candidate matching", "Bias reduction", "Automated scheduling", "Interview intelligence"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-800 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Employee Onboarding</h3>
                <p className="text-neutral-300 mb-4">
                  Streamline the onboarding process with automated workflows and personalized learning paths.
                </p>
                <ul className="space-y-2">
                  {["Digital paperwork", "Training automation", "Culture integration", "Progress tracking"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-800 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Management</h3>
                <p className="text-neutral-300 mb-4">
                  Data-driven performance tracking and employee development tools powered by AI insights.
                </p>
                <ul className="space-y-2">
                  {["Continuous feedback", "Goal tracking", "Skill gap analysis", "Recognition systems"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 md:py-20">
            <div className="bg-gradient-to-r from-neutral-800 to-neutral-800/50 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your HR operations?</h2>
              <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                Join forward-thinking companies that have revolutionized their talent strategy with our AI solutions
              </p>
              <Button 
                onClick={openChat}
                size="lg"
                className="bg-brand-500 hover:bg-brand-600 text-white"
              >
                Get Started Today
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <ChatBubble isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default HRRecruitment;
