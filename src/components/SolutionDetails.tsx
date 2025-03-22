import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import { useChat } from '@/context/ChatContext';

const allSolutions = [
    {
        id: "ai-consulting",
        title: "AI Consulting",
        description: "Strategic guidance to integrate AI solutions into your business for enhanced efficiency and innovation.",
        features: [
            "AI strategy development",
            "Feasibility studies",
            "Technology roadmap creation",
            "AI solution design",
            "Implementation planning"
        ],
        detailed: [
            "Initial consultation to understand your business goals",
            "Assessment of current technology infrastructure",
            "Custom AI solution design and planning",
            "Implementation and integration support",
            "Ongoing monitoring and optimization"
        ],
        benefits: [
            "Improved decision-making",
            "Increased operational efficiency",
            "Enhanced customer experience",
            "Competitive advantage",
            "Innovation acceleration"
        ]
    },
    {
        id: "data-analytics",
        title: "Data Analytics",
        description: "Transform raw data into actionable insights with our comprehensive data analytics services.",
        features: [
            "Data collection and processing",
            "Statistical analysis",
            "Predictive modeling",
            "Data visualization",
            "Custom reporting"
        ],
        detailed: [
            "Data audit and quality assessment",
            "Custom data model development",
            "Advanced analytics and predictive modeling",
            "Interactive dashboard creation",
            "Regular performance reporting"
        ],
        benefits: [
            "Better understanding of customer behavior",
            "Identification of market trends",
            "Optimization of business processes",
            "Data-driven decision-making",
            "Increased revenue and profitability"
        ]
    },
    {
        id: "cloud-solutions",
        title: "Cloud Solutions",
        description: "Scalable and secure cloud solutions tailored to meet the evolving needs of your business.",
        features: [
            "Cloud migration",
            "Infrastructure management",
            "Data storage and backup",
            "Security solutions",
            "Disaster recovery"
        ],
        detailed: [
            "Assessment of current IT infrastructure",
            "Custom cloud solution design",
            "Seamless migration to the cloud",
            "Ongoing management and support",
            "Regular security audits and updates"
        ],
        benefits: [
            "Reduced IT costs",
            "Increased scalability and flexibility",
            "Improved data security",
            "Enhanced collaboration",
            "Business continuity"
        ]
    },
    {
        id: "cybersecurity-services",
        title: "Cybersecurity Services",
        description: "Protect your digital assets with our comprehensive cybersecurity solutions.",
        features: [
            "Threat detection and prevention",
            "Vulnerability assessments",
            "Incident response",
            "Security awareness training",
            "Compliance management"
        ],
        detailed: [
            "Security risk assessment",
            "Custom security policy development",
            "Implementation of security measures",
            "24/7 security monitoring",
            "Regular security training for employees"
        ],
        benefits: [
            "Protection against cyber threats",
            "Compliance with industry regulations",
            "Data breach prevention",
            "Preservation of business reputation",
            "Customer trust and loyalty"
        ]
    },
    {
        id: "it-infrastructure",
        title: "IT Infrastructure",
        description: "Robust and reliable IT infrastructure solutions to support your business operations.",
        features: [
            "Network design and implementation",
            "Server management",
            "Hardware and software procurement",
            "IT support",
            "System maintenance"
        ],
        detailed: [
            "Assessment of current IT infrastructure",
            "Custom IT solution design",
            "Implementation and deployment",
            "Ongoing maintenance and support",
            "Regular performance monitoring"
        ],
        benefits: [
            "Improved system performance",
            "Reduced downtime",
            "Enhanced productivity",
            "Cost-effective IT management",
            "Scalable infrastructure"
        ]
    }
];

const SolutionDetails = () => {
  const { solutionId } = useParams();
  const navigate = useNavigate();
  const { openChat } = useChat();
  
  const solution = allSolutions.find(s => s.id === solutionId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (solution) {
      document.title = `${solution.title} - ToverNet`;
    } else {
      navigate('/');
    }
  }, [solution, navigate, solutionId]);

  if (!solution) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-6 text-white hover:bg-white/10"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Button>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{solution.title}</h1>
            <p className="text-gray-600 mb-6">{solution.description}</p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
                {solution.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Detailed Overview</h2>
            <ul className="list-decimal list-inside text-gray-600 mb-6">
                {solution.detailed.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Business Benefits</h2>
            <ul className="list-disc list-inside text-gray-600">
                {solution.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
        </div>
        </div>
      </main>
    </div>
  );
};

export default SolutionDetails;
