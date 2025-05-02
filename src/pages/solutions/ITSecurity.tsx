
import React, { useEffect } from 'react';
import { Shield, Lock, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useChat } from '@/context/ChatContext';
import ChatBubble from '@/components/ChatBubble';

const ITSecurity = () => {
  const { isChatOpen, openChat, closeChat } = useChat();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "IT & Security Solutions - NexGenWeb";
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
                  <span className="text-brand-400 text-sm font-medium">Cybersecurity</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  AI-Powered IT & Security Solutions
                </h1>
                <p className="text-lg text-neutral-300 mb-8">
                  Protect your business with intelligent security systems that identify threats before they cause damage and automate critical IT operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={openChat}
                    size="lg"
                    className="bg-brand-500 hover:bg-brand-600 text-white"
                  >
                    Schedule Security Audit
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explore Solutions
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-neutral-800 border border-white/10 p-8 rounded-lg">
                  <Shield className="h-16 w-16 text-brand-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Intelligent Threat Protection</h3>
                  <p className="text-neutral-300 mb-6">
                    Our AI security solutions detect and neutralize 99.7% of threats before they impact your business, with 65% fewer false positives than traditional systems.
                  </p>
                  <ul className="space-y-3">
                    {["Predictive threat detection", "Automated incident response", "Zero-day vulnerability protection", "Compliance automation"].map((item, idx) => (
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
                Our comprehensive IT and security solutions leverage AI to protect and optimize your technology infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-800 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Threat Intelligence</h3>
                <p className="text-neutral-300 mb-4">
                  AI-powered monitoring that continuously scans for threats and vulnerabilities across your entire network.
                </p>
                <ul className="space-y-2">
                  {["Behavioral analysis", "Anomaly detection", "Real-time monitoring", "Threat intelligence feeds"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-800 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automated Security Operations</h3>
                <p className="text-neutral-300 mb-4">
                  Streamline security operations with automated incident response and remediation workflows.
                </p>
                <ul className="space-y-2">
                  {["Automated patching", "Incident playbooks", "Security orchestration", "Compliance reporting"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-800 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Zero Trust Security</h3>
                <p className="text-neutral-300 mb-4">
                  Implement comprehensive Zero Trust architecture with AI-powered access controls and verification.
                </p>
                <ul className="space-y-2">
                  {["Identity verification", "Least privilege access", "Continuous authentication", "Endpoint protection"].map((item, idx) => (
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
              <h2 className="text-3xl font-bold text-white mb-6">Ready to secure your business infrastructure?</h2>
              <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                Join industry leaders who trust our AI-powered security solutions to protect their most valuable assets
              </p>
              <Button 
                onClick={openChat}
                size="lg"
                className="bg-brand-500 hover:bg-brand-600 text-white"
              >
                Book a Security Consultation
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

export default ITSecurity;
