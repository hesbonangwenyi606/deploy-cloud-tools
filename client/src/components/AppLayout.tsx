import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Services from './Services';
import PipelineDashboard from './PipelineDashboard';
import Metrics from './Metrics';
import TechStack from './TechStack';
import Contact from './Contact';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <main>
        <Hero />
        
        <section id="services">
          <Services />
        </section>
        
        <section id="dashboard">
          <PipelineDashboard />
        </section>
        
        <section id="metrics">
          <Metrics />
        </section>
        
        <section id="tech-stack">
          <TechStack />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AppLayout;
