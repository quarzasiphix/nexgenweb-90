
import React, { useEffect } from 'react';
import { Users, Award, Globe, Code, BarChart, PieChart } from 'lucide-react';
import Header from '@/components/Header';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - tovernet.nl";
  }, []);

  const team = [
    {
      name: 'Sophie Jensen',
      role: 'CEO & Founder',
      bio: 'Former AI research scientist with 12+ years experience leading tech innovation at global companies.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Alex Rivera',
      role: 'CTO',
      bio: 'Full-stack architect with expertise in AI/ML integration and scalable cloud systems.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Mei Lin',
      role: 'Lead Data Scientist',
      bio: 'PhD in Computer Science with specialty in natural language processing and computer vision.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'James Wilson',
      role: 'Head of Web Development',
      bio: 'Award-winning front-end developer with 10+ years creating elegant, high-performance websites.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">About tovernet<span className="text-brand-500">.nl</span></h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Transforming businesses through cutting-edge AI solutions and web services since 2015.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-neutral-300">
                  <p>
                    Founded in 2015, tovernet.nl began as a small web development studio with a vision to help businesses thrive in the digital landscape. As artificial intelligence technology evolved, we recognized its transformative potential and expanded our services to include AI solutions.
                  </p>
                  <p>
                    Today, we're a team of 30+ specialists working at the intersection of technology and business strategy. Our mission is simple: to deliver innovative solutions that drive measurable results for our clients.
                  </p>
                  <p>
                    We've worked with over 200 companies across industries, from startups to Fortune 500 enterprises, helping them leverage the latest technologies to gain competitive advantages and optimize their operations.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="tovernet.nl team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-brand-500 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                These principles guide everything we do, from how we build our products to how we interact with our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-700 p-6 rounded-lg hover:bg-neutral-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-neutral-300">
                  We push boundaries to deliver solutions that exceed expectations and create lasting impact.
                </p>
              </div>
              
              <div className="bg-neutral-700 p-6 rounded-lg hover:bg-neutral-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-neutral-300">
                  We work closely with our clients, treating their challenges as our own and celebrating their successes.
                </p>
              </div>
              
              <div className="bg-neutral-700 p-6 rounded-lg hover:bg-neutral-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-neutral-300">
                  We embrace emerging technologies and creative approaches to solve complex business problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Leadership Team</h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                Experienced professionals passionate about technology and business success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden hover:border-brand-500/50 transition-colors duration-300">
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-brand-400 mb-3">{member.role}</p>
                    <p className="text-neutral-400 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-brand-400" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">200+</p>
                <p className="text-neutral-400">Clients Worldwide</p>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-brand-400" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-neutral-400">Projects Completed</p>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-6 w-6 text-brand-400" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">95%</p>
                <p className="text-neutral-400">Client Satisfaction</p>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PieChart className="h-6 w-6 text-brand-400" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">7+ Years</p>
                <p className="text-neutral-400">Industry Experience</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
